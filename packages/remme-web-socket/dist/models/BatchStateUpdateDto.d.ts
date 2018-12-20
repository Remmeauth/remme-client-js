export interface BatchStateUpdateDto {
    id: string;
    type: string;
    data: Data;
}
export interface Data {
    batch_statuses: BatchInfo;
}
export declare enum BatchStatus {
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
export declare class BatchInfoDto {
    status: BatchStatus;
    batchId: string;
    constructor(data: IBatch);
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
