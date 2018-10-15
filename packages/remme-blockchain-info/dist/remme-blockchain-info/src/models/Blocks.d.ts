import { BaseData, BaseHeader, BaseResponse, IBaseResponse } from "./Response";
import { BatchData } from "./Batches";
export interface BlockHeader extends BaseHeader {
    batch_ids: string[];
    block_num: string;
    consensus: string;
    previous_block_id: string;
    state_root_hash: string;
}
export interface BlockData extends BaseData<BlockHeader> {
    batches: BatchData[];
}
export declare class BlockList extends BaseResponse<BlockData[]> {
    constructor(data: IBaseResponse<BlockData[]>);
}
export declare class Block extends BaseResponse<BlockData> {
    constructor(data: IBaseResponse<BlockData>);
}
