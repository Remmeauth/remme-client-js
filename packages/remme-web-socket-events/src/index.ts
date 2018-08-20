import { RemmeWebSocket } from "../index";
import { IRemmeWebSocket } from "../interface";

export interface IRemmeWebSocketsEvents {
    generateSubscribing(entity: any, events: any, eventData: any): any;
    subscribe(data: any, callback: any): void;
    unsubscribe(): void;
}

export class RemmeWebSocketsEvents implements IRemmeWebSocketsEvents {
    private readonly _socketAddress: string;
    private readonly _sslMode: boolean;
    private _socket: IRemmeWebSocket;

    public constructor(socketAddress: string, sslMode: boolean) {
        this._socketAddress = socketAddress;
        this._sslMode = sslMode;
    }

    public generateSubscribing(entity: WSEEntity, events: WSEEvents | WSEEvents[], eventData?: IWSEEventData)
        : WSEData {
        if (typeof events !== "object") {
            if (events === WSEEvents.Swap.All) {
                events = [
                    WSEEvents.Swap.Init,
                    WSEEvents.Swap.SetSecretLock,
                    WSEEvents.Swap.Approve,
                    WSEEvents.Swap.Expire,
                    WSEEvents.Swap.Close,
                ];
            } else {
                events = [ events ];
            }
        }
        const data = new WSEData();
        data.entity = entity;
        data.events = events;
        if (entity === WSEEntity.CatchUp) {
            data.last_known_block_id = eventData.lastKnownBlockId;
        }
        return data;
    }

    public subscribe(data: any, callback: any): void {
        if (this._socket) {
            this._socket.closeWebSocket();
        }
        this._socket = new RemmeWebSocket(this._socketAddress, this._sslMode);
        this._socket.isEvent = true;
        this._socket.data = data;
        this._socket.connectToWebSocket(callback);
    }

    public unsubscribe(): void {
        this._socket.closeWebSocket();
    }
}
