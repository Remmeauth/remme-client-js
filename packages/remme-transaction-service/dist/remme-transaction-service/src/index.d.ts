import { IRemmeRest } from "remme-rest";
import { IRemmeAccount } from "remme-account";
import { IRemmeTransactionService } from "./interface";
import { TransactionCreatePayload, BaseTransactionResponse, IBaseTransactionResponse } from "./models";
declare class RemmeTransactionService implements IRemmeTransactionService {
    [key: string]: any;
    private readonly _remmeRest;
    private readonly _remmeAccount;
    private _generateHash(value);
    constructor(remmeRest: IRemmeRest, remmeAccount: IRemmeAccount);
    create<Input>(settings: TransactionCreatePayload): Promise<string>;
    send(transaction: string): Promise<IBaseTransactionResponse>;
}
export { RemmeTransactionService, IRemmeTransactionService, BaseTransactionResponse, IBaseTransactionResponse };
