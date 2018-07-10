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
var TransactionList = /** @class */ (function (_super) {
    __extends(TransactionList, _super);
    function TransactionList(data) {
        return _super.call(this, data) || this;
    }
    return TransactionList;
}(Response_1.BaseResponse));
exports.TransactionList = TransactionList;
var Transaction = /** @class */ (function (_super) {
    __extends(Transaction, _super);
    function Transaction(data) {
        return _super.call(this, data) || this;
    }
    return Transaction;
}(Response_1.BaseResponse));
exports.Transaction = Transaction;
//# sourceMappingURL=Transactions.js.map