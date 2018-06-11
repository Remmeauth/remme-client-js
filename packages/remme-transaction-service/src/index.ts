import { RemmeMethods, IRemmeRest } from "remme-rest";
import { BaseTransactionResponse } from "remme-utils";
import { IRemmeAccount } from "remme-account";
import { createHash } from "crypto";
import * as protobuf from "sawtooth-sdk/protobuf";

import { IRemmeTransactionService } from "./interface";
import { TransactionCreatePayload } from "./models";

class RemmeTransactionService implements IRemmeTransactionService {
    private readonly _remmeRest: IRemmeRest;
    private readonly _remmeAccount: IRemmeAccount;

    public constructor(remmeRest: IRemmeRest, remmeAccount: IRemmeAccount) {
        this._remmeRest = remmeRest;
        this._remmeAccount = remmeAccount;
    }

    public async create<Input>(settings: TransactionCreatePayload): Promise<string> {
        const {
            familyName,
            familyVersion,
            inputs,
            outputs,
            payloadBytes,
        } = settings;

        const { pubkey: batcherPublicKey } = await this._remmeRest
            .getRequest<{pubkey: string}>(RemmeMethods.nodeKey);

        const transactionHeaderBytes = protobuf.TransactionHeader.encode({
            familyName,
            familyVersion,
            inputs: [ ...inputs, this._remmeAccount.address ],
            outputs: [ ...outputs, this._remmeAccount.address ],
            signerPublicKey: this._remmeAccount.publicKeyHex,
            nonce: this.getNonce(),
            batcherPublicKey,
            payloadSha512: createHash("sha512").update(payloadBytes).digest("hex"),
        }).finish();

        // console.log(protobuf.TransactionHeader.decode(transactionHeaderBytes));

        const signature = this._remmeAccount.sign(transactionHeaderBytes);

        let transaction = protobuf.Transaction.encode({
            header: transactionHeaderBytes,
            headerSignature: signature,
            payload: payloadBytes,
        }).finish();

        try {
            transaction = btoa(String.fromCharCode(...transaction));
        } catch (e) {
            transaction = transaction.toString("base64");
        }

        return transaction;
    }

    public async send(transaction: string): Promise<BaseTransactionResponse> {
        const apiResult = await this._remmeRest
            .postRequest<{transaction: string}, {batch_id: string}>(RemmeMethods.transaction, { transaction });
        const result = new BaseTransactionResponse(this._remmeRest.socketAddress());
        result.batchId = apiResult.batch_id;
        return result;
    }

    private getNonce(): string {
        return createHash("sha512").update(new Buffer(Math.floor(Math.random() * 1000))).digest("hex");
    }
}

export {
    RemmeTransactionService,
    IRemmeTransactionService,
};
