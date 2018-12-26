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
var remme_api_1 = require("remme-api");
var remme_utils_1 = require("remme-utils");
var protobuf = require("remme-protobuf");
var models_1 = require("./models");
exports.BaseTransactionResponse = models_1.BaseTransactionResponse;
exports.CreateTransactionDto = models_1.CreateTransactionDto;
exports.SendTransactionDto = models_1.SendTransactionDto;
/**
 * Class for creating and sending transactions
 * @example
 * ```typescript
 * const remme = new Remme.Client();
 * const familyName = "pub_key";
 * const familyVersion = "0.1";
 * const inputs = [];
 * const outputs = [];
 * const payloadBytes = new Buffer("my transaction");
 * const createDto = new CreateTransactionDto(
 *                         familyName,
 *                         familyVersion,
 *                         inputs,
 *                         outputs,
 *                         payloadBytes,
 *                   );
 * const transaction = await remme.transaction.create(createDto);
 * const sendResponse = await remme.transaction.send(transaction);
 * ```
 */
var RemmeTransactionService = /** @class */ (function () {
    /**
     * @example
     * Usage without remme main package
     * ```typescript
     * const remmeApi = new RemmeApi(); // See RemmeRest implementation
     * const remmeAccount = new RemmeAccount(); // See RemmeAccount implementation
     * const remmeTransaction = new RemmeTransactionService(remmeApi, remmeAccount);
     * ```
     * @param {IRemmeApi} remmeApi
     * @param {IRemmeAccount} remmeAccount
     */
    function RemmeTransactionService(remmeApi, remmeAccount) {
        this._remmeApi = remmeApi;
        this._remmeAccount = remmeAccount;
    }
    /* tslint:disable */
    /**
     * Documentation for building transactions
     * https://sawtooth.hyperledger.org/docs/core/releases/latest/_autogen/sdk_submit_tutorial_js.html#building-the-transaction
     * @example
     * ```typescript
     * const familyName = "pub_key";
     * const familyVersion = "0.1";
     * const inputs = [];
     * const outputs = [];
     * const payloadBytes = Uint8Array.from("my transaction");
     * const createDto = new CreateTransactionDto(
     *                         familyName,
     *                         familyVersion,
     *                         inputs,
     *                         outputs,
     *                         payloadBytes,
     *                   );
     * const transaction = await remmeTransaction.create(createDto);
     * ```
     * @param {CreateTransactionDto} settings
     * @returns {Promise<string>}
     */
    /* tslint:enable */
    RemmeTransactionService.prototype.create = function (settings) {
        return __awaiter(this, void 0, void 0, function () {
            var familyName, familyVersion, inputs, outputs, payloadBytes, batcherPublicKey, transactionHeaderBytes, signature, transaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        familyName = settings.familyName, familyVersion = settings.familyVersion, inputs = settings.inputs, outputs = settings.outputs, payloadBytes = settings.payloadBytes;
                        return [4 /*yield*/, this._remmeApi.sendRequest(remme_api_1.RemmeMethods.nodeConfig)];
                    case 1:
                        batcherPublicKey = (_a.sent()).node_public_key;
                        transactionHeaderBytes = protobuf.TransactionHeader.encode({
                            familyName: familyName,
                            familyVersion: familyVersion,
                            inputs: inputs.concat([this._remmeAccount.address]),
                            outputs: outputs.concat([this._remmeAccount.address]),
                            signerPublicKey: this._remmeAccount.publicKeyHex,
                            nonce: remme_utils_1.sha512(Math.floor(Math.random() * 1000).toString()),
                            batcherPublicKey: batcherPublicKey,
                            payloadSha512: remme_utils_1.sha512(payloadBytes),
                        }).finish();
                        signature = this._remmeAccount.sign(transactionHeaderBytes);
                        transaction = protobuf.Transaction.encode({
                            header: transactionHeaderBytes,
                            headerSignature: signature,
                            payload: payloadBytes,
                        }).finish();
                        try {
                            transaction = btoa(String.fromCharCode.apply(String, transaction));
                        }
                        catch (e) {
                            transaction = transaction.toString("base64");
                        }
                        return [2 /*return*/, transaction];
                }
            });
        });
    };
    /**
     * @example
     * ```typescript
     * const sendResponse = await remmeTransaction.send(transaction);
     * console.log(sendRequest.batchId);
     * ```
     * @param {string} transaction
     * @returns {Promise<IBaseTransactionResponse>}
     */
    RemmeTransactionService.prototype.send = function (transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var requestPayload, batchId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestPayload = new models_1.SendTransactionDto(transaction);
                        return [4 /*yield*/, this._remmeApi
                                .sendRequest(remme_api_1.RemmeMethods.transaction, requestPayload)];
                    case 1:
                        batchId = _a.sent();
                        return [2 /*return*/, new models_1.BaseTransactionResponse(this._remmeApi.nodeAddress, this._remmeApi.sslMode, batchId)];
                }
            });
        });
    };
    return RemmeTransactionService;
}());
exports.RemmeTransactionService = RemmeTransactionService;
//# sourceMappingURL=index.js.map