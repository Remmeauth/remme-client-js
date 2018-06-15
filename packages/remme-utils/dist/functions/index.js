"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bytes = require("utf8-bytes");
var js_sha512_1 = require("js-sha512");
exports.hexToBytes = function (str) {
    var arr = [];
    var len = str.length;
    for (var i = 0; i < len; i += 2) {
        arr.push(parseInt(str.substr(i, 2), 16));
    }
    return new Uint8Array(arr);
};
exports.bytesToHex = function (uint8arr) {
    var hexStr = "";
    uint8arr.forEach(function (item) {
        var hex = (item & 0xff).toString(16);
        hex = (hex.length === 1) ? "0" + hex : hex;
        hexStr += hex;
    });
    return hexStr;
};
exports.utf8ToBytes = function (str) {
    return bytes(str);
};
exports.toHex = function (str) {
    var hex = "";
    for (var i = 0; i < str.length; i++) {
        hex += str.charCodeAt(i).toString(16);
    }
    return hex;
};
exports.getAddressFromData = function (familyName, data) {
    return "" + js_sha512_1.sha512(familyName).slice(0, 6) + js_sha512_1.sha512(data).slice(0, 64);
};
exports.toHexString = function (byteArray) {
    return Array.from(byteArray, function (byte) {
        return ("0" + (byte & 0xFF).toString(16)).slice(-2);
    }).join("");
};
exports.toUTF8Array = function (str) {
    var utf8 = [];
    for (var i = 0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80) {
            utf8.push(charcode);
        }
        else if (charcode < 0x800) {
            utf8.push(0xc0 | (charcode >> 6), 0x80 | (charcode & 0x3f));
        }
        else if (charcode < 0xd800 || charcode >= 0xe000) {
            utf8.push(0xe0 | (charcode >> 12), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f));
        }
        else {
            i++;
            // UTF-16 encodes 0x10000-0x10FFFF by
            // subtracting 0x10000 and splitting the
            // 20 bits of 0x0-0xFFFFF into two halves
            charcode = 0x10000 + (((charcode & 0x3ff) << 10)
                | (str.charCodeAt(i) & 0x3ff));
            utf8.push(0xf0 | (charcode >> 18), 0x80 | ((charcode >> 12) & 0x3f), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f));
        }
    }
    return utf8;
};
//# sourceMappingURL=index.js.map