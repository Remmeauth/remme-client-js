export class SwapInfoDto {
    public state: State;
    public receiver_address: string;
    public amount: number;
    public email_address_encrypted_optional: string;
    public secret_lock: string;
    public secret_key: string;
    public created_at: number;
    public is_initiator: boolean;
    public sender_address: string;
    public sender_address_non_local: string;
    public swap_id: string;
}

export enum State {
    EMPTY = "EMPTY",
    OPENED = "OPENED",
    SECRET_LOCK_PROVIDED = "SECRET_LOCK_PROVIDED",
    APPROVED = "APPROVED",
    CLOSED = "CLOSED",
    EXPIRED = "EXPIRED",
}
