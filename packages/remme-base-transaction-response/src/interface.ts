export interface IBaseTransactionResponse {
    batchId: string;
    socketAddress: string;

    connectToWebSocket(callback: any): void;

    closeWebSocket(): void;
}
