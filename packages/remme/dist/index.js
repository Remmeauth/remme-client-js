"use strict";
var remme_rest_1 = require("remme-rest");
var remme_transaction_service_1 = require("remme-transaction-service");
var remme_certificate_1 = require("remme-certificate");
var remme_token_1 = require("remme-token");
var remme_account_1 = require("remme-account");
var remme_batch_1 = require("remme-batch");
var remme_atomic_swap_1 = require("remme-atomic-swap");
var Remme;
(function (Remme) {
    var Client = /** @class */ (function () {
        function Client(_a) {
            var _b = _a === void 0 ? {
                privateKeyHex: "",
                nodeAddress: "localhost:8080",
                socketAddress: "localhost:9080",
            } : _a, _c = _b.privateKeyHex, privateKeyHex = _c === void 0 ? "" : _c, _d = _b.nodeAddress, nodeAddress = _d === void 0 ? "localhost:8080" : _d, _e = _b.socketAddress, socketAddress = _e === void 0 ? "localhost:9080" : _e;
            this._remmeRest = new remme_rest_1.RemmeRest(nodeAddress, socketAddress);
            this._account = new remme_account_1.RemmeAccount(privateKeyHex);
            this.transaction = new remme_transaction_service_1.RemmeTransactionService(this._remmeRest, this._account);
            this.token = new remme_token_1.RemmeToken(this._remmeRest, this.transaction);
            this.certificate = new remme_certificate_1.RemmeCertificate(this._remmeRest, this.transaction);
            this.batch = new remme_batch_1.RemmeBatch(this._remmeRest);
            this.swap = new remme_atomic_swap_1.RemmeSwap(this._remmeRest);
        }
        Object.defineProperty(Client.prototype, "account", {
            get: function () {
                return this._account;
            },
            set: function (remmeAccount) {
                if (!remmeAccount) {
                    throw new Error("Account is missing in attributes. Please give the account.");
                }
                if (!remmeAccount.privateKeyHex || !remmeAccount.sign || !remmeAccount.publicKeyHex) {
                    throw new Error("Given remmeAccount is not a valid");
                }
                this._account = remmeAccount;
            },
            enumerable: true,
            configurable: true
        });
        Client.generateAccount = function () {
            return new remme_account_1.RemmeAccount();
        };
        return Client;
    }());
    Remme.Client = Client;
})(Remme || (Remme = {}));
module.exports = Remme;
//# sourceMappingURL=index.js.map