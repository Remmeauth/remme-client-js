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
// TODO Refactor this class for receiving data. Now we return data without covered it to some class.
/* tslint:disable */
/**
 * Class that work with sockets. Class can be used for inheritance.
 * This class is used for response on transaction sending.
 * Each method that return batchId, for truth return class that inherit from RemmeWebSocket with preset data.
 * So for example:
 * @example
 * ```typescript
 * const remme = new Remme.Client();
 * const someRemmeAddress = "03c2e53acce583c8bb2382319f4dee3e816b67f3a733ef90fe3329062251d0c638";
 * const transactionResult = await remme.token.transfer(someRemmeAddress, 10);
 *
 * /* transactionResult is inherit from RemmeWebSocket and this.data = {
 *          batch_ids: [
 *             transactionResult.batchId,
 *          ],
 *      };
 * *\/ so you can connectToWebSocket easy. Just:
 *
 * transactionResult.connectToWebSocket((err: Error, res: any) => {
 *     if (err) {
 *         console.log(err);
 *         return;
 *     }
 *     console.log(res);
 *     mySocketConnection.closeConnection();
 * });
 * ```
 *
 * But you also can use your class for work with WebSockets. Just inherit it from RemmeWebSocket, like this:
 * ```typescript
 * class mySocketConnection extends RemmeWebSocket {
 *      constructor({nodeAddress, sslMode, data}) {
 *          super(nodeAddress, sslMode);
 *          this.data = data;
 *      }
 * }
 *
 * const remmeWebSocket = new mySocketConnection({
 *      nodeAddress: "localhost:8080",
 *      sslMode: false,
 *      data: {
 *          batch_ids: [
 *             transactionResult.batchId,
 *          ],
 *      }
 * });
 *
 * mySocketConnection.connectToWebSocket((err: Error, res: any) => {
 *     if (err) {
 *         console.log(err);
 *         return;
 *     }
 *     console.log(res);
 *     mySocketConnection.closeConnection();
 * });
 * ```
 */
/* tslint:enable */
class RemmeWebSocket implements IRemmeWebSocket {
    // index signature
    [key: string]: any;

    private readonly _nodeAddress: string;
    private readonly _sslMode: boolean;

    protected _socket: W3CWebSocket;
    protected isEvent: boolean = false;
    protected data: object;

    private _sendAnError(error: ErrorMessage | ErrorFromEvent, callback: any) {
        this.closeWebSocket();
        callback(error);
    }

    private _getSubscribeUrl(): string {
        const protocol = this.sslMode ? "wss://" : "ws://";
        return `${protocol}${this.nodeAddress}/ws${this.isEvent ? "/events" : ""}`;
    }

    private _getSocketQuery(isSubscribe: boolean = true): string {
        if (!this.data) {
            throw new Error("Data for subscribe was not provided");
        }

        const query = this.isEvent ? {
            action: isSubscribe ? "subscribe" : "unsubscribe",
            data: this.data,
        } : {
            type: "request",
            action: isSubscribe ? "subscribe" : "unsubscribe",
            entity: "batch_state",
            id: Math.floor(Math.random() * 1000),
            parameters: this.data,
        };
        return JSON.stringify(query);
    }

    /**
     * Implement RemmeWebSocket by providing node address and ssl mode.
     * @example
     * ```typescript
     * const remmeWebSocket = new RemmeWebSocket(nodeAddress, sslMode);
     * ```
     * @param {string} nodeAddress
     * @param {boolean} sslMode
     */
    public constructor(nodeAddress: string, sslMode: boolean) {
        this._nodeAddress = nodeAddress;
        this._sslMode = sslMode;
    }

    /**
     * Get node address that was provided by user
     * @returns {string}
     */
    public get nodeAddress(): string {
        return this._nodeAddress;
    }

    /**
     * Get ssl mode that was provided by user
     * @returns {string}
     */
    public get sslMode(): boolean {
        return this._sslMode;
    }

    /**
     * Method for connect to WebSocket.
     * In this method implement new WebSocket instance and provided some listeners for onopen, onmessage, onclose.
     * This method get callback that will be called when get events: onmessage, onclose.
     * For this method you should set property data.
     * remmeWebSocket.connectToWebSocket((err: Error, res: any) => {
     *     if (err) {
     *         console.log(err);
     *         return;
     *     }
     *     console.log(res);
     *     remmeWebSocket.closeConnection();
     * });
     * @param {(err: Error, res?: any) => void} callback
     */
    public connectToWebSocket(callback: (err: Error, res?: any) => void): void {
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
        this._socket.onclose = (e: CloseEvent) => {
            if (e.code !== 1000) {
                callback(new Error(e.reason));
            }
            return;
        };
    }

    /**
     * Call this method when your connection is open for close it.
     */
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
