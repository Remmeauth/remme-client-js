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
var remme_protobuf_1 = require("remme-protobuf");
/**
 * Class that work with tokens.
 * Transfer them and getting balance by public key.
 * @example
 * ```typescript
 * const someAccountPublicKeyInHex = "02926476095ea28904c11f22d0da20e999801a267cd3455a00570aa1153086eb13";
 * const someRemmeAddress = generateAddress(RemmeFamilyName.Account, someAccountPublicKeyInHex);
 *
 * const receiverBalance = await remme.token.getBalance(someRemmeAddress);
 * console.log(`Account ${someRemmeAddress} as receiver, balance - ${receiverBalance} REM`);
 *
 * const balance = await remme.token.getBalance(remme.account.address);
 * console.log(`Account ${remme.account.address} as sender, balance - ${balance} REM`);
 *
 * const transactionResult = await remme.token.transfer(someRemmeAddress, 10);
 * console.log(`Sending tokens...BatchId: ${transactionResult.batchId}`);
 *
 * const transactionCallback = async (err, result) => {
 *   if (err) {
 *     console.log(err);
 *     return;
 *   }
 *   console.log("token", result);
 *   if (result.status === "COMMITTED") {
 *     const newBalance = await remme.token.getBalance(someRemmeAddress);
 *     console.log(`Account ${someRemmeAddress} balance - ${newBalance} REM`);
 *     transactionResult.closeWebSocket()
 *   }
 * };
 *
 * transactionResult.connectToWebSocket(transactionCallback);
 * ```
 */
var RemmeToken = /** @class */ (function () {
    /**
     * @example
     * Usage without remme main package
     * ```typescript
     * const remmeApi = new RemmeApi(); // See RemmeRest implementation
     * const remmeAccount = new RemmeAccount(); // See RemmeAccount implementation
     * const remmeTransaction = new RemmeTransactionService(remmeApi, remmeAccount);
     * const remmeToken = new RemmeToken(remmeApi, remmeTransaction);
     * ```
     * @param {IRemmeApi} remmeApi
     * @param {IRemmeTransactionService} remmeTransaction
     */
    function RemmeToken(remmeApi, remmeTransaction) {
        this._familyName = remme_utils_1.RemmeFamilyName.Account;
        this._familyVersion = "0.1";
        this._remmeApi = remmeApi;
        this._remmeTransaction = remmeTransaction;
    }
    /**
     * Transfer tokens from signed public key (remme.account.publicKey) to given public key.
     * Send transaction to REMChain.
     * @example
     * ```typescript
     * const someAccountPublicKeyInHex = "02926476095ea28904c11f22d0da20e999801a267cd3455a00570aa1153086eb13";
     * const someRemmeAddress = generateAddress(RemmeFamilyName.Account, someAccountPublicKeyInHex);
     *
     * const transactionResult = await remme.token.transfer(someRemmeAddress, 10);
     * console.log(`Sending tokens...BatchId: ${transactionResult.batchId}`);
     *
     * const transactionCallback = async (err, result) => {
     *   if (err) {
     *     console.log(err);
     *     return;
     *   }
     *   console.log("token", result);
     *   if (result.status === "COMMITTED") {
     *     const newBalance = await remme.token.getBalance(someRemmeAddress);
     *     console.log(`Account ${someRemmeAddress} balance - ${newBalance} REM`);
     *     transactionResult.closeWebSocket()
     *   }
     * };
     *
     * transactionResult.connectToWebSocket(transactionCallback);
     * ```
     * @param {string} addressTo
     * @param {number} amount
     * @returns {Promise<IBaseTransactionResponse>}
     */
    RemmeToken.prototype.transfer = function (addressTo, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var transferPayload, transactionPayload, transaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        remme_utils_1.checkAddress(addressTo);
                        // checkPublicKey(addressTo);
                        if (!amount) {
                            throw new Error("Amount was not provided, please set the amount");
                        }
                        if (amount <= 0) {
                            throw new Error("Amount must be higher than 0");
                        }
                        transferPayload = remme_protobuf_1.TransferPayload.encode({
                            addressTo: addressTo,
                            value: amount,
                        }).finish();
                        transactionPayload = remme_protobuf_1.TransactionPayload.encode({
                            method: remme_protobuf_1.AccountMethod.Method.TRANSFER,
                            data: transferPayload,
                        }).finish();
                        return [4 /*yield*/, this._remmeTransaction.create({
                                familyName: this._familyName,
                                familyVersion: this._familyVersion,
                                inputs: [addressTo],
                                outputs: [addressTo],
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
    /**
     * Get balance on given account address
     * @example
     * ```typescript
     * const balance = await remme.token.getBalance(remme.account.address);
     * console.log(`Account ${remme.account.address} as sender, balance - ${balance} REM`);
     * ```
     * @param {string} address
     * @returns {Promise<number>}
     */
    RemmeToken.prototype.getBalance = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        remme_utils_1.checkAddress(address);
                        return [4 /*yield*/, this._remmeApi
                                .sendRequest(remme_api_1.RemmeMethods.token, new remme_utils_1.PublicKeyRequest(address))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return RemmeToken;
}());
exports.RemmeToken = RemmeToken;
//# sourceMappingURL=index.js.map