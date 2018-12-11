export interface IBlock {
    id: string;
}

export class BlockInfoDto implements IBlock {

    public id: string;

    constructor(data: IBlock) {
        this.id = data.id;
    }
}
