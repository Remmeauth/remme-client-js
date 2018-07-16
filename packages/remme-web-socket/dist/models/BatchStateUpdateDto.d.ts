export interface BatchStateUpdateDto {
    id: string;
    type: string;
    data: Data;
}
export interface Data {
    batch_statuses: BatchStatuses;
}
export declare class BatchStatusesDto {
    status: Statuses;
    batchId: string;
    constructor(data: BatchStatuses);
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
export declare enum Statuses {
    OK = "OK",
    NOT_CONFIRMED = "NOT_CONFIRMED",
    NO_RESOURCE = "NO_RESOURCE",
    INVALID = "INVALID",
    PENDING = "PENDING",
    COMMITTED = "COMMITTED",
}
