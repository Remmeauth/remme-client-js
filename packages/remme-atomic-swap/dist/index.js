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
var remme_rest_1 = require("remme-rest");
var remme_utils_1 = require("remme-utils");
var remme_protobuf_1 = require("remme-protobuf");
var models_1 = require("./models");
exports.SwapInitDto = models_1.SwapInitDto;
exports.SwapInfo = models_1.SwapInfo;
exports.SwapState = models_1.SwapState;
/**
 * Main class for working with atomic swap
 * @example
 * ```typescript
 * const swapId = "133102e41346242476b15a3a7966eb5249271025fc7fb0b37ed3fdb4bcce3806";
 * const secret = "secretkey";
 * const secretKey = "039eaa877ff63694f8f09c8034403f8b5165a7418812a642396d5d539f90b170";
 * const secretLock = "b605112c2d7489034bbd7beab083fb65ba02af787786bb5e3d99bb26709f4f68";
 * const init = await remme.swap.init({
 *    receiverAddress: "112007484def48e1c6b77cf784aeabcac51222e48ae14f3821697f4040247ba01558b1",
 *    senderAddressNonLocal: "0xe6ca0e7c974f06471759e9a05d18b538c5ced11e",
 *    amount: 100,
 *    swapId,
 *    createdAt: Math.floor(Date.now() / 1000)
 * });
 *
 * init.connectToWebSocket(async (err, data) => {
 *    if (err) {
 *      console.log("err init", err);
 *    } else if (data.status === "COMMITTED") {
 *      console.log("data init", data);
 *      const res = await remme.swap.getInfo(swapId);
 *      console.log("after init info", res);
 *      const pubkey = await remme.swap.getPublicKey();
 *      console.log(pubkey);
 *      init.closeWebSocket();
 *      const setSecretLock = await remme.swap.setSecretLock(swapId, secretLock);
 *      setSecretLock.connectToWebSocket(async (err, data) => {
 *        if (err) {
 *          console.log("set secret lock err", err);
 *        }
 *        console.log("data set secret lock", data);
 *        if (data.status === "COMMITTED") {
 *          const res = await remme.swap.getInfo(swapId);
 *          console.log("after set secret lock info", res);
 *          setSecretLock.closeWebSocket();
 *          const approve = await remme.swap.approve(swapId);
 *          approve.connectToWebSocket(async (err, data) => {
 *            if (err) {
 *              console.log("approve err", err);
 *            }
 *            console.log("data approve", data);
 *            if (data.status === "COMMITTED") {
 *              const res = await remme.swap.getInfo(swapId);
 *              console.log("after approve", res);
 *              approve.closeWebSocket();
 *              const close = await remme.swap.close(swapId, secretKey);
 *              close.connectToWebSocket(async (err, data) => {
 *                if (err) {
 *                  console.log("err close", err);
 *                }
 *                console.log("data close", data);
 *                if (data.status === "COMMITTED") {
 *                  const res = await remme.swap.getInfo(swapId);
 *                  console.log("after close info", res);
 *                  close.closeWebSocket();
 *                }
 *              });
 *            }
 *          });
 *        }
 *      });
 *    }
 * });
 * ```
 */
