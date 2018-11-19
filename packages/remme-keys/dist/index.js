"use strict";
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
var models_1 = require("./models");
exports.KeyType = models_1.KeyType;
exports.RSASignaturePadding = models_1.RSASignaturePadding;
// const { PubKeyType: KeyType } = NewPubKeyPayload;
// const { RSASignaturePadding } = NewPubKeyPayload;
var RemmeKeys = /** @class */ (function () {
    function RemmeKeys(
    // keyType: NewPubKeyPayload.PubKeyType,
    keyType, privateKey, publicKey) {
        switch (keyType) {
            case models_1.KeyType.RSA: {
                this._keys = new models_1.RSA(privateKey, publicKey);
                break;
            }
            case models_1.KeyType.EdDSA: {
                this._keys = new models_1.EdDSA(privateKey, publicKey);
                break;
            }
            case models_1.KeyType.ECDSA: {
                this._keys = new models_1.ECDSA(privateKey, publicKey);
                break;
            }
        }
    }
    RemmeKeys.generateKeyPair = function (
    // keyType: NewPubKeyPayload.PubKeyType,
    keyType, options) {
        return __awaiter(this, void 0, void 0, function () {
            var keys, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = keyType;
                        switch (_a) {
                            case models_1.KeyType.RSA: return [3 /*break*/, 1];
                            case models_1.KeyType.EdDSA: return [3 /*break*/, 3];
                            case models_1.KeyType.ECDSA: return [3 /*break*/, 4];
                        }
                        return [3 /*break*/, 5];
                    case 1: return [4 /*yield*/, models_1.RSA.generateKeyPair(options)];
                    case 2:
                        keys = _b.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        {
                            keys = models_1.EdDSA.generateKeyPair(options);
                            return [3 /*break*/, 5];
                        }
                        _b.label = 4;
                    case 4:
                        {
                            keys = models_1.ECDSA.generateKeyPair();
                            return [3 /*break*/, 5];
                        }
                        _b.label = 5;
                    case 5: return [2 /*return*/, new RemmeKeys(keyType, keys.privateKey, keys.publicKey)];
                }
            });
        });
    };
    RemmeKeys.getAddressFromPublicKey = function (publicKey, 
    // keyType: NewPubKeyPayload.PubKeyType,
    keyType) {
        switch (keyType) {
            case models_1.KeyType.RSA: {
                return models_1.RSA.getAddressFromPublicKey(publicKey);
            }
            case models_1.KeyType.EdDSA: {
                return models_1.EdDSA.getAddressFromPublicKey(publicKey);
            }
            case models_1.KeyType.ECDSA: {
                return models_1.ECDSA.getAddressFromPublicKey(publicKey);
            }
        }
    };
    RemmeKeys.prototype.sign = function (data, 
    // rsaSignaturePadding?: NewPubKeyPayload.RSASignaturePadding,
    rsaSignaturePadding) {
        if (this._keys instanceof models_1.RSA) {
            return this._keys.sign(data, rsaSignaturePadding);
        }
        return this._keys.sign(data);
    };
    RemmeKeys.prototype.verify = function (signature, data, 
    // rsaSignaturePadding?: NewPubKeyPayload.RSASignaturePadding,
    rsaSignaturePadding) {
        if (this._keys instanceof models_1.RSA) {
            return this._keys.verify(signature, data, rsaSignaturePadding);
        }
        return this._keys.verify(signature, data);
    };
    Object.defineProperty(RemmeKeys.prototype, "address", {
        /**
         * Address of this key in blockchain. (https://docs.remme.io/remme-core/docs/family-account.html#addressing)
         */
        get: function () {
            return this._keys.address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemmeKeys.prototype, "privateKey", {
        /**
         * Return private key.
         * @returns {Buffer}
         */
        get: function () {
            return this._keys.privateKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemmeKeys.prototype, "publicKey", {
        /**
         * Return public key.
         * @returns {Buffer}
         */
        get: function () {
            return this._keys.publicKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemmeKeys.prototype, "keyType", {
        /**
         * Return key type.
         * @returns {string}
         */
        get: function () {
            return models_1.KeyType[this._keys.keyType];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemmeKeys.prototype, "publicKeyBase64", {
        /**
         * Return base 64 of public key.
         * @returns {string}
         */
        get: function () {
            return this._keys.publicKeyBase64;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemmeKeys.prototype, "privateKeyPem", {
        /**
         * Return private key in pem format.
         * @returns {string}
         */
        get: function () {
            return this._keys.privateKeyPem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemmeKeys.prototype, "publicKeyPem", {
        /**
         * Return public key in pem format.
         * @returns {string}
         */
        get: function () {
            return this._keys.publicKeyPem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemmeKeys.prototype, "privateKeyHex", {
        /**
         * Return private key in pem format.
         * @returns {string}
         */
        get: function () {
            return this._keys.privateKeyHex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemmeKeys.prototype, "publicKeyHex", {
        /**
         * Return public key in pem format.
         * @returns {string}
         */
        get: function () {
            return this._keys.publicKeyHex;
        },
        enumerable: true,
        configurable: true
    });
    return RemmeKeys;
}());
exports.RemmeKeys = RemmeKeys;
//# sourceMappingURL=index.js.map