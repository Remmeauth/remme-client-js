"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var remme_utils_1 = require("remme-utils");
var JsonRpcRequest = /** @class */ (function () {
    function JsonRpcRequest(method, params) {
        this.method = method;
        this.params = params;
        this.id = remme_utils_1.sha256((Math.random() * 1000).toString(16));
        this.jsonrpc = "2.0";
    }
    return JsonRpcRequest;
}());
exports.JsonRpcRequest = JsonRpcRequest;
//# sourceMappingURL=JsonRpc.js.map