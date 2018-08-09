export interface IRemmeWebSocket {
    data: object;
    isEvent: boolean;
    socketAddress: string;
    sslMode: boolean;

    connectToWebSocket(callback: any): void;

    closeWebSocket(): void;
}
