/// <reference types="node" />
import { IRemmeAccount } from "./interface";
import { RemmeAccountPrivateKey, RemmeAccountPublicKey } from "./models";
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
declare class RemmeAccount implements IRemmeAccount {
    [key: string]: any;
    private readonly _signer;
    private readonly _publicKeyHex;
    private readonly _privateKeyHex;
    private readonly _familyName;
    private readonly _address;
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
    constructor(privateKeyHex?: string);
    /**
     * Family name for generate address for this account in the blockchain.
     * (https://docs.remme.io/remme-core/docs/family-account.html#addressing)
     * @type {string}
     */
    readonly familyName: string;
    /**
     * Address of this account in blockchain. (https://docs.remme.io/remme-core/docs/family-account.html#addressing)
     */
    readonly address: string;
    /**
     * Return private key from hex format.
     * @returns {Buffer}
     */
    readonly privateKey: RemmeAccountPrivateKey;
    /**
     * Return public key from hex format.
     * @returns {Buffer}
     */
    readonly publicKey: RemmeAccountPublicKey;
    /**
     * Hex format private key.
     * @returns {Buffer}
     */
    readonly privateKeyHex: string;
    /**
     * Hex format public key.
     * @returns {Buffer}
     */
    readonly publicKeyHex: string;
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
    sign(transaction: Uint8Array | string): Buffer;
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
    verify(siganture: Buffer | string, transaction: Uint8Array | string): boolean;
}
export { RemmeAccount, IRemmeAccount, RemmeAccountPrivateKey, RemmeAccountPublicKey };
