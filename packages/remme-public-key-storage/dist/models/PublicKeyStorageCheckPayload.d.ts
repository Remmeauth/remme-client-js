import { forge } from "remme-utils";
export declare class PublicKeyStorageCheckPayload {
    pub_key: forge.pki.PEM;
    constructor(publicKeyPem: forge.pki.PEM);
}
