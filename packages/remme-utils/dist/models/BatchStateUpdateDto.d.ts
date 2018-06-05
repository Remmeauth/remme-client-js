export interface BatchStateUpdateDto {
    id: string;
    type: string;
    data: Data;
}
export interface Data {
    batch_statuses: BatchStatuses;
}
export declare class BatchStatusesDto {
    status: string;
    batchId: string;
    constructor(data: BatchStatuses);
}
export interface BatchStatuses {
    status: string;
    batch_id: string;
}
