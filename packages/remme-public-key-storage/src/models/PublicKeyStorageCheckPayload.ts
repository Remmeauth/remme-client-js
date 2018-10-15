import { forge } from "remme-utils";

export class PublicKeyStorageCheckPayload {
    public public_key: string | forge.pki.PEM;
    public constructor(publicKeyPem: string | forge.pki.PEM) {
        this.public_key = publicKeyPem;
    }
}
