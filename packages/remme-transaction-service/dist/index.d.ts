import { IRemmeApi } from "remme-api";
import { IRemmeAccount } from "remme-account";
import { IRemmeTransactionService } from "./interface";
import { BaseTransactionResponse, IBaseTransactionResponse, CreateTransactionDto, SendTransactionDto } from "./models";
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
declare class RemmeTransactionService implements IRemmeTransactionService {
    [key: string]: any;
    private readonly _remmeApi;
    private readonly _remmeAccount;
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
    constructor(remmeApi: IRemmeApi, remmeAccount: IRemmeAccount);
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
    create(settings: CreateTransactionDto): Promise<string>;
    /**
     * @example
     * ```typescript
     * const sendResponse = await remmeTransaction.send(transaction);
     * console.log(sendRequest.batchId);
     * ```
     * @param {string} transaction
     * @returns {Promise<IBaseTransactionResponse>}
     */
    send(transaction: string): Promise<IBaseTransactionResponse>;
}
export { RemmeTransactionService, IRemmeTransactionService, BaseTransactionResponse, IBaseTransactionResponse, CreateTransactionDto, SendTransactionDto };
