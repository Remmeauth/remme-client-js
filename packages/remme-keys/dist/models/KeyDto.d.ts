import { RemmeFamilyName } from "remme-utils";
import { KeyType } from "./index";
declare class KeyDto {
    protected _familyName: RemmeFamilyName;
    protected _address: string;
    protected _publicKey: any;
    protected _privateKey: any;
    protected _publicKeyBase64: string;
    protected _privateKeyPem: string;
    protected _publicKeyPem: string;
    protected _privateKeyHex: string;
    protected _publicKeyHex: string;
    protected _keyType: KeyType;
    /**
     * Address of this key in blockchain. (https://docs.remme.io/remme-core/docs/family-account.html#addressing)
     */
    readonly address: string;
    /**
     * Return private key.
     * @returns {Buffer}
     */
    readonly privateKey: any;
    /**
     * Return public key.
     * @returns {Buffer}
     */
    readonly publicKey: any;
    /**
     * Return key type.
     * @returns {string}
     */
    readonly keyType: number;
    /**
     * Return base 64 of public key.
     * @returns {string}
     */
    readonly publicKeyBase64: string;
    /**
     * Return private key in pem format.
     * @returns {string}
     */
    readonly privateKeyPem: string;
    /**
     * Return public key in pem format.
     * @returns {string}
     */
    readonly publicKeyPem: string;
    /**
     * Return private key in pem format.
     * @returns {string}
     */
    readonly privateKeyHex: string;
    /**
     * Return public key in pem format.
     * @returns {string}
     */
    readonly publicKeyHex: string;
    /**
     * Return family name.
     * @returns {RemmeFamilyName}
     */
    readonly familyName: RemmeFamilyName;
}
export { KeyDto };
