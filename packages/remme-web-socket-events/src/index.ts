import { RemmeWebSocket, IRemmeWebSocket } from "remme-web-socket";

import { IRemmeWebSocketsEvents } from "./interface";
import {
    IRemmeEventsData,
    RemmeEventsData,
    RemmeEventsEntity,
    RemmeEvents,
} from "./models";

class RemmeWebSocketsEvents implements IRemmeWebSocketsEvents {
    private readonly _nodeAddress: string;
    private readonly _sslMode: boolean;
    private _socket: IRemmeWebSocket;

    private _prepareEvents(events: RemmeEvents | RemmeEvents[]): RemmeEvents[] {
        if (typeof events !== "object") {
            if (events === RemmeEvents.SwapAll) {
                events = [
                    RemmeEvents.SwapInit,
                    RemmeEvents.SwapSetSecretLock,
                    RemmeEvents.SwapApprove,
                    RemmeEvents.SwapExpire,
                    RemmeEvents.SwapClose,
                ];
            } else {
                events = [ events ];
            }
        } else {
            events = events.filter((item) => item !== RemmeEvents.SwapAll);
        }
        return events;
    }

    public constructor(nodeAddress: string, sslMode: boolean) {
        this._nodeAddress = nodeAddress;
        this._sslMode = sslMode;
    }

    private _generateData({ events, lastKnownBlockId }: IRemmeEventsData)
        : RemmeEventsData {
        events = this._prepareEvents(events);
        const data = new RemmeEventsData();
        data.entity = RemmeEventsEntity.Events;
        data.events = events;
        if (lastKnownBlockId) {
            data.last_known_block_id = lastKnownBlockId;
        }
        return data;
    }

    public subscribe(data: IRemmeEventsData, callback: (err, res) => void): void {
        const eventData = this._generateData(data);
        if (this._socket) {
            this._socket.closeWebSocket();
        }
        this._socket = new RemmeWebSocket(this._nodeAddress, this._sslMode);
        this._socket.isEvent = true;
        this._socket.data = eventData;
        this._socket.connectToWebSocket(callback);
    }

    public unsubscribe(): void {
        if (this._socket) {
            this._socket.closeWebSocket();
            this._socket = null;
        } else {
            throw new Error("WebSocket is not running");
        }
    }
}

export {
    RemmeWebSocketsEvents,
    IRemmeWebSocketsEvents,
    RemmeEvents,
    RemmeEventsEntity,
    IRemmeEventsData,
};
