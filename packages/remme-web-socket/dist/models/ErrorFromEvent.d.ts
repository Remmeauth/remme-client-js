import { IJsonRpcError } from "./JsonRpc";
export declare class ErrorFromEvent extends Error {
    message: string;
    constructor(data: IJsonRpcError);
}
