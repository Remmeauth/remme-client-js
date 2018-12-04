import { sha256 } from "remme-utils";

import { RemmeMethods } from "./RemmeMethods";
import { RemmeEvents } from "./RemmeEvents";
import { RemmeRequestParams } from "./RemmeRequestParams";

import { ITransfer } from "./TransferInfoDto";
import { IBatch } from "./BatchStateUpdateDto";
import { IBlock } from "./BlockInfoDto";
import { IAtomicSwap } from "./AtomicSwapInfoDto";

export interface IJsonRpcRequest {
    jsonrpc: string;
    method: RemmeMethods;
    params: RemmeRequestParams;
    id: string;
}

export interface IJSonRpcResult {
    event_type: RemmeEvents;
    attributes: IAtomicSwap | IBatch | IBlock | ITransfer;
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

export class JsonRpcRequest implements IJsonRpcRequest {
    public id = sha256((Math.random() * 1000).toString(16));
    public jsonrpc = "2.0";
    constructor(
        public method: RemmeMethods,
        public params: RemmeRequestParams,
    ) {}
}
