"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var remme_web_socket_1 = require("remme-web-socket");
/**
 * Main class for response on transaction request, which contain identifier of batch and communication with WebSockets.
 */
var BaseTransactionResponse = /** @class */ (function (_super) {
    __extends(BaseTransactionResponse, _super);
    /**
     * Get address of node, ssl mode, and identifier of batch.
     * Then implement RemmeWebSocket class and provide data to it.
     * @param {string} nodeAddress
     * @param {boolean} sslMode
     * @param {string} batchId
     */
    function BaseTransactionResponse(nodeAddress, sslMode, batchId) {
        var _this = _super.call(this, nodeAddress, sslMode) || this;
        _this.batchId = batchId;
        _this.data = {
            batch_ids: [
                _this.batchId,
            ],
        };
        return _this;
    }
    return BaseTransactionResponse;
}(remme_web_socket_1.RemmeWebSocket));
exports.BaseTransactionResponse = BaseTransactionResponse;
//# sourceMappingURL=BaseTransactionResponse.js.map