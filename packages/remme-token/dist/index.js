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
var RemmeToken = /** @class */ (function () {
    function RemmeToken(remmeRest, remmeTransaction) {
        this.familyName = "account";
        this.familyVersion = "0.1";
        this._remmeRest = remmeRest;
        this._remmeTransaction = remmeTransaction;
    }
    RemmeToken.prototype.transfer = function (publicKeyTo, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var receiverAddress, transferPayload, transactionPayload, transaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (publicKeyTo.search(/^[0-9a-f]{66}$/) === -1) {
                            throw new Error("Given PublicKey is not a valid");
                        }
                        if (amount <= 0) {
                            throw new Error("amount must be higher than 0");
                        }
                        receiverAddress = remme_utils_1.getAddressFromData(this.familyName, publicKeyTo);
                        transferPayload = remme_protobuf_1.TransferPayload.encode({
                            addressTo: receiverAddress,
                            value: amount,
                        }).finish();
                        transactionPayload = remme_protobuf_1.TransactionPayload.encode({
                            method: 0,
                            data: transferPayload,
                        }).finish();
                        return [4 /*yield*/, this._remmeTransaction.create({
                                familyName: this.familyName,
                                familyVersion: this.familyVersion,
                                inputs: [receiverAddress],
                                outputs: [receiverAddress],
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
    RemmeToken.prototype.getBalance = function (publicKeyTo) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (publicKeyTo.search(/^[0-9a-f]{66}$/) === -1) {
                            throw new Error("Given PublicKey is not a valid");
                        }
                        return [4 /*yield*/, this._remmeRest
                                .getRequest(remme_rest_1.RemmeMethods.token, publicKeyTo)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.balance];
                }
            });
        });
    };
    return RemmeToken;
}());
exports.RemmeToken = RemmeToken;
//# sourceMappingURL=index.js.map