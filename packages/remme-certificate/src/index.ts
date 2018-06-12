import { forge, BaseTransactionResponse, oids, getAddressFromData } from "remme-utils";
import { RemmeMethods, IRemmeRest } from "remme-rest";
import { IRemmeTransactionService } from "remme-transaction-service";
import { TransactionPayload, NewPubKeyPayload, PubKeyMethod, RevokePubKeyPayload } from "remme-protobuf";

import { IRemmeCertificate } from "./interface";
import {
    StorePayload,
    StoreResult,
    CheckPayload,
    CheckResult,
    RevokeResult,
    CertificateTransactionResponse,
    CertificateCreateDto,
    UserCertificatesResult,
} from "./models";

class RemmeCertificate implements IRemmeCertificate {
    private readonly _remmeRest: IRemmeRest;
    private readonly _remmeTransaction: IRemmeTransactionService;
    private readonly _familyName = "pub_key";
    private readonly _familyVersion = "0.1";
    private readonly _rsaKeySize: number = 2048;

    public constructor(remmeRest: IRemmeRest, remmeTransaction: IRemmeTransactionService) {
        this._remmeRest = remmeRest;
        this._remmeTransaction = remmeTransaction;
    }

    public async createAndStore(certificateDataToCreate: CertificateCreateDto)
        : Promise<BaseTransactionResponse> {
        const keys = this._generateKeyPair();
        const subject = this._createSubject(certificateDataToCreate);
        const cert = this._createCertificate(subject, keys, certificateDataToCreate.validity);
        const batchResponse = await this.store(cert);
        const certResponse = new CertificateTransactionResponse(this._remmeRest.socketAddress());
        certResponse.certificate.privateKey = keys.privateKey;
        certResponse.batchId = batchResponse.batchId;
        return certResponse;
    }

    public async store(certificate: forge.pki.Certificate): Promise<BaseTransactionResponse> {
        const payload = this._generatePayload(certificate);
        const transactionPayload = this._generateTransactionPayload(PubKeyMethod.Method.STORE, payload);
        const transaction = await this._remmeTransaction.create({
            familyName: this._familyName,
            familyVersion: this._familyVersion,
            inputs: [],
            outputs: [],
            payloadBytes: transactionPayload,
        });
        return await this._remmeTransaction.send(transaction);
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
            const publicKeyPEM = forge.pki.publicKeyToPem(certificate.publicKey);
            const address = getAddressFromData(this._familyName, publicKeyPEM);
            // console.log(address);
            const revokePayload = RevokePubKeyPayload.encode({
                address,
            }).finish();
            const payloadBytes = this._generateTransactionPayload(PubKeyMethod.Method.REVOKE, revokePayload);
            const transaction = await this._remmeTransaction.create({
                familyName: this._familyName,
                familyVersion: this._familyVersion,
                inputs: [],
                outputs: [],
                payloadBytes,
            });
            return await this._remmeTransaction.send(transaction);
            // const payload = new CheckPayload(certificate);
            // const apiResult = await this._remmeRest
            //     .deleteRequest<CheckPayload, RevokeResult>(RemmeMethods.certificate, payload);
            // const result = new BaseTransactionResponse(this._remmeRest.socketAddress());
            // result.batchId = apiResult.batch_id;
            // return result;
        } catch (e) {
            throw new Error("Given certificate is not a valid");
        }
    }

    public async getUserCertificates(publicKey: string): Promise<string[]> {
        const apiResult = await this._remmeRest
            .getRequest<UserCertificatesResult>(RemmeMethods.userCertificates, publicKey);
        return apiResult.certificates;
    }

    private _generateEntityHash(certificate: forge.pki.PEM): string {
        const certSHA512 = forge.md.sha512.create().update(certificate);
        return certSHA512.digest().toHex();
    }

    private _generateSignature(certificate: forge.pki.PEM, privateKey: forge.pki.Key): string {
        const md = forge.md.sha512.create();
        md.update(certificate);
        const pss = forge.pss.create({
            md: forge.md.sha512.create(),
            mgf: forge.mgf.mgf1.create(forge.md.sha512.create()),
            saltLength: 20,
        });
        return privateKey.sign(md, pss);
    }

    private _generatePayload(certificate: forge.pki.Certificate): Uint8Array {
        const publicKey = forge.pki.publicKeyToPem(certificate.publicKey);
        const certificatePEM = forge.pki.certificateToPem(certificate);
        const entityHash = this._generateEntityHash(certificatePEM);
        const entityHashSignature = this._generateSignature(certificatePEM, certificate.privateKey);
        return NewPubKeyPayload.encode({
            publicKey,
            publicKeyType: NewPubKeyPayload.PubKeyType.RSA,
            entityType: NewPubKeyPayload.EntityType.PERSONAL,
            entityHash,
            entityHashSignature,
            validFrom: Math.floor(Math.round(certificate.validity.notBefore.getTime()) / 1000),
            validTo: Math.floor(Math.round(certificate.validity.notAfter.getTime()) / 1000),
        }).finish();
    }

    private _generateTransactionPayload(method: number, data: Uint8Array): Uint8Array {
        return TransactionPayload.encode({
            method,
            data,
        }).finish();
    }

    private _createCertificate(subject: forge.pki.CertificateField[], keys: forge.pki.KeyPair, validity: number)
        : forge.pki.Certificate {
        const cert = forge.pki.createCertificate();
        cert.setSubject(subject);
        cert.publicKey = keys.publicKey;
        cert.validity.notBefore = new Date();
        cert.validity.notAfter = new Date();
        cert.validity.notAfter.setDate(cert.validity.notBefore.getDate() + validity);
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
}

export {
    RemmeCertificate,
    IRemmeCertificate,
};
