"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var oids_1 = require("./oids");
exports.oids = oids_1.oids;
var RemmeFamilyNameAddresses;
(function (RemmeFamilyNameAddresses) {
    RemmeFamilyNameAddresses["Account"] = "112007";
    RemmeFamilyNameAddresses["PublicKey"] = "a23be1";
    RemmeFamilyNameAddresses["Swap"] = "78173b";
})(RemmeFamilyNameAddresses = exports.RemmeFamilyNameAddresses || (exports.RemmeFamilyNameAddresses = {}));
var RemmeFamilyNames;
(function (RemmeFamilyNames) {
    RemmeFamilyNames["Account"] = "account";
    RemmeFamilyNames["PublicKey"] = "pub_key";
    RemmeFamilyNames["Swap"] = "AtomicSwap";
})(RemmeFamilyNames = exports.RemmeFamilyNames || (exports.RemmeFamilyNames = {}));
/**
 * Model that define params into request
 */
var PublicKeyRequest = /** @class */ (function () {
    function PublicKeyRequest(public_key) {
        this.public_key = public_key;
    }
    return PublicKeyRequest;
}());
exports.PublicKeyRequest = PublicKeyRequest;
//# sourceMappingURL=index.js.map