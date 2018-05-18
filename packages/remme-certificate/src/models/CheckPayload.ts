import { pki } from "remme-utils";

export class CheckPayload {
    public certificate: pki.PEM;
    public constructor(certificate: pki.Certificate) {
        this.certificate = pki.certificateToPem(certificate);
    }
}
