import { forge } from "remme-utils";
import { IBaseTransactionResponse } from "remme-transaction-service";

import {
    PublicKeyInfo,
    IPublicKeyCreate,
} from "./models";

export interface IRemmePublicKeyStorage {
    create(data: IPublicKeyCreate): Uint8Array;

    store(data: Uint8Array): Promise<IBaseTransactionResponse>;

    createAndStore(data: IPublicKeyCreate): Promise<IBaseTransactionResponse>;

    check(publicKey: string | forge.pki.PEM | forge.pki.Key): Promise<boolean>;

    getInfo(publicKey: string | forge.pki.PEM | forge.pki.Key): Promise<PublicKeyInfo>;

    revoke(publicKey: string | forge.pki.PEM | forge.pki.Key): Promise<IBaseTransactionResponse>;

    getAccountPublicKeys(accountPublicKey: string): Promise<string[]>;
}
