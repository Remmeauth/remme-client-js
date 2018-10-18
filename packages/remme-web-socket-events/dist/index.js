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
exports.RemmeEventsEntity = models_1.RemmeEventsEntity;
exports.RemmeEvents = models_1.RemmeEvents;
var RemmeWebSocketsEvents = /** @class */ (function (_super) {
    __extends(RemmeWebSocketsEvents, _super);
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
        events = this._prepareEvents(events);
        var data = new models_1.RemmeEventsData();
        data.entity = models_1.RemmeEventsEntity.Events;
        data.events = events;
        if (lastKnownBlockId) {
            data.last_known_block_id = lastKnownBlockId;
        }
        return data;
    };
    RemmeWebSocketsEvents.prototype.subscribe = function (data, callback) {
        var eventData = this._generateData(data);
        if (this._socket) {
            _super.prototype.closeWebSocket.call(this);
        }
        this.isEvent = true;
        this.data = eventData;
        _super.prototype.connectToWebSocket.call(this, callback);
    };
    RemmeWebSocketsEvents.prototype.unsubscribe = function () {
        if (this._socket) {
            _super.prototype.closeWebSocket.call(this);
            this._socket = null;
        }
        else {
            throw new Error("WebSocket is not running");
        }
    };
    return RemmeWebSocketsEvents;
}(remme_web_socket_1.RemmeWebSocket));
exports.RemmeWebSocketsEvents = RemmeWebSocketsEvents;
//# sourceMappingURL=index.js.map