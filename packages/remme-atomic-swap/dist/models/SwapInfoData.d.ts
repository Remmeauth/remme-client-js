import { SwapInfoDto, State } from "./SwapInfoDto";
export declare class SwapInfoData {
    state: State;
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
