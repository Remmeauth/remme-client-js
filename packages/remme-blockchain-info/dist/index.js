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
var protobufs = require("remme-protobuf");
var remme_api_1 = require("remme-api");
var remme_utils_1 = require("remme-utils");
var models_1 = require("./models");
exports.Batch = models_1.Batch;
exports.BatchList = models_1.BatchList;
exports.Block = models_1.Block;
exports.BlockList = models_1.BlockList;
exports.State = models_1.State;
exports.StateList = models_1.StateList;
exports.Transaction = models_1.Transaction;
exports.TransactionList = models_1.TransactionList;
/* tslint:disable */
/**
 * Main class that works with blockchain data. Blocks, batches, transactions, addresses, peers.
 * @example
 * ```typescript
 * const blockInfo = await remme.blockchainInfo.getBlockInfo();
 * console.log("blockInfo:", blockInfo);
 * const network = await remme.blockchainInfo.getNetworkStatus();
 * console.log("network:", network);
 * const blocks = await remme.blockchainInfo.getBlocks();
 * console.log("blocks:", blocks);
 * const block = await remme.blockchainInfo.getBlockById(blocks.data[1].header_signature);
 * console.log("block:", block);
 * const batches = await remme.blockchainInfo.getBatches();
 * console.log("batches:", batches);
 * const batch = await remme.blockchainInfo.getBatchById(batches.data[1].header_signature);
 * console.log("batch:", batch);
 * const transactions = await remme.blockchainInfo.getTransactions();
 * console.log("transactions:", transactions);
 * const transaction = await remme.blockchainInfo.getTransactionById(transactions.data[2].header_signature);
 * console.log("transaction:", transaction);
 * const parsedTransaction = remme.blockchainInfo.parseTransactionPayload(transaction.data);
 * console.log("parsedTransaction:", parsedTransaction);
 * const states = await remme.blockchainInfo.getState();
 * console.log("states:", states);
 * const state = await remme.blockchainInfo.getStateByAddress(states.data[1].address);
 * console.log("state:", state);
 * const parsedState = remme.blockchainInfo.parseStateData(state);
 * console.log("parsedState:", parsedState);
 * const batchStatus = await remme.blockchainInfo.getBatchStatus(batches.data[1].header_signature);
 * console.log("batchStatus:", batchStatus);
 * const peers = await remme.blockchainInfo.getPeers();
 * console.log("peers:", peers);
 * ```
 */
