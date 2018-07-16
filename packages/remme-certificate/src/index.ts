import { forge, oids } from "remme-utils";
import { BaseTransactionResponse, IBaseTransactionResponse } from "remme-transaction-service";
import { IRemmePublicKeyStorage, PublicKeyStorageCheckResult } from "remme-public-key-storage";

import { IRemmeCertificate } from "./interface";
import {
    CertificateTransactionResponse,
    ICertificateTransactionResponse,
    CertificateCreateDto,
} from "./models";

class RemmeCertificate implements IRemmeCertificate {
    private readonly _remmePublicKeyStorage: IRemmePublicKeyStorage;
    private readonly _rsaKeySize: number = 2048;

    public constructor(remmePublicKeyStorage: IRemmePublicKeyStorage) {
        this._remmePublicKeyStorage = remmePublicKeyStorage;
    }

    public async createAndStore(certificateDataToCreate: CertificateCreateDto)
        : Promise<ICertificateTransactionResponse> {
        const keys = await this._generateKeyPair();
        const cert = this._createCertificate(keys, certificateDataToCreate);
        const batchResponse = await this.store(cert);
        const certResponse = new CertificateTransactionResponse(
            batchResponse.socketAddress,
            batchResponse.sslMode,
            batchResponse.batchId,
        );
        certResponse.certificate = cert;
        return certResponse;
    }

    public async store(certificate: forge.pki.Certificate | forge.pki.PEM): Promise<IBaseTransactionResponse> {
        if (typeof certificate === "string") {
            certificate = this._getCertificateFromPEM(certificate);
        }
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

    public async check(certificate: forge.pki.Certificate  | forge.pki.PEM): Promise<PublicKeyStorageCheckResult> {
        if (typeof certificate === "string") {
            certificate = this._getCertificateFromPEM(certificate);
        }
        const publicKeyPEM = this._getPublicKeyPEM(certificate);
        const checkResult = await this._remmePublicKeyStorage.check(publicKeyPEM);
        const message = this._remmePublicKeyStorage.generateMessage(forge.pki.certificateToPem(certificate));
        const entityHash = this._remmePublicKeyStorage.generateEntityHash(message);
        const currentTime = Math.floor(Date.now() / 1000);
        if (checkResult) {
            checkResult.valid = checkResult &&
                !checkResult.revoked &&
                entityHash === checkResult.entity_hash &&
                currentTime >= checkResult.valid_from &&
                currentTime < checkResult.valid_to;
        }
        return checkResult;
    }

    public async revoke(certificate: forge.pki.Certificate | forge.pki.PEM): Promise<IBaseTransactionResponse> {
        if (typeof certificate === "string") {
            certificate = this._getCertificateFromPEM(certificate);
        }
        const publicKeyPEM = this._getPublicKeyPEM(certificate);
        return await this._remmePublicKeyStorage.revoke(publicKeyPEM);
    }

    private _createCertificate(keys: forge.pki.KeyPair, certificateDataToCreate: CertificateCreateDto)
        : forge.pki.Certificate {
        const subject = this._createSubject(certificateDataToCreate);
        const cert = forge.pki.createCertificate();
        cert.setSubject(subject);
        cert.publicKey = keys.publicKey;
        cert.privateKey = keys.privateKey;
        cert.serialNumber = certificateDataToCreate.serial;
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

    private async _generateKeyPair(): Promise<forge.pki.KeyPair> {
        return await forge.pki.rsa.generateKeyPair(this._rsaKeySize);
    }

    private _getPublicKeyPEM(certificate: forge.pki.Certificate): forge.pki.PEM {
        try {
            return forge.pki.publicKeyToPem(certificate.publicKey);
        } catch (e) {
            throw new Error("Given certificate is not a valid");
        }
    }

    private _getCertificatePEM(certificate: forge.pki.Certificate): forge.pki.PEM {
        try {
            return forge.pki.certificateToPem(certificate);
        } catch (e) {
            throw new Error("Given certificate is not a valid");
        }
    }

    private _getCertificateFromPEM(certificate: forge.pki.PEM): forge.pki.Certificate {
        try {
            return forge.pki.certificateFromPem(certificate);
        } catch (e) {
            throw new Error("Given certificate is not a valid");
        }
    }
}

export {
    RemmeCertificate,
    IRemmeCertificate,
};
