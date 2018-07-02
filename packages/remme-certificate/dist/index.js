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
Object.defineProperty(exports, "__esModule", { value: true });
var remme_utils_1 = require("remme-utils");
var models_1 = require("./models");
var RemmeCertificate = /** @class */ (function () {
    function RemmeCertificate(remmePublicKeyStorage) {
        this._rsaKeySize = 2048;
        this._remmePublicKeyStorage = remmePublicKeyStorage;
    }
    RemmeCertificate.prototype.createAndStore = function (certificateDataToCreate) {
        return __awaiter(this, void 0, void 0, function () {
            var keys, cert, batchResponse, certResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        keys = this._generateKeyPair();
                        cert = this._createCertificate(keys, certificateDataToCreate);
                        return [4 /*yield*/, this.store(cert)];
                    case 1:
                        batchResponse = _a.sent();
                        certResponse = new models_1.CertificateTransactionResponse(batchResponse.socketAddress);
                        certResponse.certificate = cert;
                        certResponse.batchId = batchResponse.batchId;
                        return [2 /*return*/, certResponse];
                }
            });
        });
    };
    RemmeCertificate.prototype.store = function (certificate) {
        return __awaiter(this, void 0, void 0, function () {
            var certificatePEM, publicKey, privateKey, validFrom, validTo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof certificate === "string") {
                            certificate = this._getCertificateFromPEM(certificate);
                        }
                        certificatePEM = this._getCertificatePEM(certificate);
                        publicKey = certificate.publicKey, privateKey = certificate.privateKey;
                        validFrom = Math.floor(certificate.validity.notBefore.getTime() / 1000);
                        validTo = Math.floor(certificate.validity.notAfter.getTime() / 1000);
                        return [4 /*yield*/, this._remmePublicKeyStorage.store({
                                data: certificatePEM,
                                publicKey: publicKey,
                                privateKey: privateKey,
                                validFrom: validFrom,
                                validTo: validTo,
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmeCertificate.prototype.check = function (certificate) {
        return __awaiter(this, void 0, void 0, function () {
            var publicKeyPEM, checkResult, message, entityHash, currentTime;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof certificate === "string") {
                            certificate = this._getCertificateFromPEM(certificate);
                        }
                        publicKeyPEM = this._getPublicKeyPEM(certificate);
                        return [4 /*yield*/, this._remmePublicKeyStorage.check(publicKeyPEM)];
                    case 1:
                        checkResult = _a.sent();
                        message = this._remmePublicKeyStorage.generateMessage(remme_utils_1.forge.pki.certificateToPem(certificate));
                        entityHash = this._remmePublicKeyStorage.generateEntityHash(message);
                        currentTime = Math.floor(Date.now() / 1000);
                        checkResult.valid = checkResult &&
                            !checkResult.revoked &&
                            entityHash === checkResult.entity_hash &&
                            currentTime >= checkResult.valid_from &&
                            currentTime < checkResult.valid_to;
                        return [2 /*return*/, checkResult];
                }
            });
        });
    };
    RemmeCertificate.prototype.revoke = function (certificate) {
        return __awaiter(this, void 0, void 0, function () {
            var publicKeyPEM;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof certificate === "string") {
                            certificate = this._getCertificateFromPEM(certificate);
                        }
                        publicKeyPEM = this._getPublicKeyPEM(certificate);
                        return [4 /*yield*/, this._remmePublicKeyStorage.revoke(publicKeyPEM)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmeCertificate.prototype._createCertificate = function (keys, certificateDataToCreate) {
        var subject = this._createSubject(certificateDataToCreate);
        var cert = remme_utils_1.forge.pki.createCertificate();
        cert.setSubject(subject);
        cert.publicKey = keys.publicKey;
        cert.privateKey = keys.privateKey;
        cert.serialNumber = certificateDataToCreate.serial;
        cert.validity.notBefore = new Date();
        cert.validity.notAfter = new Date();
        if (certificateDataToCreate.validAfter) {
            cert.validity.notBefore.setDate(cert.validity.notBefore.getDate() + certificateDataToCreate.validAfter);
        }
        cert.validity.notAfter.setDate(cert.validity.notBefore.getDate() + certificateDataToCreate.validity);
        cert.sign(keys.privateKey, remme_utils_1.forge.md.sha256.create());
        return cert;
    };
    RemmeCertificate.prototype._createSubject = function (certificateDataToCreate) {
        if (!certificateDataToCreate.commonName) {
            throw new Error("Attribute commonName must have a value");
        }
        if (!certificateDataToCreate.validity) {
            throw new Error("Attribute validity must have a value");
        }
        return Object.entries(certificateDataToCreate).map(function (_a) {
            var key = _a[0], value = _a[1];
            var name;
            var type;
            switch (key) {
                case "email":
                    name = "emailAddress";
                    break;
                case "streetAddress":
                    name = "street";
                    break;
                case "stateName":
                    name = "stateOrProvinceName";
                    break;
                case "generationQualifier":
                    name = "generation";
                    break;
                case "serial":
                    name = "serialNumber";
                    break;
                default: name = key;
            }
            if (name in remme_utils_1.oids) {
                type = remme_utils_1.oids[name];
            }
            if (!(name in remme_utils_1.forge.pki.oids) && !(name in remme_utils_1.oids)) {
                type = name;
            }
            return {
                name: name,
                value: value,
                type: type,
            };
        });
    };
    RemmeCertificate.prototype._generateKeyPair = function () {
        return remme_utils_1.forge.pki.rsa.generateKeyPair(this._rsaKeySize);
    };
    RemmeCertificate.prototype._getPublicKeyPEM = function (certificate) {
        try {
            return remme_utils_1.forge.pki.publicKeyToPem(certificate.publicKey);
        }
        catch (e) {
            throw new Error("Given certificate is not a valid");
        }
    };
    RemmeCertificate.prototype._getCertificatePEM = function (certificate) {
        try {
            return remme_utils_1.forge.pki.certificateToPem(certificate);
        }
        catch (e) {
            throw new Error("Given certificate is not a valid");
        }
    };
    RemmeCertificate.prototype._getCertificateFromPEM = function (certificate) {
        try {
            return remme_utils_1.forge.pki.certificateFromPem(certificate);
        }
        catch (e) {
            throw new Error("Given certificate is not a valid");
        }
    };
    return RemmeCertificate;
}());
exports.RemmeCertificate = RemmeCertificate;
//# sourceMappingURL=index.js.map