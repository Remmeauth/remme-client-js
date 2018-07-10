import { RemmeWebSocket, IRemmeWebSocket } from "remme-web-socket";
export declare class BaseTransactionResponse extends RemmeWebSocket implements IBaseTransactionResponse {
    batchId: string;
    constructor(socketAddress: string, sslMode: boolean);
}
export interface IBaseTransactionResponse extends IRemmeWebSocket {
    batchId: string;
}
