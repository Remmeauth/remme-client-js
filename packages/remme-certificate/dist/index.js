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
var remme_rest_1 = require("remme-rest");
var remme_protobuf_1 = require("remme-protobuf");
var models_1 = require("./models");
var RemmeCertificate = /** @class */ (function () {
    function RemmeCertificate(remmeRest, remmeTransaction) {
        this._familyName = "pub_key";
        this._familyVersion = "0.1";
        this._rsaKeySize = 2048;
        this._remmeRest = remmeRest;
        this._remmeTransaction = remmeTransaction;
    }
    RemmeCertificate.prototype.createAndStore = function (certificateDataToCreate) {
        return __awaiter(this, void 0, void 0, function () {
            var keys, subject, cert, batchResponse, certResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        keys = this._generateKeyPair();
                        subject = this._createSubject(certificateDataToCreate);
                        cert = this._createCertificate(subject, keys, certificateDataToCreate.validity);
                        return [4 /*yield*/, this.store(cert)];
                    case 1:
                        batchResponse = _a.sent();
                        certResponse = new models_1.CertificateTransactionResponse(this._remmeRest.socketAddress());
                        certResponse.certificate.privateKey = keys.privateKey;
                        certResponse.batchId = batchResponse.batchId;
                        return [2 /*return*/, certResponse];
                }
            });
        });
    };
    RemmeCertificate.prototype.store = function (certificate) {
        return __awaiter(this, void 0, void 0, function () {
            var payload, transactionPayload, transaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        payload = this._generatePayload(certificate);
                        transactionPayload = this._generateTransactionPayload(remme_protobuf_1.PubKeyMethod.Method.STORE, payload);
                        return [4 /*yield*/, this._remmeTransaction.create({
                                familyName: this._familyName,
                                familyVersion: this._familyVersion,
                                inputs: [],
                                outputs: [],
                                payloadBytes: transactionPayload,
                            })];
                    case 1:
                        transaction = _a.sent();
                        return [4 /*yield*/, this._remmeTransaction.send(transaction)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmeCertificate.prototype.check = function (certificate) {
        return __awaiter(this, void 0, void 0, function () {
            var payload, result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        payload = new models_1.CheckPayload(certificate);
                        return [4 /*yield*/, this._remmeRest
                                .postRequest(remme_rest_1.RemmeMethods.certificate, payload)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, !result.revoked];
                    case 2:
                        e_1 = _a.sent();
                        throw new Error("Given certificate is not a valid");
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RemmeCertificate.prototype.revoke = function (certificate) {
        return __awaiter(this, void 0, void 0, function () {
            var publicKeyPEM, address, revokePayload, payloadBytes, transaction, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        publicKeyPEM = remme_utils_1.forge.pki.publicKeyToPem(certificate.publicKey);
                        address = remme_utils_1.getAddressFromData(this._familyName, publicKeyPEM);
                        revokePayload = remme_protobuf_1.RevokePubKeyPayload.encode({
                            address: address,
                        }).finish();
                        payloadBytes = this._generateTransactionPayload(remme_protobuf_1.PubKeyMethod.Method.REVOKE, revokePayload);
                        return [4 /*yield*/, this._remmeTransaction.create({
                                familyName: this._familyName,
                                familyVersion: this._familyVersion,
                                inputs: [],
                                outputs: [],
                                payloadBytes: payloadBytes,
                            })];
                    case 1:
                        transaction = _a.sent();
                        return [4 /*yield*/, this._remmeTransaction.send(transaction)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        e_2 = _a.sent();
                        throw new Error("Given certificate is not a valid");
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RemmeCertificate.prototype.getUserCertificates = function (publicKey) {
        return __awaiter(this, void 0, void 0, function () {
            var apiResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._remmeRest
                            .getRequest(remme_rest_1.RemmeMethods.userCertificates, publicKey)];
                    case 1:
                        apiResult = _a.sent();
                        return [2 /*return*/, apiResult.certificates];
                }
            });
        });
    };
    RemmeCertificate.prototype._generateEntityHash = function (certificate) {
        var certSHA512 = remme_utils_1.forge.md.sha512.create().update(certificate);
        return certSHA512.digest().toHex();
    };
    RemmeCertificate.prototype._generateSignature = function (certificate, privateKey) {
        var md = remme_utils_1.forge.md.sha512.create();
        md.update(certificate);
        var pss = remme_utils_1.forge.pss.create({
            md: remme_utils_1.forge.md.sha512.create(),
            mgf: remme_utils_1.forge.mgf.mgf1.create(remme_utils_1.forge.md.sha512.create()),
            saltLength: 20,
        });
        return privateKey.sign(md, pss);
    };
    RemmeCertificate.prototype._generatePayload = function (certificate) {
        var publicKey = remme_utils_1.forge.pki.publicKeyToPem(certificate.publicKey);
        var certificatePEM = remme_utils_1.forge.pki.certificateToPem(certificate);
        var entityHash = this._generateEntityHash(certificatePEM);
        var entityHashSignature = this._generateSignature(certificatePEM, certificate.privateKey);
        return remme_protobuf_1.NewPubKeyPayload.encode({
            publicKey: publicKey,
            publicKeyType: remme_protobuf_1.NewPubKeyPayload.PubKeyType.RSA,
            entityType: remme_protobuf_1.NewPubKeyPayload.EntityType.PERSONAL,
            entityHash: entityHash,
            entityHashSignature: entityHashSignature,
            validFrom: Math.floor(Math.round(certificate.validity.notBefore.getTime()) / 1000),
            validTo: Math.floor(Math.round(certificate.validity.notAfter.getTime()) / 1000),
        }).finish();
    };
    RemmeCertificate.prototype._generateTransactionPayload = function (method, data) {
        return remme_protobuf_1.TransactionPayload.encode({
            method: method,
            data: data,
        }).finish();
    };
    RemmeCertificate.prototype._createCertificate = function (subject, keys, validity) {
        var cert = remme_utils_1.forge.pki.createCertificate();
        cert.setSubject(subject);
        cert.publicKey = keys.publicKey;
        cert.validity.notBefore = new Date();
        cert.validity.notAfter = new Date();
        cert.validity.notAfter.setDate(cert.validity.notBefore.getDate() + validity);
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
    return RemmeCertificate;
}());
exports.RemmeCertificate = RemmeCertificate;
//# sourceMappingURL=index.js.map