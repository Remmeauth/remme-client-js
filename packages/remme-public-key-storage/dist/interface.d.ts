import { forge } from "remme-utils";
import { IBaseTransactionResponse } from "remme-transaction-service";
import { PublicKeyInfo, IPublicKeyStore } from "./models";
export interface IRemmePublicKeyStorage {
    store(data: IPublicKeyStore): Promise<IBaseTransactionResponse>;
    check(publicKey: string | forge.pki.PEM | forge.pki.Key): Promise<boolean>;
    getInfo(publicKey: string | forge.pki.PEM | forge.pki.Key): Promise<PublicKeyInfo>;
    revoke(publicKey: string | forge.pki.PEM | forge.pki.Key): Promise<IBaseTransactionResponse>;
    getAccountPublicKeys(accountPublicKey: string): Promise<string[]>;
}
