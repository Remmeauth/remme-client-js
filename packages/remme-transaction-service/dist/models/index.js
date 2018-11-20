"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseTransactionResponse_1 = require("./BaseTransactionResponse");
exports.BaseTransactionResponse = BaseTransactionResponse_1.BaseTransactionResponse;
/**
 * DTO for send transaction
 */
var SendTransactionDto = /** @class */ (function () {
    function SendTransactionDto(data) {
        this.data = data;
    }
    return SendTransactionDto;
}());
exports.SendTransactionDto = SendTransactionDto;
/* tslint:disable */
/**
 * DTO for creating transaction:
 * Documentation for building transactions
 * https://sawtooth.hyperledger.org/docs/core/releases/latest/_autogen/sdk_submit_tutorial_js.html#building-the-transaction
 */
/* tslint:enable */
var CreateTransactionDto = /** @class */ (function () {
    function CreateTransactionDto(familyName, familyVersion, inputs, outputs, payloadBytes) {
        this.familyName = familyName;
        this.familyVersion = familyVersion;
        this.inputs = inputs;
        this.outputs = outputs;
        this.payloadBytes = payloadBytes;
    }
    return CreateTransactionDto;
}());
exports.CreateTransactionDto = CreateTransactionDto;
//# sourceMappingURL=index.js.map