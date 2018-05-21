import { RemmeRest } from "remme-rest";
import { forge, BaseTransactionResponse } from "remme-utils";
import { IRemmeToken } from "./interface";
declare class RemmeToken implements IRemmeToken {
    private readonly _remmeRest;
    constructor(remmeRest?: RemmeRest);
    transfer(publicKeyTo: forge.pki.Key, amount: number): Promise<BaseTransactionResponse>;
    getBalance(publicKeyTo: forge.pki.Key): Promise<number>;
}
export { RemmeToken, IRemmeToken };
