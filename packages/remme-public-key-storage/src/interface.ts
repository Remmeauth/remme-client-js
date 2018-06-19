import { forge } from "remme-utils";
import { IBaseTransactionResponse } from "remme-base-transaction-response";

import {
    PublicKeyStorageCheckResult,
    PublicKeyStorageStoreDto,
} from "./models";

export interface IRemmePublicKeyStorage {
    store(data: PublicKeyStorageStoreDto): Promise<IBaseTransactionResponse>;

    check(publicKeyPEM: forge.pki.PEM): Promise<PublicKeyStorageCheckResult>;

    revoke(publicKeyPEM: forge.pki.PEM): Promise<IBaseTransactionResponse>;

    getUserPublicKeys(publicKey: string): Promise<string[]>;

    generateMessage(data: string): string;

    generateEntityHash(message: string): string;
}
