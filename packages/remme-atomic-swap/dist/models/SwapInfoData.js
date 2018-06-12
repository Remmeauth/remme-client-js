"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SwapInfoData = /** @class */ (function () {
    function SwapInfoData(data) {
        this.isClosed = data.is_closed;
        this.isApproved = data.is_approved;
        this.receiverAddress = data.receiver_address;
        this.amount = data.amount;
        this.email = data.email_address_encrypted_optional;
        this.secretLock = data.secret_lock;
        this.secretKey = data.secret_key;
        this.createdAt = data.created_at;
        this.isInitiator = data.is_initiator;
        this.senderAddress = data.sender_address;
        this.senderAddressNonLocal = data.sender_address_non_local;
        this.swapId = data.swap_id;
    }
    return SwapInfoData;
}());
exports.SwapInfoData = SwapInfoData;
//# sourceMappingURL=SwapInfoData.js.map