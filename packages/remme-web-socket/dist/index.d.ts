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
    private _socket;
    nodeAddress: string;
    sslMode: boolean;
    isEvent: boolean;
    data: object;
    private _sendAnError(error, callback);
    private _getSubscribeUrl();
    private _getSocketQuery(subscribe?);
    constructor(nodeAddress: string, sslMode: boolean);
    connectToWebSocket(callback: any): void;
    closeWebSocket(): void;
}
export { RemmeWebSocket, IRemmeWebSocket, BatchStatuses, Statuses };
