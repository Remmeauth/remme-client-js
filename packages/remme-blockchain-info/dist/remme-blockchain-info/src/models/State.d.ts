import { BaseResponse, IBaseResponse } from "./Response";
export interface StateData {
    address: string;
    data: string;
    protobuf?: any;
    addressType?: string;
}
export declare class StateList extends BaseResponse<StateData[]> {
    constructor(data: IBaseResponse<StateData[]>);
}
export declare class State extends BaseResponse<string> {
    constructor(data: IBaseResponse<string>);
}
