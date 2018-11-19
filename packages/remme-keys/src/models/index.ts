export { KeyDto } from "./KeyDto";
export interface GenerateOptions {
    seed?: string;
    rsaKeySize?: number;
}

export enum KeyType {
    RSA,
    ECDSA,
    EdDSA,
}

export enum RSASignaturePadding {
    EMPTY,
    PSS,
    PKCS1v15,
}

export { RSA } from "./RSA";
export { EdDSA } from "./EdDSA";
export { ECDSA } from "./ECDSA";
