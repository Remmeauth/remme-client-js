import { forge } from "remme-utils";
export declare class PublicKeyCheck {
    public_key: string | forge.pki.PEM;
    constructor(public_key: string | forge.pki.PEM);
}
