import { IRemmeRest } from "remme-rest";
import { BaseTransactionResponse } from "remme-utils";
import { IRemmeAccount } from "remme-account";
import { IRemmeTransactionService } from "./interface";
import { TransactionCreatePayload } from "./models";
declare class RemmeTransactionService implements IRemmeTransactionService {
    private readonly _remmeRest;
    private readonly _remmeAccount;
    constructor(remmeRest: IRemmeRest, remmeAccount: IRemmeAccount);
    create<Input>(settings: TransactionCreatePayload): Promise<string>;
    send(transaction: string): Promise<BaseTransactionResponse>;
    private getNonce();
}
export { RemmeTransactionService, IRemmeTransactionService };
