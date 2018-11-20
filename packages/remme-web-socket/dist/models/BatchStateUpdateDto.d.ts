export interface BatchStateUpdateDto {
    id: string;
    type: string;
    data: Data;
}
export interface Data {
    batch_statuses: BatchInfo;
}
export declare class BatchInfoDto {
    status: BatchStatus;
    batchId: string;
    constructor(data: BatchInfo);
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
export declare enum BatchStatus {
    UNKNOWN = "UNKNOWN",
    INVALID = "INVALID",
    PENDING = "PENDING",
    COMMITTED = "COMMITTED",
}
