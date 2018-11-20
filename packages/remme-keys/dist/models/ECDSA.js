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
var remme_utils_1 = require("remme-utils");
var secp256k1 = require("secp256k1");
var crypto_1 = require("crypto");
var index_1 = require("./index");
var ECDSA = /** @class */ (function (_super) {
    __extends(ECDSA, _super);
    function ECDSA(_a) {
        var privateKey = _a.privateKey, publicKey = _a.publicKey;
        var _this = _super.call(this) || this;
        if (privateKey && publicKey) {
            _this._privateKey = Buffer.from(privateKey);
            _this._publicKey = Buffer.from(publicKey);
        }
        else if (privateKey) {
            _this._privateKey = Buffer.from(privateKey);
            _this._publicKey = secp256k1.publicKeyCreate(_this._privateKey);
        }
        else if (publicKey) {
            _this._publicKey = publicKey;
        }
        _this._publicKeyHex = remme_utils_1.bytesToHex(_this._publicKey);
        if (_this._privateKey) {
            _this._privateKeyHex = remme_utils_1.bytesToHex(_this._privateKey);
        }
        try {
            _this._publicKeyBase64 = btoa(_this._publicKeyHex);
        }
        catch (e) {
            _this._publicKeyBase64 = Buffer.from(_this._publicKeyHex).toString("base64");
        }
        _this._address = remme_utils_1.generateAddress(remme_utils_1.RemmeFamilyName.PublicKey, _this._publicKeyBase64);
        _this._keyType = index_1.KeyType.ECDSA;
        return _this;
    }
    ECDSA.generateKeyPair = function () {
        var privateKey;
        do {
            privateKey = crypto_1.randomBytes(32);
        } while (!secp256k1.privateKeyVerify(privateKey));
        var publicKey = secp256k1.publicKeyCreate(privateKey);
        return {
            publicKey: publicKey,
            privateKey: privateKey,
        };
    };
    ECDSA.getAddressFromPublicKey = function (publicKey) {
        var publicKeyBase64 = remme_utils_1.bytesToHex(publicKey);
        try {
            publicKeyBase64 = btoa(publicKeyBase64);
        }
        catch (e) {
            publicKeyBase64 = Buffer.from(publicKeyBase64).toString("base64");
        }
        return remme_utils_1.generateAddress(remme_utils_1.RemmeFamilyName.PublicKey, publicKeyBase64);
    };
    ECDSA.prototype.sign = function (data) {
        var dataHash = crypto_1.createHash("sha256").update(data).digest();
        var result = secp256k1.sign(dataHash, this._privateKey);
        return result.signature.toString("hex");
    };
    ECDSA.prototype.verify = function (data, signature) {
        var signatureBytes = Buffer.from(signature, "hex");
        var dataHash = crypto_1.createHash("sha256").update(data).digest();
        return secp256k1.verify(dataHash, signatureBytes, this._publicKey);
    };
    return ECDSA;
}(index_1.KeyDto));
exports.ECDSA = ECDSA;
//# sourceMappingURL=ECDSA.js.map