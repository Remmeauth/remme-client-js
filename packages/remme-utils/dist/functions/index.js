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
//# sourceMappingURL=index.js.map