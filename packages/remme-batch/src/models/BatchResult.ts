export class BatchResult {
    public batch_id: string;
    public status: string;
}

export enum Statuses {
    OK = "OK",
    NOT_CONFIRMED = "NOT_CONFIRMED",
    PENDING = "PENDING",
}
