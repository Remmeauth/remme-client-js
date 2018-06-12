import { sha512 } from "js-sha512";

export const hexToBytes = (str: string) => {
    const bytes = [];
    const len = str.length;
    for (let i = 0; i < len; i += 2) {
        bytes.push(parseInt(str.substr(i, 2), 16));
    }
    return new Uint8Array(bytes);
};

export const bytesToHex = (uint8arr: Uint8Array) => {
    let hexStr: string = "";
    uint8arr.forEach((item) => {
        let hex = (item & 0xff).toString(16);
        hex = (hex.length === 1) ? "0" + hex : hex;
        hexStr += hex;
    });
    return hexStr;
};

export const getAddressFromData = (familyName: string, data: string): string => {
    return `${sha512(familyName).slice(0, 6)}${sha512(data).slice(0, 64)}`;
};
