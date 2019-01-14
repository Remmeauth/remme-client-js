"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var websocket_1 = require("websocket");
var remme_utils_1 = require("remme-utils");
var models_1 = require("./models");
exports.BatchInfoDto = models_1.BatchInfoDto;
exports.JsonRpcRequest = models_1.JsonRpcRequest;
exports.RemmeEvents = models_1.RemmeEvents;
exports.RemmeRequestParams = models_1.RemmeRequestParams;
exports.BatchStatus = models_1.BatchStatus;
exports.SwapState = models_1.SwapState;
exports.SwapInfoDto = models_1.SwapInfoDto;
exports.SwapInfo = models_1.SwapInfo;
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
 * /* transactionResult is inherit from RemmeWebSocket and
 *      this.data = {
 *          event_type: "batch",
 *          id: transactionResult.batchId,
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
 *      constructor({networkConfig, data}) {
 *          super(networkConfig);
 *          this.data = data;
 *      }
 * }
 *
 * const remmeWebSocket = new mySocketConnection({
 *      networkConfig: {
 *          nodeAddress: "localhost:8080",
 *          sslMode: false
 *      },
 *      data: {
 *          event_type: "batch",
 *          id: transactionResult.batchId,
 *      }
 * });
 *
 * remmeWebSocket.connectToWebSocket((err: Error, res: any) => {
 *     if (err) {
 *         console.log(err);
 *         return;
 *     }
 *     console.log(res);
 *     mySocketConnection.closeWebSocket();
 * });
 * ```
 */
/* tslint:enable */
var RemmeWebSocket = /** @class */ (function () {
    /**
     * Implement RemmeWebSocket by providing node address and ssl mode.
     * @example
     * ```typescript
     * const remmeWebSocket = new RemmeWebSocket(networkConfig);
     * ```
     * @param {INetworkConfig} networkConfig
     */
    function RemmeWebSocket(networkConfig) {
        this._map = (_a = {},
            _a[models_1.RemmeEvents.Batch] = function (data) { return new models_1.BatchInfoDto(data); },
            _a[models_1.RemmeEvents.AtomicSwap] = function (data) { return new models_1.SwapInfo(data); },
            _a[models_1.RemmeEvents.Blocks] = function (data) { return new models_1.BlockInfoDto(data); },
            _a[models_1.RemmeEvents.Transfer] = function (data) { return new models_1.TransferInfoDto(data); },
            _a);
        remme_utils_1.validateNodeConfig(networkConfig);
        this._networkConfig = networkConfig;
        var _a;
    }
    RemmeWebSocket.prototype._sendAnError = function (error, callback) {
        this.closeWebSocket();
        callback(error);
    };
    RemmeWebSocket.prototype._getSubscribeUrl = function () {
        var _a = this._networkConfig, nodeAddress = _a.nodeAddress, sslMode = _a.sslMode;
        var protocol = sslMode ? "wss://" : "ws://";
        return "" + protocol + nodeAddress + "/";
    };
    RemmeWebSocket.prototype._getSocketQuery = function (isSubscribe) {
        if (isSubscribe === void 0) { isSubscribe = true; }
        if (!this.data) {
            throw new Error("Data for subscribe was not provided");
        }
        var method = isSubscribe ? models_1.RemmeMethods.Subscribe : models_1.RemmeMethods.Unsubscribe;
        return JSON.stringify(new models_1.JsonRpcRequest(method, this.data));
    };
    Object.defineProperty(RemmeWebSocket.prototype, "networkConfig", {
        /**
         * Get network config that was provided by user
         * @returns {INetworkConfig}
         */
        get: function () {
            return this._networkConfig;
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
            var result = response.result, error = response.error;
            if (error) {
                _this._sendAnError(new models_1.ErrorFromEvent(response.error), callback);
                return;
            }
            if (typeof result !== "string") {
                if (result.event_type === models_1.RemmeEvents.Batch &&
                    result.attributes.status === models_1.BatchStatus.Invalid) {
                    _this._sendAnError(new models_1.ErrorMessage(result.attributes), callback);
                    return;
                }
                callback(null, _this._map[result.event_type](result.attributes));
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