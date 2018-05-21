import { forge } from "remme-utils";
export declare class StorePayload {
    certificate: forge.pki.PEM;
    constructor(certificate: forge.pki.Certificate);
}
