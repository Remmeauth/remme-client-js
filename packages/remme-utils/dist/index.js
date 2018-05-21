"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forge = require("node-forge");
exports.forge = forge;
var BaseTransactionResponse = /** @class */ (function () {
    function BaseTransactionResponse(socket) {
        this._socket = socket;
    }
    BaseTransactionResponse.prototype.closeConnection = function () {
        return;
    };
    BaseTransactionResponse.prototype.connectToWebSocket = function () {
        return;
    };
    return BaseTransactionResponse;
}());
exports.BaseTransactionResponse = BaseTransactionResponse;
//# sourceMappingURL=index.js.map