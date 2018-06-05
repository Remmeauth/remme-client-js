import { RemmeMethods, IRemmeRest } from "remme-rest";
import { BaseTransactionResponse, getAddressFromData } from "remme-utils";
import { IRemmeTransactionService } from "remme-transaction-service";
import { TransferPayload } from "remme-protobuf";

import { BalanceResult } from "./models";
import { IRemmeToken } from "./interface";

class RemmeToken implements IRemmeToken {
    private readonly _remmeRest: IRemmeRest;
    private readonly _remmeTransaction: IRemmeTransactionService;
    private readonly familyName = "token";
    private readonly familyVersion = "0.1";

    public constructor(remmeRest: IRemmeRest, remmeTransaction: IRemmeTransactionService) {
        this._remmeRest = remmeRest;
        this._remmeTransaction = remmeTransaction;
    }

    public async transfer(publicKeyTo: string, amount: number): Promise<BaseTransactionResponse> {
        if (publicKeyTo.search(/^[0-9a-f]{66}$/) === -1) {
            throw new Error("Given PublicKey is not a valid");
        }
        if (amount <= 0) {
            throw new Error("amount must be higher than 0");
        }
        const receiverAddress = getAddressFromData(publicKeyTo, "token");
        const payloadBytes = TransferPayload.encode({
            addressTo: receiverAddress,
            value: amount,
        }).finish();
        const transactionPayload = await this._remmeTransaction.create({
            familyName: this.familyName,
            familyVersion: this.familyVersion,
            inputs: [receiverAddress],
            outputs: [receiverAddress],
            payloadBytes,
        });
        return await this._remmeTransaction.send(transactionPayload);
        // const payload = new TransactionPayload(publicKeyTo, amount);
        // const apiResult = await this._remmeRest
        //     .postRequest<TransactionPayload, TransactionResult>(RemmeMethods.token, payload);
        // const result = new BaseTransactionResponse(this._remmeRest.socketAddress());
        // result.batchId = apiResult.batch_id;
        // return result;
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
