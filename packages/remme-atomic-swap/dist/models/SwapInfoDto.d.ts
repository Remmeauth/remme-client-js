export declare class SwapInfoDto {
    state: State;
    receiver_address: string;
    amount: number;
    email_address_encrypted_optional: string;
    secret_lock: string;
    secret_key: string;
    created_at: number;
    is_initiator: boolean;
    sender_address: string;
    sender_address_non_local: string;
    swap_id: string;
}
export declare enum State {
    EMPTY = "EMPTY",
    OPENED = "OPENED",
    SECRET_LOCK_PROVIDED = "SECRET_LOCK_PROVIDED",
    APPROVED = "APPROVED",
    CLOSED = "CLOSED",
    EXPIRED = "EXPIRED",
}
