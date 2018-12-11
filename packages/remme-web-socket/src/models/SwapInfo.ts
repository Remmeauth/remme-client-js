import { SwapInfoDto } from "./SwapInfoDto";
import { SwapState } from "./SwapState";

export class SwapInfo {
    public state: SwapState;
    public receiverAddress: string;
    public amount: number;
    public email: string;
    public secretLock: string;
    public secretKey: string;
    public createdAt: number;
    public isInitiator: boolean;
    public senderAddress: string;
    public senderAddressNonLocal: string;
    public swapId: string;

    constructor(data: SwapInfoDto) {
        this.state = data.state;
        this.receiverAddress = data.receiver_address;
        this.amount = data.amount;
        this.email = data.email_address_encrypted_optional;
        this.secretLock = data.secret_lock;
        this.secretKey = data.secret_key;
        this.createdAt = data.created_at;
        this.isInitiator = data.is_initiator;
        this.senderAddress = data.sender_address;
        this.senderAddressNonLocal = data.sender_address_non_local;
        this.swapId = data.swap_id;
    }
}
