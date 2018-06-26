import { IBaseTransactionResponse } from "./interface";
declare global  {
    interface Window {
        WebSocket: any;
    }
}
declare class BaseTransactionResponse implements IBaseTransactionResponse {
    batchId: string;
    socketAddress: string;
    private _socket;
    constructor(socketAddress: string);
    connectToWebSocket(callback: any): void;
    closeWebSocket(): void;
    private _getSubscribeUrl();
    private _getSocketQuery(subscribe?);
}
export { BaseTransactionResponse, IBaseTransactionResponse };
