import { pki } from "remme-utils";
export declare class StorePayload {
    certificate: pki.PEM;
    constructor(certificate: pki.Certificate);
}
