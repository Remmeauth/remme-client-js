"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SwapBaseRequest = /** @class */ (function () {
    function SwapBaseRequest(swapId) {
        if (swapId.search(/^[0-9a-f]{64}$/) === -1) {
            throw new Error("Given swapId is not a valid");
        }
        this.swap_id = swapId;
    }
    return SwapBaseRequest;
}());
exports.SwapBaseRequest = SwapBaseRequest;
//# sourceMappingURL=SwapBaseRequest.js.map