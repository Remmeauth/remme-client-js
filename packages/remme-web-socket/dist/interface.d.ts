export interface IRemmeWebSocket {
    nodeAddress: string;
    sslMode: boolean;
    connectToWebSocket(callback: any): void;
    closeWebSocket(): void;
}
