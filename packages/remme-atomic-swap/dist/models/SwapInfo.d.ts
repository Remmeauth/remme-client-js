import { SwapInfoDto } from "./SwapInfoDto";
import { SwapState } from "./SwapState";
export declare class SwapInfo {
    state: SwapState;
    receiverAddress: string;
    amount: number;
    email: string;
    secretLock: string;
    secretKey: string;
    createdAt: number;
    isInitiator: boolean;
    senderAddress: string;
    senderAddressNonLocal: string;
    swapId: string;
    constructor(data: SwapInfoDto);
}
