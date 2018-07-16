export interface BatchStateUpdateDto {
    id: string;
    type: string;
    data: Data;
}

export interface Data {
    batch_statuses: BatchStatuses;
}

export class BatchStatusesDto {
    public status: Statuses;
    public batchId: string;

    constructor(data: BatchStatuses) {
        this.status = Statuses[data.status];
        this.batchId = data.batch_id;
    }
}

export interface BatchStatuses {
    status: string;
    batch_id: string;
    invalid_transactions?: InvalidTransactions[];
}

export interface InvalidTransactions {
    transaction_id: string;
    message: string;
    extended_data: string;
}

export enum Statuses {
    OK = "OK",
    NOT_CONFIRMED = "NOT_CONFIRMED",
    NO_RESOURCE = "NO_RESOURCE",
    INVALID = "INVALID",
    PENDING = "PENDING",
    COMMITTED = "COMMITTED",
}
