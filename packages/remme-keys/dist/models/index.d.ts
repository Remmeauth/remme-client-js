export { KeyDto } from "./KeyDto";
export interface GenerateOptions {
    seed?: string;
    rsaKeySize?: number;
}
/**
 * All types of Key pair
 */
export declare enum KeyType {
    RSA = 0,
    ECDSA = 1,
    EdDSA = 2,
}
export interface IKeys {
    privateKey?: any;
    publicKey?: any;
}
/**
 * Params for creating key pair
 */
export interface IRemmeKeysParams extends IKeys {
    keyType: KeyType;
}
/**
 * All kind of RSASignature padding.
 */
export declare enum RSASignaturePadding {
    EMPTY = 0,
    PSS = 1,
    PKCS1v15 = 2,
}
export { RSA } from "./RSA";
export { EdDSA } from "./EdDSA";
export { ECDSA } from "./ECDSA";
