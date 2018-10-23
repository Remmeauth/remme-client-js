import { RemmeMethods, IRemmeRest } from "remme-rest";
import { generateAddress, RemmeFamilyName, PATTERNS, PublicKeyRequest } from "remme-utils";
import { IBaseTransactionResponse, IRemmeTransactionService } from "remme-transaction-service";
import { TransferPayload, TransactionPayload, AccountMethod } from "remme-protobuf";

import { IRemmeToken } from "./interface";

/**
 * Class that work with tokens.
 * Transfer them and getting balance by public key.
 * @example
 * ```typescript
 * const someRemmeAddress = "03c2e53acce583c8bb2382319f4dee3e816b67f3a733ef90fe3329062251d0c638";
 *
 * const receiverBalance = await remme.token.getBalance(someRemmeAddress);
 * console.log(`Account ${someRemmeAddress} as receiver, balance - ${receiverBalance} REM`);
 *
 * const balance = await remme.token.getBalance(remme.account.publicKeyHex);
 * console.log(`Account ${remme.account.publicKeyHex} as sender, balance - ${balance} REM`);
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

    private readonly _remmeRest: IRemmeRest;
    private readonly _remmeTransaction: IRemmeTransactionService;
    private readonly _familyName = RemmeFamilyName.Account;
    private readonly _familyVersion = "0.1";

    /**
     * @example
     * Usage without remme main package
     * ```typescript
     * const remmeRest = new RemmeRest(); // See RemmeRest implementation
     * const remmeAccount = new RemmeAccount(); // See RemmeAccount implementation
     * const remmeTransaction = new RemmeTransactionService(remmeRest, remmeAccount);
     * const remmeToken = new RemmeToken(remmeRest, remmeTransaction);
     * ```
     * @param {IRemmeRest} remmeRest
     * @param {IRemmeTransactionService} remmeTransaction
     */
    public constructor(remmeRest: IRemmeRest, remmeTransaction: IRemmeTransactionService) {
        this._remmeRest = remmeRest;
        this._remmeTransaction = remmeTransaction;
    }

    /**
     * Transfer tokens from signed public key (remme.account.publicKey) to given public key.
     * Send transaction to REMChain.
     * @example
     * ```typescript
     * const someRemmeAddress = "03c2e53acce583c8bb2382319f4dee3e816b67f3a733ef90fe3329062251d0c638";
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
     * @param {string} publicKeyTo
     * @param {number} amount
     * @returns {Promise<IBaseTransactionResponse>}
     */
    public async transfer(publicKeyTo: string, amount: number): Promise<IBaseTransactionResponse> {
        if (publicKeyTo.search(PATTERNS.PUBLIC_KEY) === -1) {
            throw new Error("Given PublicKey is not a valid");
        }
        if (amount <= 0) {
            throw new Error("amount must be higher than 0");
        }
        const receiverAddress = generateAddress(this._familyName, publicKeyTo);
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

    /**
     * Get balance on given public key
     * @example
     * ```typescript
     * const balance = await remme.token.getBalance(remme.account.publicKeyHex);
     * console.log(`Account ${remme.account.publicKeyHex} as sender, balance - ${balance} REM`);
     * ```
     * @param {string} publicKey
     * @returns {Promise<number>}
     */
    public async getBalance(publicKey: string): Promise<number> {
        if (publicKey.search(PATTERNS.PUBLIC_KEY) === -1) {
            throw new Error("Given PublicKey is not a valid");
        }
        return await this._remmeRest
            .sendRequest<PublicKeyRequest, number>(RemmeMethods.token, new PublicKeyRequest(publicKey));
    }
}

export {
    RemmeToken,
    IRemmeToken,
};
