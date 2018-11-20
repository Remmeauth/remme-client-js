export { KeyDto } from "./KeyDto";
export interface GenerateOptions {
    seed?: string;
    rsaKeySize?: number;
}

/**
 * All types of Key pair
 */
export enum KeyType {
    RSA,
    ECDSA,
    EdDSA,
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
export enum RSASignaturePadding {
    EMPTY,
    PSS,
    PKCS1v15,
}

export { RSA } from "./RSA";
export { EdDSA } from "./EdDSA";
export { ECDSA } from "./ECDSA";
