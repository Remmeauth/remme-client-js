import { RemmeMethods, RemmeRest } from "remme-rest";
import { forge, BaseTransactionResponse } from "remme-utils";
import { TransactionPayload, TransactionResult, BalancePayload, BalanceResult } from "./models";
import { IRemmeToken } from "./interface";

class RemmeToken implements IRemmeToken {
    private readonly _remmeRest: RemmeRest;

    public constructor(remmeRest: RemmeRest = new RemmeRest()) {
        this._remmeRest = remmeRest;
    }

    public async transfer(publicKeyTo: forge.pki.Key, amount: number): Promise<BaseTransactionResponse> {
        const payload = new TransactionPayload(publicKeyTo, amount);
        const apiResult = await this._remmeRest
            .postRequest<TransactionPayload, TransactionResult>(payload, RemmeMethods.token);
        const result = new BaseTransactionResponse(this._remmeRest.address());
        result.batchId = apiResult.batch_id;
        return result;
    }

    public async getBalance(publicKeyTo: forge.pki.Key): Promise<number> {
        const payload = new BalancePayload(publicKeyTo);
        const result = await this._remmeRest
            .getRequest<BalancePayload, BalanceResult>(payload, RemmeMethods.token);
        return result.balance;
    }
}

export {
    RemmeToken,
    IRemmeToken,
};
