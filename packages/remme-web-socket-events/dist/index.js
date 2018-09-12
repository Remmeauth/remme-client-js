"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var remme_web_socket_1 = require("remme-web-socket");
var models_1 = require("./models");
exports.RemmeEventsEntity = models_1.RemmeEventsEntity;
exports.RemmeEvents = models_1.RemmeEvents;
var RemmeWebSocketsEvents = /** @class */ (function () {
    function RemmeWebSocketsEvents(socketAddress, sslMode) {
        this._socketAddress = socketAddress;
        this._sslMode = sslMode;
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
            this._socket.closeWebSocket();
        }
        this._socket = new remme_web_socket_1.RemmeWebSocket(this._socketAddress, this._sslMode);
        this._socket.isEvent = true;
        this._socket.data = eventData;
        this._socket.connectToWebSocket(callback);
    };
    RemmeWebSocketsEvents.prototype.unsubscribe = function () {
        if (this._socket) {
            this._socket.closeWebSocket();
            this._socket = null;
        }
        else {
            throw new Error("WebSocket is not running");
        }
    };
    return RemmeWebSocketsEvents;
}());
exports.RemmeWebSocketsEvents = RemmeWebSocketsEvents;
//# sourceMappingURL=index.js.map