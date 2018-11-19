"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = require("crypto");
var b64 = require("base64-js");
var forge = require("node-forge");
var dist_1 = require("../../dist");
exports.sha512 = function (value) {
    return crypto_1.createHash("sha512").update(value).digest("hex");
};
exports.sha256 = function (value) {
    return crypto_1.createHash("sha256").update(value).digest("hex");
};
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
exports.base64ToArrayBuffer = function (base64) {
    return b64.toByteArray(base64);
};
exports.toHex = function (str) {
    var hex = "";
    for (var i = 0; i < str.length; i++) {
        hex += str.charCodeAt(i).toString(16);
    }
    return hex;
};
exports.generateAddress = function (familyName, data) {
    return "" + exports.sha512(familyName).slice(0, 6) + exports.sha512(data).slice(0, 64);
};
exports.toUTF8Array = function (str) {
    var utf8 = [];
    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);
        if (charCode < 0x80) {
            utf8.push(charCode);
        }
        else if (charCode < 0x800) {
            utf8.push(0xc0 | (charCode >> 6), 0x80 | (charCode & 0x3f));
        }
        else if (charCode < 0xd800 || charCode >= 0xe000) {
            utf8.push(0xe0 | (charCode >> 12), 0x80 | ((charCode >> 6) & 0x3f), 0x80 | (charCode & 0x3f));
        }
        else {
            i++;
            // UTF-16 encodes 0x10000-0x10FFFF by
            // subtracting 0x10000 and splitting the
            // 20 bits of 0x0-0xFFFFF into two halves
            charCode = 0x10000 + (((charCode & 0x3ff) << 10)
                | (str.charCodeAt(i) & 0x3ff));
            utf8.push(0xf0 | (charCode >> 18), 0x80 | ((charCode >> 12) & 0x3f), 0x80 | ((charCode >> 6) & 0x3f), 0x80 | (charCode & 0x3f));
        }
    }
    return utf8;
};
exports.generateSettingsAddress = function (key) {
    var keyParts = key.split(".", 4);
    var addressParts = keyParts.map(function (v) { return crypto_1.createHash("sha256").update(v).digest("hex").slice(0, 16); });
    while (4 - addressParts.length !== 0) {
        addressParts.push(crypto_1.createHash("sha256").update("").digest("hex").slice(0, 16));
    }
    return "000000" + addressParts.join("");
};
exports.certificateToPem = function (certificate) {
    try {
        return forge.pki.certificateToPem(certificate);
    }
    catch (e) {
        throw new Error("Given certificate is not a valid");
    }
};
exports.certificateFromPem = function (certificate) {
    try {
        return forge.pki.certificateFromPem(certificate);
    }
    catch (e) {
        throw new Error("Given certificate is not a valid");
    }
};
exports.publicKeyToPem = function (publicKey) {
    try {
        return forge.pki.publicKeyToPem(publicKey);
    }
    catch (e) {
        throw new Error("Given publicKey is not a valid");
    }
};
exports.publicKeyFromPem = function (publicKey) {
    try {
        return forge.pki.publicKeyFromPem(publicKey);
    }
    catch (e) {
        throw new Error("Given publicKey is not a valid");
    }
};
exports.privateKeyToPem = function (publicKey) {
    try {
        return forge.pki.privateKeyToPem(publicKey);
    }
    catch (e) {
        throw new Error("Given publicKey is not a valid");
    }
};
exports.privateKeyFromPem = function (publicKey) {
    try {
        return forge.pki.privateKeyFromPem(publicKey);
    }
    catch (e) {
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
exports.generateRSAKeyPair = function (rsaKeySize) {
    if (rsaKeySize === void 0) { rsaKeySize = 2048; }
    return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, forge.pki.rsa.generateKeyPair(rsaKeySize)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
/**
 * Function that generate ED25519 key pair (private and public keys)
 * Function take one param that equal to seed for generating.
 * @param {string} seed
 * @returns {module:node-forge.pki.KeyPair}
 */
exports.generateED25519KeyPair = function (seed) {
    if (seed) {
        seed = new forge.util.ByteBuffer(seed, "utf8");
        return forge.pki.ed25519.generateKeyPair({ seed: seed });
    }
    return forge.pki.ed25519.generateKeyPair();
};
exports.checkAddress = function (address) {
    if (!address) {
        throw new Error("Address was not provided, please set the address");
    }
    if (typeof address !== "string" || address.search(dist_1.PATTERNS.ADDRESS) === -1) {
        throw new Error("Given address is not a valid");
    }
};
// TODO: addresses
exports.checkPublicKey = function (publicKey) {
    if (!publicKey) {
        throw new Error("Public Key was not provided, please set the address");
    }
    if (typeof publicKey !== "string" || publicKey.search(dist_1.PATTERNS.PUBLIC_KEY) === -1) {
        throw new Error("Given public key is not a valid");
    }
};
//# sourceMappingURL=index.js.map