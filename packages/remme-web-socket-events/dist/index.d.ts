import { IRemmeWebSocketsEvents } from "./interface";
import { IRemmeEventsData, RemmeEventsEntity, RemmeEvents } from "./models";
declare class RemmeWebSocketsEvents implements IRemmeWebSocketsEvents {
    private readonly _nodeAddress;
    private readonly _sslMode;
    private _socket;
    private _prepareEvents(events);
    constructor(nodeAddress: string, sslMode: boolean);
    private _generateData({events, lastKnownBlockId});
    subscribe(data: IRemmeEventsData, callback: (err, res) => void): void;
    unsubscribe(): void;
}
export { RemmeWebSocketsEvents, IRemmeWebSocketsEvents, RemmeEvents, RemmeEventsEntity, IRemmeEventsData };
