import { IBaseTransactionResponse } from "remme-base-transaction-response";
import { TransactionCreatePayload } from "./models";

export interface IRemmeTransactionService {

    create(settings: TransactionCreatePayload): Promise<string>;

    send(transaction: string): Promise<IBaseTransactionResponse>;

}
