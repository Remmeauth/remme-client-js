import { RemmeMethods, IRemmeRest } from "remme-rest";
import { IRemmeAccount } from "remme-account";
import { createHash } from "crypto";
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

        // const { pubkey: batcherPublicKey } = await this._remmeRest
        //     .getRequest<{pubkey: string}>(RemmeMethods.nodeKey);
        const batcherPublicKey = await this._remmeRest
            .getRequest<string>(RemmeMethods.nodeKey);
        const transactionHeaderBytes = protobuf.TransactionHeader.encode({
            familyName,
            familyVersion,
            inputs: [ ...inputs, this._remmeAccount.address ],
            outputs: [ ...outputs, this._remmeAccount.address ],
            signerPublicKey: this._remmeAccount.publicKeyHex,
            nonce: this.getNonce(),
            batcherPublicKey,
            // payloadSha512: this.generateHash(payloadBytes.toString()),
            payloadSha512: createHash("sha512").update(new Buffer(payloadBytes)).digest("hex"),
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
        // const apiResult = await this._remmeRest
        //     .postRequest<{transaction: string}, {batch_id: string, error?: string}>
        //     (RemmeMethods.transaction, { transaction });
        // return new BaseTransactionResponse(
        //     this._remmeRest.nodeAddress(),
        //     this._remmeRest.sslMode(),
        //     apiResult.batch_id,
        // );
        const batchId = await this._remmeRest
            .postRequest<{data: string}, string>
            (RemmeMethods.transaction, { data: transaction });
        return new BaseTransactionResponse(
            this._remmeRest.nodeAddress(),
            this._remmeRest.sslMode(),
            batchId,
        );
    }

    // public generateHash(data: string): string {
    //     const certSHA512 = forge.md.sha512.create().update(data);
    //     return certSHA512.digest().toHex();
    // }

    private getNonce(): string {
        // return this.generateHash(Math.floor(Math.random() * 1000).toString());
        return createHash("sha512").update(new Buffer(Math.floor(Math.random() * 1000))).digest("hex");
    }
}

export {
    RemmeTransactionService,
    IRemmeTransactionService,
    BaseTransactionResponse,
    IBaseTransactionResponse,
};
