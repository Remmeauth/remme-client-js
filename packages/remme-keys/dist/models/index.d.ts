export { KeyDto } from "./KeyDto";
export interface GenerateOptions {
    seed?: string;
    rsaKeySize?: number;
}
export { RSA } from "./RSA";
export { EdDSA } from "./EdDSA";
export { ECDSA } from "./ECDSA";
export declare enum KeyType {
    RSA = 0,
    ECDSA = 1,
    EdDSA = 2,
}
export declare enum RSASignaturePadding {
    EMPTY = 0,
    PSS = 1,
    PKCS1v15 = 2,
}
