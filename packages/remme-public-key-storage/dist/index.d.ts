import { IRemmeApi } from "remme-api";
import { IRemmeTransactionService, IBaseTransactionResponse } from "remme-transaction-service";
import { IRemmeAccount } from "remme-account";
import { IRemmePublicKeyStorage } from "./interface";
import { PublicKeyInfo, IPublicKeyStore } from "./models";
/**
 * Class for working with public key storage.
 * @example
 * ```typescript
 * const remme = new Remme.Client();
 * // if you don't have private and public keys you can generate them
 * const utils = await import("remme-utils");
 * const { privateKey, publicKey } = utils.generateRSAKeyPair();
 * const storeResponse = await remme.publicKeyStorage.store({
 *      data: "store data",
 *      privateKey, // need for signing data
 *      publicKey,
 *      validFrom,
 *      validTo,
 * });
 * storeResponse.connectToWebSocket((err: Error, res: any) => {
 *      if (err) {
 *          console.log(err);
 *          return;
 *      }
 *      console.log(res);
 *      storeResponse.closeWebSocket();
 *
 *      const keyIsValid = await remme.publicKeyStorage.check(publicKey);
 *      console.log(keyIsValid); // true
 *
 *      const publicKeyInfo = await remme.publicKeyStorage.getInfo(publicKey);
 *      console.log(publicKeyInfo); // PublicKeyInfo
 *
 *      const revoke = await remme.publicKeyStorage.revoke(publicKey);
 *      // You can connectToWebSocket like in store method.
 *      console.log(revoke.batchId); // string{\^[a-f0-9]{128}$\}
 *
 *      const publicKeys = await remme.publicKeyStorage.getAccountPublicKeys(remme.account.publicKeyHex);
 *      console.log(publicKeys); // string[]
 * })
 * ```
 */
declare class RemmePublicKeyStorage implements IRemmePublicKeyStorage {
    [key: string]: any;
    private readonly _remmeApi;
    private readonly _remmeAccount;
    private readonly _remmeTransaction;
    private readonly _familyName;
    private readonly _familyVersion;
    private _generateRSASignature(data, privateKey, padding);
    private _generateED25519Signature(data, privateKey);
    private _generateTransactionPayload(method, data);
    private _createAndSendTransaction(inputsOutputs, payloadBytes);
    private _getInfoByPublicKey(address);
    private _generateMessage(data);
    private _generateEntityHash(message);
    /**
     * @example
     * Usage without remme main package
     * ```typescript
     * const api = new RemmeApi();
     * const account = new RemmeAccount();
     * const transaction = new RemmeTransactionService(api, account);
     * const publicKeyStorage = new RemmePublicKeyStorage(api, account, transaction);
     * ```
     * @param {IRemmeApi} remmeApi
     * @param {IRemmeAccount} remmeAccount
     * @param {IRemmeTransactionService} remmeTransaction
     */
    constructor(remmeApi: IRemmeApi, remmeAccount: IRemmeAccount, remmeTransaction: IRemmeTransactionService);
    /**
     * Store public key with its data into REMChain.
     * Send transaction to chain.
     * @example
     * ```typescript
     * import { PublicKeyType, RSASignaturePadding } from "remme-public-key-storage";
     *
     * const storeResponse = await remme.publicKeyStorage.store({
     *      data: "store data",
     *      privateKey, // need for signing data
     *      publicKey,
     *      publicKeyType: PublicKeyType.RSA,
     *      rsaSignaturePadding: RSASignaturePadding.PSS,
     *      validFrom,
     *      validTo,
     * });
     *
     * storeResponse.connectToWebSocket((err: Error, res: any) => {
     *      if (err) {
     *          console.log(err);
     *          return;
     *      }
     *      console.log(res);
     * })
     * ```
     * @param {string} data
     * @param {IRemmeKeys} keys
     * @param {number} validFrom
     * @param {number} validTo
     * @param {NewPubKeyPayload.PubKeyType} publicKeyType
     * @param {NewPubKeyPayload.RSASignaturePadding} paddingRSA
     * @returns {Promise<IBaseTransactionResponse>}
     */
    store({data, keys, validFrom, validTo, publicKeyType, rsaSignaturePadding}: IPublicKeyStore): Promise<IBaseTransactionResponse>;
    /**
     * Check public key on validity and revocation.
     * Can take address of public key.
     * @example
     * ```typescript
     * const isValid = await remme.publicKeyStorage.check(publicKey);
     * console.log(isValid); // true or false
     * ```
     * @param {string} address
     * @returns {Promise<boolean>}
     */
    check(address: string): Promise<boolean>;
    /**
     * Get info about this public key.
     * Can take address of public key.
     * @example
     * ```typescript
     * const info = await remme.publicKeyStorage.getInfo(publicKey);
     * console.log(info); // PublicKeyInfo
     * ```
     * @param {string} address
     * @returns {Promise<PublicKeyInfo>}
     */
    getInfo(address: string): Promise<PublicKeyInfo>;
    /**
     * Revoke given public key.
     * Can take address of public key.
     * Send transaction to chain.
     * @example
     * ```typescript
     * const revokeResponse = await remme.publicKeyStorage.revoke(publicKey);
     * revokeResponse.connectToWebSocket((err: Error, res: any) => {
     *      if (err) {
     *          console.log(err);
     *          return;
     *      }
     *      console.log(res);
     * })
     * ```
     * @param {string} address
     * @returns {Promise<IBaseTransactionResponse>}
     */
    revoke(address: string): Promise<IBaseTransactionResponse>;
    /**
     * Take account public key in hex format (which describe in PATTERNS.PUBLIC_KEY)
     * @example
     * ```typescript
     * const remme = new Remme.Client();
     * const publicKeys = await remme.publicKeyStorage.getAccountPublicKeys(remme.account.publicKeyHex);
     * console.log(publicKeys); // string[]
     * ```
     * @param {string} address
     * @returns {Promise<string[]>}
     */
    getAccountPublicKeys(address: string): Promise<string[]>;
}
export { RemmePublicKeyStorage, IRemmePublicKeyStorage, PublicKeyInfo, IPublicKeyStore };
