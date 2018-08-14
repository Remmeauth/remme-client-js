export interface IBaseResponse<T> {
    data: T;
    head?: string;
    link?: string;
    paging?: IPaging;
    protobuf?: any;
}
export declare class BaseResponse<T> implements IBaseResponse<T> {
    data: T;
    head: string;
    link: string;
    paging: IPaging;
    protobuf: any;
    constructor(data: IBaseResponse<T>);
}
export interface IPaging {
    limit: number;
    start: number;
}
export interface BaseHeader {
    signer_public_key: string;
}
export interface BaseData<T extends BaseHeader> {
    header: T;
    header_signature: string;
}
