import { IBaseTransactionResponse } from "remme-base-transaction-response";

import {SwapInitDto, SwapInfoData} from "./models";

export interface IRemmeSwap {
    init(data: SwapInitDto): Promise<IBaseTransactionResponse>;
    approve(swapId: string): Promise<IBaseTransactionResponse>;
    expire(swapId: string): Promise<IBaseTransactionResponse>;
    setSecretLock(swapId: string, secretLock: string): Promise<IBaseTransactionResponse>;
    close(swapId: string, secretKey: string): Promise<IBaseTransactionResponse>;
    getInfo(swapId: string): Promise<SwapInfoData>;
    getPublicKey(): Promise<string>;
}
