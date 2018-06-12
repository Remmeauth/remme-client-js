import { BaseTransactionResponse } from "remme-utils";

import {SwapInitDto, SwapInfoData} from "./models";

export interface IRemmeSwap {
    init(data: SwapInitDto): Promise<BaseTransactionResponse>;
    approve(swapId: string): Promise<BaseTransactionResponse>;
    expire(swapId: string): Promise<BaseTransactionResponse>;
    setSecretLock(swapId: string, secretLock: string): Promise<BaseTransactionResponse>;
    close(swapId: string, secretKey: string): Promise<BaseTransactionResponse>;
    getInfo(swapId: string): Promise<SwapInfoData>;
    getPublicKey(): Promise<string>;
}
