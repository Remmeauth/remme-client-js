import { forge } from "remme-utils";
import { IBaseTransactionResponse } from "remme-transaction-service";

import {
    PublicKeyStorageCheckResult,
    PublicKeyStorageStoreDto,
} from "./models";

export interface IRemmePublicKeyStorage {
    store(data: PublicKeyStorageStoreDto): Promise<IBaseTransactionResponse>;

    check(publicKey: forge.pki.PEM | forge.pki.Key): Promise<PublicKeyStorageCheckResult>;

    revoke(publicKey: forge.pki.PEM | forge.pki.Key): Promise<IBaseTransactionResponse>;

    getUserPublicKeys(publicKey: string): Promise<string[]>;

    generateMessage(data: string): string;

    generateEntityHash(message: string): string;
}
