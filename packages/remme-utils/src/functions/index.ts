import * as bytes from "utf8-bytes";
import { createHash } from "crypto";
import * as b64 from "base64-js";
import * as forge from "node-forge";

export const sha512 = (value: Buffer | string) => createHash("sha512").update(value).digest("hex");

export const hexToBytes = (str: string) => {
    const arr = [];
    const len = str.length;
    for (let i = 0; i < len; i += 2) {
        arr.push(parseInt(str.substr(i, 2), 16));
    }
    return new Uint8Array(arr);
};

export const bytesToHex = (uint8arr: Uint8Array): string => {
    let hexStr: string = "";
    uint8arr.forEach((item) => {
        let hex = (item & 0xff).toString(16);
        hex = (hex.length === 1) ? "0" + hex : hex;
        hexStr += hex;
    });
    return hexStr;
};

export const base64ToArrayBuffer = (base64: string): Uint8Array => {
   return b64.toByteArray(base64);
};

export const utf8ToBytes = (str: string): any => {
    return bytes(str);
};

export const toHex = (str: string): string => {
    let hex = "";
    for (let i = 0; i < str.length; i++) {
        hex += str.charCodeAt(i).toString(16);
    }
    return hex;
};

export const generateAddress = (familyName: string, data: string): string => {
    return `${sha512(familyName).slice(0, 6)}${sha512(data).slice(0, 64)}`;
};

export const toHexString = (byteArray) => Array.from(byteArray, (byte: any) =>
    ("0" + (byte & 0xFF).toString(16)).slice(-2)).join("");

export const toUTF8Array = (str) => {
    const utf8 = [];
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if (charCode < 0x80) {
            utf8.push(charCode);
        } else if (charCode < 0x800) {
            utf8.push(0xc0 | (charCode >> 6),
                0x80 | (charCode & 0x3f));
        } else if (charCode < 0xd800 || charCode >= 0xe000) {
            utf8.push(0xe0 | (charCode >> 12),
                0x80 | ((charCode >> 6) & 0x3f),
                0x80 | (charCode & 0x3f));
        } else {
            i++;
            // UTF-16 encodes 0x10000-0x10FFFF by
            // subtracting 0x10000 and splitting the
            // 20 bits of 0x0-0xFFFFF into two halves
            charCode = 0x10000 + (((charCode & 0x3ff) << 10)
                | (str.charCodeAt(i) & 0x3ff));
            utf8.push(0xf0 | (charCode >> 18),
                0x80 | ((charCode >> 12) & 0x3f),
                0x80 | ((charCode >> 6) & 0x3f),
                0x80 | (charCode & 0x3f));
        }
    }
    return utf8;
};

export const generateSettingsAddress = (key: string): string => {
    const keyParts = key.split(".", 4);
    const addressParts = keyParts.map((v) => createHash("sha256").update(v).digest("hex").slice(0, 16));
    while (4 - addressParts.length !== 0) {
        addressParts.push(createHash("sha256").update("").digest("hex").slice(0, 16));
    }
    return `000000${addressParts.join("")}`;
};

export const certificateToPem = (certificate: forge.pki.Certificate): forge.pki.PEM => {
    try {
        return forge.pki.certificateToPem(certificate);
    } catch (e) {
        throw new Error("Given certificate is not a valid");
    }
};

export const certificateFromPem = (certificate: forge.pki.PEM): forge.pki.Certificate => {
    try {
        return forge.pki.certificateFromPem(certificate);
    } catch (e) {
        throw new Error("Given certificate is not a valid");
    }
};

export const publicKeyToPem = (publicKey: forge.pki.Key): forge.pki.PEM => {
    try {
        return forge.pki.publicKeyToPem(publicKey);
    } catch (e) {
        throw new Error("Given publicKey is not a valid");
    }
};

export const publicKeyFromPem = (publicKey: forge.pki.PEM): forge.pki.Certificate => {
    try {
        return forge.pki.publicKeyFromPem(publicKey);
    } catch (e) {
        throw new Error("Given publicKey is not a valid");
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
