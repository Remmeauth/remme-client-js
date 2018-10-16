import { forge } from "remme-utils";
export declare class PublicKeyStorageCheckPayload {
    public_key: string | forge.pki.PEM;
    constructor(publicKeyPem: string | forge.pki.PEM);
}
