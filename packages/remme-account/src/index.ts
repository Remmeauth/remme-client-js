import { createContext, CryptoFactory } from "sawtooth-sdk/signing";
import { Secp256k1PrivateKey, Secp256k1PublicKey } from "sawtooth-sdk/signing/secp256k1";
import { generateAddress, hexToBytes, PATTERNS } from "remme-utils";

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
class RemmeAccount implements IRemmeAccount {

    // index signature
    [key: string]: any;

    private readonly _signer: any;
    private readonly _publicKeyHex: string;
    private readonly _privateKeyHex: string;
    private readonly _familyName = "account";
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
        if (privateKeyHex && privateKeyHex.search(PATTERNS.PRIVATE_KEY) === -1) {
            throw new Error("Given privateKey is not a valid");
        }
        let privateKey;
        if (!privateKeyHex) {
            privateKey = CONTEXT.newRandomPrivateKey().asHex();
        } else {
            privateKey = Secp256k1PrivateKey.fromHex(privateKeyHex);
        }
        this._signer = new CryptoFactory(CONTEXT).newSigner(privateKey);
        this._privateKeyHex = privateKey.asHex();
        this._publicKeyHex = this._signer.getPublicKey().asHex();
        this._address = generateAddress(this.familyName, this._publicKeyHex);
    }

    /**
     * Family name for generate address for this account in the blockchain.
     * @type {string}
     */
    public get familyName(): string {
        return this._familyName;
    }

    /**
     * Address of this account in blockchain.
     */
    public get address(): string {
        return this._address;
    }

    /**
     * Return private key from hex format.
     * @returns {Buffer}
     */
    public get privateKey(): RemmeAccountPrivateKey {
        return Secp256k1PrivateKey.fromHex(this._privateKeyHex);
    }

    /**
     * Return private key from hex format.
     * @returns {Buffer}
     */
    public get publicKey(): RemmeAccountPublicKey {
        return Secp256k1PublicKey.fromHex(this._publicKeyHex);
    }

    /**
     * Hex format private key.
     * @returns {Buffer}
     */
    public get privateKeyHex(): string {
        return this._privateKeyHex;
    }

    /**
     * Hex format public key.
     * @returns {Buffer}
     */
    public get publicKeyHex(): string {
        return this._publicKeyHex;
    }

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
    public sign(transaction: Uint8Array | string): Buffer {
        if (typeof transaction === "string") {
            transaction = hexToBytes(transaction);
        }
        return this._signer.sign(transaction);
    }

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
    public verify(siganture: Buffer | string, transaction: Uint8Array | string): boolean {
        return CONTEXT.verify(siganture, transaction, Secp256k1PublicKey.fromHex(this._publicKeyHex));
    }

}

export {
    RemmeAccount,
    IRemmeAccount,
    RemmeAccountPrivateKey,
    RemmeAccountPublicKey,
};
