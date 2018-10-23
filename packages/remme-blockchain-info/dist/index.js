"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var protobufs = require("remme-protobuf");
var remme_utils_1 = require("remme-utils");
var models_1 = require("./models");
var RemmeBlockchainInfo = /** @class */ (function () {
    function RemmeBlockchainInfo(remmeRest) {
        this._remmeRest = remmeRest;
    }
    RemmeBlockchainInfo.prototype._checkId = function (id) {
        if (!id || id.search(/^[a-f0-9]{128}$/) === -1) {
            throw new Error("Given 'id' is not a valid");
        }
    };
    RemmeBlockchainInfo.prototype._checkAddress = function (address) {
        if (!address || address.search(/^[a-f0-9]{70}$/) === -1) {
            throw new Error("Given 'address' is not a valid");
        }
    };
    RemmeBlockchainInfo.prototype._prepareAddress = function (state) {
        if (RemmeBlockchainInfo.address[state.address.slice(0, 6)]) {
            var _a = RemmeBlockchainInfo.address[state.address.slice(0, 6)], protobuf_1 = _a.parser, addressType = _a.type;
            return __assign({}, state, { protobuf: protobuf_1,
                addressType: addressType });
        }
        return state;
    };
    RemmeBlockchainInfo.prototype._prepareBlock = function (block) {
        var _this = this;
        block.batches = block.batches.map(function (batch) {
            return _this._prepareBatch(batch);
        });
        return block;
    };
    RemmeBlockchainInfo.prototype._prepareBatch = function (batch) {
        var _this = this;
        batch.transactions = batch.transactions.map(function (transaction) { return _this._prepareTransaction(transaction); });
        return batch;
    };
    RemmeBlockchainInfo.prototype._prepareTransaction = function (transaction) {
        var family_name = transaction.header.family_name;
        if (family_name in RemmeBlockchainInfo.correspond) {
            var data = protobufs.TransactionPayload.decode(remme_utils_1.base64ToArrayBuffer(transaction.payload));
            var _a = RemmeBlockchainInfo.correspond[family_name][data.method], protobuf_2 = _a.parser, transactionType = _a.type;
            return __assign({}, transaction, { transactionProtobuf: protobufs.TransactionPayload, protobuf: protobuf_2,
                transactionType: transactionType });
        }
        return transaction;
    };
    RemmeBlockchainInfo.prototype.getBatchById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var apiResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkId(id);
                        return [4 /*yield*/, this._remmeRest.sendRequest(remme_rest_1.RemmeMethods.fetchBatch, { id: id })];
                    case 1:
                        apiResult = _a.sent();
                        apiResult.data = this._prepareBatch(apiResult.data);
                        return [2 /*return*/, apiResult];
                }
            });
        });
    };
    RemmeBlockchainInfo.prototype.getBatches = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var apiResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (query) {
                            query = new models_1.BaseQuery(query);
                        }
                        return [4 /*yield*/, this._remmeRest.sendRequest(remme_rest_1.RemmeMethods.batches, query)];
                    case 1:
                        apiResult = _a.sent();
                        apiResult.data = apiResult.data.map(function (item) { return _this._prepareBatch(item); });
                        return [2 /*return*/, apiResult];
                }
            });
        });
    };
    RemmeBlockchainInfo.prototype.getBlockById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var apiResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkId(id);
                        return [4 /*yield*/, this._remmeRest.sendRequest(remme_rest_1.RemmeMethods.fetchBlock, { id: id })];
                    case 1:
                        apiResult = _a.sent();
                        apiResult.data = this._prepareBlock(apiResult.data);
                        return [2 /*return*/, apiResult];
                }
            });
        });
    };
    RemmeBlockchainInfo.prototype.getBlocks = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var apiResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (query) {
                            if (typeof query.start === "number") {
                                query.start = "0x" + ("0000000000000000" + query.start.toString(16)).slice(-16);
                            }
                            query = new models_1.BaseQuery(query);
                        }
                        return [4 /*yield*/, this._remmeRest.sendRequest(remme_rest_1.RemmeMethods.blocks, query)];
                    case 1:
                        apiResult = _a.sent();
                        apiResult.data = apiResult.data.map(function (block) { return _this._prepareBlock(block); });
                        return [2 /*return*/, apiResult];
                }
            });
        });
    };
    RemmeBlockchainInfo.prototype.getPeers = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._remmeRest.sendRequest(remme_rest_1.RemmeMethods.peers)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmeBlockchainInfo.prototype.getReceipts = function (ids) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ids.map(function (id) { return _this._checkId(id); });
                        return [4 /*yield*/, this._remmeRest.sendRequest(remme_rest_1.RemmeMethods.receipts, { ids: ids })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmeBlockchainInfo.prototype.getState = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var apiResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (query) {
                            query = new models_1.StateQuery(query);
                        }
                        return [4 /*yield*/, this._remmeRest.sendRequest(remme_rest_1.RemmeMethods.state, query)];
                    case 1:
                        apiResult = _a.sent();
                        apiResult.data = apiResult.data.map(function (state) { return _this._prepareAddress(state); });
                        return [2 /*return*/, apiResult];
                }
            });
        });
    };
    RemmeBlockchainInfo.prototype.getStateByAddress = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var apiResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkAddress(address);
                        return [4 /*yield*/, this._remmeRest
                                .sendRequest(remme_rest_1.RemmeMethods.fetchState, { address: address })];
                    case 1:
                        apiResult = _a.sent();
                        apiResult = this._prepareAddress(__assign({ address: address }, apiResult));
                        return [2 /*return*/, apiResult];
                }
            });
        });
    };
    RemmeBlockchainInfo.prototype.getTransactionById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var apiResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkId(id);
                        return [4 /*yield*/, this._remmeRest
                                .sendRequest(remme_rest_1.RemmeMethods.fetchTransaction, { id: id })];
                    case 1:
                        apiResult = _a.sent();
                        apiResult.data = this._prepareTransaction(apiResult.data);
                        return [2 /*return*/, apiResult];
                }
            });
        });
    };
    RemmeBlockchainInfo.prototype.getTransactions = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var apiResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (query) {
                            query = new models_1.BaseQuery(query);
                        }
                        return [4 /*yield*/, this._remmeRest
                                .sendRequest(remme_rest_1.RemmeMethods.transactions, query)];
                    case 1:
                        apiResult = _a.sent();
                        apiResult.data = apiResult.data.map(function (item) {
                            return _this._prepareTransaction(item);
                        });
                        return [2 /*return*/, apiResult];
                }
            });
        });
    };
    RemmeBlockchainInfo.prototype.getNetworkStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var apiResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._remmeRest
                            .sendRequest(remme_rest_1.RemmeMethods.networkStatus)];
                    case 1:
                        apiResult = _a.sent();
                        return [2 /*return*/, new models_1.NetworkStatus(apiResult)];
                }
            });
        });
    };
    RemmeBlockchainInfo.prototype.getBlockInfo = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var blocks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._remmeRest
                            .sendRequest(remme_rest_1.RemmeMethods.blockInfo, query)];
                    case 1:
                        blocks = _a.sent();
                        if (!blocks) {
                            throw new Error("Unknown error occurs in the server");
                        }
                        return [2 /*return*/, blocks.map(function (item) { return new models_1.BlockInfo(item); })];
                }
            });
        });
    };
    RemmeBlockchainInfo.prototype.getBatchStatus = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkId(id);
                        return [4 /*yield*/, this._remmeRest.sendRequest(remme_rest_1.RemmeMethods.batchStatus, { id: id })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmeBlockchainInfo.prototype.parseTransactionPayload = function (transaction) {
        var family_name = transaction.header.family_name;
        if (family_name in RemmeBlockchainInfo.correspond) {
            var _a = protobufs.TransactionPayload.decode(remme_utils_1.base64ToArrayBuffer(transaction.payload)), method = _a.method, data = _a.data;
            var _b = RemmeBlockchainInfo.correspond[family_name][method], parser = _b.parser, type = _b.type;
            return {
                payload: parser.decode(data),
                type: type,
            };
        }
        else {
            throw new Error("This family name (" + family_name + ") don't supported for parsing");
        }
    };
    RemmeBlockchainInfo.prototype.parseStateData = function (state) {
        if (RemmeBlockchainInfo.address[state.address.slice(0, 6)]) {
            var _a = RemmeBlockchainInfo.address[state.address.slice(0, 6)], parser = _a.parser, type = _a.type;
            return {
                data: parser.decode(remme_utils_1.base64ToArrayBuffer(state.data)),
                type: type,
            };
        }
        else {
            throw new Error("This address (" + state.address + ") don't supported for parsing");
        }
    };
    RemmeBlockchainInfo.address = (_a = {},
        _a[remme_utils_1.RemmeNamespace.Swap] = {
            type: "info atomic swap",
            parser: protobufs.AtomicSwapInfo,
        },
        _a[remme_utils_1.RemmeNamespace.Account] = {
            type: "account",
            parser: protobufs.Account,
        },
        _a[remme_utils_1.RemmeNamespace.PublicKey] = {
            type: "storage public key",
            parser: protobufs.PubKeyStorage,
        },
        _a);
    RemmeBlockchainInfo.correspond = {
        account: (_b = {},
            _b[protobufs.AccountMethod.Method.TRANSFER] = {
                type: "transfer token",
                parser: protobufs.TransferPayload,
            },
            _b[protobufs.AccountMethod.Method.GENESIS] = {
                type: "genesis",
                parser: protobufs.GenesisPayload,
            },
            _b),
        AtomicSwap: (_c = {},
            _c[protobufs.AtomicSwapMethod.Method.INIT] = {
                type: "atomic-swap-init",
                parser: protobufs.AtomicSwapInitPayload,
            },
            _c[protobufs.AtomicSwapMethod.Method.APPROVE] = {
                type: "atomic-swap-approve",
                parser: protobufs.AtomicSwapApprovePayload,
            },
            _c[protobufs.AtomicSwapMethod.Method.EXPIRE] = {
                type: "atomic-swap-expire",
                parser: protobufs.AtomicSwapExpirePayload,
            },
            _c[protobufs.AtomicSwapMethod.Method.SET_SECRET_LOCK] = {
                type: "atomic-swap-set-secret-lock",
                parser: protobufs.AtomicSwapSetSecretLockPayload,
            },
            _c[protobufs.AtomicSwapMethod.Method.CLOSE] = {
                type: "atomic-swap-close",
                parser: protobufs.AtomicSwapClosePayload,
            },
            _c),
        pub_key: (_d = {},
            _d[protobufs.PubKeyMethod.Method.STORE] = {
                type: "store public key",
                parser: protobufs.NewPubKeyPayload,
            },
            _d[protobufs.PubKeyMethod.Method.REVOKE] = {
                type: "revoke public key",
                parser: protobufs.RevokePubKeyPayload,
            },
            _d),
    };
    return RemmeBlockchainInfo;
}());
exports.RemmeBlockchainInfo = RemmeBlockchainInfo;
var _a, _b, _c, _d;
//# sourceMappingURL=index.js.map