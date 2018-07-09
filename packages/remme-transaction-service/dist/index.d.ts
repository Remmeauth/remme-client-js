import { IRemmeRest } from "remme-rest";
import { IRemmeAccount } from "remme-account";
import { IRemmeTransactionService } from "./interface";
import { TransactionCreatePayload, BaseTransactionResponse, IBaseTransactionResponse } from "./models";
declare class RemmeTransactionService implements IRemmeTransactionService {
    private readonly _remmeRest;
    private readonly _remmeAccount;
    constructor(remmeRest: IRemmeRest, remmeAccount: IRemmeAccount);
    create<Input>(settings: TransactionCreatePayload): Promise<string>;
    send(transaction: string): Promise<IBaseTransactionResponse>;
    private getNonce();
}
export { RemmeTransactionService, IRemmeTransactionService, BaseTransactionResponse, IBaseTransactionResponse };
