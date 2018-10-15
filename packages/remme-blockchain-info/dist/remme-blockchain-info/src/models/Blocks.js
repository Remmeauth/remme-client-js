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
var BlockList = /** @class */ (function (_super) {
    __extends(BlockList, _super);
    function BlockList(data) {
        return _super.call(this, data) || this;
    }
    return BlockList;
}(Response_1.BaseResponse));
exports.BlockList = BlockList;
var Block = /** @class */ (function (_super) {
    __extends(Block, _super);
    function Block(data) {
        return _super.call(this, data) || this;
    }
    return Block;
}(Response_1.BaseResponse));
exports.Block = Block;
//# sourceMappingURL=Blocks.js.map