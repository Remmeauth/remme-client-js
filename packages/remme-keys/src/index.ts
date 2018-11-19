import { NewPubKeyPayload } from "remme-protobuf";
import { IRemmeKeys } from "./interface";
import {
    RSA,
    EdDSA,
    ECDSA,
    GenerateOptions,
    KeyType,
    RSASignaturePadding,
} from "./models";

// const { PubKeyType: KeyType } = NewPubKeyPayload;
// const { RSASignaturePadding } = NewPubKeyPayload;

class RemmeKeys implements IRemmeKeys {
    private readonly _keys: IRemmeKeys;

    public static async generateKeyPair(
        // keyType: NewPubKeyPayload.PubKeyType,
        keyType: KeyType,
        options?: GenerateOptions,
    ): Promise<IRemmeKeys> {
        let keys: {
            privateKey: any,
            publicKey: any,
        };
        switch (keyType) {
            case KeyType.RSA: {
                keys = await RSA.generateKeyPair(options);
                break;
            }
            case KeyType.EdDSA: {
                keys = EdDSA.generateKeyPair(options);
                break;
            }
            case KeyType.ECDSA: {
                keys = ECDSA.generateKeyPair();
                break;
            }
        }
        return new RemmeKeys(keyType, keys.privateKey, keys.publicKey);
    }

    public static getAddressFromPublicKey(
        publicKey: any,
        // keyType: NewPubKeyPayload.PubKeyType,
        keyType: KeyType,
    ): string {
        switch (keyType) {
            case KeyType.RSA: {
                return RSA.getAddressFromPublicKey(publicKey);
            }
            case KeyType.EdDSA: {
                return EdDSA.getAddressFromPublicKey(publicKey);
            }
            case KeyType.ECDSA: {
                return ECDSA.getAddressFromPublicKey(publicKey);
            }
        }
    }

    constructor(
        // keyType: NewPubKeyPayload.PubKeyType,
        keyType: KeyType,
        privateKey: any,
        publicKey?: any,
    ) {
        switch (keyType) {
            case KeyType.RSA: {
                this._keys = new RSA(privateKey, publicKey);
                break;
            }
            case KeyType.EdDSA: {
                this._keys = new EdDSA(privateKey, publicKey);
                break;
            }
            case KeyType.ECDSA: {
                this._keys = new ECDSA(privateKey, publicKey);
                break;
            }
        }
    }

    public sign(
        data: string,
        // rsaSignaturePadding?: NewPubKeyPayload.RSASignaturePadding,
        rsaSignaturePadding?: RSASignaturePadding,
    ): any {
        if (this._keys instanceof RSA) {
            return this._keys.sign(data, rsaSignaturePadding);
        }
        return this._keys.sign(data);
    }

    public verify(
        signature: string,
        data: string,
        // rsaSignaturePadding?: NewPubKeyPayload.RSASignaturePadding,
        rsaSignaturePadding?: RSASignaturePadding,
    ): boolean {
        if (this._keys instanceof RSA) {
            return this._keys.verify(signature, data, rsaSignaturePadding);
        }
        return this._keys.verify(signature, data);
    }

    /**
     * Address of this key in blockchain. (https://docs.remme.io/remme-core/docs/family-account.html#addressing)
     */
    public get address(): string {
        return this._keys.address;
    }

    /**
     * Return private key.
     * @returns {Buffer}
     */
    public get privateKey(): any {
        return this._keys.privateKey;
    }

    /**
     * Return public key.
     * @returns {Buffer}
     */
    public get publicKey(): any {
        return this._keys.publicKey;
    }

    /**
     * Return key type.
     * @returns {string}
     */
    public get keyType(): string {
        return KeyType[this._keys.keyType];
    }

    /**
     * Return base 64 of public key.
     * @returns {string}
     */
    public get publicKeyBase64(): string {
        return this._keys.publicKeyBase64;
    }

    /**
     * Return private key in pem format.
     * @returns {string}
     */
    public get privateKeyPem(): string {
        return this._keys.privateKeyPem;
    }

    /**
     * Return public key in pem format.
     * @returns {string}
     */
    public get publicKeyPem(): string {
        return this._keys.publicKeyPem;
    }

    /**
     * Return private key in pem format.
     * @returns {string}
     */
    public get privateKeyHex(): string {
        return this._keys.privateKeyHex;
    }

    /**
     * Return public key in pem format.
     * @returns {string}
     */
    public get publicKeyHex(): string {
        return this._keys.publicKeyHex;
    }

}

export {
    RemmeKeys,
    IRemmeKeys,
    KeyType,
    RSASignaturePadding,
};
