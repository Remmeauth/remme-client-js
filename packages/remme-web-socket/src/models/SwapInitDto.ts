export class SwapInitDto {
    public receiverAddress: string;
    public senderAddressNonLocal: string;
    public amount: number;
    public swapId: string;
    public secretLockBySolicitor?: string;
    public emailAddressEncryptedByInitiator?: string;
    public createdAt: number;

    constructor(data: SwapInitDto) {
        if (data.receiverAddress && data.receiverAddress.search(/^[0-9a-f]{70}$/) !== -1) {
            this.receiverAddress = data.receiverAddress;
        } else {
            throw new Error("receiverAddress is not a valid or not specified");
        }
        if (data.secretLockBySolicitor) {
            if (data.secretLockBySolicitor.search(/^[0-9a-f]{64}$/) !== -1) {
                this.secretLockBySolicitor = data.secretLockBySolicitor;
            } else {
                throw new Error("secretLockBySolicitor is not a valid");
            }
        }
        if (data.swapId && data.swapId.search(/^[0-9a-f]{64}$/) !== -1) {
            this.swapId = data.swapId;
        } else {
            throw new Error("swapId is not a valid or not specified");
        }
        if (data.amount) {
            this.amount = data.amount;
        } else {
            throw new Error("amount is not specified");
        }
        if (data.senderAddressNonLocal) {
            this.senderAddressNonLocal = data.senderAddressNonLocal;
        } else {
            throw new Error("senderAddressNonLocal is not specified");
        }
        if (data.createdAt) {
            this.createdAt = data.createdAt;
        } else {
            throw new Error("createdAt is not specified");
        }
    }
}
