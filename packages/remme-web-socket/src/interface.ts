export interface IRemmeWebSocket {
    data: object;
    isEvent: boolean;
    nodeAddress: string;
    sslMode: boolean;

    connectToWebSocket(callback: any): void;

    closeWebSocket(): void;
}
