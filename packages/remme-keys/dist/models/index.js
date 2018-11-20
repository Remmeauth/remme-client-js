"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KeyDto_1 = require("./KeyDto");
exports.KeyDto = KeyDto_1.KeyDto;
/**
 * All types of Key pair
 */
var KeyType;
(function (KeyType) {
    KeyType[KeyType["RSA"] = 0] = "RSA";
    KeyType[KeyType["ECDSA"] = 1] = "ECDSA";
    KeyType[KeyType["EdDSA"] = 2] = "EdDSA";
})(KeyType = exports.KeyType || (exports.KeyType = {}));
/**
 * All kind of RSASignature padding.
 */
var RSASignaturePadding;
(function (RSASignaturePadding) {
    RSASignaturePadding[RSASignaturePadding["EMPTY"] = 0] = "EMPTY";
    RSASignaturePadding[RSASignaturePadding["PSS"] = 1] = "PSS";
    RSASignaturePadding[RSASignaturePadding["PKCS1v15"] = 2] = "PKCS1v15";
})(RSASignaturePadding = exports.RSASignaturePadding || (exports.RSASignaturePadding = {}));
var RSA_1 = require("./RSA");
exports.RSA = RSA_1.RSA;
var EdDSA_1 = require("./EdDSA");
exports.EdDSA = EdDSA_1.EdDSA;
var ECDSA_1 = require("./ECDSA");
exports.ECDSA = ECDSA_1.ECDSA;
//# sourceMappingURL=index.js.map