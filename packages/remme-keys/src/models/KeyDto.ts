// import { NewPubKeyPayload } from "remme-protobuf";
import { RemmeFamilyName } from "remme-utils";
import { KeyType } from "./index";

class KeyDto {
    protected _familyName: RemmeFamilyName = RemmeFamilyName.PublicKey;
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
    public get address(): string {
        return this._address;
    }

    /**
     * Return private key.
     * @returns {Buffer}
     */
    public get privateKey(): any {
        if (!this._privateKey) {
            throw new Error("You didn't provide private key");
        }
        return this._privateKey;
    }

    /**
     * Return public key.
     * @returns {Buffer}
     */
    public get publicKey(): any {
        return this._publicKey;
    }

    /**
     * Return key type.
     * @returns {string}
     */
    public get keyType(): string {
        return KeyType[this._keyType];
    }

    /**
     * Return base 64 of public key.
     * @returns {string}
     */
    public get publicKeyBase64(): string {
        return this._publicKeyBase64;
    }

    /**
     * Return private key in pem format.
     * @returns {string}
     */
    public get privateKeyPem(): string {
        if (!this._privateKeyPem) {
            throw new Error(`Don't supported for this key type: ${this._keyType} or didn't provide private key`);
        }
        return this._privateKeyPem;
    }

    /**
     * Return public key in pem format.
     * @returns {string}
     */
    public get publicKeyPem(): string {
        if (!this._publicKeyPem) {
            throw new Error(`Don't supported for this key type: ${this._keyType}`);
        }
        return this._publicKeyPem;
    }

    /**
     * Return private key in pem format.
     * @returns {string}
     */
    public get privateKeyHex(): string {
        if (!this._privateKeyHex) {
            throw new Error(`Don't supported for this key type: ${this._keyType} or didn't provide private key`);
        }
        return this._privateKeyHex;
    }

    /**
     * Return public key in pem format.
     * @returns {string}
     */
    public get publicKeyHex(): string {
        if (!this._publicKeyHex) {
            throw new Error(`Don't supported for this key type: ${this._keyType}`);
        }
        return this._publicKeyHex;
    }

    /**
     * Return family name.
     * @returns {RemmeFamilyName}
     */
    public get familyName(): RemmeFamilyName {
        return this._familyName;
    }
}

export {
    KeyDto,
};
