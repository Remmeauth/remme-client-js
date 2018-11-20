export interface BatchStateUpdateDto {
    id: string;
    type: string;
    data: Data;
}

export interface Data {
    batch_statuses: BatchInfo;
}

export class BatchInfoDto {
    public status: BatchStatus;
    public batchId: string;

    constructor(data: BatchInfo) {
        this.status = BatchStatus[data.status];
        this.batchId = data.batch_id;
    }
}

export interface BatchInfo {
    status: string;
    batch_id: string;
    invalid_transactions?: InvalidTransactions[];
}

export interface InvalidTransactions {
    transaction_id: string;
    message: string;
    extended_data: string;
}

export enum BatchStatus {
    UNKNOWN = "UNKNOWN",
    INVALID = "INVALID",
    PENDING = "PENDING",
    COMMITTED = "COMMITTED",
}
