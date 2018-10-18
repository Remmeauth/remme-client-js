import { RemmeWebSocket } from "remme-web-socket";

import { IRemmeWebSocketsEvents } from "./interface";
import {
    IRemmeEventsData,
    RemmeEventsData,
    RemmeEventsEntity,
    RemmeEvents,
} from "./models";

class RemmeWebSocketsEvents extends RemmeWebSocket implements IRemmeWebSocketsEvents  {

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

    private _generateData({ events, lastKnownBlockId }: IRemmeEventsData): RemmeEventsData {
        events = this._prepareEvents(events);
        const data = new RemmeEventsData();
        data.entity = RemmeEventsEntity.Events;
        data.events = events;
        if (lastKnownBlockId) {
            data.last_known_block_id = lastKnownBlockId;
        }
        return data;
    }

    public constructor(nodeAddress: string, sslMode: boolean) {
        super(nodeAddress, sslMode);
    }

    public subscribe(data: IRemmeEventsData, callback: (err, res) => void): void {
        const eventData = this._generateData(data);
        if (this._socket) {
            super.closeWebSocket();
        }
        this.isEvent = true;
        this.data = eventData;
        super.connectToWebSocket(callback);
    }

    public unsubscribe(): void {
        if (this._socket) {
            super.closeWebSocket();
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