/* tslint:enable */
var RemmeBlockchainInfo = /** @class */ (function () {
    /**
     * @example
     * Usage without remme main package
     * ```typescript
     * const remmeApi = new RemmeApi();
     * const remmeBlockchainInfo = new RemmeBlockchainInfo(remmeApi);
     * ```
     * @param {IRemmeApi} remmeApi
     */
    function RemmeBlockchainInfo(remmeApi) {
        this._remmeApi = remmeApi;
    }
    RemmeBlockchainInfo.prototype._checkId = function (id) {
        if (!id || id.search(remme_utils_1.PATTERNS.HEADER_SIGNATURE) === -1) {
            throw new Error("Given 'id' is not a valid");
        }
    };
    RemmeBlockchainInfo.prototype._checkAddress = function (address) {
        if (!address || address.search(remme_utils_1.PATTERNS.ADDRESS) === -1) {
            throw new Error("Given 'address' is not a valid");
        }
    };
    /* tslint:disable */
    /**
     * Get all blocks from REMChain.
     * You can specify one or more query parameters.
     * @example
     * Without query
     * ```typescript
     * const blocks = await remme.blockchainInfo.getBlocks();
     * console.log(blocks); // BlockList
     * ```
     *
     * Start from specifying block number
     * ```typescript
     * const blocks = await remme.blockchainInfo.getBlocks({ start: 4 });
     * console.log(blocks); // BlockList
     * ```
     *
     * Reverse output
     * ```typescript
     * const blocks = await remme.blockchainInfo.getBlocks({ reverse: true });
     * console.log(blocks); // BlockList
     * ```
     *
     * Specify limit of output
     * ```typescript
     * const blocks = await remme.blockchainInfo.getBlocks({ limit: 2 });
     * console.log(blocks); // BlockList
     * ```
     *
     * Specify head of block for start
     * ```typescript
     * const blocks = await remme.blockchainInfo.getBlocks({
     *      head: "9d2dc2ab673d028bc1dd8b5be8d2d885e4383a827cd0261f58334252bf807c08113207eabbd12d0786d6bba5378a791129f9c520c17597b5504d4b547ef57491"
     * });
     * console.log(blocks); // BlockList
     * ```
     * @param {IBaseQuery} query
     * @returns {Promise<BlockList>}
     */
    /* tslint:enable */
    RemmeBlockchainInfo.prototype.getBlocks = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (query) {
                            if (typeof query.start === "number") {
                                query.start = "0x" + ("0000000000000000" + query.start.toString(16)).slice(-16);
                            }
                            query = new models_1.BaseQuery(query);
                        }
                        return [4 /*yield*/, this._remmeApi.sendRequest(remme_api_1.RemmeMethods.blocks, query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* tslint:disable */
    /**
     * Get block by id (header_signature) from REMChain.
     * @example
     * ```typescript
     * const block = await remme.blockchainInfo.getBlockById(
     *      "9d2dc2ab673d028bc1dd8b5be8d2d885e4383a827cd0261f58334252bf807c08113207eabbd12d0786d6bba5378a791129f9c520c17597b5504d4b547ef57491"
     * );
     * console.log("block:", block); // Block
     * ```
     * @param {string} id
     * @returns {Promise<Block>}
     */
    /* tslint:enable */
    RemmeBlockchainInfo.prototype.getBlockById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkId(id);
                        return [4 /*yield*/, this._remmeApi.sendRequest(remme_api_1.RemmeMethods.fetchBlock, { id: id })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get information about block.
     * @example
     * Without parameters.
     * ```typescript
     * const blockInfo = await remme.blockchainInfo.getBlockInfo();
     * console.log("blockInfo:", blockInfo); // IBlockInfo[]
     * ```
     * Start from specifying block number.
     * ```typescript
     * const blockInfo = await remme.blockchainInfo.getBlockInfo({
     *      start: 2
     * });
     * console.log(blockInfo); // IBlockInfo[]
     *
     * Specify limit of output
     * ```typescript
     * const blockInfo = await remme.blockchainInfo.getBlockInfo({ limit: 2 });
     * console.log(blockInfo); // IBlockInfo[]
     * ```
     * @param {IBaseQuery} query
     * @returns {Promise<IBlockInfo[]>}
     */
    RemmeBlockchainInfo.prototype.getBlockInfo = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var blocks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._remmeApi
                            .sendRequest(remme_api_1.RemmeMethods.blockInfo, query)];
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
    /* tslint:disable */
    /**
     * Get all batches from REMChain.
     * @example
     * Without parameters
     * ```typescript
     * const batches = await remme.blockchainInfo.getBatches();
     * console.log("batches:", batches); // BatchList
     * ```
     *
     * Start from specifying batch header_signature (batch ID).
     * ```typescript
     * const batches = await remme.blockchainInfo.getBatches({
     *      start: "8e4dc2ab673d028bc1dd8b5be8d2d885e4383a827cd0261f58334252bf807c08113207eabbd12d0786d6bba5378a791129f9c520c17597b5504d4b547ef5fe5c"
     * });
     * console.log(batches); // BatchList
     * ```
     *
     * Reverse output
     * ```typescript
     * const batches = await remme.blockchainInfo.getBatches({ reverse: true });
     * console.log(batches); // BatchList
     * ```
     *
     * Specify limit of output
     * ```typescript
     * const batches = await remme.blockchainInfo.getBatches({ limit: 2 });
     * console.log(batches); // BatchList
     * ```
     *
     * Specify head of block for start
     * ```typescript
     * const batches = await remme.blockchainInfo.getBatches({
     *      head: "9d2dc2ab673d028bc1dd8b5be8d2d885e4383a827cd0261f58334252bf807c08113207eabbd12d0786d6bba5378a791129f9c520c17597b5504d4b547ef57491"
     * });
     * console.log(batches); // BatchList
     * ```
     * @param {IBaseQuery} query
     * @returns {Promise<BatchList>}
     */
    /* tslint:enable */
    RemmeBlockchainInfo.prototype.getBatches = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (query) {
                            query = new models_1.BaseQuery(query);
                        }
                        return [4 /*yield*/, this._remmeApi.sendRequest(remme_api_1.RemmeMethods.batches, query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* tslint:disable */
    /**
     * Get batch by id (header_signature) from REMChain.
     * @example
     * ```typescript
     * const batch = await remme.blockchainInfo.getBatchById(
     *      "9d2dc2ab673d028bc1dd8b5be8d2d885e4383a827cd0261f58334252bf807c08113207eabbd12d0786d6bba5378a791129f9c520c17597b5504d4b547ef57491"
     * );
     * console.log("batch:", batch); // Batch
     * ```
     * @param {string} id
     * @returns {Promise<Batch>}
     */
    /* tslint:enable */
    RemmeBlockchainInfo.prototype.getBatchById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkId(id);
                        return [4 /*yield*/, this._remmeApi.sendRequest(remme_api_1.RemmeMethods.fetchBatch, { id: id })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* tslint:disable */
    /**
     * Get status for batch.
     * @example
     * ```typescript
     * const batchStatus = await remme.blockchainInfo.getBatchStatus(
     *  "8e4dc2ab673d028bc1dd8b5be8d2d885e4383a827cd0261f58334252bf807c08113207eabbd12d0786d6bba5378a791129f9c520c17597b5504d4b547ef5fe5c"
     * );
     * console.log("batchStatus:", batchStatus);
     * ```
     * @param {string} id
     * @returns {Promise<string>}
     */
    /* tslint:enable */
    RemmeBlockchainInfo.prototype.getBatchStatus = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkId(id);
                        return [4 /*yield*/, this._remmeApi.sendRequest(remme_api_1.RemmeMethods.batchStatus, { id: id })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get states in REMChain
     * @example
     * Without parameters
     * ```typescript
     * const states = await remme.blockchainInfo.getState();
     * console.log("states:", states); // StateList
     * ```
     *
     * Start from specifying state address
     * ```typescript
     * const states = await remme.blockchainInfo.getState({
     *  start: "6a437247a1c12c0fb03aa6e242e6ce988d1cdc7fcc8c2a62ab3ab1202325d7d677e84c"
     * });
     * console.log(states); // StateList
     * ```
     *
     * Reverse output
     * ```typescript
     * const states = await remme.blockchainInfo.getState({ reverse: true });
     * console.log(states); // StateList
     * ```
     *
     * Specify limit of output
     * ```typescript
     * const states = await remme.blockchainInfo.getState({ limit: 2 });
     * console.log(states); // StateList
     * ```
     *
     * Specify head of block for start
     * ```typescript
     * const states = await remme.blockchainInfo.getState({
     *      address: "6a437247a1c12c0fb03aa6e242e6ce988d1cdc7fcc8c2a62ab3ab1202325d7d677e84c"
     * });
     * console.log(states); // StateList
     * ```
     * @param {IStateQuery} query
     * @returns {Promise<StateList>}
     */
    RemmeBlockchainInfo.prototype.getState = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (query) {
                            query = new models_1.StateQuery(query);
                        }
                        return [4 /*yield*/, this._remmeApi.sendRequest(remme_api_1.RemmeMethods.state, query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get state by address
     * @example
     * ```typescript
     * const state = await remme.blockchainInfo.getStateByAddress(
     *      "6a437247a1c12c0fb03aa6e242e6ce988d1cdc7fcc8c2a62ab3ab1202325d7d677e84c"
     * );
     * console.log("state:", state);
     * ```
     * @param {string} address
     * @returns {Promise<State>}
     */
    RemmeBlockchainInfo.prototype.getStateByAddress = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkAddress(address);
                        return [4 /*yield*/, this._remmeApi
                                .sendRequest(remme_api_1.RemmeMethods.fetchState, { address: address })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Parse state data.
     * @example
     * ```typescript
     * const state = await remme.blockchainInfo.getStateByAddress(
     *      "6a437247a1c12c0fb03aa6e242e6ce988d1cdc7fcc8c2a62ab3ab1202325d7d677e84c"
     * );
     * const parsedState = remme.blockchainInfo.parseStateData(state);
     * console.log("parsedState:", parsedState); // { data: any, type: string }
     * ```
     * @param {State} state
     * @returns {object}
     */
    RemmeBlockchainInfo.prototype.parseStateData = function (state) {
        if (!state.address) {
            throw new Error("State should have address for parsing");
        }
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
    /* tslint:disable */
    /**
     * Get all transactions from REMChain.
     * @example
     * Without parameters
     * ```typescript
     * const transactions = await remme.blockchainInfo.getBatches();
     * console.log("transactions:", transactions); // TransactionList
     * ```
     *
     * Start from specifying transactions header_signature.
     * ```typescript
     * const transactions = await remme.blockchainInfo.getTransactions({
     *      start: "f32fc2ab673d028bc1dd8b5be8d2d885e4383a827cd0261f58334252bf807c08113207eabbd12d0786d6bba5378a791129f9c520c17597b5504d4b547ef543fe"
     * });
     * console.log(transactions); // TransactionList
     * ```
     *
     * Reverse output
     * ```typescript
     * const transactions = await remme.blockchainInfo.getTransactions({ reverse: true });
     * console.log(transactions); // TransactionList
     * ```
     *
     * Specify limit of output
     * ```typescript
     * const transactions = await remme.blockchainInfo.getTransactions({ limit: 2 });
     * console.log(transactions); // TransactionList
     * ```
     *
     * Specify head of block for start
     * ```typescript
     * const transactions = await remme.blockchainInfo.getTransactions({
     *      head: "9d2dc2ab673d028bc1dd8b5be8d2d885e4383a827cd0261f58334252bf807c08113207eabbd12d0786d6bba5378a791129f9c520c17597b5504d4b547ef57491"
     * });
     * console.log(transactions); // TransactionList
     * ```
     * @param {IBaseQuery} query
     * @returns {Promise<TransactionList>}
     */
    /* tslint:enable */
    RemmeBlockchainInfo.prototype.getTransactions = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (query) {
                            query = new models_1.BaseQuery(query);
                        }
                        return [4 /*yield*/, this._remmeApi
                                .sendRequest(remme_api_1.RemmeMethods.transactions, query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* tslint:disable */
    /**
     * Get transaction by id (header_signature) from REMChain
     * @example
     * ```typescript
     * const transaction = await remme.blockchainInfo.getTransactionById(
     *      "f32fc2ab673d028bc1dd8b5be8d2d885e4383a827cd0261f58334252bf807c08113207eabbd12d0786d6bba5378a791129f9c520c17597b5504d4b547ef543fe"
     * );
     * console.log("transaction:", transaction); // Block
     * ```
     * @param {string} id
     * @returns {Promise<Transaction>}
     */
    /* tslint:enable */
    RemmeBlockchainInfo.prototype.getTransactionById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._checkId(id);
                        return [4 /*yield*/, this._remmeApi
                                .sendRequest(remme_api_1.RemmeMethods.fetchTransaction, { id: id })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* tslint:disable */
    /**
     * Parse transaction payload. Take transaction and return object with payload and type
     * @example
     * ```typescript
     * const transaction = await remme.blockchainInfo.getTransactionById(
     *  "f32fc2ab673d028bc1dd8b5be8d2d885e4383a827cd0261f58334252bf807c08113207eabbd12d0786d6bba5378a791129f9c520c17597b5504d4b547ef543fe"
     * );
     * console.log("transaction:", transaction);
     * const parsedTransaction = remme.blockchainInfo.parseTransactionPayload(transaction.data);
     * console.log("parsedTransaction:", parsedTransaction); // { payload: any, type: string }
     * ```
     * @param {Transaction} transaction
     * @returns {object}
     */
    /* tslint:enable */
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
    /**
     * Get network status for node.
     * @example
     * ```typescript
     * const networkStatus = await remme.blockchainInfo.getNetworkStatus();
     * console.log(networkStatus); // INetworkStatus
     * ```
     * @returns {Promise<INetworkStatus>}
     */
    RemmeBlockchainInfo.prototype.getNetworkStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var apiResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._remmeApi
                            .sendRequest(remme_api_1.RemmeMethods.networkStatus)];
                    case 1:
                        apiResult = _a.sent();
                        return [2 /*return*/, new models_1.NetworkStatus(apiResult)];
                }
            });
        });
    };
    /**
     * Get peers that connected to this node.
     * @example
     * ```typescript
     * const peers = await remme.blockchainInfo.getPeers();
     * console.log(peers); // string[]
     * ```
     * @returns {Promise<string[]>}
     */
    RemmeBlockchainInfo.prototype.getPeers = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._remmeApi.sendRequest(remme_api_1.RemmeMethods.peers)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
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
    RemmeBlockchainInfo.correspond = (_b = {},
        _b[remme_utils_1.RemmeFamilyName.Account] = (_c = {},
            _c[protobufs.AccountMethod.Method.TRANSFER] = {
                type: "transfer token",
                parser: protobufs.TransferPayload,
            },
            _c[protobufs.AccountMethod.Method.GENESIS] = {
                type: "genesis",
                parser: protobufs.GenesisPayload,
            },
            _c),
        _b[remme_utils_1.RemmeFamilyName.Swap] = (_d = {},
            _d[protobufs.AtomicSwapMethod.Method.INIT] = {
                type: "atomic-swap-init",
                parser: protobufs.AtomicSwapInitPayload,
            },
            _d[protobufs.AtomicSwapMethod.Method.APPROVE] = {
                type: "atomic-swap-approve",
                parser: protobufs.AtomicSwapApprovePayload,
            },
            _d[protobufs.AtomicSwapMethod.Method.EXPIRE] = {
                type: "atomic-swap-expire",
                parser: protobufs.AtomicSwapExpirePayload,
            },
            _d[protobufs.AtomicSwapMethod.Method.SET_SECRET_LOCK] = {
                type: "atomic-swap-set-secret-lock",
                parser: protobufs.AtomicSwapSetSecretLockPayload,
            },
            _d[protobufs.AtomicSwapMethod.Method.CLOSE] = {
                type: "atomic-swap-close",
                parser: protobufs.AtomicSwapClosePayload,
            },
            _d),
        _b[remme_utils_1.RemmeFamilyName.PublicKey] = (_e = {},
            _e[protobufs.PubKeyMethod.Method.STORE] = {
                type: "store public key",
                parser: protobufs.NewPubKeyPayload,
            },
            _e[protobufs.PubKeyMethod.Method.REVOKE] = {
                type: "revoke public key",
                parser: protobufs.RevokePubKeyPayload,
            },
            _e),
        _b);
    return RemmeBlockchainInfo;
}());
exports.RemmeBlockchainInfo = RemmeBlockchainInfo;
var _a, _b, _c, _d, _e;
//# sourceMappingURL=index.js.map