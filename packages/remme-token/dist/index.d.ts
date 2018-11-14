import { IRemmeApi } from "remme-api";
import { IBaseTransactionResponse, IRemmeTransactionService } from "remme-transaction-service";
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
declare class RemmeToken implements IRemmeToken {
    [key: string]: any;
    private readonly _remmeApi;
    private readonly _remmeTransaction;
    private readonly _familyName;
    private readonly _familyVersion;
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
    constructor(remmeApi: IRemmeApi, remmeTransaction: IRemmeTransactionService);
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
     * @param {string} addressTo
     * @param {number} amount
     * @returns {Promise<IBaseTransactionResponse>}
     */
    transfer(addressTo: string, amount: number): Promise<IBaseTransactionResponse>;
    /**
     * Get balance on given public key
     * @example
     * ```typescript
     * const balance = await remme.token.getBalance(remme.account.publicKeyHex);
     * console.log(`Account ${remme.account.publicKeyHex} as sender, balance - ${balance} REM`);
     * ```
     * @param {string} address
     * @returns {Promise<number>}
     */
    getBalance(address: string): Promise<number>;
}
export { RemmeToken, IRemmeToken };
