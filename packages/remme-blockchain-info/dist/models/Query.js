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
var BaseQuery = /** @class */ (function () {
    function BaseQuery(query) {
        if (query.head && query.head.search(/[a-f0-9]{128}/) === -1) {
            throw new Error("Parameter \"head\" not a valid");
        }
        else {
            this.head = query.head;
        }
        if (query.start && (query.start.search(/^0x[0-9]{16}/) !== -1 || query.start.search(/[a-f0-9]{128}/) !== -1)) {
            this.start = query.start;
        }
        else {
            throw new Error("Parameter \"start\" not a valid");
        }
        this.limit = query.limit;
        this.reverse = query.reverse ? "" : "false";
    }
    return BaseQuery;
}());
exports.BaseQuery = BaseQuery;
var StateQuery = /** @class */ (function (_super) {
    __extends(StateQuery, _super);
    function StateQuery(query) {
        var _this = _super.call(this, query) || this;
        if (query.start && query.start.search(/[a-f0-9]{70}/) === -1) {
            throw new Error("Parameter \"start\" need to a valid");
        }
        else {
            _this.address = query.address;
        }
        return _this;
    }
    return StateQuery;
}(BaseQuery));
exports.StateQuery = StateQuery;
//# sourceMappingURL=Query.js.map