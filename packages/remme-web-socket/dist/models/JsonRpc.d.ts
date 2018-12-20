import { RemmeMethods } from "./RemmeMethods";
import { RemmeEvents } from "./RemmeEvents";
import { RemmeRequestParams } from "./RemmeRequestParams";
import { ITransfer } from "./TransferInfoDto";
import { IBatch } from "./BatchStateUpdateDto";
import { IBlock } from "./BlockInfoDto";
import { SwapInfoDto } from "./SwapInfoDto";
export interface IJsonRpcRequest {
    jsonrpc: string;
    method: RemmeMethods;
    params: RemmeRequestParams;
    id: string;
}
export interface IJSonRpcResult {
    event_type: RemmeEvents;
    attributes: SwapInfoDto | IBatch | IBlock | ITransfer;
}
export interface IJsonRpcError {
    code: string;
    message: string;
}
export interface IJsonRpcResponse {
    jsonrpc: string;
    result?: IJSonRpcResult | string;
    error?: IJsonRpcError;
    id: string;
}
export declare class JsonRpcRequest implements IJsonRpcRequest {
    method: RemmeMethods;
    params: RemmeRequestParams;
    id: any;
    jsonrpc: string;
    constructor(method: RemmeMethods, params: RemmeRequestParams);
}
