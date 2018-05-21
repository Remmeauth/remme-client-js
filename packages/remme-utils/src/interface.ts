export interface ITransactionResponse {
    batchId: string;

    connectToWebSocket(): void;

    closeConnection(): void;
}
