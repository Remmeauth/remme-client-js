import { SwapInfoDto } from "./SwapInfoDto";

export class SwapInfoData {
    public isClosed: boolean;
    public isApproved: boolean;
    public receiverAddress: string;
    public amount: number;
    public email: string;
    public secretLock: string;
    public secretKey: string;
    public createdAt: number;
    public isInitiator: boolean;

    constructor(data: SwapInfoDto) {
        this.isClosed = data.is_closed;
        this.isApproved = data.is_approved;
        this.receiverAddress = data.receiver_address;
        this.amount = data.amount;
        this.email = data.email_address_encrypted_optional;
        this.secretLock = data.secret_lock;
        this.secretKey = data.secret_key;
        this.createdAt = data.created_at;
        this.isInitiator = data.is_initiator;
    }
}
