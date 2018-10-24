import { IBaseTransactionResponse } from "remme-transaction-service";

import {
    SwapInitDto,
    SwapInfo,
} from "./models";

export interface IRemmeSwap {
    init(data: SwapInitDto): Promise<IBaseTransactionResponse>;
    approve(swapId: string): Promise<IBaseTransactionResponse>;
    expire(swapId: string): Promise<IBaseTransactionResponse>;
    setSecretLock(swapId: string, secretLock: string): Promise<IBaseTransactionResponse>;
    close(swapId: string, secretKey: string): Promise<IBaseTransactionResponse>;
    getInfo(swapId: string): Promise<SwapInfo>;
    getPublicKey(): Promise<string>;
}
