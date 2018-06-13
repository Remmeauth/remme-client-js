import { forge } from "remme-utils";

export class StorePayload {
    public certificate: forge.pki.PEM;
    public constructor(certificate: forge.pki.Certificate) {
        this.certificate = forge.pki.certificationRequestToPem(certificate);
    }
}
