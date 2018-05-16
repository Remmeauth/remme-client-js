"use strict";
var RemmeCertificate = require("remme-certificate");
var RemmeToken = require("remme-token");
var remme_rest_1 = require("remme-rest");
var Remme;
(function (Remme) {
    var Client = /** @class */ (function () {
        function Client(nodeAdress) {
            if (nodeAdress === void 0) { nodeAdress = "localhost:8080"; }
            this.certificate = new RemmeCertificate.Certificate(this._remmeRest);
            this.token = new RemmeToken.Token(this._remmeRest);
            this._remmeRest = new remme_rest_1.RemmeRest(nodeAdress);
        }
        return Client;
    }());
    Remme.Client = Client;
})(Remme || (Remme = {}));
module.exports = Remme;
//# sourceMappingURL=index.js.map