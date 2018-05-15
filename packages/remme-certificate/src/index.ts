import { md, pki } from "node-forge";
import { RemmeMethods, RemmeRest } from "remme-rest";

import { IRemmeCertificate } from "./interface";
import { StorePayload, StoreResult, CheckPayload, CheckResult, RevokeResult } from "./models";

namespace RemmeCertificate {
    export class Certificate implements IRemmeCertificate {
        private readonly _remmeRest: RemmeRest;
        private _rsaKeySize: number = 2048;

        public constructor(nodeAdress: string = "localhost:8080") {
            this._remmeRest = new RemmeRest(nodeAdress);
        }

        public async createCertificate(commonName: string, email?: string): Promise<pki.Certificate> {
            const keys = this.generateKeyPair();
            const subject = this.createSubject(commonName, email);
            const csr = this.createSignRequest(subject, keys);
            const cert = await this.storeCertificate(csr);
            // cert.privateKey = keys.privateKey;
            return cert;
        }

        public async storeCertificate(signingRequest: pki.Certificate): Promise<pki.Certificate> {
            // const payload = {
            //     certificate: pki.certificationRequestToPem(signingRequest),
            // };
            const payload = new StorePayload(signingRequest);
            const result = await this._remmeRest
                .putRequest<StorePayload, StoreResult>(payload, RemmeMethods.certificateStore);
            return pki.certificateFromPem(result.certificate);
        }

        public async checkCertificate(certificate: pki.Certificate): Promise<boolean> {
            // const payload = pki.certificateToPem(certificate);
            const payload = new CheckPayload(certificate);
            const result = await this._remmeRest
                .postRequest<CheckPayload, CheckResult>(payload, RemmeMethods.certificate);
            return !result.revoked;
        }

        public async revokeCertificate(certificate: pki.Certificate): Promise<RevokeResult> {
            const payload = new CheckPayload(certificate);
            const result = await this._remmeRest
                .deleteRequest<CheckPayload, RevokeResult>(payload, RemmeMethods.certificate);
            return result;
        }

        private createSignRequest(subject: pki.CertificateField[], keys: pki.KeyPair): pki.Certificate {
            const csr = pki.createCertificationRequest();
            csr.setSubject(subject);
            csr.publicKey = keys.publicKey;
            csr.sign(keys.privateKey, md.sha256.create());
            return csr;
        }

        private createSubject(commonName: string, email?: string): pki.CertificateField[] {
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

        private generateKeyPair(): pki.KeyPair {
            return pki.rsa.generateKeyPair(this._rsaKeySize);
        }
    }
}

export = RemmeCertificate;
