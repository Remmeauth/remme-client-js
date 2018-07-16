import { w3cwebsocket as W3CWebSocket } from "websocket";
import { IRemmeWebSocket } from "./interface";
import {BatchStateUpdateDto, BatchStatusesDto, IWebSocketsEvents, Events, ErrorMessage} from "./models";

declare global {
    interface Window {
        WebSocket: any;
    }
}

let WS;
if (typeof window !== "undefined" && window.WebSocket !== "undefined") {
    WS = window.WebSocket;
} else {
    WS = W3CWebSocket;
}

class RemmeWebSocket implements IRemmeWebSocket {
    public socketAddress: string;
    public sslMode: boolean;
    public isEvent: boolean = false;
    public eventToSubscribe: Events;
    public data: object;
    private _socket: W3CWebSocket;

    public constructor(socketAddress: string, sslMode: boolean) {
        this.socketAddress = socketAddress;
        this.sslMode = sslMode;
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
            // console.log(e.data);
            const response: BatchStateUpdateDto = JSON.parse(e.data);
            if (
                response.type === "message" &&
                Object.getOwnPropertyNames(response.data).length !== 0
            ) {
                if (response.data.batch_statuses && response.data.batch_statuses.invalid_transactions.length) {
                    this.closeWebSocket();
                    callback(new ErrorMessage(response.data.batch_statuses.invalid_transactions[0]));
                    return;
                }
                callback(null, this.isEvent ? response.data : new BatchStatusesDto(response.data.batch_statuses));
            }
        };
        this._socket.onerror = (err) => {
            callback(err);
        };
    }

    public closeWebSocket(): void {
        if (!this._socket) {
            throw new Error("WebSocket is not running");
        }
        this._socket.send(this._getSocketQuery(false));
        this._socket.close();
        this._socket = null;
    }

    private _getSubscribeUrl(): string {
        const protocol = this.sslMode ? "wss://" : "ws://";
        return `${protocol}${this.socketAddress}/ws${this.isEvent ? "/events" : ""}`;
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
}

export {
    RemmeWebSocket,
    IRemmeWebSocket,
    IWebSocketsEvents,
    Events,
};
