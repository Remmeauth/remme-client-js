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
var remme_utils_1 = require("remme-utils");
/**
 * Main class for response on transaction request, which contain identifier of batch and communication with WebSockets.
 */
var BaseTransactionResponse = /** @class */ (function (_super) {
    __extends(BaseTransactionResponse, _super);
    /**
     * Get address of node, ssl mode, and identifier of batch.
     * Then implement RemmeWebSocket class and provide data to it.
     * @param {INetworkConfig} networkConfig;
     * @param {string} batchId
     */
    function BaseTransactionResponse(networkConfig, batchId) {
        var _this = _super.call(this, networkConfig) || this;
        _this._batchId = batchId;
        _this.data = new remme_web_socket_1.RemmeRequestParams({
            events: remme_web_socket_1.RemmeEvents.Batch,
            id: batchId,
        });
        return _this;
    }
    Object.defineProperty(BaseTransactionResponse.prototype, "batchId", {
        /**
         * Identifier of batch that contains sending transaction
         */
        get: function () {
            return this._batchId;
        },
        /**
         * Set batch id. When you provide new batch id to this object, program check web socket connection,
         * if connection is open, program close it and then provide new batch id.
         * And you can connect to web socket again with new batch id.
         * @param {string} value
         */
        set: function (value) {
            if (value.search(remme_utils_1.PATTERNS.HEADER_SIGNATURE) === -1) {
                throw new Error("Given batch id is invalid");
            }
            if (this._socket) {
                _super.prototype.closeWebSocket.call(this);
            }
            this._batchId = value;
            this.data.id = value;
        },
        enumerable: true,
        configurable: true
    });
    return BaseTransactionResponse;
}(remme_web_socket_1.RemmeWebSocket));
exports.BaseTransactionResponse = BaseTransactionResponse;
//# sourceMappingURL=BaseTransactionResponse.js.map