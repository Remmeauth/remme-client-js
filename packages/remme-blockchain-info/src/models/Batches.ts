import { BaseData, BaseHeader, BaseResponse, IBaseResponse } from "./Response";
import { TransactionData } from "./Transactions";

export interface BatchHeader extends BaseHeader {
    transaction_ids: string[];
}

export interface BatchData extends BaseData<BatchHeader> {
    transactions: TransactionData[];
    trace: boolean;
}

export class BatchList extends BaseResponse<BatchData[]> {
    constructor(data: IBaseResponse<BatchData[]>) {
        super(data);
    }
}

export class Batch extends BaseResponse<BatchData> {
    constructor(data: IBaseResponse<BatchData>) {
        super(data);
    }
}
