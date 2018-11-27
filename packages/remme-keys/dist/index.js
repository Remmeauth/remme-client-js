"use strict";
// import { NewPubKeyPayload } from "remme-protobuf";
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
exports.RSA = models_1.RSA;
exports.EdDSA = models_1.EdDSA;
exports.ECDSA = models_1.ECDSA;
exports.KeyType = models_1.KeyType;
exports.RSASignaturePadding = models_1.RSASignaturePadding;
// const { PubKeyType: KeyType } = NewPubKeyPayload;
// const { RSASignaturePadding } = NewPubKeyPayload;
/* tslint:disable */
/**
 * Class that works with different types of keys.
 * For now it is RSA, EdDSA (ED25519), ECDSA (secp256k1).
 *
 * @example
 * If you don't have key pair you can generate it.
 * ```typescript
 * import { KeyType } from "remme-keys";
 *
 * const keys = Remme.Keys.generateKeyPair(KeyType.RSA); // Our chain works only with RSA now.
 *
 * // then you can sign some data. For rsa key type you should provide RSASignaturePadding (by default PSS)
 * const signature = keys.sign("some data");
 * console.log(keys.verify(signature, "some data")); // true
 *
 * // or you can store it in the chain. For rsa key type you should provide RSASignaturePadding (by default EMPTY)
 *  const publicKeyStoring = await remme.publicKeyStorage.store({
 *       data: "store data",
 *       keys,
 *       rsaSignaturePadding: RSASignaturePadding.PSS
 *       validFrom: Math.round(Date.now() / 1000),
 *       validTo: Math.round(Date.now() / 1000 + 1000)
 *  });
 * ```
 *
 * If you have private key. You can construct RemmeKeys based on private key.
 * ```typescript
 * import { KeyType } from "remme-keys";
 * import { privateKeyFromPem } from "remme-utils";
 *
 * const privateKey = "-----BEGIN RSA PRIVATE KEY-----\r\nMIIEowIBAAKCAQEAkhdw64WKrvXCWtGsNeVTPKDPpcHN0kcF4acvfPauDE8TpIFu\r\n8rFQdnGdBldJMo+iHC4VkEc7SqP0Z7bynBXZze6YAsi7VUggO+5kDuJnKrg0VJ5s\r\nwfV/Jdvj9ev1iG1TeVTAyp1Uvjmek9uAh6DgobdtWM/VpVYsbBcMT4XXpzmuv0qk\r\nEf9YmR3kJ5SBGdkb6jaOnjJWO0O6kOUO54y06wr0BXqYWWQTnGC3DJf2iqu68Ceo\r\nZsg/dRNs1zXP4x00GyOW7OdnmMUsySquf//KHUlnD3Oa1TyWzjF6NcMWv0PgDg6u\r\n8q4739X0ueBNDpXJyiMMpQUZ/8YbW/Ijdfv7DQIDAQABAoIBADRnHCYfXMOte+2/\r\n0Bn1DIpu1I0Mm5uVxlJO+gXFJmFb7BvSIc4ENGyIDF896A+u3eNl1G5QXsBDV2Ps\r\nh9HdNKddskEtZ6ULniRhOprsMz1rnbnMqg5Y1SbrXTXVUdmB/bND53PGQ6OIX42B\r\n6vS7jFf1x89XnbcU1hJfohbUV6qvwr+hyrvrV859LM80rErCKGXXi6gtiRBiTYA3\r\n2qgO+F/ntmoU638XDzeIhKNjCP+KcWcQX1TRlrcuKfPKfCttHTb1MCGWnrOqy56w\r\nU628Iz4lKfjCOOdAXvyDRBEFSPKfriuB5JQQ67cZ9w783/2ZChhAY4wzBqvgnnlo\r\np6cPXDECgYEA+shoBswhqkA81RHxdkMoM9/iGwfkdFwxr9TqHGN7+L0hRXJlysKP\r\npBFX7Wg6GWF3BDHQzLoWQCEox0NgHbAVTC5DBxjIEjRemmlYEeAPqVRTub1lfp37\r\nYcK8BqsllDgXsqlQQNKqqVj4V2y/PO6NzlHWN9inJrp8ZZKSKPSamq8CgYEAlSF7\r\nDB0STde20E+ZPzQZi7zLWl59yM29mlKujlRktp2vl3foRJgQsndOAIc6k4+ImXR8\r\ngtfwpCYrXTQhJE4GHO/E/52vuwkVVz9qN5ZmgzR13yzlicCVmfZ7aaZ6jblNiQ1G\r\ngnIx1chcb8Vl5fncmaoa9SgefwWciPERNg31RQMCgYEApH1SjjLSWgMsY20Tfchq\r\n1Cui+Kviktft1zDGJbyzEeGrswtn7OhUov6lN5jHkuI02FF8bOwZsBKP1rNAlfhq\r\n377wQ/VjNV2YN5ulIoRegWhISmoJ6lThD6xU++LCEUgBczRO6VXEjrNGoME5ZlPq\r\nO0u+QH8gk+x5r33F1Isr5Q0CgYBHrmEjsHGU4wPnWutROuywgx3HoTWaqHHjVKy8\r\nkwoZ0O+Owb7uAZ28+qWOkXFxbgN9p0UV60+qxwH++ciYV7yOeh1ZtGS8ZSBR4JRg\r\nhbVeiX/CtyTZsqz15Ujqvm+X4aLIJo5msxcLKBRuURaqlRAY+G+euRr3eS4FkMHy\r\nFoF3GwKBgFDNeJc7VfbQq2toRSxCNuUTLXoZPrPfQrV+mA9umGCep44Ea02xIKQu\r\nbYpYghpdbASOp6fJvBlwjI8LNX3dC/PfUpbIG84bVCokgBCMNJQ+/DBuPBt7L29A\r\n7Ra1poXMbXt0nF3LgAtZHveRmVDtcr52dZ/6Yd2km5mAHj+4yPZo\r\n-----END RSA PRIVATE KEY-----\r\n"
 * const keys = new Remme.Keys({
     *      keyType: KeyType.RSA,
     *      privateKey: privateKeyFromPem(privateKey),
     * }); // Our chain works only with RSA now.
 * ```
 *
 * If you have public key. You can get an address for it.
 * ```typescript
 * import { KeyType } from "remme-keys";
 * import { publicKeyFromPem } from "remme-utils";
 *
 * const publicKey = "-----BEGIN PUBLIC KEY-----\r\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkhdw64WKrvXCWtGsNeVT\r\nPKDPpcHN0kcF4acvfPauDE8TpIFu8rFQdnGdBldJMo+iHC4VkEc7SqP0Z7bynBXZ\r\nze6YAsi7VUggO+5kDuJnKrg0VJ5swfV/Jdvj9ev1iG1TeVTAyp1Uvjmek9uAh6Dg\r\nobdtWM/VpVYsbBcMT4XXpzmuv0qkEf9YmR3kJ5SBGdkb6jaOnjJWO0O6kOUO54y0\r\n6wr0BXqYWWQTnGC3DJf2iqu68CeoZsg/dRNs1zXP4x00GyOW7OdnmMUsySquf//K\r\nHUlnD3Oa1TyWzjF6NcMWv0PgDg6u8q4739X0ueBNDpXJyiMMpQUZ/8YbW/Ijdfv7\r\nDQIDAQAB\r\n-----END PUBLIC KEY-----\r\n";
 * const address = Remme.getAddressFromPublicKey(KeyType.RSA, publicKeyFromPem(publicKey)); // Our chain works only with RSA now.
 * ```
 */
