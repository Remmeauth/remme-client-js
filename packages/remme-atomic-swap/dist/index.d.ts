import { IRemmeApi } from "remme-api";
import { IRemmeTransactionService, IBaseTransactionResponse } from "remme-transaction-service";
import { IRemmeSwap } from "./interface";
import { SwapInitDto, SwapInfo, SwapState } from "./models";
/**
 * Main class for working with atomic swap
 * @example
 * ```typescript
 * const swapId = "133102e41346242476b15a3a7966eb5249271025fc7fb0b37ed3fdb4bcce3806";
 * const secret = "secretkey";
 * const secretKey = "039eaa877ff63694f8f09c8034403f8b5165a7418812a642396d5d539f90b170";
 * const secretLock = "b605112c2d7489034bbd7beab083fb65ba02af787786bb5e3d99bb26709f4f68";
 * const init = await remme.swap.init({
 *    receiverAddress: "112007484def48e1c6b77cf784aeabcac51222e48ae14f3821697f4040247ba01558b1",
 *    senderAddressNonLocal: "0xe6ca0e7c974f06471759e9a05d18b538c5ced11e",
 *    amount: 100,
 *    swapId,
 *    createdAt: Math.floor(Date.now() / 1000)
 * });
 *
 * init.connectToWebSocket(async (err, data) => {
 *    if (err) {
 *      console.log("err init", err);
 *    } else if (data.status === "COMMITTED") {
 *      console.log("data init", data);
 *      const res = await remme.swap.getInfo(swapId);
 *      console.log("after init info", res);
 *      const pubkey = await remme.swap.getPublicKey();
 *      console.log(pubkey);
 *      init.closeWebSocket();
 *      const setSecretLock = await remme.swap.setSecretLock(swapId, secretLock);
 *      setSecretLock.connectToWebSocket(async (err, data) => {
 *        if (err) {
 *          console.log("set secret lock err", err);
 *        }
 *        console.log("data set secret lock", data);
 *        if (data.status === "COMMITTED") {
 *          const res = await remme.swap.getInfo(swapId);
 *          console.log("after set secret lock info", res);
 *          setSecretLock.closeWebSocket();
 *          const approve = await remme.swap.approve(swapId);
 *          approve.connectToWebSocket(async (err, data) => {
 *            if (err) {
 *              console.log("approve err", err);
 *            }
 *            console.log("data approve", data);
 *            if (data.status === "COMMITTED") {
 *              const res = await remme.swap.getInfo(swapId);
 *              console.log("after approve", res);
 *              approve.closeWebSocket();
 *              const close = await remme.swap.close(swapId, secretKey);
 *              close.connectToWebSocket(async (err, data) => {
 *                if (err) {
 *                  console.log("err close", err);
 *                }
 *                console.log("data close", data);
 *                if (data.status === "COMMITTED") {
 *                  const res = await remme.swap.getInfo(swapId);
 *                  console.log("after close info", res);
 *                  close.closeWebSocket();
 *                }
 *              });
 *            }
 *          });
 *        }
 *      });
 *    }
 * });
 * ```
 */
