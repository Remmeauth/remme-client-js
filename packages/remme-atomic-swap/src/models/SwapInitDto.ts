export class SwapInitDto {
    public receiverAddress: string = "";
    public senderAddressNonLocal: string = "";
    public amount: number = 0;
    public swapId: string = "";
    public secretLockBySolicitor?: string;
    public emailAddressEncryptedByInitiator: string;
    public createdAt: number = 0;
}
