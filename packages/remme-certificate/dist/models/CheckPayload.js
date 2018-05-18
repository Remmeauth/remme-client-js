"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var remme_utils_1 = require("remme-utils");
var CheckPayload = /** @class */ (function () {
    function CheckPayload(certificate) {
        this.certificate = remme_utils_1.pki.certificateToPem(certificate);
    }
    return CheckPayload;
}());
exports.CheckPayload = CheckPayload;
//# sourceMappingURL=CheckPayload.js.map