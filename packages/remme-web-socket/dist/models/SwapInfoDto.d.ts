import { SwapState } from "./SwapState";
export declare class SwapInfoDto {
    state: SwapState;
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
