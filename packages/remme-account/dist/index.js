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
var signing_1 = require("sawtooth-sdk/signing");
var remme_keys_1 = require("remme-keys");
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
var RemmeAccount = /** @class */ (function (_super) {
    __extends(RemmeAccount, _super);
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
        var _this = _super.call(this, remme_keys_1.KeyType.ECDSA, remme_utils_1.hexToBytes(privateKeyHex)) || this;
        // private readonly _signer: any;
        // private readonly _publicKeyHex: string;
        // private readonly _privateKeyHex: string;
        _this._familyName = remme_utils_1.RemmeFamilyName.Account;
        // if (privateKeyHex && privateKeyHex.search(PATTERNS.PRIVATE_KEY) === -1) {
        //     throw new Error("Given privateKey is not a valid");
        // }
        // let privateKey;
        // if (!privateKeyHex) {
        //     privateKey = CONTEXT.newRandomPrivateKey();
        // } else {
        //     privateKey = Secp256k1PrivateKey.fromHex(privateKeyHex);
        // }
        // this._signer = new CryptoFactory(CONTEXT).newSigner(privateKey);
        // this._privateKeyHex = privateKey.asHex();
        // this._publicKeyHex = this._signer.getPublicKey().asHex();
        _this._address = remme_utils_1.generateAddress(_this._familyName, _this.publicKeyHex);
        return _this;
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
    return RemmeAccount;
}(remme_keys_1.RemmeKeys));
exports.RemmeAccount = RemmeAccount;
//# sourceMappingURL=index.js.map