import { IRemmeWebSocket } from "./interface";
import { BatchStatuses, Statuses } from "./models";
/**
 * @hidden
 */
declare global  {
    /**
     * @hidden
     */
    interface Window {
        WebSocket: any;
    }
}
declare class RemmeWebSocket implements IRemmeWebSocket {
    [key: string]: any;
    socketAddress: string;
    sslMode: boolean;
    isEvent: boolean;
    data: object;
    private _socket;
    constructor(socketAddress: string, sslMode: boolean);
    connectToWebSocket(callback: any): void;
    closeWebSocket(): void;
    private _sendAnError(error, callback);
    private _getSubscribeUrl();
    private _getSocketQuery(subscribe?);
}
export { RemmeWebSocket, IRemmeWebSocket, BatchStatuses, Statuses };
