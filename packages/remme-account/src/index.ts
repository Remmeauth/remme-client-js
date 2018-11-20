import { IRemmeKeys, KeyType, RemmeKeys, ECDSA } from "remme-keys";
import { generateAddress, hexToBytes, RemmeFamilyName } from "remme-utils";

/**
 * Account that is used for signing transactions and storing public keys which he was signed.
 * @example
 * ```typescript
 * const account = new RemmeAccount("ac124700cc4325cc2a78b22b9acb039d9efe859ef673b871d55d1078391934f9");
 * console.log(account.privateKeyHex); // "ac124700cc4325cc2a78b22b9acb039d9efe859ef673b871d55d1078391934f9";
 *
 * const anotherAccount = new RemmeAccount();
 * console.log(anotherAccount.privateKeyHex); // "b5167700cc4325cc2a78b22b9acb039d9efe859ef673b871d55d10783919129f";
 *
 * const data = "some data";
 * const signedData = account.sign(data);
 *
 * const isVerify = account.verify(signedData, data);
 * console.log(isVerify); // true
 *
 * const isVerifyInAnotherAccount = anotherAccount.verify(signedData, data);
 * console.log(isVerifyInAnotherAccount); // false
 * ```
 */
class RemmeAccount extends ECDSA implements IRemmeKeys {

    // index signature
    [key: string]: any;

    /**
     * Get or generate private key, create signer by using private key,
     * generate public key from private key and generate account address by using public key and family name
     * (https://docs.remme.io/remme-core/docs/family-account.html#addressing)
     * @example
     * Get private key;
     * ```typescript
     * const account = new RemmeAccount("ac124700cc4325cc2a78b22b9acb039d9efe859ef673b871d55d1078391934f9");
     * console.log(account.privateKeyHex); // "ac124700cc4325cc2a78b22b9acb039d9efe859ef673b871d55d1078391934f9";
     * ```
     *
     * Generate new private key;
     * ```typescript
     * const account = new RemmeAccount();
     * console.log(account.privateKeyHex); // "b5167700cc4325cc2a78b22b9acb039d9efe859ef673b871d55d10783919129f";
     * ```
     * @param {string} privateKeyHex
     */
    constructor(privateKeyHex?: string) {
        super({
            privateKey: privateKeyHex ? hexToBytes(privateKeyHex) : ECDSA.generateKeyPair().privateKey,
        });
        this._familyName = RemmeFamilyName.Account;
        this._address = generateAddress(this._familyName, this.publicKeyHex);
    }

}

export {
    RemmeAccount,
    IRemmeKeys as IRemmeAccount,
};
