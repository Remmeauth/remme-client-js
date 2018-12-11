export interface BatchStateUpdateDto {
    id: string;
    type: string;
    data: Data;
}

export interface Data {
    batch_statuses: BatchInfo;
}

export enum BatchStatus {
    Unknown = "UNKNOWN",
    Pending = "PENDING",
    Invalid = "INVALID",
    Committed = "COMMITTED",
}

export interface IBatch {
    id: string;
    status: BatchStatus;
    error?: string;
}

export class BatchInfoDto {
    public status: BatchStatus;
    public batchId: string;

    constructor(data: IBatch) {
        this.status = data.status;
        this.batchId = data.id;
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