declare class RemmeSwap implements IRemmeSwap {
    [key: string]: any;
    private readonly _remmeApi;
    private readonly _remmeTransactionService;
    private readonly _familyName;
    private readonly _familyVersion;
    private readonly _zeroAddress;
    private readonly _blockInfoNamespaceAddress;
    private readonly _blockInfoConfigAddress;
    private _generateTransactionPayload(method, data);
    private _getAddresses(method, swapId, receiverAddress?);
    private _createAndSendTransaction(transactionPayload, inputsOutputs);
    private _checkParameters(parameters);
    /**
     * @example
     * Usage without main remme package
     * ```typescript
     * const remmeApi = new RemmeApi(); // See RemmeRest implementation
     * const remmeAccount = new RemmeAccount(); // See RemmeAccount implementation
     * const remmeTransaction = new RemmeTransactionService(remmeApi, remmeAccount); // See RemmeTransactionService implementation
     * const remmeSwap = new RemmeSwap(remmeApi, remmeTransaction);
     * ```
     * @param {IRemmeApi} remmeApi
     * @param {IRemmeTransactionService} remmeTransactionService
     */
    constructor(remmeApi: IRemmeApi, remmeTransactionService: IRemmeTransactionService);
    /**
     * Approve swap with given id.
     * Send transaction into REMChain.
     * @example
     * ```typescript
     * const approve = await remme.swap.approve(swapId);
     * console.log(approve.swapId);
     * ```
     * @param {string} swapId
     * @returns {Promise<IBaseTransactionResponse>}
     */
    approve(swapId: string): Promise<IBaseTransactionResponse>;
    /**
     * Close swap with given id and secret key for checking who can close swap.
     * Send transaction into REMChain.
     * @example
     * ```typescript
     * const close = await remme.swap.close(swapId);
     * console.log(close.swapId);
     * ```
     * @param {string} swapId
     * @param {string} secretKey
     * @returns {Promise<IBaseTransactionResponse>}
     */
    close(swapId: string, secretKey: string): Promise<IBaseTransactionResponse>;
    /**
     * Expire swap with given id. Could be expired after 24h after initiation.
     * Send transaction into REMChain.
     * @example
     * ```typescript
     * const expire = await remme.swap.expire(swapId);
     * console.log(expire.swapId);
     * ```
     * @param {string} swapId
     * @returns {Promise<IBaseTransactionResponse>}
     */
    expire(swapId: string): Promise<IBaseTransactionResponse>;
    /**
     * Get info about swap by given swap id.
     * @example
     * ```typescript
     * const info = await remme.swap.getInfo(swapId);
     * console.log(info); // SwapInfo
     * ```
     * @param {string} swapId
     * @returns {Promise<SwapInfo>}
     */
    getInfo(swapId: string): Promise<SwapInfo>;
    /**
     * Get swap public key.
     * @example
     * ```typescript
     * const publicKey = await remme.swap.getPublicKey();
     * console.log(publicKey);
     * ```
     * @returns {Promise<string>}
     */
    getPublicKey(): Promise<string>;
    /**
     * Initiation of swap.
     * Send transaction into REMChain.
     * @example
     * ```typescript
     * const swapId = "133102e41346242476b15a3a7966eb5249271025fc7fb0b37ed3fdb4bcce3806";
     * const secretLockBySolicitor = "b605112c2d7489034bbd7beab083fb65ba02af787786bb5e3d99bb26709f4f68";
     * const init = await remme.swap.init({
     *      receiverAddress: "112007484def48e1c6b77cf784aeabcac51222e48ae14f3821697f4040247ba01558b1",
     *      senderAddressNonLocal: "0xe6ca0e7c974f06471759e9a05d18b538c5ced11e",
     *      amount: 100,
     *
     *      // you can provide secret lock in initiation.
     *      secretLockBySolicitor,
     *      // or you can set it separately in remme.swap.setSecretLock
     *
     *      swapId,
     *      createdAt: Math.floor(Date.now() / 1000)
     * });
     * console.log(init.batchId); // SwapInfo
     * ```
     * @param {SwapInitDto} data
     * @returns {Promise<IBaseTransactionResponse>}
     */
    init(data: SwapInitDto): Promise<IBaseTransactionResponse>;
    /**
     * Set secret lock to swap with given swap id.
     * Send transaction into REMChain.
     * @example
     * ```typescript
     * const swapId = "133102e41346242476b15a3a7966eb5249271025fc7fb0b37ed3fdb4bcce3806";
     * const secretLockBySolicitor = "b605112c2d7489034bbd7beab083fb65ba02af787786bb5e3d99bb26709f4f68";
     * const setting = await remme.swap.setSecretLock(swapId, secretLockBySolicitor);
     * console.log(setting.batchId); // SwapInfo
     * ```
     * @param {string} swapId
     * @param {string} secretLock
     * @returns {Promise<IBaseTransactionResponse>}
     */
    setSecretLock(swapId: string, secretLock: string): Promise<IBaseTransactionResponse>;
}
export { RemmeSwap, IRemmeSwap, SwapInfo, SwapState, SwapInitDto };
