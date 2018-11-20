import { RemmeMethods, IRemmeApi } from "remme-api";
import { generateAddress, RemmeFamilyName, PublicKeyRequest, checkAddress, checkPublicKey } from "remme-utils";
import { IBaseTransactionResponse, IRemmeTransactionService } from "remme-transaction-service";
import { TransferPayload, TransactionPayload, AccountMethod } from "remme-protobuf";

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
    private readonly _remmeTransaction: IRemmeTransactionService;
    private readonly _familyName = RemmeFamilyName.Account;
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
     */
    public constructor(remmeApi: IRemmeApi, remmeTransaction: IRemmeTransactionService) {
        this._remmeApi = remmeApi;
        this._remmeTransaction = remmeTransaction;
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
        // checkPublicKey(addressTo);
        if (!amount) {
            throw new Error("Amount was not provided, please set the amount");
        }
        if (amount <= 0) {
            throw new Error("Amount must be higher than 0");
        }

        // TODO: addresses
        // addressTo = generateAddress(this._familyName, addressTo);

        const transferPayload = TransferPayload.encode({
            addressTo,
            value: amount,
        }).finish();
        const transactionPayload = TransactionPayload.encode({
            method: AccountMethod.Method.TRANSFER,
            data: transferPayload,
        }).finish();
        const transaction = await this._remmeTransaction.create({
            familyName: this._familyName,
            familyVersion: this._familyVersion,
            inputs: [addressTo],
            outputs: [addressTo],
            payloadBytes: transactionPayload,
        });
        return await this._remmeTransaction.send(transaction);
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
