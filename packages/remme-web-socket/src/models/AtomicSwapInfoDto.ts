export enum AtomicSwapState {
    Empty = "EMPTY",
    Opened = "OPENED",
    SecretLockProvided = "SECRET_LOCK_PROVIDED",
    Approved = "APPROVED",
    Closed = "CLOSED",
    Expired = "EXPIRED",
}

export interface IAtomicSwap {
    state: AtomicSwapState;
    sender_address: string;
    sender_address_non_local: string;
    receiver_address: string;
    amount: number;
    email_address_encrypted_optional?: string;
    swap_id: string;
    secret_lock: string;
    created_at: number;
    is_initiator: boolean;
}

export class AtomicSwapInfoDto implements IAtomicSwap {

    public amount: number;
    public created_at: number;
    public email_address_encrypted_optional: string;
    public is_initiator: boolean;
    public receiver_address: string;
    public secret_lock: string;
    public sender_address: string;
    public sender_address_non_local: string;
    public state: AtomicSwapState;
    public swap_id: string;

    constructor(data: IAtomicSwap) {
        this.amount = data.amount;
        this.created_at = data.created_at;
        this.email_address_encrypted_optional = data.email_address_encrypted_optional;
        this.is_initiator = data.is_initiator;
        this.receiver_address = data.receiver_address;
        this.secret_lock = data.secret_lock;
        this.sender_address = data.sender_address;
        this.sender_address_non_local = data.sender_address_non_local;
        this.state = AtomicSwapState[data.state];
        this.swap_id = data.swap_id;
    }
}
