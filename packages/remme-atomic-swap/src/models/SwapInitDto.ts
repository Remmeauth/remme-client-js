export class SwapInitDto {
    public receiverAddress: string;
    public senderAddressNonLocal: string;
    public amount: number;
    public swapId: string;
    public email: string;
    public secretLock: string;
    public createdAt: number;
}
