"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var remme_utils_1 = require("remme-utils");
var BalancePayload = /** @class */ (function () {
    function BalancePayload(publicKeyTo) {
        this.pub_key_user = remme_utils_1.pki.publicKeyToPem(publicKeyTo);
    }
    return BalancePayload;
}());
exports.BalancePayload = BalancePayload;
//# sourceMappingURL=BalancePayload.js.map