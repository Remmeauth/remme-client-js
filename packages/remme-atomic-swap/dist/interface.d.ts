import { IBaseTransactionResponse } from "remme-transaction-service";
import { IWebSocketsEvents } from "remme-web-socket";
import { SwapInitDto, SwapInfoData } from "./models";
export interface IRemmeSwap extends IWebSocketsEvents {
    init(data: SwapInitDto): Promise<IBaseTransactionResponse>;
    approve(swapId: string): Promise<IBaseTransactionResponse>;
    expire(swapId: string): Promise<IBaseTransactionResponse>;
    setSecretLock(swapId: string, secretLock: string): Promise<IBaseTransactionResponse>;
    close(swapId: string, secretKey: string): Promise<IBaseTransactionResponse>;
    getInfo(swapId: string): Promise<SwapInfoData>;
    getPublicKey(): Promise<string>;
}
