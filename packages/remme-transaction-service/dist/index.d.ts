import { IRemmeRest } from "remme-rest";
import { IBaseTransactionResponse } from "remme-base-transaction-response";
import { IRemmeAccount } from "remme-account";
import { IRemmeTransactionService } from "./interface";
import { TransactionCreatePayload } from "./models";
declare class RemmeTransactionService implements IRemmeTransactionService {
    private readonly _remmeRest;
    private readonly _remmeAccount;
    constructor(remmeRest: IRemmeRest, remmeAccount: IRemmeAccount);
    create<Input>(settings: TransactionCreatePayload): Promise<string>;
    send(transaction: string): Promise<IBaseTransactionResponse>;
    private getNonce();
}
export { RemmeTransactionService, IRemmeTransactionService };
