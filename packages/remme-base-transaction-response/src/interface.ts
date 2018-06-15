export interface IBaseTransactionResponse {
    batchId: string;

    connectToWebSocket(callback: any): void;

    closeWebSocket(): void;
}
