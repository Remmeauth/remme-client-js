import { SwapInfoDto } from "./SwapInfoDto";
export declare class SwapInfoData {
    isClosed: boolean;
    isApproved: boolean;
    receiverAddress: string;
    amount: number;
    email: string;
    secretLock: string;
    secretKey: string;
    createdAt: number;
    isInitiator: boolean;
    constructor(data: SwapInfoDto);
}
