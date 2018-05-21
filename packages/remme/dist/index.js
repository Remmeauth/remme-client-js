"use strict";
var remme_rest_1 = require("remme-rest");
var remme_certificate_1 = require("remme-certificate");
var remme_token_1 = require("remme-token");
var remme_personal_1 = require("remme-personal");
var Remme;
(function (Remme) {
    var Client = /** @class */ (function () {
        function Client(nodeAdress) {
            if (nodeAdress === void 0) { nodeAdress = "localhost:8080"; }
            this.certificate = new remme_certificate_1.RemmeCertificate(this._remmeRest);
            this.token = new remme_token_1.RemmeToken(this._remmeRest);
            this.personal = new remme_personal_1.RemmePersonal(this._remmeRest);
            this._remmeRest = new remme_rest_1.RemmeRest(nodeAdress);
        }
        return Client;
    }());
    Remme.Client = Client;
})(Remme || (Remme = {}));
module.exports = Remme;
//# sourceMappingURL=index.js.map