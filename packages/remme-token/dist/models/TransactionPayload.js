"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var remme_utils_1 = require("remme-utils");
var TransactionPayload = /** @class */ (function () {
    function TransactionPayload(publicKeyTo, amount) {
        this.pub_key_to = remme_utils_1.pki.publicKeyToPem(publicKeyTo);
        this.amount = amount;
    }
    return TransactionPayload;
}());
exports.TransactionPayload = TransactionPayload;
//# sourceMappingURL=TransactionPayload.js.map