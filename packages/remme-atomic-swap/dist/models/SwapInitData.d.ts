import { SwapInitDto } from "./SwapInitDto";
export declare class SwapInitData {
    receiver_address: string;
    sender_address_non_local: string;
    amount: number;
    swap_id: string;
    secret_lock_by_solicitor: string;
    email_address_encrypted_by_initiator: string;
    created_at: number;
    constructor(data: SwapInitDto);
}
