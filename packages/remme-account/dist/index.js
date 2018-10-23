"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var signing_1 = require("sawtooth-sdk/signing");
var secp256k1_1 = require("sawtooth-sdk/signing/secp256k1");
var remme_utils_1 = require("remme-utils");
/**
 * CONTEXT that is used for generating private key and signer. Now it is secp256k1.
 */
var CONTEXT = signing_1.createContext("secp256k1");
/**
 * Account that is used for signing transactions and storing public keys which he was signed.
 * @example
 * ```typescript
 * const account = new RemmeAccount("ac124700cc4325cc2a78b22b9acb039d9efe859ef673b871d55d1078391934f9");
 * console.log(account.privateKeyHex); // "ac124700cc4325cc2a78b22b9acb039d9efe859ef673b871d55d1078391934f9";
 *
 * const anotherAccount = new RemmeAccount();
 * console.log(anotherAccount.privateKeyHex) // "b5167700cc4325cc2a78b22b9acb039d9efe859ef673b871d55d10783919129f";
 *
 * const data = "transaction data";
 * const signedData = account.sign(data);
 *
 * const isVerify = account.verify(signedData, data);
 * console.log(isVerify); // true
 *
 * const isVerifyInAnotherAccount = anotherAccount.verify(signedData, data);
 * console.log(isVerifyInAnotherAccount); // false
 * ```
 */
var RemmeAccount = /** @class */ (function () {
    /**
     * Get or generate private key, create signer by using private key,
     * generate public key from private key and generate account address by using public key and family name
     * (https://docs.remme.io/remme-core/docs/family-account.html#addressing)
     * @example
     * Get private key;
     * ```typescript
     * const account = new RemmeAccount("ac124700cc4325cc2a78b22b9acb039d9efe859ef673b871d55d1078391934f9");
     * console.log(account.privateKexyHex); // "ac124700cc4325cc2a78b22b9acb039d9efe859ef673b871d55d1078391934f9";
     * ```
     *
     * Generate new private key;
     * ```typescript
     * const account = new RemmeAccount();
     * console.log(account.privateKexyHex); // "b5167700cc4325cc2a78b22b9acb039d9efe859ef673b871d55d10783919129f";
     * ```
     * @param {string} privateKeyHex
     */
    function RemmeAccount(privateKeyHex) {
        this._familyName = remme_utils_1.RemmeFamilyName.Account;
        if (privateKeyHex && privateKeyHex.search(remme_utils_1.PATTERNS.PRIVATE_KEY) === -1) {
            throw new Error("Given privateKey is not a valid");
        }
        var privateKey;
        if (!privateKeyHex) {
            privateKey = CONTEXT.newRandomPrivateKey();
        }
        else {
            privateKey = secp256k1_1.Secp256k1PrivateKey.fromHex(privateKeyHex);
        }
        this._signer = new signing_1.CryptoFactory(CONTEXT).newSigner(privateKey);
        this._privateKeyHex = privateKey.asHex();
        this._publicKeyHex = this._signer.getPublicKey().asHex();
        this._address = remme_utils_1.generateAddress(this.familyName, this._publicKeyHex);
    }
    Object.defineProperty(RemmeAccount.prototype, "familyName", {
        /**
         * Family name for generate address for this account in the blockchain.
         * (https://docs.remme.io/remme-core/docs/family-account.html#addressing)
         * @type {string}
         */
        get: function () {
            return this._familyName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemmeAccount.prototype, "address", {
        /**
         * Address of this account in blockchain. (https://docs.remme.io/remme-core/docs/family-account.html#addressing)
         */
        get: function () {
            return this._address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemmeAccount.prototype, "privateKey", {
        /**
         * Return private key from hex format.
         * @returns {Buffer}
         */
        get: function () {
            return secp256k1_1.Secp256k1PrivateKey.fromHex(this._privateKeyHex);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemmeAccount.prototype, "publicKey", {
        /**
         * Return private key from hex format.
         * @returns {Buffer}
         */
        get: function () {
            return secp256k1_1.Secp256k1PublicKey.fromHex(this._publicKeyHex);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemmeAccount.prototype, "privateKeyHex", {
        /**
         * Hex format private key.
         * @returns {Buffer}
         */
        get: function () {
            return this._privateKeyHex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RemmeAccount.prototype, "publicKeyHex", {
        /**
         * Hex format public key.
         * @returns {Buffer}
         */
        get: function () {
            return this._publicKeyHex;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get transaction and sign it by signer
     * * @example
     * ```typescript
     * const data = "transaction data";
     * const signedData = account.sign(data);
     * console.log(signedData);
     * ```
     * @param {Uint8Array | string} transaction
     * @returns {Buffer}
     */
    RemmeAccount.prototype.sign = function (transaction) {
        if (typeof transaction === "string") {
            transaction = remme_utils_1.hexToBytes(transaction);
        }
        return this._signer.sign(transaction);
    };
    /**
     * Verify given signature to given transaction
     * * @example
     * ```typescript
     * const data = "transaction data";
     * const signedData = account.sign(data);
     *
     * const isVerify = account.verify(signedData, data);
     * console.log(isVerify); // true
     *
     * const isVerifyInAnotherAccount = anotherAccount.verify(signedData, data);
     * console.log(isVerifyInAnotherAccount); // false
     * ```
     * @param {Buffer | string} siganture
     * @param {Uint8Array | string} transaction
     * @returns {boolean}
     */
    RemmeAccount.prototype.verify = function (siganture, transaction) {
        return CONTEXT.verify(siganture, transaction, secp256k1_1.Secp256k1PublicKey.fromHex(this._publicKeyHex));
    };
    return RemmeAccount;
}());
exports.RemmeAccount = RemmeAccount;
//# sourceMappingURL=index.js.map