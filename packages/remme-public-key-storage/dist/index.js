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
var remme_api_1 = require("remme-api");
var remme_protobuf_1 = require("remme-protobuf");
var remme_keys_1 = require("remme-keys");
var models_1 = require("./models");
exports.PublicKeyInfo = models_1.PublicKeyInfo;
// const { PubKeyType: PublicKeyType } = NewPubKeyPayload;
// const { RSASignaturePadding } = NewPubKeyPayload;
/**
 * Class for working with public key storage.
 * @example
 * ```typescript
 * import { KeyType } from "remme-keys";
 * const remme = new Remme.Client();
 * const keys = await Remme.Keys.generateKeyPair(KeyType.RSA);
 * const storeResponse = await remme.publicKeyStorage.store({
 *      data: "store data",
 *      keys,
 *      validFrom,
 *      validTo,
 * });
 * storeResponse.connectToWebSocket((err: Error, res: any) => {
 *      if (err) {
 *          console.log(err);
 *          return;
 *      }
 *      console.log(res);
 *      storeResponse.closeWebSocket();
 *
 *      const keyIsValid = await remme.publicKeyStorage.check(keys.address);
 *      console.log(keyIsValid); // true
 *
 *      const publicKeyInfo = await remme.publicKeyStorage.getInfo(keys.address);
 *      console.log(publicKeyInfo); // PublicKeyInfo
 *
 *      const revoke = await remme.publicKeyStorage.revoke(keys.address);
 *      // You can connectToWebSocket like in store method.
 *      console.log(revoke.batchId); // string{\^[a-f0-9]{128}$\}
 *
 *      const publicKeyAddresses = await remme.publicKeyStorage.getAccountPublicKeys(remme.account.address);
 *      console.log(publicKeyAddresses); // string[]
 * })
 * ```
 */
