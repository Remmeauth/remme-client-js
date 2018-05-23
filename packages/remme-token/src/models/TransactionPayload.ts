export class TransactionPayload {
    private pub_key_to: string;
    private amount: number;
    public constructor(publicKeyTo: string, amount: number) {
        this.pub_key_to = publicKeyTo;
        this.amount = amount;
    }
}
