import * as bytes from "utf8-bytes";
import { sha512 } from "js-sha512";

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

export const getAddressFromData = (familyName: string, data: string): string => {
    return `${sha512(familyName).slice(0, 6)}${sha512(data).slice(0, 64)}`;
};

export const toHexString = (byteArray) => {
    return Array.from(byteArray, (byte: any) => {
        return ("0" + (byte & 0xFF).toString(16)).slice(-2);
    }).join("");
};

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
