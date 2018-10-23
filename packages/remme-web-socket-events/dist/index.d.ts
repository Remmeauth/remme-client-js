import { RemmeWebSocket } from "remme-web-socket";
import { IRemmeWebSocketsEvents } from "./interface";
import { IRemmeEventsData, RemmeEventsEntity, RemmeEvents } from "./models";
declare class RemmeWebSocketsEvents extends RemmeWebSocket implements IRemmeWebSocketsEvents {
    private _prepareEvents(events);
    private _generateData({events, lastKnownBlockId});
    constructor(nodeAddress: string, sslMode: boolean);
    subscribe(data: IRemmeEventsData, callback: (err, res) => void): void;
    unsubscribe(): void;
}
export { RemmeWebSocketsEvents, IRemmeWebSocketsEvents, RemmeEvents, RemmeEventsEntity, IRemmeEventsData };
