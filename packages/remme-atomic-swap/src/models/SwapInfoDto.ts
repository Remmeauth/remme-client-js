export class SwapInfoDto {
    public is_closed: boolean;
    public is_approved: boolean;
    public receiver_address: string;
    public amount: number;
    public email_address_encrypted_optional: string;
    public secret_lock: string;
    public secret_key: string;
    public created_at: number;
    public is_initiator: boolean;
}
