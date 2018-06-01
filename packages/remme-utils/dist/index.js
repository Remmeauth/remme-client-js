"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forge = require("node-forge");
exports.forge = forge;
var websocket_1 = require("websocket");
var models_1 = require("./models");
exports.oids = models_1.oids;
var functions_1 = require("./functions");
exports.hexToBytes = functions_1.hexToBytes;
exports.bytesToHex = functions_1.bytesToHex;
var WS;
if (typeof window !== "undefined" && window.WebSocket !== "undefined") {
    WS = window.WebSocket;
}
else {
    WS = websocket_1.w3cwebsocket;
}
var BaseTransactionResponse = /** @class */ (function () {
    function BaseTransactionResponse(socketAddress) {
        this._socketAddress = "ws://" + socketAddress + "/ws";
    }
    BaseTransactionResponse.prototype.connectToWebSocket = function (callback) {
        var _this = this;
        if (this._socket) {
            this.closeWebSocket();
        }
        this._socket = new WS(this._socketAddress);
        this._socket.onopen = function () {
            _this._socket.send(_this.getSocketQuery());
        };
        this._socket.onmessage = function (e) {
            var response = JSON.parse(e.data);
            if (response.type === "message" && Object.getOwnPropertyNames(response.data).length !== 0) {
                callback(null, response.data.batch_statuses);
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
        this._socket.send(this.getSocketQuery(false));
        this._socket.close();
        this._socket = null;
    };
    BaseTransactionResponse.prototype.getSocketQuery = function (subscribe) {
        if (subscribe === void 0) { subscribe = true; }
        var query = {
            type: "request",
            action: subscribe ? "subscribe" : "unsubscribe",
            entity: "batch_state",
            id: Math.random() * 1000,
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