import { IRemmeRequestParams, IRemmeWebSocket } from "remme-web-socket";

export interface IRemmeWebSocketsEvents extends IRemmeWebSocket {
    subscribe(data: IRemmeRequestParams, callback: (err: Error, res: any) => void): void;
    unsubscribe(): void;
}
