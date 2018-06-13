import { forge, BaseTransactionResponse } from "remme-utils";
import { PublicKeyStorageStoreDto } from "./models";

export interface IRemmePublicKeyStorage {
    store(data: PublicKeyStorageStoreDto): Promise<BaseTransactionResponse>;

    check(publicKeyPEM: forge.pki.PEM): Promise<boolean>;

    revoke(publicKeyPEM: forge.pki.PEM): Promise<BaseTransactionResponse>;

    // getUserPublicKeys(publicKey: string): Promise<string[]>;
}
