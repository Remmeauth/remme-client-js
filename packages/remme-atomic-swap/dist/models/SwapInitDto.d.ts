export declare class SwapInitDto {
    receiverAddress: string;
    senderAddressNonLocal: string;
    amount: number;
    swapId: string;
    secretLockBySolicitor?: string;
    emailAddressEncryptedByInitiator?: string;
    createdAt: number;
    constructor(data: SwapInitDto);
}
