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
var SwapBaseRequest_1 = require("./SwapBaseRequest");
var SwapSetSecretRequest = /** @class */ (function (_super) {
    __extends(SwapSetSecretRequest, _super);
    function SwapSetSecretRequest(swapId, secretLock) {
        var _this = _super.call(this, swapId) || this;
        if (!secretLock) {
            throw new Error("The 'secretLock' was missing in parameters");
        }
        if (secretLock.search(/^[0-9a-f]{64}$/) === -1) {
            throw new Error("Given secretLock is not a valid");
        }
        _this.secret_lock = secretLock;
        return _this;
    }
    return SwapSetSecretRequest;
}(SwapBaseRequest_1.SwapBaseRequest));
exports.SwapSetSecretRequest = SwapSetSecretRequest;
//# sourceMappingURL=SwapSetSecretRequest.js.map