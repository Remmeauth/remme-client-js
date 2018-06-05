import { BaseTransactionResponse } from "remme-utils";
import { TransactionCreatePayload } from "./models";

export interface IRemmeTransactionService {

    create(settings: TransactionCreatePayload): Promise<string>;

    send(transaction: string): Promise<BaseTransactionResponse>;

}
