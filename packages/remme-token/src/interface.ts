import { IBaseTransactionResponse } from "remme-transaction-service";

export interface IRemmeToken {

    transfer(addressTo: string, amount: number): Promise<IBaseTransactionResponse>;

    transferFromUnfrozenToOperational(amount: number): Promise<IBaseTransactionResponse>;

    transferFromFrozenToUnfrozen(): Promise<IBaseTransactionResponse>;

    getBalance(address: string): Promise<number>;

}