var RemmeSwap = /** @class */ (function () {
    /* tslint:disable */
    /**
     * @example
     * Usage without main remme package
     * ```typescript
     * const remmeRest = new RemmeRest(); // See RemmeRest implementation
     * const remmeAccount = new RemmeAccount(); // See RemmeAccount implementation
     * const remmeTransaction = new RemmeTransactionService(remmeRest, remmeAccount); // See RemmeTransactionService implementation
     * const remmeSwap = new RemmeSwap(remmeRest, remmeTransaction);
     * ```
     * @param {IRemmeRest} remmeRest
     * @param {IRemmeTransactionService} remmeTransactionService
     */
    /* tslint:enable */
    function RemmeSwap(remmeRest, remmeTransactionService) {
        this._familyName = remme_utils_1.RemmeFamilyName.Swap;
        this._familyVersion = "0.1";
        this._zeroAddress = "0".repeat(70);
        this._blockInfoNamespaceAddress = "00b10c00";
        this._blockInfoConfigAddress = "00b10c01" + "0".repeat(62);
        this._remmeRest = remmeRest;
        this._remmeTransactionService = remmeTransactionService;
    }
    RemmeSwap.prototype._generateTransactionPayload = function (method, data) {
        return remme_protobuf_1.TransactionPayload.encode({
            method: method,
            data: data,
        }).finish();
    };
    RemmeSwap.prototype._getAddresses = function (method, swapId, receiverAddress) {
        var addresses = [remme_utils_1.generateAddress(this._familyName, swapId)];
        var methodToAddresses = (_a = {},
            _a[remme_protobuf_1.AtomicSwapMethod.Method.INIT] = [
                remme_utils_1.generateSettingsAddress("remme.settings.swap_comission"),
                this._zeroAddress,
                this._blockInfoNamespaceAddress,
                this._blockInfoConfigAddress,
            ],
            _a[remme_protobuf_1.AtomicSwapMethod.Method.EXPIRE] = [
                this._zeroAddress,
                this._blockInfoNamespaceAddress,
                this._blockInfoConfigAddress,
            ],
            _a[remme_protobuf_1.AtomicSwapMethod.Method.CLOSE] = [
                this._zeroAddress,
                receiverAddress,
            ],
            _a);
        return methodToAddresses[method] ? addresses.concat(methodToAddresses[method]) : addresses;
        var _a;
    };
    RemmeSwap.prototype._createAndSendTransaction = function (transactionPayload, inputsOutputs) {
        return __awaiter(this, void 0, void 0, function () {
            var transaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._remmeTransactionService.create({
                            familyName: this._familyName,
                            familyVersion: this._familyVersion,
                            inputs: inputsOutputs,
                            outputs: inputsOutputs,
                            payloadBytes: transactionPayload,
                        })];
                    case 1:
                        transaction = _a.sent();
                        return [4 /*yield*/, this._remmeTransactionService.send(transaction)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmeSwap.prototype._checkParameters = function (parameters) {
        for (var _i = 0, _a = Object.entries(parameters); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!value) {
                throw new Error("The '" + key + "' was missing in parameters");
            }
            if (value.search(remme_utils_1.PATTERNS.SWAP_ID) === -1) {
                throw new Error("Given " + key + " is not a valid");
            }
        }
    };
    /**
     * Approve swap with given id.
     * Send transaction into REMChain.
     * @example
     * ```typescript
     * const approve = await remme.swap.approve(swapId);
     * console.log(approve.swapId);
     * ```
     * @param {string} swapId
     * @returns {Promise<IBaseTransactionResponse>}
     */
    RemmeSwap.prototype.approve = function (swapId) {
        return __awaiter(this, void 0, void 0, function () {
            var payload, transactionPayload, inputsOutputs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkParameters({ swapId: swapId });
                        payload = remme_protobuf_1.AtomicSwapApprovePayload.encode({
                            swapId: swapId,
                        }).finish();
                        transactionPayload = this._generateTransactionPayload(remme_protobuf_1.AtomicSwapMethod.Method.APPROVE, payload);
                        inputsOutputs = this._getAddresses(remme_protobuf_1.AtomicSwapMethod.Method.APPROVE, swapId);
                        return [4 /*yield*/, this._createAndSendTransaction(transactionPayload, inputsOutputs)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Close swap with given id and secret key for checking who can close swap.
     * Send transaction into REMChain.
     * @example
     * ```typescript
     * const close = await remme.swap.close(swapId);
     * console.log(close.swapId);
     * ```
     * @param {string} swapId
     * @param {string} secretKey
     * @returns {Promise<IBaseTransactionResponse>}
     */
    RemmeSwap.prototype.close = function (swapId, secretKey) {
        return __awaiter(this, void 0, void 0, function () {
            var receiverAddress, payload, transactionPayload, inputsOutputs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkParameters({ swapId: swapId, secretKey: secretKey });
                        return [4 /*yield*/, this.getInfo(swapId)];
                    case 1:
                        receiverAddress = (_a.sent()).receiverAddress;
                        payload = remme_protobuf_1.AtomicSwapClosePayload.encode({
                            swapId: swapId,
                            secretKey: secretKey,
                        }).finish();
                        transactionPayload = this._generateTransactionPayload(remme_protobuf_1.AtomicSwapMethod.Method.CLOSE, payload);
                        inputsOutputs = this._getAddresses(remme_protobuf_1.AtomicSwapMethod.Method.CLOSE, swapId, receiverAddress);
                        return [4 /*yield*/, this._createAndSendTransaction(transactionPayload, inputsOutputs)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Expire swap with given id. Could be expired after 24h after initiation.
     * Send transaction into REMChain.
     * @example
     * ```typescript
     * const expire = await remme.swap.expire(swapId);
     * console.log(expire.swapId);
     * ```
     * @param {string} swapId
     * @returns {Promise<IBaseTransactionResponse>}
     */
    RemmeSwap.prototype.expire = function (swapId) {
        return __awaiter(this, void 0, void 0, function () {
            var payload, transactionPayload, inputsOutputs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkParameters({ swapId: swapId });
                        payload = remme_protobuf_1.AtomicSwapExpirePayload.encode({
                            swapId: swapId,
                        }).finish();
                        transactionPayload = this._generateTransactionPayload(remme_protobuf_1.AtomicSwapMethod.Method.EXPIRE, payload);
                        inputsOutputs = this._getAddresses(remme_protobuf_1.AtomicSwapMethod.Method.EXPIRE, swapId);
                        return [4 /*yield*/, this._createAndSendTransaction(transactionPayload, inputsOutputs)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get info about swap by given swap id.
     * @example
     * ```typescript
     * const info = await remme.swap.getInfo(swapId);
     * console.log(info); // SwapInfo
     * ```
     * @param {string} swapId
     * @returns {Promise<SwapInfoData>}
     */
    RemmeSwap.prototype.getInfo = function (swapId) {
        return __awaiter(this, void 0, void 0, function () {
            var apiResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkParameters({ swapId: swapId });
                        return [4 /*yield*/, this._remmeRest
                                .sendRequest(remme_rest_1.RemmeMethods.atomicSwap, new models_1.SwapRequest(swapId))];
                    case 1:
                        apiResult = _a.sent();
                        return [2 /*return*/, new models_1.SwapInfo(apiResult)];
                }
            });
        });
    };
    /**
     * Get swap public key.
     * @example
     * ```typescript
     * const publicKey = await remme.swap.getPublicKey();
     * console.log(publicKey);
     * ```
     * @returns {Promise<string>}
     */
    RemmeSwap.prototype.getPublicKey = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._remmeRest.sendRequest(remme_rest_1.RemmeMethods.atomicSwapPublicKey)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Initiation of swap.
     * Send transaction into REMChain.
     * @example
     * ```typescript
     * const swapId = "133102e41346242476b15a3a7966eb5249271025fc7fb0b37ed3fdb4bcce3806";
     * const secretLockBySolicitor = "b605112c2d7489034bbd7beab083fb65ba02af787786bb5e3d99bb26709f4f68";
     * const init = await remme.swap.init({
     *      receiverAddress: "112007484def48e1c6b77cf784aeabcac51222e48ae14f3821697f4040247ba01558b1",
     *      senderAddressNonLocal: "0xe6ca0e7c974f06471759e9a05d18b538c5ced11e",
     *      amount: 100,
     *
     *      // you can provide secret lock in initiation.
     *      secretLockBySolicitor,
     *      // or you can set it separately in remme.swap.setSecretLock
     *
     *      swapId,
     *      createdAt: Math.floor(Date.now() / 1000)
     * });
     * console.log(init.batchId); // SwapInfo
     * ```
     * @param {SwapInitDto} data
     * @returns {Promise<IBaseTransactionResponse>}
     */
    RemmeSwap.prototype.init = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var swapInitData, swapId, payload, transactionPayload, inputsOutputs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        swapInitData = new models_1.SwapInitDto(data);
                        swapId = swapInitData.swapId;
                        payload = remme_protobuf_1.AtomicSwapInitPayload.encode(swapInitData).finish();
                        transactionPayload = this._generateTransactionPayload(remme_protobuf_1.AtomicSwapMethod.Method.INIT, payload);
                        inputsOutputs = this._getAddresses(remme_protobuf_1.AtomicSwapMethod.Method.INIT, swapId);
                        return [4 /*yield*/, this._createAndSendTransaction(transactionPayload, inputsOutputs)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Set secret lock to swap with given swap id.
     * Send transaction into REMChain.
     * @example
     * ```typescript
     * const swapId = "133102e41346242476b15a3a7966eb5249271025fc7fb0b37ed3fdb4bcce3806";
     * const secretLockBySolicitor = "b605112c2d7489034bbd7beab083fb65ba02af787786bb5e3d99bb26709f4f68";
     * const setting = await remme.swap.setSecretLock(swapId, secretLockBySolicitor);
     * console.log(setting.batchId); // SwapInfo
     * ```
     * @param {string} swapId
     * @param {string} secretLock
     * @returns {Promise<IBaseTransactionResponse>}
     */
    RemmeSwap.prototype.setSecretLock = function (swapId, secretLock) {
        return __awaiter(this, void 0, void 0, function () {
            var payload, transactionPayload, inputsOutputs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkParameters({ swapId: swapId, secretLock: secretLock });
                        payload = remme_protobuf_1.AtomicSwapSetSecretLockPayload.encode({
                            swapId: swapId,
                            secretLock: secretLock,
                        }).finish();
                        transactionPayload = this._generateTransactionPayload(remme_protobuf_1.AtomicSwapMethod.Method.SET_SECRET_LOCK, payload);
                        inputsOutputs = this._getAddresses(remme_protobuf_1.AtomicSwapMethod.Method.SET_SECRET_LOCK, swapId);
                        return [4 /*yield*/, this._createAndSendTransaction(transactionPayload, inputsOutputs)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return RemmeSwap;
}());
exports.RemmeSwap = RemmeSwap;
//# sourceMappingURL=index.js.map