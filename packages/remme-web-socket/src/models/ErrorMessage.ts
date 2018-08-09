import { InvalidTransactions } from "./BatchStateUpdateDto";

export class ErrorMessage extends Error {
    public extendedData: string;
    public transactionId: string;

    constructor(data: InvalidTransactions) {
        super(data.message);
        this.extendedData = data.extended_data;
        this.transactionId = data.transaction_id;
    }
}
