import { w3cwebsocket as W3CWebSocket } from "websocket";
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
    private readonly _nodeAddress;
    private readonly _sslMode;
    protected _socket: W3CWebSocket;
    protected isEvent: boolean;
    protected data: object;
    private _sendAnError(error, callback);
    private _getSubscribeUrl();
    private _getSocketQuery(subscribe?);
    constructor(nodeAddress: string, sslMode: boolean);
    readonly nodeAddress: string;
    readonly sslMode: boolean;
    connectToWebSocket(callback: any): void;
    closeWebSocket(): void;
}
export { RemmeWebSocket, IRemmeWebSocket, BatchStatuses, Statuses };