var RemmePublicKeyStorage = /** @class */ (function () {
    /**
     * @example
     * Usage without remme main package
     * ```typescript
     * const api = new RemmeApi();
     * const account = new RemmeAccount();
     * const transaction = new RemmeTransactionService(api, account);
     * const publicKeyStorage = new RemmePublicKeyStorage(api, account, transaction);
     * ```
     * @param {IRemmeApi} remmeApi
     * @param {IRemmeAccount} remmeAccount
     * @param {IRemmeTransactionService} remmeTransaction
     */
    function RemmePublicKeyStorage(remmeApi, remmeAccount, remmeTransaction) {
        this._familyName = remme_utils_1.RemmeFamilyName.PublicKey;
        this._familyVersion = "0.1";
        this._remmeApi = remmeApi;
        this._remmeAccount = remmeAccount;
        this._remmeTransaction = remmeTransaction;
    }
    RemmePublicKeyStorage.prototype._generateTransactionPayload = function (method, data) {
        return remme_protobuf_1.TransactionPayload.encode({
            method: method,
            data: data,
        }).finish();
    };
    RemmePublicKeyStorage.prototype._createAndSendTransaction = function (inputs, outputs, payloadBytes) {
        return __awaiter(this, void 0, void 0, function () {
            var transaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._remmeTransaction.create({
                            familyName: this._familyName,
                            familyVersion: this._familyVersion,
                            inputs: inputs,
                            outputs: outputs,
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
    RemmePublicKeyStorage.prototype._getInfoByPublicKey = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var payload, info;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        remme_utils_1.checkAddress(address);
                        payload = new remme_utils_1.PublicKeyRequest(address);
                        return [4 /*yield*/, this._remmeApi
                                .sendRequest(remme_api_1.RemmeMethods.publicKey, payload)];
                    case 1:
                        info = _a.sent();
                        if (info !== undefined) {
                            info.address = remme_utils_1.generateAddress(this._familyName, address);
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
        return remme_utils_1.sha512(data);
    };
    RemmePublicKeyStorage.prototype._generateEntityHash = function (message) {
        var entityHashBytes = Buffer.from(message);
        return remme_utils_1.bytesToHex(entityHashBytes);
    };
    /**
     * Store public key with its data into REMChain.
     * Send transaction to chain.
     * @example
     * ```typescript
     * import { KeyType, RSASignaturePadding } from "remme-keys";
     *
     * const keys = await Remme.Keys.generateKeyPair(KeyType.RSA);
     *
     * const storeResponse = await remme.publicKeyStorage.store({
     *      data: "store data",
     *      keys,
     *      rsaSignaturePadding: RSASignaturePadding.PSS,
     *      validFrom,
     *      validTo,
     * });
     *
     * storeResponse.connectToWebSocket((err: Error, res: any) => {
     *      if (err) {
     *          console.log(err);
     *          return;
     *      }
     *      console.log(res);
     * })
     * ```
     * @param {string} data
     * @param {IRemmeKeys} keys
     * @param {number} validFrom
     * @param {number} validTo
     * @param {RSASignaturePadding} paddingRSA
     * @returns {Promise<IBaseTransactionResponse>}
     */
    RemmePublicKeyStorage.prototype.store = function (_a) {
        var data = _a.data, keys = _a.keys, validFrom = _a.validFrom, validTo = _a.validTo, _b = _a.rsaSignaturePadding, rsaSignaturePadding = _b === void 0 ? remme_keys_1.RSASignaturePadding.EMPTY : _b;
        return __awaiter(this, void 0, void 0, function () {
            var message, entityHash, entityHashSignature, payload, storagePublicKey, pubKeyAddress, storagePublicKeyAddress, settingAddress, storageAddress, payloadBytes, inputs, outputs;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (remme_keys_1.KeyType[keys.keyType] !== remme_keys_1.KeyType.RSA) {
                            throw new Error("Only RSA key can be stored in REMChain at now");
                        }
                        message = this._generateMessage(data);
                        entityHash = this._generateEntityHash(message);
                        entityHashSignature = keys.sign(message, rsaSignaturePadding);
                        payload = remme_protobuf_1.NewPubKeyPayload.encode({
                            publicKey: keys.publicKeyPem,
                            publicKeyType: remme_keys_1.KeyType[keys.keyType],
                            entityHash: entityHash,
                            entityHashSignature: entityHashSignature,
                            validFrom: validFrom,
                            validTo: validTo,
                        }).finish();
                        return [4 /*yield*/, this._remmeApi.sendRequest(remme_api_1.RemmeMethods.nodeConfig)];
                    case 1:
                        storagePublicKey = (_c.sent()).storage_public_key;
                        pubKeyAddress = keys.address;
                        storagePublicKeyAddress = remme_utils_1.generateSettingsAddress("remme.settings.storage_pub_key");
                        settingAddress = remme_utils_1.generateSettingsAddress("remme.economy_enabled");
                        storageAddress = remme_utils_1.generateAddress(this._remmeAccount.familyName, storagePublicKey);
                        payloadBytes = this._generateTransactionPayload(remme_protobuf_1.PubKeyMethod.Method.STORE, payload);
                        inputs = [
                            pubKeyAddress,
                            storagePublicKeyAddress,
                            settingAddress,
                            storageAddress,
                        ];
                        outputs = [
                            pubKeyAddress,
                            storageAddress,
                        ];
                        return [4 /*yield*/, this._createAndSendTransaction(inputs, outputs, payloadBytes)];
                    case 2: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    /**
     * Check public key on validity and revocation.
     * Take address of public key.
     * @example
     * ```typescript
     * const isValid = await remme.publicKeyStorage.check(publicKeyAddress);
     * console.log(isValid); // true or false
     * ```
     * @param {string} address
     * @returns {Promise<boolean>}
     */
    RemmePublicKeyStorage.prototype.check = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var isValid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getInfoByPublicKey(address)];
                    case 1:
                        isValid = (_a.sent()).isValid;
                        return [2 /*return*/, isValid];
                }
            });
        });
    };
    /**
     * Get info about this public key.
     * Take address of public key.
     * @example
     * ```typescript
     * const info = await remme.publicKeyStorage.getInfo(publicKeyAddress);
     * console.log(info); // PublicKeyInfo
     * ```
     * @param {string} address
     * @returns {Promise<PublicKeyInfo>}
     */
    RemmePublicKeyStorage.prototype.getInfo = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._getInfoByPublicKey(address)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Revoke public key by address.
     * Take address of public key.
     * Send transaction to chain.
     * @example
     * ```typescript
     * const revokeResponse = await remme.publicKeyStorage.revoke(publicKeyAddress);
     * revokeResponse.connectToWebSocket((err: Error, res: any) => {
     *      if (err) {
     *          console.log(err);
     *          return;
     *      }
     *      console.log(res);
     * })
     * ```
     * @param {string} address
     * @returns {Promise<IBaseTransactionResponse>}
     */
    RemmePublicKeyStorage.prototype.revoke = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var revokePayload, payloadBytes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        remme_utils_1.checkAddress(address);
                        revokePayload = remme_protobuf_1.RevokePubKeyPayload.encode({
                            address: address,
                        }).finish();
                        payloadBytes = this._generateTransactionPayload(remme_protobuf_1.PubKeyMethod.Method.REVOKE, revokePayload);
                        return [4 /*yield*/, this._createAndSendTransaction([address], [address], payloadBytes)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Take account address (which describe in PATTERNS.ADDRESS)
     * @example
     * ```typescript
     * const remme = new Remme.Client();
     * const publicKeyAddresses = await remme.publicKeyStorage.getAccountPublicKeys(remme.account.address);
     * console.log(publicKeyAddresses); // string[]
     * ```
     * @param {string} address
     * @returns {Promise<string[]>}
     */
    RemmePublicKeyStorage.prototype.getAccountPublicKeys = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var payload;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        remme_utils_1.checkAddress(address);
                        payload = new remme_utils_1.PublicKeyRequest(address);
                        return [4 /*yield*/, this._remmeApi
                                .sendRequest(remme_api_1.RemmeMethods.userPublicKeys, payload)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return RemmePublicKeyStorage;
}());
exports.RemmePublicKeyStorage = RemmePublicKeyStorage;
//# sourceMappingURL=index.js.map