import { RemmeMethods, IRemmeRest } from "remme-rest";
import { BaseTransactionResponse, getAddressFromData } from "remme-utils";
import { IRemmeTransactionService } from "remme-transaction-service";
import { AtomicSwapMethod,
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
    SwapInitData,
    SwapInfoDto,
    SwapInfoData,
    SwapPublicKeyDto,
    SwapBaseRequest,
    SwapBaseResponse,
    SwapCloseRequest,
    SwapSetSecretRequest,
} from "./models";

class RemmeSwap implements IRemmeSwap {
    private readonly _remmeRest: IRemmeRest;
    private readonly _remmeTransactionService: IRemmeTransactionService;
    private readonly familyName = "AtomicSwap";
    private readonly familyVersion = "0.1";
    private readonly zeroAddress = "0".repeat(70);

    public constructor(remmeRest: IRemmeRest, remmeTransactionService: IRemmeTransactionService) {
        this._remmeRest = remmeRest;
        this._remmeTransactionService = remmeTransactionService;
    }

    public async approve(swapId: string): Promise<BaseTransactionResponse> {
        // const payload = new SwapBaseRequest(swapId);
        // return await this.baseRequest<SwapBaseRequest>(RemmeMethods.atomicSwapApprove, payload);
        this.checkParameters({ swapId });
        const payload = AtomicSwapApprovePayload.encode({
            swapId,
        }).finish();
        const transactionPayload = this.generateTransactionPayload(AtomicSwapMethod.Method.APPROVE, payload);
        const inputsOutputs = this.getAddresses(AtomicSwapMethod.Method.APPROVE, swapId);
        return await this.createAndSendTransaction(transactionPayload, inputsOutputs);
    }

    public async close(swapId: string, secretKey: string): Promise<BaseTransactionResponse> {
        // const payload = new SwapCloseRequest(swapId, secretKey);
        // return await this.baseRequest<SwapCloseRequest>(RemmeMethods.atomicSwapClose, payload);
        this.checkParameters({ swapId, secretKey });
        const { receiverAddress } = await this.getInfo(swapId);
        const payload = AtomicSwapClosePayload.encode({
            swapId,
            secretKey,
        }).finish();
        const transactionPayload = this.generateTransactionPayload(AtomicSwapMethod.Method.CLOSE, payload);
        const inputsOutputs = this.getAddresses(AtomicSwapMethod.Method.CLOSE, swapId, receiverAddress);
        return await this.createAndSendTransaction(transactionPayload, inputsOutputs);
    }

    public async expire(swapId: string): Promise<BaseTransactionResponse> {
        // const payload = new SwapBaseRequest(swapId);
        // return await this.baseRequest<SwapBaseRequest>(RemmeMethods.atomicSwapExpire, payload);
        this.checkParameters({ swapId });
        const payload = AtomicSwapExpirePayload.encode({
            swapId,
        }).finish();
        const transactionPayload = this.generateTransactionPayload(AtomicSwapMethod.Method.EXPIRE, payload);
        const inputsOutputs = this.getAddresses(AtomicSwapMethod.Method.EXPIRE, swapId);
        return await this.createAndSendTransaction(transactionPayload, inputsOutputs);
    }

    public async getInfo(swapId: string): Promise<SwapInfoData> {
        this.checkParameters({ swapId });
        const apiResult = await this._remmeRest.getRequest<SwapInfoDto>(RemmeMethods.atomicSwap, swapId);
        return new SwapInfoData(apiResult);
    }

    public async getPublicKey(): Promise<string> {
        const apiResult = await this._remmeRest.getRequest<SwapPublicKeyDto>(RemmeMethods.atomicSwapPublicKey);
        return apiResult.pub_key;
    }

    public async init(data: SwapInitDto): Promise<BaseTransactionResponse> {
        this.validateData(data);
        // const swapId =
        const { swapId } = data;
        const payload = AtomicSwapInitPayload.encode(data).finish();
        const transactionPayload = this.generateTransactionPayload(AtomicSwapMethod.Method.INIT, payload);
        // const inputsOutputs = [
        //     "00000059c88e4dbdb786bce3b0c44298fc1c14e3b0c44298fc1c14e3b0c44298fc1c14",
        //     this.zeroAddress,
        //     getAddressFromData(this.familyName, data.swapId),
        // ];
        const inputsOutputs = this.getAddresses(AtomicSwapMethod.Method.INIT, swapId);
        // const transaction = await this._remmeTransactionService.create({
        //     familyName: this.familyName,
        //     familyVersion: this.familyVersion,
        //     inputs: inputsOutputs,
        //     outputs: inputsOutputs,
        //     payloadBytes: transactionPayload,
        // });
        // return await this._remmeTransactionService.send(transaction);
        return await this.createAndSendTransaction(transactionPayload, inputsOutputs);
    }

