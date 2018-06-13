import { forge, BaseTransactionResponse, oids } from "remme-utils";
import { IRemmePublicKeyStorage } from "remme-public-key-storage";

import { IRemmeCertificate } from "./interface";
import {
    CheckPayload,
    CertificateTransactionResponse,
    CertificateCreateDto,
    UserCertificatesResult,
} from "./models";

class RemmeCertificate implements IRemmeCertificate {
    private readonly _remmePublicKeyStorage: IRemmePublicKeyStorage;
    private readonly _rsaKeySize: number = 2048;
    private readonly _socketAddress: () => string;

    public constructor(remmePublicKeyStorage: IRemmePublicKeyStorage, socketAddress: () => string) {
        this._remmePublicKeyStorage = remmePublicKeyStorage;
        this._socketAddress = socketAddress;
    }

    public async createAndStore(certificateDataToCreate: CertificateCreateDto)
        : Promise<CertificateTransactionResponse> {
        const keys = this._generateKeyPair();
        const cert = this._createCertificate(keys, certificateDataToCreate);
        const batchResponse = await this.store(cert);
        const certResponse = new CertificateTransactionResponse(this._socketAddress());
        certResponse.certificate = cert;
        certResponse.batchId = batchResponse.batchId;
        return certResponse;
    }

    public async store(certificate: forge.pki.Certificate): Promise<BaseTransactionResponse> {
        const certificatePEM = this._getCertificatePEM(certificate);
        const { publicKey, privateKey } = certificate;
        const validFrom = Math.floor(certificate.validity.notBefore.getTime() / 1000);
        const validTo = Math.floor(certificate.validity.notAfter.getTime()  / 1000);
        return await this._remmePublicKeyStorage.store({
            data: certificatePEM,
            publicKey,
            privateKey,
            validFrom,
            validTo,
        });
    }

    public async check(certificate: forge.pki.Certificate): Promise<boolean> {
        const publicKeyPEM = this._getPublicKeyPEM(certificate);
        return await this._remmePublicKeyStorage.check(publicKeyPEM);
    }

    public async revoke(certificate: forge.pki.Certificate): Promise<BaseTransactionResponse> {
        const publicKeyPEM = this._getPublicKeyPEM(certificate);
        return await this._remmePublicKeyStorage.revoke(publicKeyPEM);
    }

    // public async getUserCertificates(publicKey: string): Promise<string[]> {
    //     const apiResult = await this._remmeRest
    //         .getRequest<UserCertificatesResult>(RemmeMethods.userCertificates, publicKey);
    //     return apiResult.certificates;
    // }

    private _createCertificate(keys: forge.pki.KeyPair, certificateDataToCreate: CertificateCreateDto)
        : forge.pki.Certificate {
        const subject = this._createSubject(certificateDataToCreate);
        const cert = forge.pki.createCertificate();
        cert.setSubject(subject);
        cert.publicKey = keys.publicKey;
        cert.privateKey = keys.privateKey;
        cert.validity.notBefore = new Date();
        cert.validity.notAfter = new Date();
        if (certificateDataToCreate.validAfter) {
            cert.validity.notBefore.setDate(cert.validity.notBefore.getDate() + certificateDataToCreate.validAfter);
        }
        cert.validity.notAfter.setDate(cert.validity.notBefore.getDate() + certificateDataToCreate.validity);
        cert.sign(keys.privateKey, forge.md.sha256.create());
        return cert;
    }

    private _createSubject(certificateDataToCreate: CertificateCreateDto): forge.pki.CertificateField[] {
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

    private _generateKeyPair(): forge.pki.KeyPair {
        return forge.pki.rsa.generateKeyPair(this._rsaKeySize);
    }

    private _getPublicKeyPEM(certificate): forge.pki.PEM {
        try {
            return forge.pki.publicKeyToPem(certificate.publicKey);
        } catch (e) {
            throw new Error("Given certificate is not a valid");
        }
    }

    private _getCertificatePEM(certificate): forge.pki.PEM {
        try {
            return forge.pki.certificateToPem(certificate);
        } catch (e) {
            throw new Error("Given certificate is not a valid");
        }
    }
}

export {
    RemmeCertificate,
    IRemmeCertificate,
};
