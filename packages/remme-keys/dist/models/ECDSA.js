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
var crypto_1 = require("crypto");
var elliptic_1 = require("elliptic");
var BN = require("bn.js");
var index_1 = require("./index");
var ec = new elliptic_1.ec("secp256k1");
var ECDSA = /** @class */ (function (_super) {
    __extends(ECDSA, _super);
    function ECDSA(_a) {
        var privateKey = _a.privateKey, publicKey = _a.publicKey;
        var _this = _super.call(this) || this;
        if (privateKey && publicKey) {
            _this._privateKey = privateKey;
            _this._publicKey = publicKey;
        }
        else if (privateKey) {
            _this._privateKey = privateKey;
            _this._publicKey = remme_utils_1.hexToBytes(ec.keyFromPrivate(privateKey)
                .getPublic(true, "hex"));
        }
        else if (publicKey) {
            _this._publicKey = publicKey;
        }
        _this._publicKeyHex = remme_utils_1.bytesToHex(_this._publicKey);
        if (_this._privateKey) {
            _this._privateKeyHex = remme_utils_1.bytesToHex(_this._privateKey);
        }
        _this._address = remme_utils_1.generateAddress(remme_utils_1.RemmeFamilyName.PublicKey, _this._publicKey);
        _this._keyType = index_1.KeyType.ECDSA;
        return _this;
    }
    ECDSA.generateKeyPair = function () {
        var keys = ec.genKeyPair();
        return {
            publicKey: remme_utils_1.hexToBytes(keys.getPublic(true, "hex")),
            privateKey: remme_utils_1.hexToBytes(keys.getPrivate("hex")),
        };
    };
    ECDSA.getAddressFromPublicKey = function (publicKey) {
        return remme_utils_1.generateAddress(remme_utils_1.RemmeFamilyName.PublicKey, publicKey);
    };
    ECDSA.prototype.sign = function (data) {
        if (!this._privateKey) {
            throw new Error("No private key to sign");
        }
        var dataHash = crypto_1.createHash("sha256").update(data).digest("hex");
        var signature = ec.sign(dataHash, this._privateKey, "hex", {
            canonical: true,
        });
        return remme_utils_1.bytesToHex(signature.r.toBuffer()) + remme_utils_1.bytesToHex(signature.s.toBuffer());
    };
    ECDSA.prototype.verify = function (data, signature) {
        var dataHash = crypto_1.createHash("sha256").update(data).digest("hex");
        var r = new BN(signature.slice(0, 64), 16);
        var s = new BN(signature.slice(64, 128), 16);
        return ec.verify(dataHash, { r: r, s: s }, this._publicKey);
    };
    return ECDSA;
}(index_1.KeyDto));
exports.ECDSA = ECDSA;
//# sourceMappingURL=ECDSA.js.map