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
var RemmeSwap = /** @class */ (function () {
    function RemmeSwap(remmeRest, remmeTransactionService) {
        this._familyName = "AtomicSwap";
        this._familyVersion = "0.1";
        this._zeroAddress = "0".repeat(70);
        this._swapComission = "0000007ca83d6bbb759da9cde0fb0dec1400c55cc3bbcd6b1243b2e3b0c44298fc1c14";
        this._remmeRest = remmeRest;
        this._remmeTransactionService = remmeTransactionService;
    }
    RemmeSwap.prototype.approve = function (swapId) {
        return __awaiter(this, void 0, void 0, function () {
            var payload, transactionPayload, inputsOutputs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkParameters({ swapId: swapId });
                        payload = remme_protobuf_1.AtomicSwapApprovePayload.encode({
                            swapId: swapId,
                        }).finish();
                        transactionPayload = this.generateTransactionPayload(remme_protobuf_1.AtomicSwapMethod.Method.APPROVE, payload);
                        inputsOutputs = this.getAddresses(remme_protobuf_1.AtomicSwapMethod.Method.APPROVE, swapId);
                        return [4 /*yield*/, this.createAndSendTransaction(transactionPayload, inputsOutputs)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmeSwap.prototype.close = function (swapId, secretKey) {
        return __awaiter(this, void 0, void 0, function () {
            var receiverAddress, payload, transactionPayload, inputsOutputs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkParameters({ swapId: swapId, secretKey: secretKey });
                        return [4 /*yield*/, this.getInfo(swapId)];
                    case 1:
                        receiverAddress = (_a.sent()).receiverAddress;
                        payload = remme_protobuf_1.AtomicSwapClosePayload.encode({
                            swapId: swapId,
                            secretKey: secretKey,
                        }).finish();
                        transactionPayload = this.generateTransactionPayload(remme_protobuf_1.AtomicSwapMethod.Method.CLOSE, payload);
                        inputsOutputs = this.getAddresses(remme_protobuf_1.AtomicSwapMethod.Method.CLOSE, swapId, receiverAddress);
                        return [4 /*yield*/, this.createAndSendTransaction(transactionPayload, inputsOutputs)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmeSwap.prototype.expire = function (swapId) {
        return __awaiter(this, void 0, void 0, function () {
            var payload, transactionPayload, inputsOutputs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkParameters({ swapId: swapId });
                        payload = remme_protobuf_1.AtomicSwapExpirePayload.encode({
                            swapId: swapId,
                        }).finish();
                        transactionPayload = this.generateTransactionPayload(remme_protobuf_1.AtomicSwapMethod.Method.EXPIRE, payload);
                        inputsOutputs = this.getAddresses(remme_protobuf_1.AtomicSwapMethod.Method.EXPIRE, swapId);
                        return [4 /*yield*/, this.createAndSendTransaction(transactionPayload, inputsOutputs)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmeSwap.prototype.getInfo = function (swapId) {
        return __awaiter(this, void 0, void 0, function () {
            var apiResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkParameters({ swapId: swapId });
                        return [4 /*yield*/, this._remmeRest.getRequest(remme_rest_1.RemmeMethods.atomicSwap, { swap_id: swapId })];
                    case 1:
                        apiResult = _a.sent();
                        return [2 /*return*/, new models_1.SwapInfoData(apiResult)];
                }
            });
        });
    };
    RemmeSwap.prototype.getPublicKey = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._remmeRest.getRequest(remme_rest_1.RemmeMethods.atomicSwapPublicKey)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmeSwap.prototype.init = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var swapInitData, swapId, payload, transactionPayload, inputsOutputs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        swapInitData = new models_1.SwapInitDto(data);
                        swapId = swapInitData.swapId;
                        payload = remme_protobuf_1.AtomicSwapInitPayload.encode(swapInitData).finish();
                        transactionPayload = this.generateTransactionPayload(remme_protobuf_1.AtomicSwapMethod.Method.INIT, payload);
                        inputsOutputs = this.getAddresses(remme_protobuf_1.AtomicSwapMethod.Method.INIT, swapId);
                        return [4 /*yield*/, this.createAndSendTransaction(transactionPayload, inputsOutputs)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmeSwap.prototype.setSecretLock = function (swapId, secretLock) {
        return __awaiter(this, void 0, void 0, function () {
            var payload, transactionPayload, inputsOutputs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkParameters({ swapId: swapId, secretLock: secretLock });
                        payload = remme_protobuf_1.AtomicSwapSetSecretLockPayload.encode({
                            swapId: swapId,
                            secretLock: secretLock,
                        }).finish();
                        transactionPayload = this.generateTransactionPayload(remme_protobuf_1.AtomicSwapMethod.Method.SET_SECRET_LOCK, payload);
                        inputsOutputs = this.getAddresses(remme_protobuf_1.AtomicSwapMethod.Method.SET_SECRET_LOCK, swapId);
                        return [4 /*yield*/, this.createAndSendTransaction(transactionPayload, inputsOutputs)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmeSwap.prototype.generateTransactionPayload = function (method, data) {
        return remme_protobuf_1.TransactionPayload.encode({
            method: method,
            data: data,
        }).finish();
    };
    RemmeSwap.prototype.getAddresses = function (method, swapId, receiverAddress) {
        var addresses = [remme_utils_1.getAddressFromData(this._familyName, swapId)];
        var methodToAddresses = (_a = {},
            _a[remme_protobuf_1.AtomicSwapMethod.Method.INIT] = [
                this._swapComission,
                this._zeroAddress,
            ],
            _a[remme_protobuf_1.AtomicSwapMethod.Method.EXPIRE] = [
                this._zeroAddress,
            ],
            _a[remme_protobuf_1.AtomicSwapMethod.Method.CLOSE] = [
                this._zeroAddress,
                receiverAddress,
            ],
            _a);
        return methodToAddresses[method] ? addresses.concat(methodToAddresses[method]) : addresses;
        var _a;
    };
    RemmeSwap.prototype.createAndSendTransaction = function (transactionPayload, inputsOutputs) {
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
    RemmeSwap.prototype.checkParameters = function (parameters) {
        for (var _i = 0, _a = Object.entries(parameters); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!value) {
                throw new Error("The '" + key + "' was missing in parameters");
            }
            if (value.search(/^[0-9a-f]{64}$/) === -1) {
                throw new Error("Given " + key + " is not a valid");
            }
        }
    };
    return RemmeSwap;
}());
exports.RemmeSwap = RemmeSwap;
//# sourceMappingURL=index.js.map