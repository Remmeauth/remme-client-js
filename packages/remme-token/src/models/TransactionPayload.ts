import { forge } from "remme-utils";

export class TransactionPayload {
    private pub_key_to: forge.pki.PEM;
    private amount: number;
    public constructor(publicKeyTo: forge.pki.Key, amount: number) {
        this.pub_key_to = forge.pki.publicKeyToPem(publicKeyTo);
        this.amount = amount;
    }
}
