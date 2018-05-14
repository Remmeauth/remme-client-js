import { pki } from "node-forge";

export class CheckPayload {
    public certificate: string;
    public constructor(certificate: pki.Certificate) {
        this.certificate = pki.certificateToPem(certificate);
    }
}
