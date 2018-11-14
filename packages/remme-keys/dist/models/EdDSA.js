"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var remme_protobuf_1 = require("remme-protobuf");
var remme_utils_1 = require("remme-utils");
var index_1 = require("./index");
var EdDSA = /** @class */ (function (_super) {
    __extends(EdDSA, _super);
    function EdDSA(privateKey, publicKey) {
        var _this = _super.call(this) || this;
        if (privateKey && publicKey) {
            _this._privateKey = privateKey;
            _this._publicKey = publicKey;
        }
        else if (privateKey) {
            _this._privateKey = privateKey;
            _this._publicKey = remme_utils_1.forge.pki.ed25519.publicKeyFromPrivateKey(_this._privateKey);
        }
        _this._publicKeyHex = remme_utils_1.bytesToHex(_this._publicKey);
        _this._privateKeyHex = remme_utils_1.bytesToHex(_this._privateKey);
        try {
            _this._publicKeyBase64 = btoa(_this._publicKeyHex);
        }
        catch (e) {
            _this._publicKeyBase64 = Buffer.from(_this._publicKeyHex).toString("base64");
        }
        _this._address = remme_utils_1.generateAddress(remme_utils_1.RemmeFamilyName.PublicKey, _this._publicKeyBase64);
        _this._keyType = remme_protobuf_1.NewPubKeyPayload.PubKeyType.EdDSA;
        return _this;
    }
    EdDSA.generateKeyPair = function (_a) {
        var seed = (_a === void 0 ? {} : _a).seed;
        if (seed) {
            seed = new remme_utils_1.forge.util.ByteBuffer(seed, "utf8");
            return remme_utils_1.forge.pki.ed25519.generateKeyPair({ seed: seed });
        }
        return remme_utils_1.forge.pki.ed25519.generateKeyPair();
    };
    EdDSA.getAddressFromPublicKey = function (publicKey) {
        var publicKeyBase64 = remme_utils_1.bytesToHex(publicKey);
        try {
            publicKeyBase64 = btoa(publicKeyBase64);
        }
        catch (e) {
            publicKeyBase64 = Buffer.from(publicKeyBase64).toString("base64");
        }
        return remme_utils_1.generateAddress(remme_utils_1.RemmeFamilyName.PublicKey, publicKeyBase64);
    };
    EdDSA.prototype.sign = function (data) {
        var signature = remme_utils_1.forge.pki.ed25519.sign({
            message: data,
            encoding: "utf8",
            privateKey: this._privateKey,
        });
        return remme_utils_1.forge.util.bytesToHex(signature);
    };
    EdDSA.prototype.verify = function (signature, data) {
        return remme_utils_1.forge.pki.ed25519.verify({
            message: data,
            encoding: "utf8",
            signature: signature,
            publicKey: this._publicKey,
        });
    };
    return EdDSA;
}(index_1.KeyDto));
exports.EdDSA = EdDSA;
//# sourceMappingURL=EdDSA.js.map