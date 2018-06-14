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
