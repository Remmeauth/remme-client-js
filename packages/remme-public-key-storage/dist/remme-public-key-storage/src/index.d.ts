/// <reference types="node-forge" />
import { forge } from "remme-utils";
import { IRemmeRest } from "remme-rest";
import { IRemmeTransactionService, IBaseTransactionResponse } from "remme-transaction-service";
import { IRemmeAccount } from "remme-account";
import { IRemmePublicKeyStorage } from "./interface";
import { PublicKeyStorageCheckResult, PublicKeyStorageStoreDto, PublicKeyInfo } from "./models";
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
 *      const keyIsValid = await remme.publicKeyStorage.check(publicKey);
 *      console.log(keyIsValid); // true
 *      const publicKeyInfo = await remme.publicKeyStorage.getInfo(publicKey);
 *      console.log(publicKeyInfo); //
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
    constructor(remmeRest: IRemmeRest, remmeAccount: IRemmeAccount, remmeTransaction: IRemmeTransactionService);
    store({data, publicKey, privateKey, validFrom, validTo, publicKeyType, entityType}: PublicKeyStorageStoreDto): Promise<IBaseTransactionResponse>;
    check(publicKey: string | forge.pki.PEM | forge.pki.Key): Promise<boolean>;
    getInfo(publicKey: string | forge.pki.PEM | forge.pki.Key): Promise<PublicKeyInfo>;
    revoke(publicKey: string | forge.pki.PEM | forge.pki.Key): Promise<IBaseTransactionResponse>;
    getUserPublicKeys(userAccountPublicKey: string): Promise<string[]>;
    generateMessage(data: string): string;
    generateEntityHash(message: string): string;
}
export { RemmePublicKeyStorage, IRemmePublicKeyStorage, PublicKeyStorageCheckResult };
