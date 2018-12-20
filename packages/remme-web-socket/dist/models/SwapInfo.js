"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SwapInfo = /** @class */ (function () {
    function SwapInfo(data) {
        this.state = data.state;
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
    return SwapInfo;
}());
exports.SwapInfo = SwapInfo;
//# sourceMappingURL=SwapInfo.js.map