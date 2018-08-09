export interface IWebSocketsEvents {
    subscribeToEvents(event: any, callback: any): void;
    unsubscribe(): void;
}
