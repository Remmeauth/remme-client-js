"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var remme_utils_1 = require("remme-utils");
var RemmeEvents_1 = require("./RemmeEvents");
var RemmeRequestParams = /** @class */ (function () {
    function RemmeRequestParams(data) {
        this.event_type = data.events;
        switch (true) {
            case this.event_type === RemmeEvents_1.RemmeEvents.Batch && !remme_utils_1.PATTERNS.HEADER_SIGNATURE.test(data.id):
            case this.event_type === RemmeEvents_1.RemmeEvents.AtomicSwap && data.id && !remme_utils_1.PATTERNS.HEADER_SIGNATURE.test(data.id):
            case data.id && typeof data.id !== "string":
                throw new Error("'id' is not correct or not provide");
        }
        this.id = data.id;
        if (this.event_type === RemmeEvents_1.RemmeEvents.Transfer && (!data.address || !remme_utils_1.PATTERNS.ADDRESS.test(data.address) || typeof data.address !== "string")) {
            throw new Error("'address' is not correct or not provide");
        }
        this.address = data.address;
        if (data.lastKnownBlockId && (typeof data.lastKnownBlockId !== "string" || !remme_utils_1.PATTERNS.HEADER_SIGNATURE.test(data.lastKnownBlockId))) {
            throw new Error("'lastKnownBlockId' is not correct or not provide");
        }
        this.from_block = data.lastKnownBlockId;
    }
    return RemmeRequestParams;
}());
exports.RemmeRequestParams = RemmeRequestParams;
//# sourceMappingURL=RemmeRequestParams.js.map