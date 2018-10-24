import { SwapState } from "./SwapState";

export class SwapInfoDto {
    public state: SwapState;
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
