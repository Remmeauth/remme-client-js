import { forge } from "remme-utils";
export declare class CheckPayload {
    certificate: forge.pki.PEM;
    constructor(certificate: forge.pki.Certificate);
}
