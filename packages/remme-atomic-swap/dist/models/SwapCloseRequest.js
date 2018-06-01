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
var SwapCloseRequest = /** @class */ (function (_super) {
    __extends(SwapCloseRequest, _super);
    function SwapCloseRequest(swapId, secretKey) {
        var _this = _super.call(this, swapId) || this;
        if (!secretKey) {
            throw new Error("The 'secretKey' was missing in parameters");
        }
        if (secretKey.search(/^[0-9a-f]{64}$/) === -1) {
            throw new Error("Given secretKey is not a valid");
        }
        _this.secret_key = secretKey;
        return _this;
    }
    return SwapCloseRequest;
}(SwapBaseRequest_1.SwapBaseRequest));
exports.SwapCloseRequest = SwapCloseRequest;
//# sourceMappingURL=SwapCloseRequest.js.map