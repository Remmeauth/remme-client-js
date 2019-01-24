import {
    bytesToHex,
    checkAddress,
    checkSha,
    generateAddress,
    generateSettingsAddress,
    hexToBytes,
    PublicKeyRequest,
    RemmeFamilyName,
    sha512,
} from "remme-utils";
import { IRemmeApi, RemmeMethods } from "remme-api";
import { IBaseTransactionResponse, IRemmeTransactionService } from "remme-transaction-service";
import {
    INewPubKeyPayload,
    NewPubKeyPayload,
    NewPubKeyStoreAndPayPayload,
    PubKeyMethod,
    RevokePubKeyPayload,
    TransactionPayload,
} from "remme-protobuf";
import { IRemmeAccount } from "remme-account";
import { KeyType, RemmeKeys, RSASignaturePadding } from "remme-keys";

import { IRemmePublicKeyStorage } from "./interface";
import { IPublicKeyInfo, IPublicKeyCreate,  PublicKeyInfo } from "./models";

type IRSAConfiguration = NewPubKeyPayload.IRSAConfiguration;
type IECDSAConfiguration = NewPubKeyPayload.IECDSAConfiguration;
type IEd25519Configuration = NewPubKeyPayload.IEd25519Configuration;

const EC = NewPubKeyPayload.ECDSAConfiguration.EC;

/**
 * Class for working with public key storage.
 * @example
 * ```typescript
 * import { KeyType } from "remme-keys";
 * const remme = new Remme.Client();
 * const keys = await Remme.Keys.generateKeyPair(KeyType.RSA);
 * const storeResponse = await remme.publicKeyStorage.createAndStore({
 *      data: "store data",
 *      keys,
 *      validFrom,
 *      validTo,
 *      signature,
 *      doOwnerPay
 * });
 * storeResponse.connectToWebSocket((err: Error, res: any) => {
 *      if (err) {
 *          console.log(err);
 *          return;
 *      }
 *      console.log(res);
 *      storeResponse.closeWebSocket();
 *
 *      const keyIsValid = await remme.publicKeyStorage.check(keys.address);
 *      console.log(keyIsValid); // true
 *
 *      const publicKeyInfo = await remme.publicKeyStorage.getInfo(keys.address);
 *      console.log(publicKeyInfo); // PublicKeyInfo
 *
 *      const revoke = await remme.publicKeyStorage.revoke(keys.address);
 *      // You can connectToWebSocket like in store method.
 *      console.log(revoke.batchId); // string{\^[a-f0-9]{128}$\}
 *
 *      const publicKeyAddresses = await remme.publicKeyStorage.getAccountPublicKeys(remme.account.address);
 *      console.log(publicKeyAddresses); // string[]
 * })
 * ```
 */
class RemmePublicKeyStorage implements IRemmePublicKeyStorage {

    [key: string]: any;

    private readonly _remmeApi: IRemmeApi;
    private readonly _remmeAccount: IRemmeAccount;
    private readonly _remmeTransaction: IRemmeTransactionService;
    private readonly _familyName = RemmeFamilyName.PublicKey;
    private readonly _familyVersion = "0.1";
    private readonly _zeroAddress = "0".repeat(70);

    private _generateTransactionPayload(method: number, data: Uint8Array): Uint8Array {
        return TransactionPayload.encode({
            method,
            data,
        }).finish();
    }

