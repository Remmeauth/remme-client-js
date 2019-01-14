export interface IBlock {
    id: string;
    timestamp: number;
}
export declare class BlockInfoDto implements IBlock {
    id: string;
    timestamp: number;
    constructor(data: IBlock);
}
