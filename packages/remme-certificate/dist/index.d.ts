import { pki } from "remme-utils";
import { RemmeRest } from "remme-rest";
import { IRemmeCertificate } from "./interface";
import { StoreResult, RevokeResult } from "./models";
declare namespace RemmeCertificate {
    class Certificate implements IRemmeCertificate {
        private readonly _remmeRest;
        private _rsaKeySize;
        constructor(remmeRest?: RemmeRest);
        createCertificate(commonName: string, email?: string): Promise<StoreResult>;
        storeCertificate(signingRequest: pki.Certificate): Promise<StoreResult>;
        checkCertificate(certificate: pki.Certificate): Promise<boolean>;
        revokeCertificate(certificate: pki.Certificate): Promise<RevokeResult>;
        private createSignRequest(subject, keys);
        private createSubject(commonName, email?);
        private generateKeyPair();
    }
}
export = RemmeCertificate;
