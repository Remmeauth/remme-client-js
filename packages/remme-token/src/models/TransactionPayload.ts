import {pki} from "remme-utils";

export class TransactionPayload {
    private pub_key_to: pki.PEM;
    private amount: number;
    public constructor(publicKeyTo: pki.Key, amount: number) {
        this.pub_key_to = pki.publicKeyToPem(publicKeyTo);
        this.amount = amount;
    }
}
