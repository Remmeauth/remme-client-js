import { RemmeMethods, RemmeRest } from "remme-rest";
import { BaseTransactionResponse } from "remme-utils";
import { TransactionPayload, TransactionResult, BalanceResult } from "./models";
import { IRemmeToken } from "./interface";

class RemmeToken implements IRemmeToken {
    private readonly _remmeRest: RemmeRest;

    public constructor(remmeRest: RemmeRest = new RemmeRest()) {
        this._remmeRest = remmeRest;
    }

    public async transfer(publicKeyTo: string, amount: number): Promise<BaseTransactionResponse> {
        if (publicKeyTo.search(/^[0-9a-f]{66}$/) === -1) {
            throw new Error("Given PublicKey is not a valid");
        }
        if (amount <= 0) {
            throw new Error("amount must be higher than 0");
        }
        const payload = new TransactionPayload(publicKeyTo, amount);
        const apiResult = await this._remmeRest
            .postRequest<TransactionPayload, TransactionResult>(RemmeMethods.token, payload);
        const result = new BaseTransactionResponse(this._remmeRest.socketAddress());
        result.batchId = apiResult.batch_id;
        return result;
    }

    public async getBalance(publicKeyTo: string): Promise<number> {
        if (publicKeyTo.search(/^[0-9a-f]{66}$/) === -1) {
            throw new Error("Given PublicKey is not a valid");
        }
        const result = await this._remmeRest
            .getRequest<BalanceResult>(RemmeMethods.token, publicKeyTo);
        return result.balance;
    }
}

export {
    RemmeToken,
    IRemmeToken,
};
