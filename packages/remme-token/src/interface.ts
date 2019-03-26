import { IBaseTransactionResponse } from "remme-transaction-service";

export interface IRemmeToken {

    transfer(publicKeyTo: string, amount: number): Promise<IBaseTransactionResponse>;

    transferFromUnfrozenToOperational(amount: number): Promise<IBaseTransactionResponse>;

    getBalance(publicKeyTo: string): Promise<number>;

}
