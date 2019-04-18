import { createHash } from "crypto";
import * as b64 from "base64-js";
import * as forge from "node-forge";

import { PATTERNS } from "../constants";
import { INetworkConfig, RemmeFamilyName } from "../models";

export const sha512 = (value: Uint8Array | Buffer | string) =>
    createHash("sha512").update(value as Buffer | string).digest("hex");

export const sha256 = (value: Uint8Array | Buffer | string) =>
    createHash("sha256").update(value as Buffer | string).digest("hex");

export const hexToBytes = (str: string): Uint8Array => {
    const arr = [];
    const len = str.length;
    for (let i = 0; i < len; i += 2) {
        arr.push(parseInt(str.substr(i, 2), 16));
    }
    return new Uint8Array(arr);
};

export const bytesToHex = (uint8arr: Buffer | Uint8Array): string => {
    let hexStr: string = "";
    uint8arr.forEach((item) => {
        let hex = (item & 0xff).toString(16);
        hex = (hex.length === 1) ? "0" + hex : hex;
        hexStr += hex;
    });
    return hexStr;
};

// TODO: remove dependency from b64 library
export const base64ToArrayBuffer = (base64: string): Uint8Array => {
   return b64.toByteArray(base64);
};

// TODO: remove it if unused
export const toHex = (str: string): string => {
    let hex = "";
    for (let i = 0; i < str.length; i++) {
        hex += str.charCodeAt(i).toString(16);
    }
    return hex;
};

export const generateAddress = (familyName: string, data: string | Buffer | Uint8Array): string => {
    return `${sha512(familyName).slice(0, 6)}${sha512(data).slice(0, 64)}`;
};

export const generateConsensusAddress = (): string => {
    return `${sha512(RemmeFamilyName.ConsensusAccount).slice(0, 6)}${"0".repeat(64)}`;
};

export const generateSettingsAddress = (key: string): string => {
    const keyParts = key.split(".", 4);
    const addressParts = keyParts.map((v) => createHash("sha256").update(v).digest("hex").slice(0, 16));
    while (4 - addressParts.length !== 0) {
        addressParts.push(createHash("sha256").update("").digest("hex").slice(0, 16));
    }
    return `000000${addressParts.join("")}`;
};

export const certificateToPem = (certificate: forge.pki.Certificate, withPrivateKey: boolean = false)
    : forge.pki.PEM => {
    try {
        let pem = forge.pki.certificateToPem(certificate);
        if (withPrivateKey) {
            pem += forge.pki.privateKeyToPem(certificate.privateKey);
        }
        return pem;
    } catch (e) {
        throw new Error("Given certificate is not a valid");
    }
};

export const certificateFromPem = (
    certificate_pem: forge.pki.PEM,
    withPrivateKey: boolean = false,
): forge.pki.Certificate => {
    try {
        const certificate = forge.pki.certificateFromPem(certificate_pem);
        if (withPrivateKey) {
            const msg = forge.pem.decode(certificate_pem)[1];
            certificate.privateKey = forge.pki.privateKeyFromPem(forge.pem.encode(msg));
        }
        return certificate;
    } catch (e) {
        throw new Error("Given certificate is not a valid");
    }
};

export const publicKeyToPem = (publicKey: forge.pki.Key): forge.pki.PEM => {
    try {
        return forge.pki.publicKeyToPem(publicKey);
    } catch (e) {
        throw new Error("Given public key is not a valid");
    }
};

export const publicKeyFromPem = (publicKey: forge.pki.PEM): forge.pki.Certificate => {
    try {
        return forge.pki.publicKeyFromPem(publicKey);
    } catch (e) {
        throw new Error("Given public key is not a valid");
    }
};

export const privateKeyToPem = (privateKey: forge.pki.Key): forge.pki.PEM => {
    try {
        return forge.pki.privateKeyToPem(privateKey);
    } catch (e) {
        throw new Error("Given private key is not a valid");
    }
};

export const privateKeyFromPem = (privateKey: forge.pki.PEM): forge.pki.Certificate => {
    try {
        return forge.pki.privateKeyFromPem(privateKey);
    } catch (e) {
        throw new Error("Given private key is not a valid");
    }
};

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
export const generateRSAKeyPair = async (rsaKeySize: number = 2048): Promise<forge.pki.KeyPair> => {
    return await forge.pki.rsa.generateKeyPair(rsaKeySize);
};

/**
 * Function that generate ED25519 key pair (private and public keys)
 * Function take one param that equal to seed for generating.
 * @param {string} seed
 * @returns {module:node-forge.pki.KeyPair}
 */
export const generateED25519KeyPair = (seed?: string): forge.pki.KeyPair => {
    if (seed) {
        seed = new forge.util.ByteBuffer(seed, "utf8");
        return forge.pki.ed25519.generateKeyPair({ seed });
    }
    return forge.pki.ed25519.generateKeyPair();
};

export const checkAddress = (address: string): void => {
    if (!address) {
        throw new Error("Address was not provided, please set the address");
    }
    if (typeof address !== "string" || address.search(PATTERNS.ADDRESS) === -1) {
        throw new Error("Given address is not a valid");
    }
};

export const checkPublicKey = (publicKey: string): void => {
    if (!publicKey) {
        throw new Error("Public Key was not provided, please set the address");
    }
    if (typeof publicKey !== "string" || publicKey.search(PATTERNS.PUBLIC_KEY) === -1) {
        throw new Error("Given public key is not a valid");
    }
};

export const checkSha256 = (data: string): void => {
    if (!PATTERNS.SHA256.test(data)) {
        throw new Error("Value should be SHA-256");
    }
};

export const checkSha512 = (data: string): void => {
    if (!PATTERNS.SHA512.test(data)) {
        throw new Error("Value should be SHA-512");
    }
};

export const checkSha = (data: string): void => {
    if (!PATTERNS.SHA256.test(data) && !PATTERNS.SHA512.test(data)) {
        throw new Error("Value should be SHA-256 or SHA-512");
    }
};

export const validateNodeConfig = (networkConfig: INetworkConfig): void => {
    const { nodeAddress, sslMode } = networkConfig;
    if (!PATTERNS.PROTOCOL.test(nodeAddress)) {
        throw new Error("You try construct with invalid nodeAddress, remove protocol and try again");
    } else if (typeof sslMode !== "boolean") {
        throw new Error("You try construct with invalid sslMode, sslMode should has boolean type");
    }
};
