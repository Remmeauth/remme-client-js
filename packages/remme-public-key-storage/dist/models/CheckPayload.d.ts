import { forge } from "remme-utils";
export declare class CheckPayload {
    pub_key: forge.pki.PEM;
    constructor(publicKeyPem: forge.pki.PEM);
}
