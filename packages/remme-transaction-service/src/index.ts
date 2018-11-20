import { RemmeMethods, IRemmeApi } from "remme-api";
import { IRemmeAccount } from "remme-account";
import { sha512, NodeConfigRequest, bytesToHex } from "remme-utils";
import * as protobuf from "sawtooth-sdk/protobuf";

import { IRemmeTransactionService } from "./interface";
import {
    BaseTransactionResponse,
    IBaseTransactionResponse,
    CreateTransactionDto,
    SendTransactionDto,
} from "./models";

/**
 * Class for creating and sending transactions
 * @example
 * ```typescript
 * const remme = new Remme.Client();
 * const familyName = "pub_key";
 * const familyVersion = "0.1";
 * const inputs = [];
 * const outputs = [];
 * const payloadBytes = new Buffer("my transaction");
 * const createDto = new CreateTransactionDto(
 *                         familyName,
 *                         familyVersion,
 *                         inputs,
 *                         outputs,
 *                         payloadBytes,
 *                   );
 * const transaction = await remme.transaction.create(createDto);
 * const sendResponse = await remme.transaction.send(transaction);
 * ```
 */
class RemmeTransactionService implements IRemmeTransactionService {

    // index signature
    [key: string]: any;

    private readonly _remmeApi: IRemmeApi;
    private readonly _remmeAccount: IRemmeAccount;

    /**
     * @example
     * Usage without remme main package
     * ```typescript
     * const remmeApi = new RemmeApi(); // See RemmeRest implementation
     * const remmeAccount = new RemmeAccount(); // See RemmeAccount implementation
     * const remmeTransaction = new RemmeTransactionService(remmeApi, remmeAccount);
     * ```
     * @param {IRemmeApi} remmeApi
     * @param {IRemmeAccount} remmeAccount
     */
    public constructor(remmeApi: IRemmeApi, remmeAccount: IRemmeAccount) {
        this._remmeApi = remmeApi;
        this._remmeAccount = remmeAccount;
    }

    /* tslint:disable */
    /**
     * Documentation for building transactions
     * https://sawtooth.hyperledger.org/docs/core/releases/latest/_autogen/sdk_submit_tutorial_js.html#building-the-transaction
     * @example
     * ```typescript
     * const familyName = "pub_key";
     * const familyVersion = "0.1";
     * const inputs = [];
     * const outputs = [];
     * const payloadBytes = Uint8Array.from("my transaction");
     * const createDto = new CreateTransactionDto(
     *                         familyName,
     *                         familyVersion,
     *                         inputs,
     *                         outputs,
     *                         payloadBytes,
     *                   );
     * const transaction = await remmeTransaction.create(createDto);
     * ```
     * @param {CreateTransactionDto} settings
     * @returns {Promise<string>}
     */
    /* tslint:enable */
    public async create(settings: CreateTransactionDto): Promise<string> {
        const {
            familyName,
            familyVersion,
            inputs,
            outputs,
            payloadBytes,
        } = settings;

        // const batcherPublicKey = await this._remmeApi.sendRequest<string>(RemmeMethods.nodeKey);
        const {
            node_public_key: batcherPublicKey,
        } = await this._remmeApi.sendRequest<NodeConfigRequest>(RemmeMethods.nodeConfig);

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

    /**
     * @example
     * ```typescript
     * const sendResponse = await remmeTransaction.send(transaction);
     * console.log(sendRequest.batchId);
     * ```
     * @param {string} transaction
     * @returns {Promise<IBaseTransactionResponse>}
     */
    public async send(transaction: string): Promise<IBaseTransactionResponse> {
        const requestPayload = new SendTransactionDto(transaction);
        const batchId = await this._remmeApi
            .sendRequest<SendTransactionDto, string>(RemmeMethods.transaction, requestPayload);
        return new BaseTransactionResponse(
            this._remmeApi.nodeAddress,
            this._remmeApi.sslMode,
            batchId,
        );
    }

}

export {
    RemmeTransactionService,
    IRemmeTransactionService,
    BaseTransactionResponse,
    IBaseTransactionResponse,
    CreateTransactionDto,
    SendTransactionDto,
};
