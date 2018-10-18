import { w3cwebsocket as W3CWebSocket } from "websocket";
import { IRemmeWebSocket } from "./interface";
import {
    BatchStateUpdateDto,
    BatchStatusesDto,
    BatchStatuses,
    Statuses,
    ErrorMessage,
    ErrorFromEvent,
} from "./models";

/**
 * @hidden
 */
declare global {
    /**
     * @hidden
     */
    interface Window {
        WebSocket: any;
    }
}

/**
 * @hidden
 */
let WS;
if (typeof window !== "undefined" && window.WebSocket !== "undefined") {
    WS = window.WebSocket;
} else {
    WS = W3CWebSocket;
}

class RemmeWebSocket implements IRemmeWebSocket {
    // index signature
    [key: string]: any;

    private readonly _nodeAddress: string;
    private readonly _sslMode: boolean;

    protected _socket: W3CWebSocket;
    protected isEvent: boolean = false;
    protected data: object;

    // public nodeAddress: string;
    // public sslMode: boolean;

    private _sendAnError(error: ErrorMessage | ErrorFromEvent, callback: any) {
        this.closeWebSocket();
        callback(error);
    }

    private _getSubscribeUrl(): string {
        const protocol = this.sslMode ? "wss://" : "ws://";
        return `${protocol}${this.nodeAddress}/ws${this.isEvent ? "/events" : ""}`;
    }

    private _getSocketQuery(subscribe: boolean = true): string {
        const query = this.isEvent ? {
            action: subscribe ? "subscribe" : "unsubscribe",
            data: this.data,
        } : {
            type: "request",
            action: subscribe ? "subscribe" : "unsubscribe",
            entity: "batch_state",
            id: Math.floor(Math.random() * 1000),
            parameters: this.data,
        };
        return JSON.stringify(query);
    }

    public constructor(nodeAddress: string, sslMode: boolean) {
        this._nodeAddress = nodeAddress;
        this._sslMode = sslMode;
    }

    public get nodeAddress(): string {
        return this._nodeAddress;
    }

    public get sslMode(): boolean {
        return this._sslMode;
    }

    public connectToWebSocket(callback: any): void {
        if (this._socket) {
            this.closeWebSocket();
        }
        this._socket = new WS(this._getSubscribeUrl());
        this._socket.onopen = () => {
            this._socket.send(this._getSocketQuery());
        };
        this._socket.onmessage = (e) => {
            const response: BatchStateUpdateDto = JSON.parse(e.data);
            if (
                response.type === "message"
                &&
                Object.getOwnPropertyNames(response.data).length !== 0
            ) {
                if (response.data.batch_statuses &&
                    response.data.batch_statuses.invalid_transactions &&
                    response.data.batch_statuses.invalid_transactions.length) {
                    this._sendAnError(new ErrorMessage(response.data.batch_statuses.invalid_transactions[0]), callback);
                    return;
                }
                callback(null, this.isEvent ? response.data : new BatchStatusesDto(response.data.batch_statuses));
            } else if (response.type === "error") {
                this._sendAnError(new ErrorFromEvent(response.data), callback);
                return;
            }
        };
        this._socket.onerror = (err) => {
            callback(err);
            return;
        };
    }

    public closeWebSocket(): void {
        if (!this._socket) {
            throw new Error("WebSocket is not running");
        }
        if (this._socket.readyState === 1) {
            this._socket.send(this._getSocketQuery(false));
        }
        this._socket.close();
        this._socket = null;
    }

}

export {
    RemmeWebSocket,
    IRemmeWebSocket,
    BatchStatuses,
    Statuses,
};
