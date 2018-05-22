export interface ITransactionResponse {
    batchId: string;

    connectToWebSocket(callback: any): void;

    closeConnection(): void;
}
