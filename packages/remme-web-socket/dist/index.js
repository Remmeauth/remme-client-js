"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var websocket_1 = require("websocket");
var models_1 = require("./models");
exports.Events = models_1.Events;
var WS;
if (typeof window !== "undefined" && window.WebSocket !== "undefined") {
    WS = window.WebSocket;
}
else {
    WS = websocket_1.w3cwebsocket;
}
var RemmeWebSocket = /** @class */ (function () {
    function RemmeWebSocket(socketAddress, sslMode) {
        this.isEvent = false;
        this.socketAddress = socketAddress;
        this.sslMode = sslMode;
    }
    RemmeWebSocket.prototype.connectToWebSocket = function (callback) {
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
                if (response.data.batch_statuses && response.data.batch_statuses.invalid_transactions) {
                    _this.closeWebSocket();
                    throw new Error(response.data.batch_statuses.invalid_transactions.message);
                }
                callback(null, _this.isEvent ? response.data : new models_1.BatchStatusesDto(response.data.batch_statuses));
            }
        };
        this._socket.onerror = function (err) {
            callback(err);
        };
    };
    RemmeWebSocket.prototype.closeWebSocket = function () {
        if (!this._socket) {
            throw new Error("WebSocket is not running");
        }
        this._socket.send(this._getSocketQuery(false));
        this._socket.close();
        this._socket = null;
    };
    RemmeWebSocket.prototype._getSubscribeUrl = function () {
        var protocol = this.sslMode ? "wss://" : "ws://";
        return "" + protocol + this.socketAddress + "/ws" + (this.isEvent ? "/events" : "");
    };
    RemmeWebSocket.prototype._getSocketQuery = function (subscribe) {
        if (subscribe === void 0) { subscribe = true; }
        var query = this.isEvent ? {
            action: subscribe ? "subscribe" : "unsubscribe",
            data: this.data,
        } : {
            type: "request",
            action: subscribe ? "subscribe" : "unsubscribe",
            entity: "batch_state",
            id: Math.floor(Math.random() * 1000),
            parameters: this.data,
        };
        return JSON.stringify(query);
    };
    return RemmeWebSocket;
}());
exports.RemmeWebSocket = RemmeWebSocket;
//# sourceMappingURL=index.js.map