import { IRemmeAccount } from "remme-account";
import { RemmeMethods, IRemmeApi } from "remme-api";
import { RemmeFamilyName, PublicKeyRequest, checkAddress } from "remme-utils";
import { IBaseTransactionResponse, IRemmeTransactionService } from "remme-transaction-service";
import {
    TransferPayload,
    TransactionPayload,
    AccountMethod,
    NodeAccountInternalTransferPayload,
    NodeAccountMethod,
    EmptyPayload,
} from "remme-protobuf";
import SenderAccountType = TransferPayload.SenderAccountType;

import { IRemmeToken } from "./interface";

/**
 * Class that work with tokens.
 * Transfer them and getting balance by public key.
 * @example
 * ```typescript
 * const someAccountPublicKeyInHex = "02926476095ea28904c11f22d0da20e999801a267cd3455a00570aa1153086eb13";
 * const someRemmeAddress = generateAddress(RemmeFamilyName.Account, someAccountPublicKeyInHex);
 *
 * const receiverBalance = await remme.token.getBalance(someRemmeAddress);
 * console.log(`Account ${someRemmeAddress} as receiver, balance - ${receiverBalance} REM`);
 *
 * const balance = await remme.token.getBalance(remme.account.address);
 * console.log(`Account ${remme.account.address} as sender, balance - ${balance} REM`);
 *
 * const transactionResult = await remme.token.transfer(someRemmeAddress, 10);
 * console.log(`Sending tokens...BatchId: ${transactionResult.batchId}`);
 *
 * const transactionCallback = async (err, result) => {
 *   if (err) {
 *     console.log(err);
 *     return;
 *   }
 *   console.log("token", result);
 *   if (result.status === "COMMITTED") {
 *     const newBalance = await remme.token.getBalance(someRemmeAddress);
 *     console.log(`Account ${someRemmeAddress} balance - ${newBalance} REM`);
 *     transactionResult.closeWebSocket()
 *   }
 * };
 *
 * transactionResult.connectToWebSocket(transactionCallback);
 * ```
 */
class RemmeToken implements IRemmeToken {
    // index signature
    [key: string]: any;

    private readonly _remmeApi: IRemmeApi;
    private readonly _remmeAccount: IRemmeAccount;
    private readonly _remmeTransaction: IRemmeTransactionService;
    private readonly _accountFamilyName = RemmeFamilyName.Account;
    private readonly _nodeFamilyName = RemmeFamilyName.NodeAccount;
    private readonly _familyVersion = "0.1";

    /**
     * @example
     * Usage without remme main package
     * ```typescript
     * const remmeApi = new RemmeApi(); // See RemmeRest implementation
     * const remmeAccount = new RemmeAccount(); // See RemmeAccount implementation
     * const remmeTransaction = new RemmeTransactionService(remmeApi, remmeAccount);
     * const remmeToken = new RemmeToken(remmeApi, remmeTransaction);
     * ```
     * @param {IRemmeApi} remmeApi
     * @param {IRemmeTransactionService} remmeTransaction
     * @param {IRemmeAccount} remmeAccount
     */
    public constructor(
        remmeApi: IRemmeApi,
        remmeTransaction: IRemmeTransactionService,
        remmeAccount: IRemmeAccount,
    ) {
        this._remmeApi = remmeApi;
        this._remmeTransaction = remmeTransaction;
        this._remmeAccount = remmeAccount;
    }

    private async _generateAndSendTransferPayload(
        method: AccountMethod.Method | NodeAccountMethod.Method,
        familyName: RemmeFamilyName,
        data: Uint8Array,
        inputsOutputs: string[],
    ) {
        const transactionPayload = TransactionPayload.encode({
            method,
            data,
        }).finish();
        const transaction = await this._remmeTransaction.create({
            familyName,
            familyVersion: this._familyVersion,
            inputs: inputsOutputs,
            outputs: inputsOutputs,
            payloadBytes: transactionPayload,
        });
        return await this._remmeTransaction.send(transaction);
    }

