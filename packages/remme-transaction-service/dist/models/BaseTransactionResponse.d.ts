import { RemmeWebSocket, IRemmeWebSocket } from "remme-web-socket";
export declare class BaseTransactionResponse extends RemmeWebSocket implements IBaseTransactionResponse {
    batchId: string;
    constructor(nodeAddress: string, sslMode: boolean, batchId: string);
}
export interface IBaseTransactionResponse extends IRemmeWebSocket {
    batchId: string;
}
