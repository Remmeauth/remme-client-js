"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var websocket_1 = require("websocket");
var models_1 = require("./models");
exports.BatchInfoDto = models_1.BatchInfoDto;
exports.BatchStatus = models_1.BatchStatus;
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
// TODO Refactor this class for receiving data. Now we return data without covered it to some class.
/* tslint:disable */
/**
 * Class that work with sockets. Class can be used for inheritance.
 * This class is used for response on transaction sending.
 * Each method that return batchId, for truth return class that inherit from RemmeWebSocket with preset data.
 * So for example:
 * @example
 * ```typescript
 * const remme = new Remme.Client();
 * const someRemmeAddress = "03c2e53acce583c8bb2382319f4dee3e816b67f3a733ef90fe3329062251d0c638";
 * const transactionResult = await remme.token.transfer(someRemmeAddress, 10);
 *
 * /* transactionResult is inherit from RemmeWebSocket and this.data = {
 *          batch_ids: [
 *             transactionResult.batchId,
 *          ],
 *      };
 * *\/ so you can connectToWebSocket easy. Just:
 *
 * transactionResult.connectToWebSocket((err: Error, res: any) => {
 *     if (err) {
 *         console.log(err);
 *         return;
 *     }
 *     console.log(res);
 *     mySocketConnection.closeConnection();
 * });
 * ```
 *
 * But you also can use your class for work with WebSockets. Just inherit it from RemmeWebSocket, like this:
 * ```typescript
 * class mySocketConnection extends RemmeWebSocket {
 *      constructor({nodeAddress, sslMode, data}) {
 *          super(nodeAddress, sslMode);
 *          this.data = data;
 *      }
 * }
 *
 * const remmeWebSocket = new mySocketConnection({
 *      nodeAddress: "localhost:8080",
 *      sslMode: false,
 *      data: {
 *          batch_ids: [
 *             transactionResult.batchId,
 *          ],
 *      }
 * });
 *
 * mySocketConnection.connectToWebSocket((err: Error, res: any) => {
 *     if (err) {
 *         console.log(err);
 *         return;
 *     }
 *     console.log(res);
 *     mySocketConnection.closeConnection();
 * });
 * ```
 */
/* tslint:enable */
var RemmeWebSocket = /** @class */ (function () {
    /**
     * Implement RemmeWebSocket by providing node address and ssl mode.
     * @example
     * ```typescript
     * const remmeWebSocket = new RemmeWebSocket(nodeAddress, sslMode);
     * ```
     * @param {string} nodeAddress
     * @param {boolean} sslMode
     */
    function RemmeWebSocket(nodeAddress, sslMode) {
        this.isEvent = false;
        this._nodeAddress = nodeAddress;
        this._sslMode = sslMode;
    }
    RemmeWebSocket.prototype._sendAnError = function (error, callback) {
        this.closeWebSocket();
        callback(error);
    };
    RemmeWebSocket.prototype._getSubscribeUrl = function () {
        var protocol = this.sslMode ? "wss://" : "ws://";
        return "" + protocol + this.nodeAddress + "/ws" + (this.isEvent ? "/events" : "");
    };
    RemmeWebSocket.prototype._getSocketQuery = function (isSubscribe) {
        if (isSubscribe === void 0) { isSubscribe = true; }
        if (!this.data) {
            throw new Error("Data for subscribe was not provided");
        }
        var query = this.isEvent ? {
            action: isSubscribe ? "subscribe" : "unsubscribe",
            data: this.data,
        } : {
            type: "request",
            action: isSubscribe ? "subscribe" : "unsubscribe",
            entity: "batch_state",
            id: Math.floor(Math.random() * 1000),
            parameters: this.data,
        };
        return JSON.stringify(query);
    };
    Object.defineProperty(RemmeWebSocket.prototype, "nodeAddress", {
        /**
         * Get node address that was provided by user
         * @returns {string}
         */
        get: function () {
            return this._nodeAddress;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemmeWebSocket.prototype, "sslMode", {
        /**
         * Get ssl mode that was provided by user
         * @returns {string}
         */
        get: function () {
            return this._sslMode;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Method for connect to WebSocket.
     * In this method implement new WebSocket instance and provided some listeners for onopen, onmessage, onclose.
     * This method get callback that will be called when get events: onmessage, onclose.
     * For this method you should set property data.
     * remmeWebSocket.connectToWebSocket((err: Error, res: any) => {
     *     if (err) {
     *         console.log(err);
     *         return;
     *     }
     *     console.log(res);
     *     remmeWebSocket.closeConnection();
     * });
     * @param {(err: Error, res?: any) => void} callback
     */
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
                callback(null, _this.isEvent ? response.data : new models_1.BatchInfoDto(response.data.batch_statuses));
            }
            else if (response.type === "error") {
                _this._sendAnError(new models_1.ErrorFromEvent(response.data), callback);
                return;
            }
        };
        this._socket.onclose = function (e) {
            if (e.code !== 1000) {
                callback(new Error(e.reason));
            }
            return;
        };
    };
    /**
     * Call this method when your connection is open for close it.
     */
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