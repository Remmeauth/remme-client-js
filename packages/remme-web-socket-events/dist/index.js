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
exports.RemmeEvents = remme_web_socket_1.RemmeEvents;
/**
 * Class for subscribing to events from WebSocket.
 * Available types for subscribing is covered in
 * https://docs.remme.io/remme-core/docs/remme-ws-events.html#registered-events
 * @example
 * ```typescript
 * import { RemmeWebSocketsEvents, RemmeEvents } from "remme-web-socket-events";
 * const remmeEvents = new RemmeWebSocketsEvents("localhost:8080", false);
 * remmeEvents.subscribe({
 *      events: RemmeEvents.AtomicSwap
 * }, (err: Error, res: any) => {
 *      console.log(err);
 *      console.log(res);
 *      remmeEvents.unsubscribe();
 * });
 * ```
 */
var RemmeWebSocketsEvents = /** @class */ (function (_super) {
    __extends(RemmeWebSocketsEvents, _super);
    /**
     * Implementation of RemmeWebSocketsEvents;
     * @example
     * ```typescript
     * const remmeEvents = new RemmeWebSocketsEvents("localhost:8080", false);
     * ```
     * @param {string} nodeAddress
     * @param {boolean} sslMode
     */
    function RemmeWebSocketsEvents(nodeAddress, sslMode) {
        return _super.call(this, nodeAddress, sslMode) || this;
    }
    /**
     * Subscribing to events from WebSocket.
     * Available types for subscribing is covered in
     * https://docs.remme.io/remme-core/docs/remme-ws-events.html#registered-events
     * @example
     * You can subscribe on events about Swap
     * ```typescript
     * remmeEvents.subscribe({
     *      events: RemmeEvents.AtomicSwap
     * }, (err: Error, res: any) => {
     *      console.log(err);
     *      console.log(res);
     * });
     * ```
     * You can subscribe on events about Batch
     * ```typescript
     * remmeEvents.subscribe({
     *      events: RemmeEvents.Batch
     * }, (err: Error, res: any) => {
     *      console.log(err);
     *      console.log(res);
     * });
     * ```
     */
    RemmeWebSocketsEvents.prototype.subscribe = function (data, callback) {
        if (this._socket) {
            _super.prototype.closeWebSocket.call(this);
        }
        switch (data.events) {
            case remme_web_socket_1.RemmeEvents.Batch: {
                if (!data.id) {
                    throw new Error("'id' is required");
                }
                break;
            }
            case remme_web_socket_1.RemmeEvents.Transfer: {
                if (!data.address) {
                    throw new Error("'address' is required");
                }
                break;
            }
        }
        this.data = new remme_web_socket_1.RemmeRequestParams(data);
        _super.prototype.connectToWebSocket.call(this, callback);
    };
    /**
     * Unsubscribing from events.
     * Regardless of how many events you subscribed to, you always unsubscribe from all
     * @example
     * ```typescript
     * remmeEvents.unsubscribe();
     * ```
     */
    RemmeWebSocketsEvents.prototype.unsubscribe = function () {
        if (this._socket) {
            _super.prototype.closeWebSocket.call(this);
        }
        else {
            throw new Error("WebSocket is not running");
        }
    };
    return RemmeWebSocketsEvents;
}(remme_web_socket_1.RemmeWebSocket));
exports.RemmeWebSocketsEvents = RemmeWebSocketsEvents;
//# sourceMappingURL=index.js.map