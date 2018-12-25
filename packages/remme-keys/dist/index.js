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
exports.RSA = models_1.RSA;
exports.EdDSA = models_1.EdDSA;
exports.ECDSA = models_1.ECDSA;
exports.KeyType = models_1.KeyType;
exports.RSASignaturePadding = models_1.RSASignaturePadding;
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
 * const keys = Remme.Keys.generateKeyPair(KeyType.RSA); // KeyType.EdDSA, KeyType.ECDSA also work.
 *
 * // then you can sign some data. For rsa key type you should provide RSASignaturePadding (by default PSS)
 * const signature = keys.sign("some data");
 * console.log(keys.verify(signature, "some data")); // true
 *
 * // or you can store it in the chain. For rsa key type you should provide RSASignaturePadding (by default PSS)
 *  const publicKeyStoring = await remme.publicKeyStorage.store({
 *       data: "store data",
 *       keys,
 *       validFrom: Math.round(Date.now() / 1000),
 *       validTo: Math.round(Date.now() / 1000 + 1000)
 *  });
 * ```
 *
 * If you have private key. You can construct RemmeKeys based on private key.
 * ```typescript
 * import { KeyType } from "remme-keys";
 * import { hexToBytes } from "remme-utils";
 *
 * const privateKey = "30820122300d06092a864886f70d01010105000382010f003082010a0282010100ad37c7475fe9d987555f8d92f0a440ebbf7bb2a87feffa3e2f229b9b782c4f7a78a1c255a687b1355fb788bef89188832d594a8f4e72d6d009d1ee56e9ff2a7c4de17cab3786bf74c9045bc30dc9475514a296faac9264c265aa4496005d17925c78f324f73a55bdfb6de2109c8ea64d75f10aea31c12f8a226deba507a57d22ad22391c066c5ce2d0072b4f18ddf97214ae3334f7ddff08d92bb6325f8f7c4d9419e7acd23abd9b9b0a3153fef0a626033719f7a9052de822c97fc54007357c8aa3dd416153a670a060edf453e61227f4e2acbb6461bbf40a948c74c4436cf5c10c3c29a42eaf6a74c4124a0f9dade599243cd9420266701254a7f4a4461fbf0203010001";
 * const keys = await Remme.Keys.construct({
 *      keyType: KeyType.RSA,
 *      privateKey: hexToBytes(privateKey),
 * });
 * ```
 *
 * If you have public key. You can construct RemmeKeys based on public key.
 * ```typescript
 * import { KeyType } from "remme-keys";
 * import { hexToBytes } from "remme-utils";
 *
 * const publicKey = "30820122300d06092a864886f70d01010105000382010f003082010a0282010100ad37c7475fe9d987555f8d92f0a440ebbf7bb2a87feffa3e2f229b9b782c4f7a78a1c255a687b1355fb788bef89188832d594a8f4e72d6d009d1ee56e9ff2a7c4de17cab3786bf74c9045bc30dc9475514a296faac9264c265aa4496005d17925c78f324f73a55bdfb6de2109c8ea64d75f10aea31c12f8a226deba507a57d22ad22391c066c5ce2d0072b4f18ddf97214ae3334f7ddff08d92bb6325f8f7c4d9419e7acd23abd9b9b0a3153fef0a626033719f7a9052de822c97fc54007357c8aa3dd416153a670a060edf453e61227f4e2acbb6461bbf40a948c74c4436cf5c10c3c29a42eaf6a74c4124a0f9dade599243cd9420266701254a7f4a4461fbf0203010001";
 * const keys = await Remme.Keys.construct({
 *      keyType: KeyType.RSA,
 *      publicKey: hexToBytes(publicKey),
 * });
 *
 * // OR get an address for it.
 * const address = Remme.getAddressFromPublicKey(KeyType.RSA, hexToBytes(publicKey));
 *
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
     * const keys = await Remme.Keys.generateKeyPair(KeyType.RSA); // KeyType.EdDSA, KeyType.ECDSA also work.
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
     * import { hexToBytes } from "remme-utils";
     *
     * const publicKey = "30820122300d06092a864886f70d01010105000382010f003082010a0282010100ad37c7475fe9d987555f8d92f0a440ebbf7bb2a87feffa3e2f229b9b782c4f7a78a1c255a687b1355fb788bef89188832d594a8f4e72d6d009d1ee56e9ff2a7c4de17cab3786bf74c9045bc30dc9475514a296faac9264c265aa4496005d17925c78f324f73a55bdfb6de2109c8ea64d75f10aea31c12f8a226deba507a57d22ad22391c066c5ce2d0072b4f18ddf97214ae3334f7ddff08d92bb6325f8f7c4d9419e7acd23abd9b9b0a3153fef0a626033719f7a9052de822c97fc54007357c8aa3dd416153a670a060edf453e61227f4e2acbb6461bbf40a948c74c4436cf5c10c3c29a42eaf6a74c4124a0f9dade599243cd9420266701254a7f4a4461fbf0203010001";
     * const address = Remme.getAddressFromPublicKey(KeyType.RSA, hexToBytes(publicKey));
     * ```
     * @param {KeyType} keyType
     * @param {Buffer} publicKey
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
     * import { hexToBytes } from "remme-utils";
     *
     * const privateKey = "30820122300d06092a864886f70d01010105000382010f003082010a0282010100ad37c7475fe9d987555f8d92f0a440ebbf7bb2a87feffa3e2f229b9b782c4f7a78a1c255a687b1355fb788bef89188832d594a8f4e72d6d009d1ee56e9ff2a7c4de17cab3786bf74c9045bc30dc9475514a296faac9264c265aa4496005d17925c78f324f73a55bdfb6de2109c8ea64d75f10aea31c12f8a226deba507a57d22ad22391c066c5ce2d0072b4f18ddf97214ae3334f7ddff08d92bb6325f8f7c4d9419e7acd23abd9b9b0a3153fef0a626033719f7a9052de822c97fc54007357c8aa3dd416153a670a060edf453e61227f4e2acbb6461bbf40a948c74c4436cf5c10c3c29a42eaf6a74c4124a0f9dade599243cd9420266701254a7f4a4461fbf0203010001";
     * const keys = await Remme.Keys.contsruct({
     *      keyType: KeyType.RSA,
     *      privateKey: hexToBytes(privateKey),
     * });
     * ```
     *
     * If you public key. You can construct RemmeKeys based on public key.
     * ```typescript
     * import { KeyType } from "remme-keys";
     * import { hexToBytes } from "remme-utils";
     *
     * const publicKey = "30820122300d06092a864886f70d01010105000382010f003082010a0282010100ad37c7475fe9d987555f8d92f0a440ebbf7bb2a87feffa3e2f229b9b782c4f7a78a1c255a687b1355fb788bef89188832d594a8f4e72d6d009d1ee56e9ff2a7c4de17cab3786bf74c9045bc30dc9475514a296faac9264c265aa4496005d17925c78f324f73a55bdfb6de2109c8ea64d75f10aea31c12f8a226deba507a57d22ad22391c066c5ce2d0072b4f18ddf97214ae3334f7ddff08d92bb6325f8f7c4d9419e7acd23abd9b9b0a3153fef0a626033719f7a9052de822c97fc54007357c8aa3dd416153a670a060edf453e61227f4e2acbb6461bbf40a948c74c4436cf5c10c3c29a42eaf6a74c4124a0f9dade599243cd9420266701254a7f4a4461fbf0203010001";
     * const keys = await Remme.Keys.construct({
     *      keyType: KeyType.RSA,
     *      publicKey: hexToBytes(publicKey),
     * });
     * ```
     *
     * If you don't have any key. You can construct RemmeKeys without keys and it generate keys for you with default generation options.
     * ```typescript
     * import { KeyType } from "remme-keys";
     *
     * const keys = await Remme.Keys.construct({
     *      keyType: KeyType.RSA,
     * });
     * ```
     *
     * Also you can construct RemmeKeys without any params so keyType will be RSA by default.
     * ```typescript
     * import { KeyType } from "remme-keys";
     *
     * const keys = await Remme.Keys.construct();
     * ```
     * @param {KeyType} keyType
     * @param {Buffer} privateKey
     * @param {Buffer} publicKey
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