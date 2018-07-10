export interface IBaseResponse<T> {
    data: T;
    head?: string;
    link?: string;
    paging?: IPaging;
    protobuf?: any;
}

export class BaseResponse<T> implements IBaseResponse<T> {
    public data: T;
    public head: string;
    public link: string;
    public paging: IPaging;
    public protobuf: any;

    constructor(data: IBaseResponse<T>) {
        (Object as any).entries(data).map(([key, value]) => {
            if (BaseResponse.hasOwnProperty(key)) {
                this[key] = value;
            }
        });
    }
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
