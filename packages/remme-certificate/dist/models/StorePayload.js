"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var remme_utils_1 = require("remme-utils");
var StorePayload = /** @class */ (function () {
    function StorePayload(certificate) {
        this.certificate = remme_utils_1.pki.certificationRequestToPem(certificate);
    }
    return StorePayload;
}());
exports.StorePayload = StorePayload;
//# sourceMappingURL=StorePayload.js.map