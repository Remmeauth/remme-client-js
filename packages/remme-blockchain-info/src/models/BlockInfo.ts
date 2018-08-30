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

export class BlockInfo implements IBlockInfo {
    public blockNum: number;
    public timestamp: number;

    constructor(data: IBlockInfoResponseBlocks) {
        this.blockNum = data.block_num;
        this.timestamp = data.timestamp;
    }
}
