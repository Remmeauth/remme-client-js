import { IRemmeWebSocket } from "./interface";
import { IWebSocketsEvents, Events } from "./models";
declare global  {
    interface Window {
        WebSocket: any;
    }
}
declare class RemmeWebSocket implements IRemmeWebSocket {
    socketAddress: string;
    sslMode: boolean;
    isEvent: boolean;
    data: object;
    private _socket;
    constructor(socketAddress: string, sslMode: boolean);
    connectToWebSocket(callback: any): void;
    closeWebSocket(): void;
    private _getSubscribeUrl();
    private _getSocketQuery(subscribe?);
}
export { RemmeWebSocket, IRemmeWebSocket, IWebSocketsEvents, Events };
