import { RemmeMethods, IRemmeApi } from "remme-api";
import { generateAddress, RemmeFamilyName, generateSettingsAddress, PATTERNS } from "remme-utils";
import { IRemmeTransactionService, IBaseTransactionResponse } from "remme-transaction-service";
import {
    AtomicSwapMethod,
    AtomicSwapInitPayload,
    AtomicSwapApprovePayload,
    AtomicSwapExpirePayload,
    AtomicSwapSetSecretLockPayload,
    AtomicSwapClosePayload,
    TransactionPayload,
} from "remme-protobuf";

import { IRemmeSwap } from "./interface";
import {
    SwapInitDto,
    SwapInfoDto,
    SwapInfo,
    SwapRequest,
    SwapState,
} from "./models";

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
class RemmeSwap implements IRemmeSwap {

    // index signature
    [key: string]: any;

    private readonly _remmeApi: IRemmeApi;
    private readonly _remmeTransactionService: IRemmeTransactionService;
    private readonly _familyName = RemmeFamilyName.Swap;
    private readonly _familyVersion = "0.1";
    private readonly _zeroAddress = "0".repeat(70);
    private readonly _blockInfoNamespaceAddress = "00b10c00";
    private readonly _blockInfoConfigAddress = "00b10c01" + "0".repeat(62);
    private readonly _settingsKeyGenesisOwners = generateSettingsAddress("remme.settings.genesis_owners");

    private _generateTransactionPayload(method: number, data: Uint8Array): Uint8Array {
        return TransactionPayload.encode({
            method,
            data,
        }).finish();
    }

    private _getAddresses(method: AtomicSwapMethod.Method, swapId: string, receiverAddress?: string): string[] {
        const addresses: string[] = [ generateAddress(this._familyName, swapId) ];
        const methodToAddresses = {
            [AtomicSwapMethod.Method.INIT]: [
                generateSettingsAddress("remme.settings.swap_comission"),
                this._zeroAddress,
                this._blockInfoNamespaceAddress,
                this._blockInfoConfigAddress,
                this._settingsKeyGenesisOwners,
            ],
            [AtomicSwapMethod.Method.EXPIRE]: [
                this._zeroAddress,
                this._blockInfoNamespaceAddress,
                this._blockInfoConfigAddress,
                this._settingsKeyGenesisOwners,
            ],
            [AtomicSwapMethod.Method.CLOSE]: [
                receiverAddress,
                this._zeroAddress,
                this._settingsKeyGenesisOwners,
            ],
        };
        return methodToAddresses[method] ? [...addresses, ...methodToAddresses[method]] : addresses;
    }

    private async _createAndSendTransaction(transactionPayload: Uint8Array, inputsOutputs: string[])
        : Promise<IBaseTransactionResponse> {
        const transaction = await this._remmeTransactionService.create({
            familyName: this._familyName,
            familyVersion: this._familyVersion,
            inputs: inputsOutputs,
            outputs: inputsOutputs,
            payloadBytes: transactionPayload,
        });
        return await this._remmeTransactionService.send(transaction);
    }

    private _checkParameters(parameters: { swapId: string, secretLock?: string, secretKey?: string }) {
        for (const [key, value] of (Object as any).entries(parameters)) {
            if (!value) {
                throw new Error(`The '${key}' was missing in parameters`);
            }
            if (value.search(PATTERNS.SWAP_ID) === -1) {
                throw new Error(`Given ${key} is not a valid`);
            }
        }
    }

    /* tslint:disable */
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
    /* tslint:enable */
    public constructor(remmeApi: IRemmeApi, remmeTransactionService: IRemmeTransactionService) {
        this._remmeApi = remmeApi;
        this._remmeTransactionService = remmeTransactionService;
    }

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
    public async approve(swapId: string): Promise<IBaseTransactionResponse> {
        this._checkParameters({ swapId });
        const payload = AtomicSwapApprovePayload.encode({
            swapId,
        }).finish();
        const transactionPayload = this._generateTransactionPayload(AtomicSwapMethod.Method.APPROVE, payload);
        const inputsOutputs = this._getAddresses(AtomicSwapMethod.Method.APPROVE, swapId);
        return await this._createAndSendTransaction(transactionPayload, inputsOutputs);
    }

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
    public async close(swapId: string, secretKey: string): Promise<IBaseTransactionResponse> {
        this._checkParameters({ swapId, secretKey });
        const { receiverAddress } = await this.getInfo(swapId);
        const payload = AtomicSwapClosePayload.encode({
            swapId,
            secretKey,
        }).finish();
        const transactionPayload = this._generateTransactionPayload(AtomicSwapMethod.Method.CLOSE, payload);
        const inputsOutputs = this._getAddresses(AtomicSwapMethod.Method.CLOSE, swapId, receiverAddress);
        return await this._createAndSendTransaction(transactionPayload, inputsOutputs);
    }

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
    public async expire(swapId: string): Promise<IBaseTransactionResponse> {
        this._checkParameters({ swapId });
        const payload = AtomicSwapExpirePayload.encode({
            swapId,
        }).finish();
        const transactionPayload = this._generateTransactionPayload(AtomicSwapMethod.Method.EXPIRE, payload);
        const inputsOutputs = this._getAddresses(AtomicSwapMethod.Method.EXPIRE, swapId);
        return await this._createAndSendTransaction(transactionPayload, inputsOutputs);
    }

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
    public async getInfo(swapId: string): Promise<SwapInfo> {
        this._checkParameters({ swapId });
        const apiResult = await this._remmeApi
            .sendRequest<SwapRequest, SwapInfoDto>(RemmeMethods.atomicSwap, new SwapRequest(swapId));
        return new SwapInfo(apiResult);
    }

    /**
     * Get swap public key.
     * @example
     * ```typescript
     * const publicKey = await remme.swap.getPublicKey();
     * console.log(publicKey);
     * ```
     * @returns {Promise<string>}
     */
    public async getPublicKey(): Promise<string> {
        return await this._remmeApi.sendRequest<string>(RemmeMethods.atomicSwapPublicKey);
    }

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
    public async init(data: SwapInitDto): Promise<IBaseTransactionResponse> {
        const swapInitData = new SwapInitDto(data);
        const { swapId } = swapInitData;
        const payload = AtomicSwapInitPayload.encode(swapInitData).finish();
        const transactionPayload = this._generateTransactionPayload(AtomicSwapMethod.Method.INIT, payload);
        const inputsOutputs = this._getAddresses(AtomicSwapMethod.Method.INIT, swapId);
        return await this._createAndSendTransaction(transactionPayload, inputsOutputs);
    }

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
    public async setSecretLock(swapId: string, secretLock: string): Promise<IBaseTransactionResponse> {
        this._checkParameters({ swapId, secretLock });
        const payload = AtomicSwapSetSecretLockPayload.encode({
            swapId,
            secretLock,
        }).finish();
        const transactionPayload = this._generateTransactionPayload(AtomicSwapMethod.Method.SET_SECRET_LOCK, payload);
        const inputsOutputs = this._getAddresses(AtomicSwapMethod.Method.SET_SECRET_LOCK, swapId);
        return await this._createAndSendTransaction(transactionPayload, inputsOutputs);
    }

}

export {
    RemmeSwap,
    IRemmeSwap,
    SwapInfo,
    SwapState,
    SwapInitDto,
};
