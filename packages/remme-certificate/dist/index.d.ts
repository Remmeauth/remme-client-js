/// <reference types="node-forge" />
import { pki } from "node-forge";
import { IRemmeCertificate } from "./interface";
declare namespace RemmeCertificate {
    class Certificate implements IRemmeCertificate {
        private readonly _remmeRest;
        private _rsaKeySize;
        constructor(nodeAdress?: string);
        createCertificate(commonName: string, email?: string): Promise<pki.Certificate>;
        storeCertificate(signingRequest: pki.Certificate): Promise<pki.Certificate>;
        checkCertificate(certificate: pki.Certificate): Promise<boolean>;
        private createSignRequest(subject, keys);
        private createSubject(commonName, email?);
        private generateKeyPair();
    }
}
export = RemmeCertificate;
