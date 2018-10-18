import { IRemmeEventsData } from "./models";
export interface IRemmeWebSocketsEvents {
    subscribe(data: IRemmeEventsData, callback: (err, res) => void): void;
    unsubscribe(): void;
}
