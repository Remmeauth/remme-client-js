"use strict";
var remme_rest_1 = require("remme-rest");
var remme_certificate_1 = require("remme-certificate");
var remme_token_1 = require("remme-token");
var remme_personal_1 = require("remme-personal");
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
            this.certificate = new remme_certificate_1.RemmeCertificate(this._remmeRest);
            this.token = new remme_token_1.RemmeToken(this._remmeRest);
            this.personal = new remme_personal_1.RemmePersonal(this._remmeRest);
            this.batch = new remme_batch_1.RemmeBatch(this._remmeRest);
            this.swap = new remme_atomic_swap_1.RemmeSwap(this._remmeRest);
            this.personal.setAccount(this.personal.generateAccount(privateKeyHex));
        }
        return Client;
    }());
    Remme.Client = Client;
})(Remme || (Remme = {}));
module.exports = Remme;
//# sourceMappingURL=index.js.map