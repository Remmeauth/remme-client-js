import { IBatch } from "./BatchStateUpdateDto";

export class ErrorMessage extends Error {
    public transactionId: string;

    constructor(data: IBatch) {
        super(data.error);
        this.transactionId = data.id;
    }
}
