import { RemmeRest } from "remme-rest";
import { BaseTransactionResponse } from "remme-utils";
import { IRemmeSwap } from "./interface";
import { SwapInitDto, SwapInfoData } from "./models";
declare class RemmeSwap implements IRemmeSwap {
    private readonly _remmeRest;
    constructor(remmeRest?: RemmeRest);
    approve(swapId: string): Promise<BaseTransactionResponse>;
    close(swapId: string, secretKey: string): Promise<BaseTransactionResponse>;
    expire(swapId: string): Promise<BaseTransactionResponse>;
    getInfo(swapId: string): Promise<SwapInfoData>;
    getPublicKey(): Promise<string>;
    init(data: SwapInitDto): Promise<BaseTransactionResponse>;
    setSecretLock(swapId: string, secretLock: string): Promise<BaseTransactionResponse>;
    private baseRequest<Input>(method, payload);
}
export { RemmeSwap, IRemmeSwap };
