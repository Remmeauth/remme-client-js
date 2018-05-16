"use strict";
var remme_rest_1 = require("remme-rest");
var RemmePersonal;
(function (RemmePersonal) {
    var Personal = /** @class */ (function () {
        function Personal(nodeAdress) {
            if (nodeAdress === void 0) { nodeAdress = "localhost:8080"; }
            this._remmeRest = new remme_rest_1.RemmeRest(nodeAdress);
        }
        return Personal;
    }());
    RemmePersonal.Personal = Personal;
})(RemmePersonal || (RemmePersonal = {}));
module.exports = RemmePersonal;
//# sourceMappingURL=index.js.map