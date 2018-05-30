"use strict";
var remme_rest_1 = require("remme-rest");
var remme_certificate_1 = require("remme-certificate");
var remme_token_1 = require("remme-token");
var remme_personal_1 = require("remme-personal");
var remme_batch_1 = require("remme-batch");
var Remme;
(function (Remme) {
    var Client = /** @class */ (function () {
        function Client(nodeAdress, socketAddress, pathToKeyStore) {
            if (nodeAdress === void 0) { nodeAdress = "localhost:8080"; }
            if (socketAddress === void 0) { socketAddress = "localhost:9080"; }
            if (pathToKeyStore === void 0) { pathToKeyStore = ""; }
            this.certificate = new remme_certificate_1.RemmeCertificate(this._remmeRest);
            this.token = new remme_token_1.RemmeToken(this._remmeRest);
            this.personal = new remme_personal_1.RemmePersonal(this._remmeRest, this._pathToKeyStore);
            this.batch = new remme_batch_1.RemmeBatch(this._remmeRest);
            this._remmeRest = new remme_rest_1.RemmeRest(nodeAdress, socketAddress);
            this._pathToKeyStore = pathToKeyStore;
        }
        return Client;
    }());
    Remme.Client = Client;
})(Remme || (Remme = {}));
module.exports = Remme;
//# sourceMappingURL=index.js.map