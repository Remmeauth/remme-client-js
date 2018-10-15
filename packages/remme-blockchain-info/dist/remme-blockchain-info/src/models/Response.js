"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseResponse = /** @class */ (function () {
    function BaseResponse(data) {
        var _this = this;
        Object.entries(data).map(function (_a) {
            var key = _a[0], value = _a[1];
            if (BaseResponse.hasOwnProperty(key)) {
                _this[key] = value;
            }
        });
    }
    return BaseResponse;
}());
exports.BaseResponse = BaseResponse;
//# sourceMappingURL=Response.js.map