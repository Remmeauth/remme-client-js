import { IJsonRpcError } from "./JsonRpc";

export class ErrorFromEvent extends Error {
    public message: string;

    constructor(data: IJsonRpcError) {
        super(data.code);
        this.message = data.message;
    }
}
