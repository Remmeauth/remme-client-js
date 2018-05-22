export interface BatchStateUpdateDto {
    id: string;
    type: string;
    data: Data;
}
export interface Data {
    batch_statuses: BatchStatuses;
}
export interface BatchStatuses {
    status: string;
    batch_id: string;
    block_number?: number;
}
