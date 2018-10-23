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
exports.PublicKeyInfo = models_1.PublicKeyInfo;
var PublicKeyTypes = remme_protobuf_1.NewPubKeyPayload.PubKeyType;
exports.PublicKeyTypes = PublicKeyTypes;
/**
 * Class for working with public key storage.
 * @example
 * ```typescript
 * const remme = new Remme.Client();
 * // if you don't have private and public keys you can generate them
 * const utils = await import("remme-utils");
 * const { privateKey, publicKey } = utils.generateRSAKeyPair();
 * const storeResponse = await remme.publicKeyStorage.store({
 *      data: "store data",
 *      privateKey, // need for signing data
 *      publicKey,
 *      validFrom,
 *      validTo,
 * });
 * storeResponse.connectToWebSocket((err: Error, res: any) => {
 *      if (err) {
 *          console.log(err);
 *          return;
 *      }
 *      console.log(res);
 *      const keyIsValid = await remme.publicKeyStorage.check(publicKey);
 *      console.log(keyIsValid); // true
 *      const publicKeyInfo = await remme.publicKeyStorage.getInfo(publicKey);
 *      console.log(publicKeyInfo); // PublicKeyInfo
 * })
 * ```
 */
var RemmePublicKeyStorage = /** @class */ (function () {
    /**
     * @example
     * Usage without remme main package
     * ```typescript
     * const rest = new RemmeRest();
     * const account = new RemmeAccount();
     * const transaction = new RemmeTransactionService(rest, account);
     * const publicKeyStorage = new RemmePublicKeyStorage(rest, account, transaction);
     * ```
     * @param {IRemmeRest} remmeRest
     * @param {IRemmeAccount} remmeAccount
     * @param {IRemmeTransactionService} remmeTransaction
     */
    function RemmePublicKeyStorage(remmeRest, remmeAccount, remmeTransaction) {
        this._familyName = remme_utils_1.RemmeFamilyNames.PublicKey;
        this._familyVersion = "0.1";
        this._remmeRest = remmeRest;
        this._remmeAccount = remmeAccount;
        this._remmeTransaction = remmeTransaction;
    }
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
    RemmePublicKeyStorage.prototype._checkPublicKey = function (publicKey) {
        try {
            if (typeof publicKey === "string") {
                if (publicKey.search(remme_utils_1.PATTERNS.ADDRESS) === -1) {
                    remme_utils_1.forge.pki.publicKeyFromPem(publicKey);
                }
            }
            else {
                remme_utils_1.forge.pki.publicKeyToPem(publicKey);
            }
        }
        catch (e) {
            throw new Error("Given publicKey is not a valid");
        }
    };
    RemmePublicKeyStorage.prototype._getInfoByPublicKey = function (publicKey) {
        return __awaiter(this, void 0, void 0, function () {
            var payload, info;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkPublicKey(publicKey);
                        if (typeof publicKey === "object") {
                            publicKey = remme_utils_1.forge.pki.publicKeyToPem(publicKey);
                        }
                        payload = new remme_utils_1.PublicKeyRequest(publicKey);
                        return [4 /*yield*/, this._remmeRest
                                .sendRequest(remme_rest_1.RemmeMethods.publicKey, payload)];
                    case 1:
                        info = _a.sent();
                        if (info !== undefined) {
                            info.address = remme_utils_1.generateAddress(this._familyName, publicKey);
                            return [2 /*return*/, new models_1.PublicKeyInfo(info)];
                        }
                        else {
                            throw new Error("This public key was not found");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RemmePublicKeyStorage.prototype._generateMessage = function (data) {
        return remme_utils_1.forge.md.sha512.create().update(data).digest().toHex();
    };
    RemmePublicKeyStorage.prototype._generateEntityHash = function (message) {
        var entityHashBytes = remme_utils_1.toUTF8Array(message);
        return remme_utils_1.toHexString(entityHashBytes);
    };
    /**
     * Store public key with its data into REMChain.
     * Send transaction to chain.
     * @example
     * ```typescript
     * const storeResponse = await remme.publicKeyStorage.store({
     *      data: "store data",
     *      privateKey, // need for signing data
     *      publicKey,
     *      validFrom,
     *      validTo,
     * });
     * storeResponse.connectToWebSocket((err: Error, res: any) => {
     *      if (err) {
     *          console.log(err);
     *          return;
     *      }
     *      console.log(res);
     * })
     * ```
     * @param {string} data
     * @param {module:node-forge.pki.Key | module:node-forge.pki.PEM} publicKey
     * @param {module:node-forge.pki.Key | module:node-forge.pki.PEM} privateKey
     * @param {number} validFrom
     * @param {number} validTo
     * @param {NewPubKeyPayload.PubKeyType} publicKeyType
     * @param {NewPubKeyPayload.EntityType} entityType
     * @returns {Promise<IBaseTransactionResponse>}
     */
    RemmePublicKeyStorage.prototype.store = function (_a) {
        var data = _a.data, publicKey = _a.publicKey, privateKey = _a.privateKey, validFrom = _a.validFrom, validTo = _a.validTo, _b = _a.publicKeyType, publicKeyType = _b === void 0 ? PublicKeyTypes.RSA : _b, _c = _a.entityType, entityType = _c === void 0 ? remme_protobuf_1.NewPubKeyPayload.EntityType.PERSONAL : _c;
        return __awaiter(this, void 0, void 0, function () {
            var message, entityHash, entityHashSignature, payload, pubKeyAddress, storagePubKey, settingAddress, storageAddress, payloadBytes;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (typeof publicKey === "object") {
                            publicKey = remme_utils_1.forge.pki.publicKeyToPem(publicKey);
                        }
                        if (typeof privateKey === "string") {
                            privateKey = remme_utils_1.forge.pki.privateKeyFromPem(privateKey);
                        }
                        message = this._generateMessage(data);
                        entityHash = this._generateEntityHash(message);
                        entityHashSignature = this._generateSignature(message, privateKey);
                        payload = remme_protobuf_1.NewPubKeyPayload.encode({
                            publicKey: publicKey,
                            publicKeyType: publicKeyType,
                            entityType: entityType,
                            entityHash: entityHash,
                            entityHashSignature: entityHashSignature,
                            validFrom: validFrom,
                            validTo: validTo,
                        }).finish();
                        pubKeyAddress = remme_utils_1.generateAddress(this._familyName, publicKey);
                        storagePubKey = remme_utils_1.generateSettingsAddress("remme.settings.storage_pub_key");
                        settingAddress = remme_utils_1.generateSettingsAddress("remme.economy_enabled");
                        storageAddress = remme_utils_1.generateAddress(this._remmeAccount.familyName, storagePubKey);
                        payloadBytes = this._generateTransactionPayload(remme_protobuf_1.PubKeyMethod.Method.STORE, payload);
                        return [4 /*yield*/, this._createAndSendTransaction([
                                pubKeyAddress,
                                storagePubKey,
                                settingAddress,
                                storageAddress,
                            ], payloadBytes)];
                    case 1: return [2 /*return*/, _d.sent()];
                }
            });
        });
    };
    /**
     * Check public key on validity and revocation.
     * Can take address of public key.
     * @example
     * ```typescript
     * const isValid = await remme.publicKeyStorage.check(publicKey);
     * console.log(isValid); // true or false
     * ```
     * @param {string | module:node-forge.pki.PEM | module:node-forge.pki.Key} publicKey
     * @returns {Promise<boolean>}
     */
    RemmePublicKeyStorage.prototype.check = function (publicKey) {
        return __awaiter(this, void 0, void 0, function () {
            var isValid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getInfoByPublicKey(publicKey)];
                    case 1:
                        isValid = (_a.sent()).isValid;
                        return [2 /*return*/, isValid];
                }
            });
        });
    };
    /**
     * Get info about this public key.
     * Can take address of public key.
     * @example
     * ```typescript
     * const isValid = await remme.publicKeyStorage.check(publicKey);
     * console.log(isValid); // true or false
     * ```
     * @param {string | module:node-forge.pki.PEM | module:node-forge.pki.Key} publicKey
     * @returns {Promise<PublicKeyInfo>}
     */
    RemmePublicKeyStorage.prototype.getInfo = function (publicKey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getInfoByPublicKey(publicKey)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Revoke given public key.
     * Can take address of public key.
     * Send transaction to chain.
     * @example
     * ```typescript
     * const revokeResponse = await remme.publicKeyStorage.revoke(publicKey);
     * revokeResponse.connectToWebSocket((err: Error, res: any) => {
     *      if (err) {
     *          console.log(err);
     *          return;
     *      }
     *      console.log(res);
     * })
     * ```
     * @param {string | module:node-forge.pki.PEM | module:node-forge.pki.Key} publicKey
     * @returns {Promise<IBaseTransactionResponse>}
     */
    RemmePublicKeyStorage.prototype.revoke = function (publicKey) {
        return __awaiter(this, void 0, void 0, function () {
            var address, revokePayload, payloadBytes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkPublicKey(publicKey);
                        if (typeof publicKey === "object") {
                            publicKey = remme_utils_1.forge.pki.publicKeyToPem(publicKey);
                        }
                        if (publicKey.slice(0, 6) === remme_utils_1.RemmeFamilyNameAddresses.PublicKey) {
                            address = publicKey;
                        }
                        else {
                            address = remme_utils_1.generateAddress(this._familyName, publicKey);
                        }
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
    /**
     * Take account public key in hex format (which describe in PATTERNS.PUBLIC_KEY)
     * @param {string} accountPublicKey
     * @returns {Promise<string[]>}
     */
    RemmePublicKeyStorage.prototype.getAccountPublicKeys = function (accountPublicKey) {
        return __awaiter(this, void 0, void 0, function () {
            var payload;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (accountPublicKey.search(remme_utils_1.PATTERNS.PUBLIC_KEY) === -1) {
                            throw new Error("Given public key is not a valid");
                        }
                        payload = new remme_utils_1.PublicKeyRequest(accountPublicKey);
                        return [4 /*yield*/, this._remmeRest
                                .sendRequest(remme_rest_1.RemmeMethods.userPublicKeys, payload)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return RemmePublicKeyStorage;
}());
exports.RemmePublicKeyStorage = RemmePublicKeyStorage;
//# sourceMappingURL=index.js.map