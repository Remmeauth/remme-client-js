export interface IBlock {
    id: string;
    timestamp: number;
}

export class BlockInfoDto implements IBlock {
    public id: string;
    public timestamp: number;

    constructor(data: IBlock) {
        this.id = data.id;
        this.timestamp = data.timestamp;
    }
}