    /**
     * Transfer tokens from signed public key (remme.account.publicKey) to given public key.
     * Send transaction to REMChain.
     * @example
     * ```typescript
     * const someAccountPublicKeyInHex = "02926476095ea28904c11f22d0da20e999801a267cd3455a00570aa1153086eb13";
     * const someRemmeAddress = generateAddress(RemmeFamilyName.Account, someAccountPublicKeyInHex);
     *
     * const transactionResult = await remme.token.transfer(someRemmeAddress, 10);
     * console.log(`Sending tokens...BatchId: ${transactionResult.batchId}`);
     *
     * const transactionCallback = async (err, result) => {
     *   if (err) {
     *     console.log(err);
     *     return;
     *   }
     *   console.log("token", result);
     *   if (result.status === "COMMITTED") {
     *     const newBalance = await remme.token.getBalance(someRemmeAddress);
     *     console.log(`Account ${someRemmeAddress} balance - ${newBalance} REM`);
     *     transactionResult.closeWebSocket()
     *   }
     * };
     *
     * transactionResult.connectToWebSocket(transactionCallback);
     * ```
     * @param {string} addressTo
     * @param {number} amount
     * @returns {Promise<IBaseTransactionResponse>}
     */
    public async transfer(addressTo: string, amount: number): Promise<IBaseTransactionResponse> {
        checkAddress(addressTo);
        if (!amount) {
            throw new Error("Amount was not provided, please set the amount");
        }
        if (amount <= 0) {
            throw new Error("Amount must be higher than 0");
        }

        const transferPayload = TransferPayload.encode({
            addressTo,
            senderAccountType: this._remmeAccount.familyName === RemmeFamilyName.NodeAccount
                ? SenderAccountType.NODE_ACCOUNT
                : SenderAccountType.ACCOUNT,
            value: amount,
        }).finish();

        const inputsOutputs = [addressTo];

        return this._generateAndSendTransferPayload(
            AccountMethod.Method.TRANSFER,
            this._accountFamilyName,
            transferPayload,
            inputsOutputs,
        );
    }

    public async transferFromUnfrozenToOperational(amount: number): Promise<IBaseTransactionResponse> {
        if (this._remmeAccount.familyName !== RemmeFamilyName.NodeAccount) {
            throw new Error(
                `This operation is allowed under NodeAccount.
                 Your account type is ${this._remmeAccount.familyName}
                 and address is: ${this._remmeAccount.address}`,
            );
        }
        if (!amount) {
            throw new Error("Amount was not provided, please set the amount");
        }
        if (amount <= 0) {
            throw new Error("Amount must be higher than 0");
        }

        const inputsOutputs = [];

        const transferPayload = NodeAccountInternalTransferPayload.encode({
            value: amount,
        }).finish();

        return this._generateAndSendTransferPayload(
            NodeAccountMethod.Method.TRANSFER_FROM_UNFROZEN_TO_OPERATIONAL,
            this._nodeFamilyName,
            transferPayload,
            inputsOutputs,
        );
    }

    public async transferFromFrozenToUnfrozen(): Promise<IBaseTransactionResponse> {
        if (this._remmeAccount.familyName !== RemmeFamilyName.NodeAccount) {
            throw new Error(
                `This operation is allowed under NodeAccount.
                 Your account type is ${this._remmeAccount.familyName}
                 and address is: ${this._remmeAccount.address}`,
            );
        }

        const inputsOutputs = [];

        const transferPayload = EmptyPayload.encode({}).finish();

        return this._generateAndSendTransferPayload(
            NodeAccountMethod.Method.TRANSFER_FROM_FROZEN_TO_UNFROZEN,
            this._nodeFamilyName,
            transferPayload,
            inputsOutputs,
        );
    }

    /**
     * Get balance on given account address
     * @example
     * ```typescript
     * const balance = await remme.token.getBalance(remme.account.address);
     * console.log(`Account ${remme.account.address} as sender, balance - ${balance} REM`);
     * ```
     * @param {string} address
     * @returns {Promise<number>}
     */
    public async getBalance(address: string): Promise<number> {
        checkAddress(address);
        return await this._remmeApi
            .sendRequest<PublicKeyRequest, number>(RemmeMethods.token, new PublicKeyRequest(address));
    }
}

export {
    RemmeToken,
    IRemmeToken,
};
