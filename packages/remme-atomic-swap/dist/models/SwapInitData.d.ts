import { SwapInitDto } from "./SwapInitDto";
export declare class SwapInitData {
    private receiver_address;
    private sender_address_non_local;
    private amount;
    private swap_id;
    private email_address_encrypted_by_initiator;
    private secret_lock_by_solicitor;
    private created_at;
    constructor(data: SwapInitDto);
}
