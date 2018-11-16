import { NewPubKeyPayload } from "remme-protobuf";
import { IRemmeKeys } from "./interface";
import { GenerateOptions } from "./models";
declare const KeyType: any;
declare const RSASignaturePadding: any;
declare class RemmeKeys implements IRemmeKeys {
    private readonly _keys;
    static generateKeyPair(keyType: NewPubKeyPayload.PubKeyType, options?: GenerateOptions): Promise<IRemmeKeys>;
    static getAddressFromPublicKey(publicKey: any, keyType: NewPubKeyPayload.PubKeyType): string;
    constructor(keyType: NewPubKeyPayload.PubKeyType, privateKey: any, publicKey?: any);
    sign(data: string, rsaSignaturePadding?: NewPubKeyPayload.RSASignaturePadding): any;
    verify(signature: string, data: string, rsaSignaturePadding?: NewPubKeyPayload.RSASignaturePadding): boolean;
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
    readonly keyType: string;
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
}
export { RemmeKeys, IRemmeKeys, KeyType, RSASignaturePadding };
