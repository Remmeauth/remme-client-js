import { forge, BaseTransactionResponse } from "remme-utils";
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

    public async createAndStoreCertificate(certificateDataToCreate: CertificateCreateDto)
        : Promise<CertificateTransactionResponse> {
        const keys = this.generateKeyPair();
        const subject = this.createSubject(certificateDataToCreate);
        const csr = this.createSignRequest(subject, keys);
        const certResponse = await this.signAndStoreCertificate(csr);
        // certResponse.certificate.privateKey = keys.privateKey;
        return certResponse;
    }

    public async signAndStoreCertificate(signingRequest: forge.pki.Certificate)
        : Promise<CertificateTransactionResponse> {
        const payload = new StorePayload(signingRequest);
        const apiResult = await this._remmeRest
            .putRequest<StorePayload, StoreResult>(RemmeMethods.certificateStore, payload);
        const result = new CertificateTransactionResponse(this._remmeRest.socketAddress());
        result.batchId = apiResult.batch_id;
        result.certificate = forge.pki.certificateFromPem(apiResult.certificate);
        return result;
    }

    // TODO
    public async storeCertificate(certificate: forge.pki.Certificate): Promise<Error> {
        throw new Error("not implemented");
    }

    public async checkCertificate(certificate: forge.pki.Certificate): Promise<boolean> {
        // const payload = pki.certificateToPem(certificate);
        const payload = new CheckPayload(certificate);
        const result = await this._remmeRest
            .postRequest<CheckPayload, CheckResult>(RemmeMethods.certificate, payload);
        return !result.revoked;
    }

    public async revokeCertificate(certificate: forge.pki.Certificate): Promise<BaseTransactionResponse> {
        const payload = new CheckPayload(certificate);
        const apiResult = await this._remmeRest
            .deleteRequest<CheckPayload, RevokeResult>(RemmeMethods.certificate, payload);
        const result = new BaseTransactionResponse(this._remmeRest.socketAddress());
        result.batchId = apiResult.batch_id;
        return result;
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
            let name;
            switch (key) {
                case "email": name = "emailAddress"; break;
                case "countryName": name = "C"; break;
                case "localityName": name = "L"; break;
                case "streetAddress": name = "street"; break;
                case "stateName": name = "SN"; break;
                case "generationQualifier": name = "generation"; break;
                case "title": name = "T"; break;
                case "serial": name = "serialNumber"; break;
            }
            return {
                name,
                value,
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
