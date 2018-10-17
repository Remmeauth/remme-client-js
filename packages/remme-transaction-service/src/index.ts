import { RemmeMethods, IRemmeRest } from "remme-rest";
import { IRemmeAccount } from "remme-account";
import { sha512 } from "remme-utils";
import * as protobuf from "sawtooth-sdk/protobuf";

import { IRemmeTransactionService } from "./interface";
import { TransactionCreatePayload, BaseTransactionResponse, IBaseTransactionResponse } from "./models";

class RemmeTransactionService implements IRemmeTransactionService {

    // index signature
    [key: string]: any;

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

        const batcherPublicKey = await this._remmeRest.sendRequest<string>(RemmeMethods.nodeKey);

        const transactionHeaderBytes = protobuf.TransactionHeader.encode({
            familyName,
            familyVersion,
            inputs: [ ...inputs, this._remmeAccount.address ],
            outputs: [ ...outputs, this._remmeAccount.address ],
            signerPublicKey: this._remmeAccount.publicKeyHex,
            nonce: sha512(Math.floor(Math.random() * 1000).toString()),
            batcherPublicKey,
            payloadSha512: sha512(payloadBytes),
        }).finish();

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

    public async send(transaction: string): Promise<IBaseTransactionResponse> {
        const batchId = await this._remmeRest
            .sendRequest<{data: string}, string>
            (RemmeMethods.transaction, { data: transaction });
        return new BaseTransactionResponse(
            this._remmeRest.nodeAddress,
            this._remmeRest.sslMode,
            batchId,
        );
    }

}

export {
    RemmeTransactionService,
    IRemmeTransactionService,
    BaseTransactionResponse,
    IBaseTransactionResponse,
};
