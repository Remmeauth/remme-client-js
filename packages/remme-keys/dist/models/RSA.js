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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var remme_utils_1 = require("remme-utils");
var index_1 = require("./index");
var RSA = /** @class */ (function (_super) {
    __extends(RSA, _super);
    function RSA(_a) {
        var privateKey = _a.privateKey, publicKey = _a.publicKey;
        var _this = _super.call(this) || this;
        _this._rsaKeySize = 2048;
        if (privateKey && publicKey) {
            _this._privateKey = privateKey;
            _this._publicKey = publicKey;
        }
        else if (privateKey) {
            _this._privateKey = privateKey;
            _this._privateKeyObject = RSA.getObjectFromPrivateKey(_this._privateKey);
            _this._publicKey = RSA.getPublicKeyFromObject(remme_utils_1.forge.pki.rsa.setPublicKey(_this._privateKeyObject.n, _this._privateKeyObject.e));
        }
        else if (publicKey) {
            _this._publicKey = publicKey;
        }
        _this._publicKeyObject = RSA.getObjectFromPublicKey(_this._publicKey);
        _this._publicKeyHex = remme_utils_1.bytesToHex(_this._publicKey);
        if (_this._privateKey) {
            if (!_this._privateKeyObject) {
                _this._privateKeyObject = RSA.getObjectFromPrivateKey(_this._privateKey);
            }
            _this._privateKeyHex = remme_utils_1.bytesToHex(_this._privateKey);
        }
        _this._address = remme_utils_1.generateAddress(remme_utils_1.RemmeFamilyName.PublicKey, _this._publicKey);
        _this._keyType = index_1.KeyType.RSA;
        return _this;
    }
    RSA.prototype._calculateSaltLength = function (md) {
        var emlen = Number(Math.ceil(this._rsaKeySize / 8));
        return emlen - md.digestLength - 2;
    };
    RSA.generateKeyPair = function (_a) {
        var _b = (_a === void 0 ? { rsaKeySize: 2048 } : _a).rsaKeySize, rsaKeySize = _b === void 0 ? 2048 : _b;
        return __awaiter(this, void 0, void 0, function () {
            var _c, privateKey, publicKey;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, remme_utils_1.forge.pki.rsa.generateKeyPair(rsaKeySize)];
                    case 1:
                        _c = _d.sent(), privateKey = _c.privateKey, publicKey = _c.publicKey;
                        return [2 /*return*/, {
                                privateKey: RSA.getPrivateKeyFromObject(privateKey),
                                publicKey: RSA.getPublicKeyFromObject(publicKey),
                            }];
                }
            });
        });
    };
    RSA.getAddressFromPublicKey = function (publicKey) {
        return remme_utils_1.generateAddress(remme_utils_1.RemmeFamilyName.PublicKey, publicKey);
    };
    RSA.prototype.sign = function (data, rsaSignaturePadding) {
        if (rsaSignaturePadding === void 0) { rsaSignaturePadding = index_1.RSASignaturePadding.PSS; }
        var md = remme_utils_1.forge.md.sha256.create();
        md.update(data, "utf8");
        var signature;
        switch (rsaSignaturePadding) {
            case index_1.RSASignaturePadding.PKCS1v15: {
                signature = this._privateKeyObject.sign(md);
                break;
            }
            case index_1.RSASignaturePadding.PSS: {
                var pss = remme_utils_1.forge.pss.create({
                    md: remme_utils_1.forge.md.sha256.create(),
                    mgf: remme_utils_1.forge.mgf.mgf1.create(remme_utils_1.forge.md.sha256.create()),
                    saltLength: this._calculateSaltLength(md),
                });
                signature = this._privateKeyObject.sign(md, pss);
            }
        }
        return remme_utils_1.forge.util.bytesToHex(signature);
    };
    RSA.prototype.verify = function (data, signature, rsaSignaturePadding) {
        if (rsaSignaturePadding === void 0) { rsaSignaturePadding = index_1.RSASignaturePadding.PSS; }
        var md = remme_utils_1.forge.md.sha256.create();
        md.update(data, "utf8");
        signature = remme_utils_1.forge.util.hexToBytes(signature);
        switch (rsaSignaturePadding) {
            case index_1.RSASignaturePadding.PKCS1v15: {
                return this._publicKeyObject.verify(md);
            }
            case index_1.RSASignaturePadding.PSS: {
                var pss = remme_utils_1.forge.pss.create({
                    md: remme_utils_1.forge.md.sha256.create(),
                    mgf: remme_utils_1.forge.mgf.mgf1.create(remme_utils_1.forge.md.sha256.create()),
                    saltLength: this._calculateSaltLength(md),
                });
                return this._publicKeyObject.verify(md.digest().bytes(), signature, pss);
            }
        }
    };
    RSA.getPublicKeyFromObject = function (publicKey) {
        return Buffer.from(remme_utils_1.forge.asn1.toDer(remme_utils_1.forge.pki.publicKeyToAsn1(publicKey)).getBytes(), "binary");
    };
    RSA.getPrivateKeyFromObject = function (privateKey) {
        return Buffer.from(remme_utils_1.forge.asn1.toDer(remme_utils_1.forge.pki.privateKeyToAsn1(privateKey)).getBytes(), "binary");
    };
    RSA.getObjectFromPublicKey = function (publicKey) {
        var pk = new remme_utils_1.forge.util.ByteStringBuffer(publicKey);
        return remme_utils_1.forge.pki.publicKeyFromAsn1(remme_utils_1.forge.asn1.fromDer(pk));
    };
    RSA.getObjectFromPrivateKey = function (privateKey) {
        var sk = new remme_utils_1.forge.util.ByteStringBuffer(privateKey);
        return remme_utils_1.forge.pki.privateKeyFromAsn1(remme_utils_1.forge.asn1.fromDer(sk));
    };
    return RSA;
}(index_1.KeyDto));
exports.RSA = RSA;
//# sourceMappingURL=RSA.js.map