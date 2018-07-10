import { Events } from "./Events";
export interface IWebSocketsEvents {
    subscribeToEvents(event: Events, callback: any): void;
    unsubscribe(): void;
}
