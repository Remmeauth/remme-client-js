import {
    forge,
    generateAddress,
    toHexString,
    toUTF8Array,
    generateSettingsAddress,
    RemmeNamespace,
    RemmeFamilyName,
    PATTERNS,
    PublicKeyRequest,
} from "remme-utils";
import { RemmeMethods, IRemmeRest } from "remme-rest";
import { IRemmeTransactionService, IBaseTransactionResponse } from "remme-transaction-service";
import { TransactionPayload, NewPubKeyPayload, PubKeyMethod, RevokePubKeyPayload } from "remme-protobuf";
import { IRemmeAccount } from "remme-account";

import { IRemmePublicKeyStorage } from "./interface";
import {
    PublicKeyInfo,
    IPublicKeyInfo,
    IPublicKeyStore,
} from "./models";

const PublicKeyType = NewPubKeyPayload.PubKeyType;
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
class RemmePublicKeyStorage implements IRemmePublicKeyStorage {
    // index signature
    [key: string]: any;

    private readonly _remmeRest: IRemmeRest;
    private readonly _remmeAccount: IRemmeAccount;
    private readonly _remmeTransaction: IRemmeTransactionService;
    private readonly _familyName = RemmeFamilyName.PublicKey;
    private readonly _familyVersion = "0.1";

    private _generateSignature(data: string, privateKey: forge.pki.Key): string {
        const md = forge.md.sha512.create();
        md.update(data, "utf8");
        const signature = privateKey.sign(md);
        return forge.util.bytesToHex(signature);
    }

    private _generateTransactionPayload(method: number, data: Uint8Array): Uint8Array {
        return TransactionPayload.encode({
            method,
            data,
        }).finish();
    }

    private async _createAndSendTransaction(inputsOutputs: string[], payloadBytes: Uint8Array)
        : Promise<IBaseTransactionResponse> {
        const transaction = await this._remmeTransaction.create({
            familyName: this._familyName,
            familyVersion: this._familyVersion,
            inputs: inputsOutputs,
            outputs: inputsOutputs,
            payloadBytes,
        });
        return await this._remmeTransaction.send(transaction);
    }

    private _checkPublicKey(publicKey: string | forge.pki.PEM | forge.pki.Key) {
        try {
            if (typeof publicKey === "string") {
                if (publicKey.search(PATTERNS.ADDRESS) === -1) {
                    forge.pki.publicKeyFromPem(publicKey);
                }
            } else {
                forge.pki.publicKeyToPem(publicKey);
            }
        } catch (e) {
            throw new Error("Given publicKey is not a valid");
        }
    }

    private async _getInfoByPublicKey(publicKey: string | forge.pki.PEM | forge.pki.Key)
        : Promise<PublicKeyInfo> {
        this._checkPublicKey(publicKey);
        if (typeof publicKey === "object") {
            publicKey = forge.pki.publicKeyToPem(publicKey);
        }
        const payload = new PublicKeyRequest(publicKey);
        const info = await this._remmeRest
            .sendRequest<PublicKeyRequest, IPublicKeyInfo>(RemmeMethods.publicKey, payload);
        if (info !== undefined) {
            info.address = generateAddress(this._familyName, publicKey);
            return new PublicKeyInfo(info);
        } else {
            throw new Error(`This public key was not found`);
        }
    }

    private _generateMessage(data: string): string {
        return forge.md.sha512.create().update(data).digest().toHex();
    }

    private _generateEntityHash(message: string): string {
        const entityHashBytes = toUTF8Array(message);
        return toHexString(entityHashBytes);
    }

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
    public constructor(remmeRest: IRemmeRest, remmeAccount: IRemmeAccount, remmeTransaction: IRemmeTransactionService) {
        this._remmeRest = remmeRest;
        this._remmeAccount = remmeAccount;
        this._remmeTransaction = remmeTransaction;
    }

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
    public async store({
                           data,
                           publicKey,
                           privateKey,
                           validFrom,
                           validTo,
                           publicKeyType = PublicKeyType.RSA,
                           entityType = NewPubKeyPayload.EntityType.PERSONAL,
                       }: IPublicKeyStore): Promise<IBaseTransactionResponse> {
        if (typeof publicKey === "object") {
            publicKey = forge.pki.publicKeyToPem(publicKey);
        }
        if (typeof privateKey === "string") {
            privateKey = forge.pki.privateKeyFromPem(privateKey);
        }
        const message = this._generateMessage(data);
        const entityHash = this._generateEntityHash(message);
        const entityHashSignature = this._generateSignature(message, privateKey);
        const payload =  NewPubKeyPayload.encode({
            publicKey,
            publicKeyType,
            entityType,
            entityHash,
            entityHashSignature,
            validFrom,
            validTo,
        }).finish();
        const pubKeyAddress = generateAddress(this._familyName, publicKey);
        const storagePubKey = generateSettingsAddress("remme.settings.storage_pub_key");
        const settingAddress = generateSettingsAddress("remme.economy_enabled");
        const storageAddress = generateAddress(this._remmeAccount.familyName, storagePubKey);
        const payloadBytes = this._generateTransactionPayload(PubKeyMethod.Method.STORE, payload);
        return await this._createAndSendTransaction([
            pubKeyAddress,
            storagePubKey,
            settingAddress,
            storageAddress,
        ], payloadBytes);
    }

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
    public async check(publicKey: string | forge.pki.PEM | forge.pki.Key): Promise<boolean> {
        const { isValid } = await this._getInfoByPublicKey(publicKey);
        return isValid;
    }

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
    public async getInfo(publicKey: string | forge.pki.PEM | forge.pki.Key): Promise<PublicKeyInfo> {
        return await this._getInfoByPublicKey(publicKey);
    }

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
    public async revoke(publicKey: string | forge.pki.PEM | forge.pki.Key): Promise<IBaseTransactionResponse> {
        this._checkPublicKey(publicKey);
        if (typeof publicKey === "object") {
            publicKey = forge.pki.publicKeyToPem(publicKey);
        }
        let address;
        if (publicKey.slice(0, 6) === RemmeNamespace.PublicKey) {
            address = publicKey;
        } else {
            address = generateAddress(this._familyName, publicKey);
        }
        const revokePayload = RevokePubKeyPayload.encode({
            address,
        }).finish();
        const payloadBytes = this._generateTransactionPayload(PubKeyMethod.Method.REVOKE, revokePayload);
        return await this._createAndSendTransaction([address], payloadBytes);
    }

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
    public async getAccountPublicKeys(accountPublicKey: string): Promise<string[]> {
        if (accountPublicKey.search(PATTERNS.PUBLIC_KEY) === -1) {
            throw new Error("Given public key is not a valid");
        }
        const payload = new PublicKeyRequest(accountPublicKey);
        return await this._remmeRest
            .sendRequest<PublicKeyRequest, string[]>(RemmeMethods.userPublicKeys, payload);
    }
}

export {
    RemmePublicKeyStorage,
    IRemmePublicKeyStorage,
    PublicKeyInfo,
    PublicKeyType,
    IPublicKeyStore,
};
