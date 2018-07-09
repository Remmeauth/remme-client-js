import { TransactionCreatePayload, IBaseTransactionResponse } from "./models";
export interface IRemmeTransactionService {
    create(settings: TransactionCreatePayload): Promise<string>;
    send(transaction: string): Promise<IBaseTransactionResponse>;
}
