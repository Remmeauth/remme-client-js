import { pki } from "node-forge";

export class CheckPayload {
    public certificate: pki.PEM;
    public constructor(certificate: pki.Certificate) {
        this.certificate = pki.certificateToPem(certificate);
    }
}
