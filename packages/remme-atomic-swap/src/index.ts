import { RemmeMethods, IRemmeRest } from "remme-rest";
import { getAddressFromData } from "remme-utils";
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
    SwapInfoData,
    SwapPublicKeyDto,
} from "./models";

class RemmeSwap implements IRemmeSwap {
    // index signature
    [key: string]: any;

    private readonly _remmeRest: IRemmeRest;
    private readonly _remmeTransactionService: IRemmeTransactionService;
    private readonly _familyName = "AtomicSwap";
    private readonly _familyVersion = "0.1";
    private readonly _zeroAddress = "0".repeat(70);
    private readonly _swapComission = "0000007ca83d6bbb759da9cde0fb0dec1400c55cc3bbcd6b1243b2e3b0c44298fc1c14";

    public constructor(remmeRest: IRemmeRest, remmeTransactionService: IRemmeTransactionService) {
        this._remmeRest = remmeRest;
        this._remmeTransactionService = remmeTransactionService;
    }

    public async approve(swapId: string): Promise<IBaseTransactionResponse> {
        this.checkParameters({ swapId });
        const payload = AtomicSwapApprovePayload.encode({
            swapId,
        }).finish();
        const transactionPayload = this.generateTransactionPayload(AtomicSwapMethod.Method.APPROVE, payload);
        const inputsOutputs = this.getAddresses(AtomicSwapMethod.Method.APPROVE, swapId);
        return await this.createAndSendTransaction(transactionPayload, inputsOutputs);
    }

    public async close(swapId: string, secretKey: string): Promise<IBaseTransactionResponse> {
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

    public async expire(swapId: string): Promise<IBaseTransactionResponse> {
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

    public async init(data: SwapInitDto): Promise<IBaseTransactionResponse> {
        this.validateData(data);
        const { swapId } = data;
        const payload = AtomicSwapInitPayload.encode(data).finish();
        const transactionPayload = this.generateTransactionPayload(AtomicSwapMethod.Method.INIT, payload);
        const inputsOutputs = this.getAddresses(AtomicSwapMethod.Method.INIT, swapId);
        return await this.createAndSendTransaction(transactionPayload, inputsOutputs);
    }

    public async setSecretLock(swapId: string, secretLock: string): Promise<IBaseTransactionResponse> {
        this.checkParameters({ swapId, secretLock });
        const payload = AtomicSwapSetSecretLockPayload.encode({
            swapId,
            secretLock,
        }).finish();
        const transactionPayload = this.generateTransactionPayload(AtomicSwapMethod.Method.SET_SECRET_LOCK, payload);
        const inputsOutputs = this.getAddresses(AtomicSwapMethod.Method.SET_SECRET_LOCK, swapId);
        return await this.createAndSendTransaction(transactionPayload, inputsOutputs);
    }

    private generateTransactionPayload(method: number, data: Uint8Array): Uint8Array {
        return TransactionPayload.encode({
            method,
            data,
        }).finish();
    }

    private validateData(data: SwapInitDto) {
        const example = new SwapInitDto();
        if ("secretLockBySolicitor" in data) {
            example.secretLockBySolicitor = data.secretLockBySolicitor;
        }
        for (const key of (Object as any).keys(example)) {
            if (!data[key]) {
                throw new Error(`Attribute ${key} was not specified`);
            }
            switch (key) {
                case "swapId":
                case "secretLockBySolicitor":
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
        const addresses: string[] = [ getAddressFromData(this._familyName, swapId) ];
        const methodToAddresses = {
            [AtomicSwapMethod.Method.INIT]: [
                this._swapComission,
                this._zeroAddress,
            ],
            [AtomicSwapMethod.Method.EXPIRE]: [
                this._zeroAddress,
            ],
            [AtomicSwapMethod.Method.CLOSE]: [
                this._zeroAddress,
                receiverAddress,
            ],
        };
        return methodToAddresses[method] ? [...addresses, ...methodToAddresses[method]] : addresses;
    }

    private async createAndSendTransaction(transactionPayload: Uint8Array, inputsOutputs: string[])
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

    private checkParameters(parameters: { swapId: string, secretLock?: string, secretKey?: string }) {
        for (const [key, value] of (Object as any).entries(parameters)) {
            if (!value) {
                throw new Error(`The '${key}' was missing in parameters`);
            }
            if (value.search(/^[0-9a-f]{64}$/) === -1) {
                throw new Error(`Given ${key} is not a valid`);
            }
        }
    }
}

export {
    RemmeSwap,
    IRemmeSwap,
};
