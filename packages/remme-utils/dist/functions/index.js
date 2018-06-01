"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=index.js.map