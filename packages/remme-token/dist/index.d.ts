import { IRemmeRest } from "remme-rest";
import { IBaseTransactionResponse, IRemmeTransactionService } from "remme-transaction-service";
import { IRemmeToken } from "./interface";
declare class RemmeToken implements IRemmeToken {
    [key: string]: any;
    private readonly _remmeRest;
    private readonly _remmeTransaction;
    private readonly _familyName;
    private readonly _familyVersion;
    constructor(remmeRest: IRemmeRest, remmeTransaction: IRemmeTransactionService);
    transfer(publicKeyTo: string, amount: number): Promise<IBaseTransactionResponse>;
    getBalance(publicKeyTo: string): Promise<number>;
}
export { RemmeToken, IRemmeToken };
