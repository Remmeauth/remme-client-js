import {BaseResponse, IBaseResponse} from "./Response";

export interface StateData {
    address: string;
    data: string;
    protobuf?: any;
    addressType?: string;
}

export class StateList extends BaseResponse<StateData[]> {
    constructor(data: IBaseResponse<StateData[]>) {
        super(data);
    }
}

export class State extends BaseResponse<string> {
    constructor(data: IBaseResponse<string>) {
        super(data);
    }
}
