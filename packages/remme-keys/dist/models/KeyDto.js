"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { NewPubKeyPayload } from "remme-protobuf";
var remme_utils_1 = require("remme-utils");
var KeyDto = /** @class */ (function () {
    function KeyDto() {
        this._familyName = remme_utils_1.RemmeFamilyName.PublicKey;
    }
    Object.defineProperty(KeyDto.prototype, "address", {
        /**
         * Address of this key in blockchain. (https://docs.remme.io/remme-core/docs/family-account.html#addressing)
         */
        get: function () {
            return this._address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KeyDto.prototype, "privateKey", {
        /**
         * Return private key.
         * @returns {Buffer}
         */
        get: function () {
            if (!this._privateKey) {
                throw new Error("You didn't provide private key");
            }
            return this._privateKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KeyDto.prototype, "publicKey", {
        /**
         * Return public key.
         * @returns {Buffer}
         */
        get: function () {
            return this._publicKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KeyDto.prototype, "keyType", {
        /**
         * Return key type.
         * @returns {string}
         */
        get: function () {
            return this._keyType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KeyDto.prototype, "publicKeyBase64", {
        /**
         * Return base 64 of public key.
         * @returns {string}
         */
        get: function () {
            return this._publicKeyBase64;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KeyDto.prototype, "privateKeyPem", {
        /**
         * Return private key in pem format.
         * @returns {string}
         */
        get: function () {
            if (!this._privateKeyPem) {
                throw new Error("Don't supported for this key type: " + this._keyType + " or didn't provide private key");
            }
            return this._privateKeyPem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KeyDto.prototype, "publicKeyPem", {
        /**
         * Return public key in pem format.
         * @returns {string}
         */
        get: function () {
            if (!this._publicKeyPem) {
                throw new Error("Don't supported for this key type: " + this._keyType);
            }
            return this._publicKeyPem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KeyDto.prototype, "privateKeyHex", {
        /**
         * Return private key in pem format.
         * @returns {string}
         */
        get: function () {
            if (!this._privateKeyHex) {
                throw new Error("Don't supported for this key type: " + this._keyType + " or didn't provide private key");
            }
            return this._privateKeyHex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KeyDto.prototype, "publicKeyHex", {
        /**
         * Return public key in pem format.
         * @returns {string}
         */
        get: function () {
            if (!this._publicKeyHex) {
                throw new Error("Don't supported for this key type: " + this._keyType);
            }
            return this._publicKeyHex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KeyDto.prototype, "familyName", {
        /**
         * Return family name.
         * @returns {RemmeFamilyName}
         */
        get: function () {
            return this._familyName;
        },
        enumerable: true,
        configurable: true
    });
    return KeyDto;
}());
exports.KeyDto = KeyDto;
//# sourceMappingURL=KeyDto.js.map