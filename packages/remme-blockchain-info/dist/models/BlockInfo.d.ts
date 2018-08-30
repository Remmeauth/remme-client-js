export interface IBlockInfo {
    blockNum: number;
    timestamp: number;
}
export interface IBlockInfoResponse {
    blocks: IBlockInfoResponseBlocks[];
}
export interface IBlockInfoResponseBlocks {
    block_num: number;
    timestamp: number;
}
export declare class BlockInfo implements IBlockInfo {
    blockNum: number;
    timestamp: number;
    constructor(data: IBlockInfoResponseBlocks);
}
