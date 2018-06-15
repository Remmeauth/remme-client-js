import { RemmeMethods, IRemmeRest } from "remme-rest";
import { getAddressFromData } from "remme-utils";
import { BaseTransactionResponse, IBaseTransactionResponse } from "remme-base-transaction-response";
import { IRemmeTransactionService } from "remme-transaction-service";
import { TransferPayload, TransactionPayload, AccountMethod } from "remme-protobuf";

import { BalanceResult } from "./models";
import { IRemmeToken } from "./interface";

class RemmeToken implements IRemmeToken {
    private readonly _remmeRest: IRemmeRest;
    private readonly _remmeTransaction: IRemmeTransactionService;
    private readonly _familyName = "account";
    private readonly _familyVersion = "0.1";

    public constructor(remmeRest: IRemmeRest, remmeTransaction: IRemmeTransactionService) {
        this._remmeRest = remmeRest;
        this._remmeTransaction = remmeTransaction;
    }

    public async transfer(publicKeyTo: string, amount: number): Promise<IBaseTransactionResponse> {
        if (publicKeyTo.search(/^[0-9a-f]{66}$/) === -1) {
            throw new Error("Given PublicKey is not a valid");
        }
        if (amount <= 0) {
            throw new Error("amount must be higher than 0");
        }
        const receiverAddress = getAddressFromData(this._familyName, publicKeyTo);
        const transferPayload = TransferPayload.encode({
            addressTo: receiverAddress,
            value: amount,
        }).finish();
        const transactionPayload = TransactionPayload.encode({
            method: AccountMethod.Method.TRANSFER,
            data: transferPayload,
        }).finish();
        const transaction = await this._remmeTransaction.create({
            familyName: this._familyName,
            familyVersion: this._familyVersion,
            inputs: [receiverAddress],
            outputs: [receiverAddress],
            payloadBytes: transactionPayload,
        });
        return await this._remmeTransaction.send(transaction);
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
