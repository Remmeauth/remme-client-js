import { RemmeRest } from "remme-rest";
import { BaseTransactionResponse } from "remme-utils";
import { IRemmeToken } from "./interface";
declare class RemmeToken implements IRemmeToken {
    private readonly _remmeRest;
    constructor(remmeRest?: RemmeRest);
    transfer(publicKeyTo: string, amount: number): Promise<BaseTransactionResponse>;
    getBalance(publicKeyTo: string): Promise<number>;
}
export { RemmeToken, IRemmeToken };
