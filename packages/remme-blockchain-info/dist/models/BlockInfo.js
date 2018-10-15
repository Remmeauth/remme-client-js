"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BlockInfo = /** @class */ (function () {
    function BlockInfo(data) {
        this.blockNum = data.block_number;
        this.timestamp = data.timestamp;
        this.previousHeaderSignature = data.previous_header_signature;
        this.headerSignature = data.header_signature;
        this.signerPublicKey = data.signer_public_key;
    }
    return BlockInfo;
}());
exports.BlockInfo = BlockInfo;
//# sourceMappingURL=BlockInfo.js.map