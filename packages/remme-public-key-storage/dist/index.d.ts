import { forge, BaseTransactionResponse } from "remme-utils";
import { IRemmeRest } from "remme-rest";
import { IRemmeTransactionService } from "remme-transaction-service";
import { IRemmePublicKeyStorage } from "./interface";
import { PublicKeyStorageStoreDto } from "./models";
declare class RemmePublicKeyStorage implements IRemmePublicKeyStorage {
    private readonly _remmeRest;
    private readonly _remmeTransaction;
    private readonly _familyName;
    private readonly _familyVersion;
    constructor(remmeRest: IRemmeRest, remmeTransaction: IRemmeTransactionService);
    store({data, publicKey, privateKey, validTo, validFrom, publicKeyType, entityType}: PublicKeyStorageStoreDto): Promise<BaseTransactionResponse>;
    check(publicKeyPEM: forge.pki.PEM): Promise<boolean>;
    revoke(publicKeyPEM: forge.pki.PEM): Promise<BaseTransactionResponse>;
    getUserPublicKeys(userAccountPublicKey: string): Promise<string[]>;
    private _generateEntityHash(certificate);
    private _generateSignature(certificate, privateKey);
    private _generateTransactionPayload(method, data);
    private _createAndSendTransaction(payloadBytes);
    private _checkPublicKey(publicKeyPEM);
}
export { RemmePublicKeyStorage, IRemmePublicKeyStorage };
