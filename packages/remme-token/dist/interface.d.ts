import { IBaseTransactionResponse } from "remme-base-transaction-response";
export interface IRemmeToken {
    transfer(publicKeyTo: string, amount: number): Promise<IBaseTransactionResponse>;
    getBalance(publicKeyTo: string): Promise<number>;
}
