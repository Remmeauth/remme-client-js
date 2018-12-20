"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RemmeRequestParams = /** @class */ (function () {
    function RemmeRequestParams(data) {
        this.event_type = data.events;
        this.address = data.address;
        this.id = data.id;
        this.from_block = data.lastKnownBlockId;
    }
    return RemmeRequestParams;
}());
exports.RemmeRequestParams = RemmeRequestParams;
//# sourceMappingURL=RemmeRequestParams.js.map