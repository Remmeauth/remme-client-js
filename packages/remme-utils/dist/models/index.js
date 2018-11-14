"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var oids_1 = require("./oids");
exports.oids = oids_1.oids;
/**
 * https://sawtooth.hyperledger.org/docs/core/releases/latest/architecture/global_state.html#radix-addresses
 * First 6 symbols that belongs to family name.
 */
var RemmeNamespace;
(function (RemmeNamespace) {
    RemmeNamespace["Account"] = "112007";
    RemmeNamespace["PublicKey"] = "a23be1";
    RemmeNamespace["Swap"] = "78173b";
})(RemmeNamespace = exports.RemmeNamespace || (exports.RemmeNamespace = {}));
/**
 * All family names that defined into remChain.
 */
var RemmeFamilyName;
(function (RemmeFamilyName) {
    RemmeFamilyName["Account"] = "account";
    RemmeFamilyName["PublicKey"] = "pub_key";
    RemmeFamilyName["Swap"] = "AtomicSwap";
})(RemmeFamilyName = exports.RemmeFamilyName || (exports.RemmeFamilyName = {}));
/**
 * Model that define public key params into request
 */
var PublicKeyRequest = /** @class */ (function () {
    function PublicKeyRequest(public_key_address) {
        this.public_key_address = public_key_address;
    }
    return PublicKeyRequest;
}());
exports.PublicKeyRequest = PublicKeyRequest;
//# sourceMappingURL=index.js.map