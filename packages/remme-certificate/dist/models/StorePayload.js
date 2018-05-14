"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_forge_1 = require("node-forge");
var StorePayload = /** @class */ (function () {
    function StorePayload(certificate) {
        this.certificate = node_forge_1.pki.certificationRequestToPem(certificate);
    }
    return StorePayload;
}());
exports.StorePayload = StorePayload;
//# sourceMappingURL=StorePayload.js.map