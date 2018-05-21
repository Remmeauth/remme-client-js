import { forge } from "remme-utils";

export class CheckPayload {
    public certificate: forge.pki.PEM;
    public constructor(certificate: forge.pki.Certificate) {
        this.certificate = forge.pki.certificateToPem(certificate);
    }
}
