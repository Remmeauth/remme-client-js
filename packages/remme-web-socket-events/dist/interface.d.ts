import { IRemmeWebSocket } from "remme-web-socket";
import { IRemmeEventsData } from "./models";
export interface IRemmeWebSocketsEvents extends IRemmeWebSocket {
    subscribe(data: IRemmeEventsData, callback: (err: Error, res: any) => void): void;
    unsubscribe(): void;
}
