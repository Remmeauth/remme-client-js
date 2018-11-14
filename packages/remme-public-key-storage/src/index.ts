import {
    forge,
    generateAddress,
    toUTF8Array,
    generateSettingsAddress,
    RemmeNamespace,
    RemmeFamilyName,
    PublicKeyRequest,
    generateED25519KeyPair,
    generateRSAKeyPair,
    bytesToHex,
    checkAddress,
} from "remme-utils";
import { RemmeMethods, IRemmeApi } from "remme-api";
import { IRemmeTransactionService, IBaseTransactionResponse } from "remme-transaction-service";
import { TransactionPayload, NewPubKeyPayload, PubKeyMethod, RevokePubKeyPayload } from "remme-protobuf";
import { IRemmeAccount } from "remme-account";

import { IRemmePublicKeyStorage } from "./interface";
import {
    PublicKeyInfo,
    IPublicKeyInfo,
    IPublicKeyStore,
} from "./models";

const { PubKeyType: PublicKeyType } = NewPubKeyPayload;
const { RSASignaturePadding } = NewPubKeyPayload;
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

    private readonly _remmeApi: IRemmeApi;
    private readonly _remmeAccount: IRemmeAccount;
    private readonly _remmeTransaction: IRemmeTransactionService;
    private readonly _familyName = RemmeFamilyName.PublicKey;
    private readonly _familyVersion = "0.1";

    private _generateRSASignature(
        data: string,
        privateKey: forge.pki.Key,
        padding: NewPubKeyPayload.RSASignaturePadding,
    ): string {
        const md = forge.md.sha512.create();
        md.update(data, "utf8");
        let signature: string;
        switch (padding) {
            case RSASignaturePadding.PKCS1v15: {
                signature = privateKey.sign(md);
                break;
            }
            case RSASignaturePadding.PSS: {
                const pss = forge.pss.create({
                    md: forge.md.sha512.create(),
                    mgf: forge.mgf.mgf1.create(forge.md.sha512.create()),
                    saltLength: 20,
                });
                signature = privateKey.sign(md, pss);
            }
        }
        return forge.util.bytesToHex(signature);
    }

    private _generateED25519Signature(
        data: string,
        privateKey: Buffer,
    ): string {
        const signature = forge.pki.ed25519.sign({
            message: data,
            encoding: "utf8",
            privateKey,
        });
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

    private async _getInfoByPublicKey(address: string)
        : Promise<PublicKeyInfo> {
        checkAddress(address);
        const payload = new PublicKeyRequest(address);
        const info = await this._remmeApi
            .sendRequest<PublicKeyRequest, IPublicKeyInfo>(RemmeMethods.publicKey, payload);
        if (info !== undefined) {
            info.address = generateAddress(this._familyName, address);
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
        return bytesToHex(entityHashBytes);
    }

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
    constructor(remmeApi: IRemmeApi, remmeAccount: IRemmeAccount, remmeTransaction: IRemmeTransactionService) {
        this._remmeApi = remmeApi;
        this._remmeAccount = remmeAccount;
        this._remmeTransaction = remmeTransaction;
    }

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
    public async store({
                           data,
                           keys,
                           validFrom,
                           validTo,
                           publicKeyType,
                           rsaSignaturePadding = RSASignaturePadding.EMPTY,
                       }: IPublicKeyStore): Promise<IBaseTransactionResponse> {
        const message = this._generateMessage(data);
        const entityHash = this._generateEntityHash(message);
        const entityHashSignature = keys.sign(message, rsaSignaturePadding);

        const payload =  NewPubKeyPayload.encode({
            publicKey: keys.publicKeyBase64,
            publicKeyType,
            entityHash,
            entityHashSignature,
            rsaSignaturePadding,
            validFrom,
            validTo,
        }).finish();

        const pubKeyAddress = keys.address;
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
     * @param {string} address
     * @returns {Promise<boolean>}
     */
    public async check(address: string): Promise<boolean> {
        const { isValid } = await this._getInfoByPublicKey(address);
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
     * @param {string} address
     * @returns {Promise<PublicKeyInfo>}
     */
    public async getInfo(address: string): Promise<PublicKeyInfo> {
        return await this._getInfoByPublicKey(address);
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
     * @param {string} address
     * @returns {Promise<IBaseTransactionResponse>}
     */
    public async revoke(address: string): Promise<IBaseTransactionResponse> {
        checkAddress(address);
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
     * @param {string} address
     * @returns {Promise<string[]>}
     */
    public async getAccountPublicKeys(address: string): Promise<string[]> {
        checkAddress(address);
        const payload = new PublicKeyRequest(address);
        return await this._remmeApi
            .sendRequest<PublicKeyRequest, string[]>(RemmeMethods.userPublicKeys, payload);
    }
}

export {
    RemmePublicKeyStorage,
    IRemmePublicKeyStorage,
    PublicKeyInfo,
    IPublicKeyStore,
};
