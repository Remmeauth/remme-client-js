import { forge, BaseTransactionResponse, oids } from "remme-utils";
import { RemmeMethods, RemmeRest } from "remme-rest";

import { IRemmeCertificate } from "./interface";
import {
    StorePayload,
    StoreResult,
    CheckPayload,
    CheckResult,
    RevokeResult,
    CertificateTransactionResponse,
    CertificateCreateDto, UserCertificatesResult,
} from "./models";

class RemmeCertificate implements IRemmeCertificate {
    private readonly _remmeRest: RemmeRest;
    private _rsaKeySize: number = 2048;

    public constructor(remmeRest: RemmeRest = new RemmeRest()) {
        this._remmeRest = remmeRest;
    }

    public async createAndStore(certificateDataToCreate: CertificateCreateDto)
        : Promise<CertificateTransactionResponse> {
        const keys = this.generateKeyPair();
        const subject = this.createSubject(certificateDataToCreate);
        const csr = this.createSignRequest(subject, keys);
        const certResponse = await this.signAndStore(csr);
        certResponse.certificate.privateKey = keys.privateKey;
        return certResponse;
    }

    public async signAndStore(signingRequest: forge.pki.Certificate)
        : Promise<CertificateTransactionResponse> {
       try {
            const payload = new StorePayload(signingRequest);
            const apiResult = await this._remmeRest
                .putRequest<StorePayload, StoreResult>(RemmeMethods.certificateStore, payload);
            const result = new CertificateTransactionResponse(this._remmeRest.socketAddress());
            result.batchId = apiResult.batch_id;
            result.certificate = forge.pki.certificateFromPem(apiResult.certificate);
            return result;
        } catch (e) {
            throw new Error("Given certificate is not a valid");
        }
    }

    // TODO
    public async store(certificate: forge.pki.Certificate): Promise<Error> {
        throw new Error("not implemented");
    }

    public async check(certificate: forge.pki.Certificate): Promise<boolean> {
        try {
            const payload = new CheckPayload(certificate);
            const result = await this._remmeRest
                .postRequest<CheckPayload, CheckResult>(RemmeMethods.certificate, payload);
            return !result.revoked;
        } catch (e) {
            throw new Error("Given certificate is not a valid");
        }
    }

    public async revoke(certificate: forge.pki.Certificate): Promise<BaseTransactionResponse> {
        try {
            const payload = new CheckPayload(certificate);
            const apiResult = await this._remmeRest
                .deleteRequest<CheckPayload, RevokeResult>(RemmeMethods.certificate, payload);
            const result = new BaseTransactionResponse(this._remmeRest.socketAddress());
            result.batchId = apiResult.batch_id;
            return result;
        } catch (e) {
            throw new Error("Given certificate is not a valid");
        }
    }

    public async getUserCertificates(publicKey: string): Promise<string[]> {
        const apiResult = await this._remmeRest
            .getRequest<UserCertificatesResult>(RemmeMethods.userCertificates, publicKey);
        return apiResult.certificates;
    }

    private createSignRequest(subject: forge.pki.CertificateField[], keys: forge.pki.KeyPair): forge.pki.Certificate {
        const csr = forge.pki.createCertificationRequest();
        csr.setSubject(subject);
        csr.publicKey = keys.publicKey;
        csr.sign(keys.privateKey, forge.md.sha256.create());
        return csr;
    }

    private createSubject(certificateDataToCreate: CertificateCreateDto): forge.pki.CertificateField[] {
        if (!certificateDataToCreate.commonName) {
            throw new Error("Attribute commonName must have a value");
        }
        if (!certificateDataToCreate.validity) {
            throw new Error("Attribute validity must have a value");
        }
        return (Object as any).entries(certificateDataToCreate).map(([key, value]) => {
            let name: string;
            let type: string;
            switch (key) {
                case "email": name = "emailAddress"; break;
                case "streetAddress": name = "street"; break;
                case "stateName": name = "stateOrProvinceName"; break;
                case "generationQualifier": name = "generation"; break;
                case "serial": name = "serialNumber"; break;
                default: name = key;
            }
            if (name in oids) {
                type = oids[name];
            }
            if (!(name in forge.pki.oids) && !(name in oids)) {
                type = name;
            }
            return {
                name,
                value,
                type,
            };
        });
    }

    private generateKeyPair(): forge.pki.KeyPair {
        return forge.pki.rsa.generateKeyPair(this._rsaKeySize);
    }
}

export {
    RemmeCertificate,
    IRemmeCertificate,
};
