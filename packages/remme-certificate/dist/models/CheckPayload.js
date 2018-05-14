"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_forge_1 = require("node-forge");
var CheckPayload = /** @class */ (function () {
    function CheckPayload(certificate) {
        this.certificate = node_forge_1.pki.certificateToPem(certificate);
    }
    return CheckPayload;
}());
exports.CheckPayload = CheckPayload;
//# sourceMappingURL=CheckPayload.js.map