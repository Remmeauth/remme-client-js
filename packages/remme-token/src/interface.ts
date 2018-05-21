import { forge, BaseTransactionResponse } from "remme-utils";

export interface IRemmeToken {

    transfer(publicKeyTo: forge.pki.Key, amount: number): Promise<BaseTransactionResponse>;

    getBalance(publicKeyTo: forge.pki.Key): Promise<number>;

}
