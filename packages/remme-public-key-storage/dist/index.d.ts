import { forge } from "remme-utils";
import { IRemmeRest } from "remme-rest";
import { IRemmeTransactionService, IBaseTransactionResponse } from "remme-transaction-service";
import { IRemmeAccount } from "remme-account";
import { IRemmePublicKeyStorage } from "./interface";
import { PublicKeyStorageCheckResult, PublicKeyStorageStoreDto } from "./models";
declare class RemmePublicKeyStorage implements IRemmePublicKeyStorage {
    [key: string]: any;
    private readonly _remmeRest;
    private readonly _remmeTransaction;
    private readonly _remmeAccount;
    private readonly _familyName;
    private readonly _familyVersion;
    constructor(remmeRest: IRemmeRest, remmeTransaction: IRemmeTransactionService, remmeAccount: IRemmeAccount);
    store({data, publicKey, privateKey, validTo, validFrom, publicKeyType, entityType}: PublicKeyStorageStoreDto): Promise<IBaseTransactionResponse>;
    check(publicKey: forge.pki.PEM | forge.pki.Key): Promise<PublicKeyStorageCheckResult>;
    revoke(publicKey: forge.pki.PEM | forge.pki.Key): Promise<IBaseTransactionResponse>;
    getUserPublicKeys(userAccountPublicKey: string): Promise<string[]>;
    generateMessage(data: string): string;
    generateEntityHash(message: string): string;
    private _generateSignature(data, privateKey);
    private _generateTransactionPayload(method, data);
    private _createAndSendTransaction(inputsOutputs, payloadBytes);
    private _checkPublicKey(publicKey);
}
export { RemmePublicKeyStorage, IRemmePublicKeyStorage, PublicKeyStorageCheckResult };
