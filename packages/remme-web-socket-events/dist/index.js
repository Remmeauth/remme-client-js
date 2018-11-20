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
var models_1 = require("./models");
exports.RemmeEvents = models_1.RemmeEvents;
/**
 * Class for subscribing to events from WebSocket.
 * Available types for subscribing is covered in
 * https://docs.remme.io/remme-core/docs/remme-ws-events.html#registered-events
 * @example
 * ```typescript
 * import { RemmeWebSocketsEvents, RemmeEvents } from "remme-web-socket-events";
 * const remmeEvents = new RemmeWebSocketsEvents("localhost:8080", false);
 * remmeEvents.subscribe({
 *      events: RemmeEvents.SwapInit
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
    RemmeWebSocketsEvents.prototype._prepareEvents = function (events) {
        if (typeof events !== "object") {
            if (events === models_1.RemmeEvents.SwapAll) {
                events = [
                    models_1.RemmeEvents.SwapInit,
                    models_1.RemmeEvents.SwapSetSecretLock,
                    models_1.RemmeEvents.SwapApprove,
                    models_1.RemmeEvents.SwapExpire,
                    models_1.RemmeEvents.SwapClose,
                ];
            }
            else {
                events = [events];
            }
        }
        else {
            events = events.filter(function (item) { return item !== models_1.RemmeEvents.SwapAll; });
        }
        return events;
    };
    RemmeWebSocketsEvents.prototype._generateData = function (_a) {
        var events = _a.events, lastKnownBlockId = _a.lastKnownBlockId;
        var data = new models_1.RemmeEventsData();
        data.entity = models_1.RemmeEventsEntity.Events;
        data.events = this._prepareEvents(events);
        if (lastKnownBlockId) {
            data.last_known_block_id = lastKnownBlockId;
        }
        return data;
    };
    /**
     * Subscribing to events from WebSocket.
     * Available types for subscribing is covered in
     * https://docs.remme.io/remme-core/docs/remme-ws-events.html#registered-events
     * @example
     * You can subscribe on all events about swap
     * ```typescript
     * remmeEvents.subscribe({
     *      events: RemmeEvents.SwapAll
     * }, (err: Error, res: any) => {
     *      console.log(err);
     *      console.log(res);
     * });
     * ```
     * You can subscribe on one event
     * ```typescript
     * remmeEvents.subscribe({
     *      events: RemmeEvents.SwapInit
     * }, (err: Error, res: any) => {
     *      console.log(err);
     *      console.log(res);
     * });
     * ```
     * Also you can subscribe on several events
     * ```typescript
     * remmeEvents.subscribe({
     *      events: [ RemmeEvents.SwapInit, RemmeEvents.SwapClose ]
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
        this.isEvent = true;
        this.data = this._generateData(data);
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