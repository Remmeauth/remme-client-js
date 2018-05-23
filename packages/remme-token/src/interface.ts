import { forge, BaseTransactionResponse } from "remme-utils";

export interface IRemmeToken {

    transfer(publicKeyTo: string, amount: number): Promise<BaseTransactionResponse>;

    getBalance(publicKeyTo: string): Promise<number>;

}
