import { InvalidTransactions } from "./BatchStateUpdateDto";

export class ErrorMessage {
    public extendedData: string;
    public message: string;
    public transactionId: string;

    constructor(data: InvalidTransactions) {
        this.extendedData = data.extended_data;
        this.message = data.message;
        this.transactionId = data.transaction_id;
    }
}
