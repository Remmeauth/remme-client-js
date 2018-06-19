"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var websocket_1 = require("websocket");
var models_1 = require("./models");
var WS;
if (typeof window !== "undefined" && window.WebSocket !== "undefined") {
    WS = window.WebSocket;
}
else {
    WS = websocket_1.w3cwebsocket;
}
var BaseTransactionResponse = /** @class */ (function () {
    function BaseTransactionResponse(socketAddress) {
        this.socketAddress = socketAddress;
    }
    BaseTransactionResponse.prototype.connectToWebSocket = function (callback) {
        var _this = this;
        if (this._socket) {
            this.closeWebSocket();
        }
        this._socket = new WS(this._getSubscribeUrl());
        this._socket.onopen = function () {
            _this._socket.send(_this._getSocketQuery());
        };
        this._socket.onmessage = function (e) {
            var response = JSON.parse(e.data);
            if (response.type === "message" &&
                Object.getOwnPropertyNames(response.data).length !== 0) {
                callback(null, new models_1.BatchStatusesDto(response.data.batch_statuses));
            }
        };
        this._socket.onerror = function (err) {
            callback(err);
        };
    };
    BaseTransactionResponse.prototype.closeWebSocket = function () {
        if (!this._socket) {
            throw new Error("WebSocket is not running");
        }
        this._socket.send(this._getSocketQuery(false));
        this._socket.close();
        this._socket = null;
    };
    BaseTransactionResponse.prototype._getSubscribeUrl = function () {
        return "ws://" + this.socketAddress + "/ws";
    };
    BaseTransactionResponse.prototype._getSocketQuery = function (subscribe) {
        if (subscribe === void 0) { subscribe = true; }
        var query = {
            type: "request",
            action: subscribe ? "subscribe" : "unsubscribe",
            entity: "batch_state",
            id: Math.floor(Math.random() * 1000),
            parameters: {
                batch_ids: [
                    this.batchId,
                ],
            },
        };
        return JSON.stringify(query);
    };
    return BaseTransactionResponse;
}());
exports.BaseTransactionResponse = BaseTransactionResponse;
//# sourceMappingURL=index.js.map