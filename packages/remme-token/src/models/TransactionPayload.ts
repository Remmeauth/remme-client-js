import {pki} from "node-forge";

export class TransactionPayload {
    private pub_key_to: pki.Key;
    private amount: number;
    public constructor(publicKeyTo: pki.Key, amount: number) {
        this.pub_key_to = publicKeyTo;
        this.amount = amount;
    }
}
