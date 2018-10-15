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
var Response_1 = require("./Response");
var StateList = /** @class */ (function (_super) {
    __extends(StateList, _super);
    function StateList(data) {
        return _super.call(this, data) || this;
    }
    return StateList;
}(Response_1.BaseResponse));
exports.StateList = StateList;
var State = /** @class */ (function (_super) {
    __extends(State, _super);
    function State(data) {
        return _super.call(this, data) || this;
    }
    return State;
}(Response_1.BaseResponse));
exports.State = State;
//# sourceMappingURL=State.js.map