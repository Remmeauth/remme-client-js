import { CreateTransactionDto, IBaseTransactionResponse } from "./models";

export interface IRemmeTransactionService {

    create(settings: CreateTransactionDto): Promise<string>;

    send(transaction: string): Promise<IBaseTransactionResponse>;

}
