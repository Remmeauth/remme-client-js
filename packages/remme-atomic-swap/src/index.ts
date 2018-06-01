import { RemmeMethods, RemmeRest } from "remme-rest";
import { BaseTransactionResponse } from "remme-utils";

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
    private readonly _remmeRest: RemmeRest;

    public constructor(remmeRest: RemmeRest = new RemmeRest()) {
        this._remmeRest = remmeRest;
    }

    public async approve(swapId: string): Promise<BaseTransactionResponse> {
        const payload = new SwapBaseRequest(swapId);
        return await this.baseRequest<SwapBaseRequest>(RemmeMethods.atomicSwapApprove, payload);
    }

    public async close(swapId: string, secretKey: string): Promise<BaseTransactionResponse> {
        const payload = new SwapCloseRequest(swapId, secretKey);
        return await this.baseRequest<SwapCloseRequest>(RemmeMethods.atomicSwapClose, payload);
    }

    public async expire(swapId: string): Promise<BaseTransactionResponse> {
        const payload = new SwapBaseRequest(swapId);
        return await this.baseRequest<SwapBaseRequest>(RemmeMethods.atomicSwapExpire, payload);
    }

    public async getInfo(swapId: string): Promise<SwapInfoData> {
        if (swapId.search(/^[0-9a-f]{64}$/) === -1) {
            throw new Error("Given swapId is not a valid");
        }
        const apiResult = await this._remmeRest.getRequest<SwapInfoDto>(RemmeMethods.atomicSwap, swapId);
        return new SwapInfoData(apiResult);
    }

    public async getPublicKey(): Promise<string> {
        const apiResult = await this._remmeRest.getRequest<SwapPublicKeyDto>(RemmeMethods.atomicSwapPublicKey);
        return apiResult.pub_key;
    }

    public async init(data: SwapInitDto): Promise<BaseTransactionResponse> {
        const payload = new SwapInitData(data);
        return await this.baseRequest<SwapInitData>(RemmeMethods.atomicSwapInit, payload);
    }

    public async setSecretLock(swapId: string, secretLock: string): Promise<BaseTransactionResponse> {
        const payload = new SwapSetSecretRequest(swapId, secretLock);
        return await this.baseRequest<SwapSetSecretRequest>(
            RemmeMethods.atomicSwapSecretLock,
            payload,
        );
    }

    private async baseRequest<Input>(method: RemmeMethods, payload: Input): Promise<BaseTransactionResponse> {
        const apiResult = await this._remmeRest
            .postRequest<Input, SwapBaseResponse>(method, payload);
        const result = new BaseTransactionResponse(this._remmeRest.socketAddress());
        result.batchId = apiResult.batch_id;
        return result;
    }
}

export {
    RemmeSwap,
    IRemmeSwap,
};
