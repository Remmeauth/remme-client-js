export interface BatchStateUpdateDto {
    id: string;
    type: string;
    data: Data;
}

export interface Data {
    batch_statuses: BatchStatuses;
}

export class BatchStatusesDto {
    public status: string;
    public batchId: string;

    constructor(data: BatchStatuses) {
        this.status = data.status;
        this.batchId = data.batch_id;
    }
}

export interface BatchStatuses {
    status: string;
    batch_id: string;
}
