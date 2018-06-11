import { SwapInitDto } from "./SwapInitDto";

export class SwapInitData {
    public receiver_address: string;
    public sender_address_non_local: string;
    public amount: number;
    public swap_id: string;
    public secret_lock_by_solicitor: string;
    public email_address_encrypted_by_initiator: string;
    public created_at: number;

    constructor(data: SwapInitDto) {
        let keys = ["receiverAddress", "senderAddressNonLocal", "amount", "swapId", "email", "secretLock", "createdAt"];
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
                case "receiverAddress":
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
