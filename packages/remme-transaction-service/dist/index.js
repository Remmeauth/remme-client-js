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
var remme_base_transaction_response_1 = require("remme-base-transaction-response");
var crypto_1 = require("crypto");
var protobuf = require("sawtooth-sdk/protobuf");
var RemmeTransactionService = /** @class */ (function () {
    function RemmeTransactionService(remmeRest, remmeAccount) {
        this._remmeRest = remmeRest;
        this._remmeAccount = remmeAccount;
    }
    RemmeTransactionService.prototype.create = function (settings) {
        return __awaiter(this, void 0, void 0, function () {
            var familyName, familyVersion, inputs, outputs, payloadBytes, batcherPublicKey, transactionHeaderBytes, signature, transaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        familyName = settings.familyName, familyVersion = settings.familyVersion, inputs = settings.inputs, outputs = settings.outputs, payloadBytes = settings.payloadBytes;
                        return [4 /*yield*/, this._remmeRest
                                .getRequest(remme_rest_1.RemmeMethods.nodeKey)];
                    case 1:
                        batcherPublicKey = (_a.sent()).pubkey;
                        transactionHeaderBytes = protobuf.TransactionHeader.encode({
                            familyName: familyName,
                            familyVersion: familyVersion,
                            inputs: inputs.concat([this._remmeAccount.address]),
                            outputs: outputs.concat([this._remmeAccount.address]),
                            signerPublicKey: this._remmeAccount.publicKeyHex,
                            nonce: this.getNonce(),
                            batcherPublicKey: batcherPublicKey,
                            payloadSha512: crypto_1.createHash("sha512").update(payloadBytes).digest("hex"),
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
    RemmeTransactionService.prototype.send = function (transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var apiResult, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._remmeRest
                            .postRequest(remme_rest_1.RemmeMethods.transaction, { transaction: transaction })];
                    case 1:
                        apiResult = _a.sent();
                        result = new remme_base_transaction_response_1.BaseTransactionResponse(this._remmeRest.socketAddress(), this._remmeRest.sslMode());
                        result.batchId = apiResult.batch_id;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    RemmeTransactionService.prototype.getNonce = function () {
        return crypto_1.createHash("sha512").update(new Buffer(Math.floor(Math.random() * 1000))).digest("hex");
    };
    return RemmeTransactionService;
}());
exports.RemmeTransactionService = RemmeTransactionService;
//# sourceMappingURL=index.js.map