import { createContext, CryptoFactory } from "sawtooth-sdk/signing";
import { Secp256k1PrivateKey, Secp256k1PublicKey } from "sawtooth-sdk/signing/secp256k1";
import { IRemmeKeys, KeyType, RemmeKeys } from "remme-keys";
import { generateAddress, hexToBytes, PATTERNS, RemmeFamilyName } from "remme-utils";

import { IRemmeAccount } from "./interface";
import { RemmeAccountPrivateKey, RemmeAccountPublicKey } from "./models";

/**
 * CONTEXT that is used for generating private key and signer. Now it is secp256k1.
 */
const CONTEXT = createContext("secp256k1");
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
class RemmeAccount extends RemmeKeys implements IRemmeKeys {

    // index signature
    [key: string]: any;

    // private readonly _signer: any;
    // private readonly _publicKeyHex: string;
    // private readonly _privateKeyHex: string;
    private readonly _familyName = RemmeFamilyName.Account;
    private readonly _address: string;

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
    constructor(privateKeyHex?: string) {
        super(KeyType.ECDSA, hexToBytes(privateKeyHex));
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
        this._address = generateAddress(this._familyName, this.publicKeyHex);
    }

    /**
     * Family name for generate address for this account in the blockchain.
     * (https://docs.remme.io/remme-core/docs/family-account.html#addressing)
     * @type {string}
     */
    public get familyName(): string {
        return this._familyName;
    }

    /**
     * Address of this account in blockchain. (https://docs.remme.io/remme-core/docs/family-account.html#addressing)
     */
    public get address(): string {
        return this._address;
    }

    // /**
    //  * Return private key from hex format.
    //  * @returns {Buffer}
    //  */
    // public get privateKey(): RemmeAccountPrivateKey {
    //     return Secp256k1PrivateKey.fromHex(this._privateKeyHex);
    // }
    //
    // /**
    //  * Return public key from hex format.
    //  * @returns {Buffer}
    //  */
    // public get publicKey(): RemmeAccountPublicKey {
    //     return Secp256k1PublicKey.fromHex(this._publicKeyHex);
    // }
    //
    // /**
    //  * Hex format private key.
    //  * @returns {Buffer}
    //  */
    // public get privateKeyHex(): string {
    //     return this._privateKeyHex;
    // }
    //
    // /**
    //  * Hex format public key.
    //  * @returns {Buffer}
    //  */
    // public get publicKeyHex(): string {
    //     return this._publicKeyHex;
    // }
    //
    // /**
    //  * Get transaction and sign it by signer
    //  * * @example
    //  * ```typescript
    //  * const data = "transaction data";
    //  * const signedData = account.sign(data);
    //  * console.log(signedData);
    //  * ```
    //  * @param {Buffer | string} data
    //  * @returns {Buffer}
    //  */
    // public sign(data: Buffer | string): Buffer {
    //     if (typeof data === "string") {
    //         data = Buffer.from(data);
    //     }
    //     return this._signer.sign(data);
    // }
    //
    // /**
    //  * Verify given signature to given transaction
    //  * * @example
    //  * ```typescript
    //  * const data = "transaction data";
    //  * const signedData = account.sign(data);
    //  *
    //  * const isVerify = account.verify(signedData, data);
    //  * console.log(isVerify); // true
    //  *
    //  * const isVerifyInAnotherAccount = anotherAccount.verify(signedData, data);
    //  * console.log(isVerifyInAnotherAccount); // false
    //  * ```
    //  * @param {Buffer | string} siganture
    //  * @param {Buffer | string} data
    //  * @returns {boolean}
    //  */
    // public verify(siganture: Buffer | string, data: Buffer | string): boolean {
    //     return CONTEXT.verify(siganture, data, Secp256k1PublicKey.fromHex(this._publicKeyHex));
    // }

}

export {
    RemmeAccount,
    IRemmeAccount,
    RemmeAccountPrivateKey,
    RemmeAccountPublicKey,
};
