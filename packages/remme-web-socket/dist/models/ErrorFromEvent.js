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
var ErrorFromEvent = /** @class */ (function (_super) {
    __extends(ErrorFromEvent, _super);
    function ErrorFromEvent(data) {
        var _this = _super.call(this, data.info) || this;
        _this.status = exports.StatusEvent[data.status];
        return _this;
    }
    return ErrorFromEvent;
}(Error));
exports.ErrorFromEvent = ErrorFromEvent;
exports.StatusEvent = {
    10: "SUBSCRIBED",
    11: "UNSUBSCRIBED",
    100: "MALFORMED_JSON",
    101: "MISSING_ACTION",
    102: "INVALID_ACTION",
    103: "MISSING_ID",
    104: "MISSING_PARAMETERS",
    105: "INVALID_PARAMS",
    106: "INVALID_ENTITY",
    107: "MISSING_ENTITY",
    108: "MESSAGE_ID_EXISTS",
    109: "MISSING_TYPE",
    110: "NO_VALIDATOR",
    111: "MISSING_DATA",
    112: "WRONG_EVENT_TYPE",
    113: "ALREADY_SUBSCRIBED",
    114: "EVENTS_NOT_PROVIDED",
    200: "BATCH_RESPONSE",
};
//# sourceMappingURL=ErrorFromEvent.js.map