"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forge = require("node-forge");
exports.forge = forge;
var models_1 = require("./models");
exports.oids = models_1.oids;
var functions_1 = require("./functions");
exports.hexToBytes = functions_1.hexToBytes;
exports.bytesToHex = functions_1.bytesToHex;
exports.utf8ToBytes = functions_1.utf8ToBytes;
exports.toHex = functions_1.toHex;
exports.getAddressFromData = functions_1.getAddressFromData;
exports.toHexString = functions_1.toHexString;
exports.toUTF8Array = functions_1.toUTF8Array;
var certificateToPem = function (certificate) {
    try {
        return forge.pki.certificateToPem(certificate);
    }
    catch (e) {
        throw new Error("Given certificate is not a valid");
    }
};
exports.certificateToPem = certificateToPem;
var certificateFromPem = function (certificate) {
    try {
        return forge.pki.certificateFromPem(certificate);
    }
    catch (e) {
        throw new Error("Given certificate is not a valid");
    }
};
exports.certificateFromPem = certificateFromPem;
var publicKeyToPem = function (publicKey) {
    try {
        return forge.pki.publicKeyToPem(publicKey);
    }
    catch (e) {
        throw new Error("Given publicKey is not a valid");
    }
};
exports.publicKeyToPem = publicKeyToPem;
var publicKeyFromPem = function (publicKey) {
    try {
        return forge.pki.publicKeyFromPem(publicKey);
    }
    catch (e) {
        throw new Error("Given publicKey is not a valid");
    }
};
exports.publicKeyFromPem = publicKeyFromPem;
//# sourceMappingURL=index.js.map