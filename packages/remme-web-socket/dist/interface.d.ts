export interface IRemmeWebSocket {
    nodeAddress: string;
    sslMode: boolean;
    connectToWebSocket(callback: (err: Error, res: any) => void): void;
    closeWebSocket(): void;
}
