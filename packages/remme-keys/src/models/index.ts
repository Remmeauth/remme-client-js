import {extends} from "tslint/lib/configs/latest";

export { KeyDto } from "./KeyDto";
export interface GenerateOptions {
    seed?: string;
    rsaKeySize?: number;
}

/**
 * All types of Key pair
 */
export enum KeyType {
    RSA = "rsa",
    ECDSA = "ecdsa",
    EdDSA = "ed25519",
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
    PSS = 0,
    PKCS1v15 = 1,
}

export { RSA } from "./RSA";
export { EdDSA } from "./EdDSA";
export { ECDSA } from "./ECDSA";
