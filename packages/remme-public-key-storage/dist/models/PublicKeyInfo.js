"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Model that return to user which want to see information about public key (publicKeyStorage.getInfo)
 */
var PublicKeyInfo = /** @class */ (function () {
    function PublicKeyInfo(data) {
        this.ownerPublicKey = data.owner_public_key;
        this.address = data.address;
        this.isRevoked = data.is_revoked;
        this.isValid = data.is_valid;
        this.validFrom = data.valid_from;
        this.validTo = data.valid_to;
        this.entityHash = data.entity_hash;
        this.entityHashSignature = data.entity_hash_signature;
        this.type = data.type;
    }
    return PublicKeyInfo;
}());
exports.PublicKeyInfo = PublicKeyInfo;
//# sourceMappingURL=PublicKeyInfo.js.map