    private async _createAndSendTransaction(inputs: string[], outputs: string[], payloadBytes: Uint8Array)
        : Promise<IBaseTransactionResponse> {
        const transaction = await this._remmeTransaction.create({
            familyName: this._familyName,
            familyVersion: this._familyVersion,
            inputs,
            outputs,
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

    private async _constructKeysFromPayload(
        payload: NewPubKeyPayload | INewPubKeyPayload,
    ): Promise<IRemmeAccount> {
        const { rsa, ecdsa, ed25519 } = payload;
        const { key } = rsa || ecdsa || ed25519;
        return await RemmeKeys.construct({
            keyType: rsa ? KeyType.RSA :
                     ecdsa ? KeyType.ECDSA :
                     ed25519 ? KeyType.EdDSA : undefined,
            publicKey: key,
        });
    }

    private _KeyType = {
        [KeyType.RSA]: (data: IRSAConfiguration) => new NewPubKeyPayload.RSAConfiguration(data),
        [KeyType.ECDSA]: (data: IECDSAConfiguration) => new NewPubKeyPayload.ECDSAConfiguration({
            ...data,
            ec: EC.SECP256k1,
        }),
        [KeyType.EdDSA]: (data: IEd25519Configuration) => new NewPubKeyPayload.Ed25519Configuration(data),
    };
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
     * Create public key payload in bytes.
     * @example
     * ```typescript
     * import { KeyType, RSASignaturePadding } from "remme-keys";
     *
     * const keys = await Remme.Keys.generateKeyPair(KeyType.RSA);
     *
     * const keyPayload = remme.publicKeyStorage.create({
     *      data: "store data",
     *      keys,
     *      rsaSignaturePadding: RSASignaturePadding.PSS,
     *      validFrom,
     *      validTo,
     *      signature,
     *      doOwnerPay
     * });
     *
     * ```
     * @param {string} data
     * @param {IRemmeKeys} keys
     * @param {number} validFrom
     * @param {number} validTo
     * @param {RSASignaturePadding} paddingRSA
     * @param {string} signature                    Optional
     * @param {boolean} doOwnerPay                  Optional (true by default)
     * @returns {Promise<IBaseTransactionResponse>}
     */
    public create({
                      data,
                      keys,
                      validFrom,
                      validTo,
                      rsaSignaturePadding = RSASignaturePadding.PSS,
                      signature,
                      doOwnerPay = true,
                  }: IPublicKeyCreate): Uint8Array {
        const { publicKey, keyType } = keys;
        const message = signature ? data : sha512(data);

        const entityHash = Buffer.from(message);
        const entityHashSignature = hexToBytes(signature || keys.sign(message, rsaSignaturePadding));

        const pubKeyPayload: INewPubKeyPayload = {
            [keyType]: this._KeyType[keyType]({
                key: publicKey,
                padding: keyType === KeyType.RSA ? rsaSignaturePadding : undefined,
            }),
            hashingAlgorithm: NewPubKeyPayload.HashingAlgorithm.SHA256,
            entityHash,
            entityHashSignature,
            validFrom,
            validTo,
        };

        if (doOwnerPay) {
            return NewPubKeyPayload.encode(pubKeyPayload).finish();
        }

        const { publicKey: ownerPublicKey } = this._remmeAccount;
        const signatureByOwnerHex = this._remmeAccount.sign(
            NewPubKeyPayload.encode(pubKeyPayload).finish(),
        );
        const signatureByOwner = hexToBytes(signatureByOwnerHex);
        return NewPubKeyStoreAndPayPayload.encode({
            pubKeyPayload,
            ownerPublicKey,
            signatureByOwner,
        }).finish();
    }

    /**
     * Store public key payload bytes with data into REMChain.
     * Send transaction to chain.
     * @example
     * ```typescript
     * import { KeyType, RSASignaturePadding } from "remme-keys";
     *
     * const keys = await Remme.Keys.generateKeyPair(KeyType.RSA);
     *
     * const payloadBytes = remme.publicKeyStorage.create({
     *      data: "store data",
     *      keys,
     *      rsaSignaturePadding: RSASignaturePadding.PSS,
     *      validFrom,
     *      validTo,
     *      signature,
     *      doOwnerPay
     * });
     *
     * const storeResponse = await remme.publicKeyStorage.store(payloadBytes);
     *
     * storeResponse.connectToWebSocket((err: Error, res: any) => {
     *      if (err) {
     *          console.log(err);
     *          return;
     *      }
     *      console.log(res);
     * })
     * ```
     * @param {Uint8Array} data
     */
    public async store(data: Uint8Array): Promise<IBaseTransactionResponse> {
        let message: NewPubKeyPayload | NewPubKeyStoreAndPayPayload;
        let payload: Uint8Array;
        let pubKeyAddress: string;

        message = NewPubKeyStoreAndPayPayload.decode(data).pubKeyPayload.entityHash.byteLength
            ? NewPubKeyStoreAndPayPayload.decode(data)
            : NewPubKeyPayload.decode(data);

        if (message instanceof NewPubKeyPayload) {
            const { entityHash, entityHashSignature } = message;

            checkSha(entityHash.toString());

            const keys = await this._constructKeysFromPayload(message);

            if (!keys.verify(entityHash.toString(), bytesToHex(entityHashSignature))) {
                throw new Error("Signature not valid");
            }

            pubKeyAddress = keys.address;
            payload = data;
        } else if (message instanceof NewPubKeyStoreAndPayPayload) {
            const { ownerPublicKey, signatureByOwner, pubKeyPayload } = message;
            const signedPayload = NewPubKeyPayload.encode(pubKeyPayload).finish();

            const accountKey = await RemmeKeys.construct({
                keyType: KeyType.ECDSA,
                publicKey: ownerPublicKey,
            });

            if (!accountKey.verify(signedPayload, bytesToHex(signatureByOwner))) {
                throw new Error("Owner signature not valid");
            }

            const { entityHash, entityHashSignature} = pubKeyPayload;
            const keys = await this._constructKeysFromPayload(pubKeyPayload);

            if (!keys.verify(entityHash.toString(), bytesToHex(entityHashSignature))) {
                throw new Error("Signature not valid");
            }
            pubKeyAddress = keys.address;
            payload = NewPubKeyPayload.encode(pubKeyPayload).finish();
        } else {
            throw new Error("Invalid payload");
        }

        const settingAddress = generateSettingsAddress("remme.economy_enabled");

        const inputsOutputs = [
            pubKeyAddress,
            this._remmeAccount.address,
            this._zeroAddress,
            settingAddress,
        ];

        const payloadBytes = this._generateTransactionPayload(PubKeyMethod.Method.STORE, payload);

        return await this._createAndSendTransaction(inputsOutputs, inputsOutputs, payloadBytes);
    }

    /**
     * Create public key payload bytes and store public key with its data into REMChain.
     * Send transaction to chain.
     * @example
     * ```typescript
     * import { KeyType, RSASignaturePadding } from "remme-keys";
     *
     * const keys = await Remme.Keys.generateKeyPair(KeyType.RSA);
     *
     * const storeResponse = await remme.publicKeyStorage.store({
     *      data: "store data",
     *      keys,
     *      rsaSignaturePadding: RSASignaturePadding.PSS,
     *      validFrom,
     *      validTo,
     *      signature,
     *      doOwnerPay
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
     * @param {IPublicKeyCreate} data
     * @returns {Promise<IBaseTransactionResponse>}
     */
    public async createAndStore(data: IPublicKeyCreate): Promise<IBaseTransactionResponse> {
        const payloadBytes = this.create(data);
        return await this.store(payloadBytes);
    }

    /**
     * Check public key on validity and revocation.
     * Take address of public key.
     * @example
     * ```typescript
     * const isValid = await remme.publicKeyStorage.check(publicKeyAddress);
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
     * Take address of public key.
     * @example
     * ```typescript
     * const info = await remme.publicKeyStorage.getInfo(publicKeyAddress);
     * console.log(info); // PublicKeyInfo
     * ```
     * @param {string} address
     * @returns {Promise<PublicKeyInfo>}
     */
    public async getInfo(address: string): Promise<PublicKeyInfo> {
        return await this._getInfoByPublicKey(address);
    }

    /**
     * Revoke public key by address.
     * Take address of public key.
     * Send transaction to chain.
     * @example
     * ```typescript
     * const revokeResponse = await remme.publicKeyStorage.revoke(publicKeyAddress);
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
        return await this._createAndSendTransaction([address], [address], payloadBytes);
    }

    /**
     * Take account address (which describe in PATTERNS.ADDRESS)
     * @example
     * ```typescript
     * const remme = new Remme.Client();
     * const publicKeyAddresses = await remme.publicKeyStorage.getAccountPublicKeys(remme.account.address);
     * console.log(publicKeyAddresses); // string[]
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
    IPublicKeyCreate,
};
