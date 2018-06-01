"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RemmeAccount = /** @class */ (function () {
    function RemmeAccount(signer, privateKey) {
        this._signer = signer;
        this.privateKey = privateKey;
        this.remChainAddress = signer.getPublicKey().asHex();
    }
    RemmeAccount.prototype.sign = function (transaction) {
        return this._signer.sign(transaction);
    };
    return RemmeAccount;
}());
exports.RemmeAccount = RemmeAccount;
//# sourceMappingURL=RemmeAccount.js.map