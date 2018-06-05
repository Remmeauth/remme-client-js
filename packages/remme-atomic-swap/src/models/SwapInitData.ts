import { SwapInitDto } from "./SwapInitDto";

export class SwapInitData {
    private receiver_address: string;
    private sender_address_non_local: string;
    private amount: number;
    private swap_id: string;
    private email_address_encrypted_by_initiator: string;
    private secret_lock_by_solicitor: string;
    private created_at: number;

    constructor(data: SwapInitDto) {
        let keys = ["recieverAddress", "senderAddress", "amount", "swapId", "email", "secretLock", "createdAt"];
        keys.map((item) => {
            if (!data[item]) {
                throw new Error(`Attribute ${item} was not specified`);
            }
            switch (item) {
                case "swapId":
                case "secretLock":
                    if (data[item].search(/^[0-9a-f]{64}$/) === -1) {
                        throw new Error(`${item} is not a valid`);
                    }
                    break;
                case "recieverAddress":
                    if (data[item].search(/^[0-9a-f]{70}$/) === -1) {
                        throw new Error(`${item} is not a valid`);
                    }
                    break;
            }
        });
        keys = null;
        this.receiver_address = data.receiverAddress;
        this.sender_address_non_local = data.senderAddressNonLocal;
        this.amount = data.amount;
        this.swap_id = data.swapId;
        this.email_address_encrypted_by_initiator = data.email;
        this.secret_lock_by_solicitor = data.secretLock;
        this.created_at = data.createdAt;
    }
}
