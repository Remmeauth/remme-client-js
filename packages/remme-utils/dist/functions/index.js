"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var js_sha512_1 = require("js-sha512");
exports.hexToBytes = function (str) {
    var bytes = [];
    var len = str.length;
    for (var i = 0; i < len; i += 2) {
        bytes.push(parseInt(str.substr(i, 2), 16));
    }
    return new Uint8Array(bytes);
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
exports.getAddressFromData = function (data, familyName) {
    return "" + js_sha512_1.sha512(familyName).slice(0, 6) + js_sha512_1.sha512(data).slice(0, 64);
};
//# sourceMappingURL=index.js.map