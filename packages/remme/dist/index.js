"use strict";
var RemmeCertificate = require("remme-certificate");
var Remme;
(function (Remme) {
    var Client = /** @class */ (function () {
        function Client() {
            this.certificate = new RemmeCertificate.Certificate();
        }
        return Client;
    }());
    Remme.Client = Client;
})(Remme || (Remme = {}));
module.exports = Remme;
//# sourceMappingURL=index.js.map