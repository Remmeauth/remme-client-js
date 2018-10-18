"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var websocket_1 = require("websocket");
var models_1 = require("./models");
exports.Statuses = models_1.Statuses;
/**
 * @hidden
 */
var WS;
if (typeof window !== "undefined" && window.WebSocket !== "undefined") {
    WS = window.WebSocket;
}
else {
    WS = websocket_1.w3cwebsocket;
}
var RemmeWebSocket = /** @class */ (function () {
    function RemmeWebSocket(nodeAddress, sslMode) {
        this.isEvent = false;
        this.nodeAddress = nodeAddress;
        this.sslMode = sslMode;
    }
    RemmeWebSocket.prototype._sendAnError = function (error, callback) {
        this.closeWebSocket();
        callback(error);
    };
    RemmeWebSocket.prototype._getSubscribeUrl = function () {
        var protocol = this.sslMode ? "wss://" : "ws://";
        return "" + protocol + this.nodeAddress + "/ws" + (this.isEvent ? "/events" : "");
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
            if (response.type === "message"
                &&
                    Object.getOwnPropertyNames(response.data).length !== 0) {
                if (response.data.batch_statuses &&
                    response.data.batch_statuses.invalid_transactions &&
                    response.data.batch_statuses.invalid_transactions.length) {
                    _this._sendAnError(new models_1.ErrorMessage(response.data.batch_statuses.invalid_transactions[0]), callback);
                    return;
                }
                callback(null, _this.isEvent ? response.data : new models_1.BatchStatusesDto(response.data.batch_statuses));
            }
            else if (response.type === "error") {
                _this._sendAnError(new models_1.ErrorFromEvent(response.data), callback);
                return;
            }
        };
        this._socket.onerror = function (err) {
            callback(err);
            return;
        };
        // this._socket.onclose = () => {
        //     callback(new Error("Socket connection was closed"));
        //     return;
        // };
    };
    RemmeWebSocket.prototype.closeWebSocket = function () {
        if (!this._socket) {
            throw new Error("WebSocket is not running");
        }
        if (this._socket.readyState === 1) {
            this._socket.send(this._getSocketQuery(false));
        }
        this._socket.close();
        this._socket = null;
    };
    return RemmeWebSocket;
}());
exports.RemmeWebSocket = RemmeWebSocket;
//# sourceMappingURL=index.js.map