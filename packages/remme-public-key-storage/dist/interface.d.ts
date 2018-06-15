import { forge } from "remme-utils";
import { IBaseTransactionResponse } from "remme-base-transaction-response";
import { PublicKeyStorageStoreDto } from "./models";
export interface IRemmePublicKeyStorage {
    store(data: PublicKeyStorageStoreDto): Promise<IBaseTransactionResponse>;
    check(publicKeyPEM: forge.pki.PEM): Promise<boolean>;
    revoke(publicKeyPEM: forge.pki.PEM): Promise<IBaseTransactionResponse>;
    getUserPublicKeys(publicKey: string): Promise<string[]>;
}
