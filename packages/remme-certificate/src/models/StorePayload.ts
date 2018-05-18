import { pki } from "remme-utils";

export class StorePayload {
    public certificate: pki.PEM;
    public constructor(certificate: pki.Certificate) {
        this.certificate = pki.certificationRequestToPem(certificate);
    }
}