/* tslint:enable */
var RemmeKeys = /** @class */ (function () {
    function RemmeKeys() {
    }
    /**
     * Generate key pair and get instance of RemmeKeys.
     * @example
     * If you don't have key pair you can generate it.
     * ```typescript
     * import { KeyType } from "remme-keys";
     *
     * const keys = Remme.Keys.generateKeyPair(KeyType.RSA); // Our chain works only with RSA now.
     * ```
     * @param {KeyType} keyType
     * @param {GenerateOptions} options
     * @returns {Promise<IRemmeKeys>}
     */
    RemmeKeys.generateKeyPair = function (keyType, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
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
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3:
                        {
                            return [2 /*return*/, models_1.EdDSA.generateKeyPair(options)];
                        }
                        _b.label = 4;
                    case 4:
                        {
                            return [2 /*return*/, models_1.ECDSA.generateKeyPair()];
                        }
                        _b.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /* tslint:disable */
    /**
     * Can get address from public key.
     * @example
     * If you have public key. You can get an address for it.
     * ```typescript
     * import { KeyType } from "remme-keys";
     * import { publicKeyFromPem } from "remme-utils";
     *
     * const publicKey = "-----BEGIN PUBLIC KEY-----\r\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkhdw64WKrvXCWtGsNeVT\r\nPKDPpcHN0kcF4acvfPauDE8TpIFu8rFQdnGdBldJMo+iHC4VkEc7SqP0Z7bynBXZ\r\nze6YAsi7VUggO+5kDuJnKrg0VJ5swfV/Jdvj9ev1iG1TeVTAyp1Uvjmek9uAh6Dg\r\nobdtWM/VpVYsbBcMT4XXpzmuv0qkEf9YmR3kJ5SBGdkb6jaOnjJWO0O6kOUO54y0\r\n6wr0BXqYWWQTnGC3DJf2iqu68CeoZsg/dRNs1zXP4x00GyOW7OdnmMUsySquf//K\r\nHUlnD3Oa1TyWzjF6NcMWv0PgDg6u8q4739X0ueBNDpXJyiMMpQUZ/8YbW/Ijdfv7\r\nDQIDAQAB\r\n-----END PUBLIC KEY-----\r\n";
     * const address = Remme.getAddressFromPublicKey(KeyType.RSA, publicKeyFromPem(publicKey)); // Our chain works only with RSA now.
     * ```
     * @param {KeyType} keyType
     * @param publicKey
     * @returns {string}
     */
    /* tslint:enable */
    RemmeKeys.getAddressFromPublicKey = function (keyType, publicKey) {
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
    /* tslint:disable */
    /**
     * @example
     * If you have private key. You can construct RemmeKeys based on private key.
     * ```typescript
     * import { KeyType } from "remme-keys";
     * import { privateKeyFromPem, publicKeyFromPem } from "remme-utils";
     *
     * const privateKey = "-----BEGIN RSA PRIVATE KEY-----\r\nMIIEowIBAAKCAQEAkhdw64WKrvXCWtGsNeVTPKDPpcHN0kcF4acvfPauDE8TpIFu\r\n8rFQdnGdBldJMo+iHC4VkEc7SqP0Z7bynBXZze6YAsi7VUggO+5kDuJnKrg0VJ5s\r\nwfV/Jdvj9ev1iG1TeVTAyp1Uvjmek9uAh6DgobdtWM/VpVYsbBcMT4XXpzmuv0qk\r\nEf9YmR3kJ5SBGdkb6jaOnjJWO0O6kOUO54y06wr0BXqYWWQTnGC3DJf2iqu68Ceo\r\nZsg/dRNs1zXP4x00GyOW7OdnmMUsySquf//KHUlnD3Oa1TyWzjF6NcMWv0PgDg6u\r\n8q4739X0ueBNDpXJyiMMpQUZ/8YbW/Ijdfv7DQIDAQABAoIBADRnHCYfXMOte+2/\r\n0Bn1DIpu1I0Mm5uVxlJO+gXFJmFb7BvSIc4ENGyIDF896A+u3eNl1G5QXsBDV2Ps\r\nh9HdNKddskEtZ6ULniRhOprsMz1rnbnMqg5Y1SbrXTXVUdmB/bND53PGQ6OIX42B\r\n6vS7jFf1x89XnbcU1hJfohbUV6qvwr+hyrvrV859LM80rErCKGXXi6gtiRBiTYA3\r\n2qgO+F/ntmoU638XDzeIhKNjCP+KcWcQX1TRlrcuKfPKfCttHTb1MCGWnrOqy56w\r\nU628Iz4lKfjCOOdAXvyDRBEFSPKfriuB5JQQ67cZ9w783/2ZChhAY4wzBqvgnnlo\r\np6cPXDECgYEA+shoBswhqkA81RHxdkMoM9/iGwfkdFwxr9TqHGN7+L0hRXJlysKP\r\npBFX7Wg6GWF3BDHQzLoWQCEox0NgHbAVTC5DBxjIEjRemmlYEeAPqVRTub1lfp37\r\nYcK8BqsllDgXsqlQQNKqqVj4V2y/PO6NzlHWN9inJrp8ZZKSKPSamq8CgYEAlSF7\r\nDB0STde20E+ZPzQZi7zLWl59yM29mlKujlRktp2vl3foRJgQsndOAIc6k4+ImXR8\r\ngtfwpCYrXTQhJE4GHO/E/52vuwkVVz9qN5ZmgzR13yzlicCVmfZ7aaZ6jblNiQ1G\r\ngnIx1chcb8Vl5fncmaoa9SgefwWciPERNg31RQMCgYEApH1SjjLSWgMsY20Tfchq\r\n1Cui+Kviktft1zDGJbyzEeGrswtn7OhUov6lN5jHkuI02FF8bOwZsBKP1rNAlfhq\r\n377wQ/VjNV2YN5ulIoRegWhISmoJ6lThD6xU++LCEUgBczRO6VXEjrNGoME5ZlPq\r\nO0u+QH8gk+x5r33F1Isr5Q0CgYBHrmEjsHGU4wPnWutROuywgx3HoTWaqHHjVKy8\r\nkwoZ0O+Owb7uAZ28+qWOkXFxbgN9p0UV60+qxwH++ciYV7yOeh1ZtGS8ZSBR4JRg\r\nhbVeiX/CtyTZsqz15Ujqvm+X4aLIJo5msxcLKBRuURaqlRAY+G+euRr3eS4FkMHy\r\nFoF3GwKBgFDNeJc7VfbQq2toRSxCNuUTLXoZPrPfQrV+mA9umGCep44Ea02xIKQu\r\nbYpYghpdbASOp6fJvBlwjI8LNX3dC/PfUpbIG84bVCokgBCMNJQ+/DBuPBt7L29A\r\n7Ra1poXMbXt0nF3LgAtZHveRmVDtcr52dZ/6Yd2km5mAHj+4yPZo\r\n-----END RSA PRIVATE KEY-----\r\n"
     * const keys = await Remme.Keys.contsruct({
     *      keyType: KeyType.RSA,
     *      privateKey: privateKeyFromPem(privateKey),
     * }); // Our chain works only with RSA now.
     * ```
     *
     * If you public key. You can construct RemmeKeys based on public key.
     * ```typescript
     * import { KeyType } from "remme-keys";
     * import { privateKeyFromPem, publicKeyFromPem } from "remme-utils";
     *
     * const publicKey = "-----BEGIN PUBLIC KEY-----\r\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkhdw64WKrvXCWtGsNeVT\r\nPKDPpcHN0kcF4acvfPauDE8TpIFu8rFQdnGdBldJMo+iHC4VkEc7SqP0Z7bynBXZ\r\nze6YAsi7VUggO+5kDuJnKrg0VJ5swfV/Jdvj9ev1iG1TeVTAyp1Uvjmek9uAh6Dg\r\nobdtWM/VpVYsbBcMT4XXpzmuv0qkEf9YmR3kJ5SBGdkb6jaOnjJWO0O6kOUO54y0\r\n6wr0BXqYWWQTnGC3DJf2iqu68CeoZsg/dRNs1zXP4x00GyOW7OdnmMUsySquf//K\r\nHUlnD3Oa1TyWzjF6NcMWv0PgDg6u8q4739X0ueBNDpXJyiMMpQUZ/8YbW/Ijdfv7\r\nDQIDAQAB\r\n-----END PUBLIC KEY-----\r\n";
     * const keys = await Remme.Keys.construct({
     *      keyType: KeyType.RSA,
     *      publicKey: publicKeyFromPem(publicKey),
     * }); // Our chain works only with RSA now.
     * ```
     *
     * If you don't have any key. You can construct RemmeKeys without keys and it generate keys for you with default generation options.
     * ```typescript
     * import { KeyType } from "remme-keys";
     *
     * const keys = await Remme.Keys.construct({
     *      keyType: KeyType.RSA,
     * }); // Our chain works only with RSA now.
     * ```
     *
     * Also you can construct RemmeKeys without any params so keyType will be RSA by default.
     * ```typescript
     * import { KeyType } from "remme-keys";
     *
     * const keys = await Remme.Keys.construct();
     * ```
     * @param {KeyType} keyType
     * @param {any} privateKey
     * @param {any} publicKey
     */
    /* tslint:enable */
    RemmeKeys.construct = function (_a) {
        var _b = _a === void 0 ? { keyType: models_1.KeyType.RSA } : _a, _c = _b.keyType, keyType = _c === void 0 ? models_1.KeyType.RSA : _c, privateKey = _b.privateKey, publicKey = _b.publicKey;
        return __awaiter(this, void 0, void 0, function () {
            var keys;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(!privateKey && !publicKey)) return [3 /*break*/, 2];
                        return [4 /*yield*/, RemmeKeys.generateKeyPair(keyType)];
                    case 1:
                        keys = _d.sent();
                        privateKey = keys.privateKey;
                        publicKey = keys.publicKey;
                        _d.label = 2;
                    case 2:
                        switch (keyType) {
                            case models_1.KeyType.RSA: {
                                return [2 /*return*/, new models_1.RSA({ privateKey: privateKey, publicKey: publicKey })];
                            }
                            case models_1.KeyType.EdDSA: {
                                return [2 /*return*/, new models_1.EdDSA({ privateKey: privateKey, publicKey: publicKey })];
                            }
                            case models_1.KeyType.ECDSA: {
                                return [2 /*return*/, new models_1.ECDSA({ privateKey: privateKey, publicKey: publicKey })];
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return RemmeKeys;
}());
exports.RemmeKeys = RemmeKeys;
//# sourceMappingURL=index.js.map