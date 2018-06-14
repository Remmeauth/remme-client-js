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
}
export declare enum Statuses {
    OK = "OK",
    NOT_CONFIRMED = "NOT_CONFIRMED",
    PENDING = "PENDING",
}
