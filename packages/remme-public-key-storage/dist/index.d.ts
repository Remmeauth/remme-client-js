import { forge } from "remme-utils";
import { IRemmeRest } from "remme-rest";
import { IRemmeTransactionService, IBaseTransactionResponse } from "remme-transaction-service";
import { NewPubKeyPayload } from "remme-protobuf";
import { IRemmeAccount } from "remme-account";
import { IRemmePublicKeyStorage } from "./interface";
import { PublicKeyInfo, IPublicKeyStore } from "./models";
declare const PublicKeyType: typeof NewPubKeyPayload.PubKeyType;
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
    private readonly _remmeRest;
    private readonly _remmeAccount;
    private readonly _remmeTransaction;
    private readonly _familyName;
    private readonly _familyVersion;
    private _generateSignature(data, privateKey);
    private _generateTransactionPayload(method, data);
    private _createAndSendTransaction(inputsOutputs, payloadBytes);
    private _checkPublicKey(publicKey);
    private _getInfoByPublicKey(publicKey);
    private _generateMessage(data);
    private _generateEntityHash(message);
    /**
     * @example
     * Usage without remme main package
     * ```typescript
     * const rest = new RemmeRest();
     * const account = new RemmeAccount();
     * const transaction = new RemmeTransactionService(rest, account);
     * const publicKeyStorage = new RemmePublicKeyStorage(rest, account, transaction);
     * ```
     * @param {IRemmeRest} remmeRest
     * @param {IRemmeAccount} remmeAccount
     * @param {IRemmeTransactionService} remmeTransaction
     */
    constructor(remmeRest: IRemmeRest, remmeAccount: IRemmeAccount, remmeTransaction: IRemmeTransactionService);
    /**
     * Store public key with its data into REMChain.
     * Send transaction to chain.
     * @example
     * ```typescript
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
     * })
     * ```
     * @param {string} data
     * @param {module:node-forge.pki.Key | module:node-forge.pki.PEM} publicKey
     * @param {module:node-forge.pki.Key | module:node-forge.pki.PEM} privateKey
     * @param {number} validFrom
     * @param {number} validTo
     * @param {NewPubKeyPayload.PubKeyType} publicKeyType
     * @param {NewPubKeyPayload.EntityType} entityType
     * @returns {Promise<IBaseTransactionResponse>}
     */
    store({data, publicKey, privateKey, validFrom, validTo, publicKeyType, entityType}: IPublicKeyStore): Promise<IBaseTransactionResponse>;
    /**
     * Check public key on validity and revocation.
     * Can take address of public key.
     * @example
     * ```typescript
     * const isValid = await remme.publicKeyStorage.check(publicKey);
     * console.log(isValid); // true or false
     * ```
     * @param {string | module:node-forge.pki.PEM | module:node-forge.pki.Key} publicKey
     * @returns {Promise<boolean>}
     */
    check(publicKey: string | forge.pki.PEM | forge.pki.Key): Promise<boolean>;
    /**
     * Get info about this public key.
     * Can take address of public key.
     * @example
     * ```typescript
     * const info = await remme.publicKeyStorage.getInfo(publicKey);
     * console.log(info); // PublicKeyInfo
     * ```
     * @param {string | module:node-forge.pki.PEM | module:node-forge.pki.Key} publicKey
     * @returns {Promise<PublicKeyInfo>}
     */
    getInfo(publicKey: string | forge.pki.PEM | forge.pki.Key): Promise<PublicKeyInfo>;
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
     * @param {string | module:node-forge.pki.PEM | module:node-forge.pki.Key} publicKey
     * @returns {Promise<IBaseTransactionResponse>}
     */
    revoke(publicKey: string | forge.pki.PEM | forge.pki.Key): Promise<IBaseTransactionResponse>;
    /**
     * Take account public key in hex format (which describe in PATTERNS.PUBLIC_KEY)
     * @example
     * ```typescript
     * const remme = new Remme.Client();
     * const publicKeys = await remme.publicKeyStorage.getAccountPublicKeys(remme.account.publicKeyHex);
     * console.log(publicKeys); // string[]
     * ```
     * @param {string} accountPublicKey
     * @returns {Promise<string[]>}
     */
    getAccountPublicKeys(accountPublicKey: string): Promise<string[]>;
}
export { RemmePublicKeyStorage, IRemmePublicKeyStorage, PublicKeyInfo, PublicKeyType, IPublicKeyStore };
