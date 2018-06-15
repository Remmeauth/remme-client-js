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
var RemmePublicKeyStorage = /** @class */ (function () {
    function RemmePublicKeyStorage(remmeRest, remmeTransaction) {
        this._familyName = "pub_key";
        this._familyVersion = "0.1";
        this._remmeRest = remmeRest;
        this._remmeTransaction = remmeTransaction;
    }
    RemmePublicKeyStorage.prototype.store = function (_a) {
        var data = _a.data, publicKey = _a.publicKey, privateKey = _a.privateKey, validTo = _a.validTo, validFrom = _a.validFrom, _b = _a.publicKeyType, publicKeyType = _b === void 0 ? remme_protobuf_1.NewPubKeyPayload.PubKeyType.RSA : _b, _c = _a.entityType, entityType = _c === void 0 ? remme_protobuf_1.NewPubKeyPayload.EntityType.PERSONAL : _c;
        return __awaiter(this, void 0, void 0, function () {
            var publicKeyPEM, message, entityHash, entityHashSignature, payload, pubKeyAddress, payloadBytes;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        publicKeyPEM = remme_utils_1.forge.pki.publicKeyToPem(publicKey);
                        message = this._generateMessage(data);
                        entityHash = this._generateEntityHash(message);
                        entityHashSignature = this._generateSignature(message, privateKey);
                        payload = remme_protobuf_1.NewPubKeyPayload.encode({
                            publicKey: publicKeyPEM,
                            publicKeyType: publicKeyType,
                            entityType: entityType,
                            entityHash: entityHash,
                            entityHashSignature: entityHashSignature,
                            validFrom: validFrom,
                            validTo: validTo,
                        }).finish();
                        pubKeyAddress = remme_utils_1.getAddressFromData(this._familyName, publicKeyPEM);
                        payloadBytes = this._generateTransactionPayload(remme_protobuf_1.PubKeyMethod.Method.STORE, payload);
                        return [4 /*yield*/, this._createAndSendTransaction([pubKeyAddress], payloadBytes)];
                    case 1: return [2 /*return*/, _d.sent()];
                }
            });
        });
    };
    RemmePublicKeyStorage.prototype.check = function (publicKeyPEM) {
        return __awaiter(this, void 0, void 0, function () {
            var payload, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkPublicKey(publicKeyPEM);
                        payload = new models_1.CheckPayload(publicKeyPEM);
                        return [4 /*yield*/, this._remmeRest
                                .postRequest(remme_rest_1.RemmeMethods.publicKey, payload)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, !!result && !result.revoked];
                }
            });
        });
    };
    RemmePublicKeyStorage.prototype.revoke = function (publicKeyPEM) {
        return __awaiter(this, void 0, void 0, function () {
            var address, revokePayload, payloadBytes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkPublicKey(publicKeyPEM);
                        address = remme_utils_1.getAddressFromData(this._familyName, publicKeyPEM);
                        revokePayload = remme_protobuf_1.RevokePubKeyPayload.encode({
                            address: address,
                        }).finish();
                        payloadBytes = this._generateTransactionPayload(remme_protobuf_1.PubKeyMethod.Method.REVOKE, revokePayload);
                        return [4 /*yield*/, this._createAndSendTransaction([address], payloadBytes)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmePublicKeyStorage.prototype.getUserPublicKeys = function (userAccountPublicKey) {
        return __awaiter(this, void 0, void 0, function () {
            var apiResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._remmeRest
                            .getRequest(remme_rest_1.RemmeMethods.userPublicKeys, userAccountPublicKey)];
                    case 1:
                        apiResult = _a.sent();
                        return [2 /*return*/, apiResult.pub_keys];
                }
            });
        });
    };
    RemmePublicKeyStorage.prototype._generateMessage = function (certificate) {
        var certSHA512 = remme_utils_1.forge.md.sha512.create().update(certificate);
        return certSHA512.digest().toHex();
    };
    RemmePublicKeyStorage.prototype._generateEntityHash = function (message) {
        var entityHashBytes = remme_utils_1.toUTF8Array(message);
        return remme_utils_1.toHexString(entityHashBytes);
    };
    RemmePublicKeyStorage.prototype._generateSignature = function (data, privateKey) {
        var md = remme_utils_1.forge.md.sha512.create();
        md.update(data, "utf8");
        var signature = privateKey.sign(md);
        return remme_utils_1.forge.util.bytesToHex(signature);
    };
    RemmePublicKeyStorage.prototype._generateTransactionPayload = function (method, data) {
        return remme_protobuf_1.TransactionPayload.encode({
            method: method,
            data: data,
        }).finish();
    };
    RemmePublicKeyStorage.prototype._createAndSendTransaction = function (inputsOutputs, payloadBytes) {
        return __awaiter(this, void 0, void 0, function () {
            var transaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._remmeTransaction.create({
                            familyName: this._familyName,
                            familyVersion: this._familyVersion,
                            inputs: inputsOutputs,
                            outputs: inputsOutputs,
                            payloadBytes: payloadBytes,
                        })];
                    case 1:
                        transaction = _a.sent();
                        return [4 /*yield*/, this._remmeTransaction.send(transaction)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmePublicKeyStorage.prototype._checkPublicKey = function (publicKeyPEM) {
        try {
            remme_utils_1.forge.pki.publicKeyFromPem(publicKeyPEM);
        }
        catch (e) {
            throw new Error("Given publicKey is not a valid");
        }
    };
    return RemmePublicKeyStorage;
}());
exports.RemmePublicKeyStorage = RemmePublicKeyStorage;
//# sourceMappingURL=index.js.map