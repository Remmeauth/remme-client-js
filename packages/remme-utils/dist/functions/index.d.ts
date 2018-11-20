/// <reference types="node" />
/// <reference types="node-forge" />
import * as forge from "node-forge";
export declare const sha512: (value: string | Uint8Array | Buffer) => string;
export declare const sha256: (value: string | Uint8Array | Buffer) => string;
export declare const hexToBytes: (str: string) => Uint8Array;
export declare const bytesToHex: (uint8arr: Uint8Array | Buffer) => string;
export declare const base64ToArrayBuffer: (base64: string) => Uint8Array;
export declare const toHex: (str: string) => string;
export declare const generateAddress: (familyName: string, data: string) => string;
export declare const generateSettingsAddress: (key: string) => string;
export declare const certificateToPem: (certificate: forge.pki.Certificate) => string;
export declare const certificateFromPem: (certificate: string) => forge.pki.Certificate;
export declare const publicKeyToPem: (publicKey: any) => string;
export declare const publicKeyFromPem: (publicKey: string) => forge.pki.Certificate;
export declare const privateKeyToPem: (privateKey: any) => string;
export declare const privateKeyFromPem: (privateKey: string) => forge.pki.Certificate;
/**
 * Function that generate RSA key pair (private and public keys)
 * Function take one param that equal to rsa key size, by default is 2048.
 * @example
 * You can explicitly pass rsa key pair
 * ```typescript
 * const { privateKey, publicKey } = await generateRSAKeyPair(1024);
 * ```
 * Or you can run function without arguments. And rsa key size will be 2048.
 * ```typescript
 * const { privateKey, publicKey } = await generateRSAKeyPair();
 * ```
 * @param {number} rsaKeySize
 * @returns {Promise<module:node-forge.pki.KeyPair>}
 */
export declare const generateRSAKeyPair: (rsaKeySize?: number) => Promise<forge.pki.KeyPair>;
/**
 * Function that generate ED25519 key pair (private and public keys)
 * Function take one param that equal to seed for generating.
 * @param {string} seed
 * @returns {module:node-forge.pki.KeyPair}
 */
export declare const generateED25519KeyPair: (seed?: string) => forge.pki.KeyPair;
export declare const checkAddress: (address: string) => void;
export declare const checkPublicKey: (publicKey: string) => void;
