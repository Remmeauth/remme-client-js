import { md, pki } from "node-forge";
import { RemmeMethods, RemmeRest } from "remme-rest";

import { IRemmeClient } from "./interface";

class RemmeClient implements IRemmeClient {
    private static createSignRequest(subject: pki.CertificateField[], keys: pki.KeyPair): pki.Certificate {
        const csr = pki.createCertificationRequest();
        csr.setSubject(subject);
        csr.publicKey = keys.publicKey;
        csr.sign(keys.privateKey, md.sha256.create());
        return csr;
    }

    private static createSubject(commonName: string, email?: string): pki.CertificateField[] {
        return [
            {
                name: "commonName",
                value: commonName,
            }, {
                shortName: "E",
                value: email,
            },
        ];
    }

    private readonly _remmeRest: RemmeRest;

    private _rsaKeySize: number = 4096;

    public constructor(nodeAdress: string = "localhost:8080") {
        this._remmeRest = new RemmeRest(nodeAdress);
    }

    public async createCertificate(commonName: string, email?: string): Promise<pki.Certificate> {
        const keys = this.generateKeyPair();
        const subject = RemmeClient.createSubject(commonName, email);
        const csr = RemmeClient.createSignRequest(subject, keys);
        const cert = await this.storeCertificate(csr);
        // cert.privateKey = keys.privateKey;
        return cert;
    }

    public async storeCertificate(signingRequest: pki.Certificate): Promise<pki.Certificate> {
        const payload = pki.certificationRequestToPem(signingRequest);
        const result = await this._remmeRest.putRequest(payload, RemmeMethods.certificateStore);
        return pki.certificateFromPem(result);
    }

    public async checkCertificate(certificate: pki.Certificate): Promise<boolean> {
        const payload = pki.certificateToPem(certificate);
        const result = await this._remmeRest.postRequest<string, {
            revoked: boolean,
        }>(payload, RemmeMethods.certificate);
        return result.revoked;
    }

    private generateKeyPair(): pki.KeyPair {
        return pki.rsa.generateKeyPair(this._rsaKeySize);
    }
}

export = RemmeClient;
