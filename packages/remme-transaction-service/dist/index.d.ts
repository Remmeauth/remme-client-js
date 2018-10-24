import { IRemmeRest } from "remme-rest";
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
    private readonly _remmeRest;
    private readonly _remmeAccount;
    /**
     * @example
     * Usage without remme main package
     * ```typescript
     * const remmeRest = new RemmeRest(); // See RemmeRest implementation
     * const remmeAccount = new RemmeAccount(); // See RemmeAccount implementation
     * const remmeTransaction = new RemmeTransactionService(remmeRest, remmeAccount);
     * ```
     * @param {IRemmeRest} remmeRest
     * @param {IRemmeAccount} remmeAccount
     */
    constructor(remmeRest: IRemmeRest, remmeAccount: IRemmeAccount);
    /**
     * Documentation for building transactions
     * https://sawtooth.hyperledger.org/docs/core/releases/latest/_autogen/sdk_submit_tutorial_js.html#building-the-transaction
     * @example
     * ```typescript
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
     * const transaction = await remmeTransaction.create(createDto);
     * ```
     * @param {CreateTransactionDto} settings
     * @returns {Promise<string>}
     */
    create<Input>(settings: CreateTransactionDto): Promise<string>;
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
