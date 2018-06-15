import { w3cwebsocket as W3CWebSocket } from "websocket";
import { IBaseTransactionResponse } from "./interface";
import { BatchStateUpdateDto, BatchStatusesDto } from "./models";

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

class BaseTransactionResponse implements IBaseTransactionResponse {
    public batchId: string;
    private _socket: any;
    public socketAddress: string;

    public constructor(socketAddress: string) {
        this.socketAddress = socketAddress;
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
                response.type === "message" &&
                Object.getOwnPropertyNames(response.data).length !== 0
            ) {
                callback(null, new BatchStatusesDto(response.data.batch_statuses));
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
        return `ws://${this.socketAddress}/ws`;
    }

    private _getSocketQuery(subscribe: boolean = true): string {
        const query = {
            type: "request",
            action: subscribe ? "subscribe" : "unsubscribe",
            entity: "batch_state",
            id: Math.random() * 1000,
            parameters: {
                batch_ids: [
                    this.batchId,
                ],
            },
        };
        return JSON.stringify(query);
    }
}

export {
    BaseTransactionResponse,
    IBaseTransactionResponse,
};
