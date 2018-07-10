export interface IRemmeWebSocket {
    data: object;
    isEvent: boolean;
    socketAddress: string;
    connectToWebSocket(callback: any): void;
    closeWebSocket(): void;
}
