import { pki } from "remme-utils";
export declare class CheckPayload {
    certificate: pki.PEM;
    constructor(certificate: pki.Certificate);
}
