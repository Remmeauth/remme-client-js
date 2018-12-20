export interface ITransferClientInfo {
    address: string;
    balance: string;
}
export interface ITransfer {
    from: ITransferClientInfo;
    to: ITransferClientInfo;
}
export declare class TransferInfoDto implements ITransfer {
    from: ITransferClientInfo;
    to: ITransferClientInfo;
    constructor(data: ITransfer);
}