    public async setSecretLock(swapId: string, secretLock: string): Promise<BaseTransactionResponse> {
        // const payload = new SwapSetSecretRequest(swapId, secretLock);
        // return await this.baseRequest<SwapSetSecretRequest>(
        //     RemmeMethods.atomicSwapSecretLock,
        //     payload,
        // );
        this.checkParameters({ swapId, secretLock });
        const payload = AtomicSwapSetSecretLockPayload.encode({
            swapId,
            secretLock,
        }).finish();
        const transactionPayload = this.generateTransactionPayload(AtomicSwapMethod.Method.SET_SECRET_LOCK, payload);
        const inputsOutputs = this.getAddresses(AtomicSwapMethod.Method.SET_SECRET_LOCK, swapId);
        return await this.createAndSendTransaction(transactionPayload, inputsOutputs);
    }

    private async baseRequest<Input>(method: RemmeMethods, payload: Input): Promise<BaseTransactionResponse> {
        const apiResult = await this._remmeRest
            .postRequest<Input, SwapBaseResponse>(method, payload);
        const result = new BaseTransactionResponse(this._remmeRest.socketAddress());
        result.batchId = apiResult.batch_id;
        return result;
    }

    private generateTransactionPayload(method: number, data: Uint8Array): Uint8Array {
        return TransactionPayload.encode({
            method,
            data,
        }).finish();
    }

    private validateData(data: SwapInitDto) {
        for (const key of (Object as any).keys(new SwapInitDto())) {
            if (!data[key]) {
                throw new Error(`Attribute ${key} was not specified`);
            }
            switch (key) {
                case "swapId":
                case "secretLock":
                    if (data[key].search(/^[0-9a-f]{64}$/) === -1) {
                        throw new Error(`${key} is not a valid`);
                    }
                    break;
                case "receiverAddress":
                    if (data[key].search(/^[0-9a-f]{70}$/) === -1) {
                        throw new Error(`${key} is not a valid`);
                    }
                    break;
            }
        }
    }

    private getAddresses(method: AtomicSwapMethod.Method, swapId: string, receiverAddress?: string): string[] {
        const addresses: string[] = [ getAddressFromData(this.familyName, swapId) ];
        const methodToAddresses = {
            [AtomicSwapMethod.Method.INIT]: [
                "00000059c88e4dbdb786bce3b0c44298fc1c14e3b0c44298fc1c14e3b0c44298fc1c14",
                this.zeroAddress,
            ],
            [AtomicSwapMethod.Method.EXPIRE]: [
                this.zeroAddress,
            ],
            [AtomicSwapMethod.Method.CLOSE]: [
                this.zeroAddress,
                receiverAddress,
            ],
        };
        return methodToAddresses[method] ? [...addresses, ...methodToAddresses[method]] : addresses;
    }

    private async createAndSendTransaction(transactionPayload: Uint8Array, inputsOutputs: string[])
        : Promise<BaseTransactionResponse> {
        const transaction = await this._remmeTransactionService.create({
            familyName: this.familyName,
            familyVersion: this.familyVersion,
            inputs: inputsOutputs,
            outputs: inputsOutputs,
            payloadBytes: transactionPayload,
        });
        return await this._remmeTransactionService.send(transaction);
    }

    private checkParameters(parameters: {swapId: string, secretLock?: string, secretKey?: string}) {
        for (const [key, value] of (Object as any).entries(parameters)) {
            if (!value) {
                throw new Error(`The '${key}' was missing in parameters`);
            }
            if (key !== "secretKey" && value.search(/^[0-9a-f]{64}$/) === -1) {
                throw new Error(`Given ${key} is not a valid`);
            }
        }
    }
}

export {
    RemmeSwap,
    IRemmeSwap,
};
