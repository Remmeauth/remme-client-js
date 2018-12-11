export interface ITransferClientInfo {
    address: string;
    balance: string;
}

export interface ITransfer {
    from: ITransferClientInfo;
    to: ITransferClientInfo;
}

export class TransferInfoDto implements ITransfer {
    public from: ITransferClientInfo;
    public to: ITransferClientInfo;

    constructor(data: ITransfer) {
        this.from = data.from;
        this.to = data.to;
    }
}
