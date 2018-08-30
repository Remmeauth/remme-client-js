import { IRemmeWebSocketsEvents } from "./interface";
import { IRemmeEventsData, RemmeEventsEntity, RemmeEvents } from "./models";
declare class RemmeWebSocketsEvents implements IRemmeWebSocketsEvents {
    private readonly _socketAddress;
    private readonly _sslMode;
    private _socket;
    private _prepareEvents(events);
    constructor(socketAddress: string, sslMode: boolean);
    private _generateData({entity, events, lastKnownBlockId});
    subscribe(data: IRemmeEventsData, callback: (err, res) => void): void;
    unsubscribe(): void;
}
export { RemmeWebSocketsEvents, IRemmeWebSocketsEvents, RemmeEvents, RemmeEventsEntity, IRemmeEventsData };
