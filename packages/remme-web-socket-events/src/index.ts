import { IRemmeRequestParams, RemmeEvents, RemmeRequestParams, RemmeWebSocket } from "remme-web-socket";
import { INetworkConfig } from "remme-utils";

import { IRemmeWebSocketsEvents } from "./interface";

/**
 * Class for subscribing to events from WebSocket.
 * Available types for subscribing is covered in
 * https://docs.remme.io/remme-core/docs/remme-ws-events.html#registered-events
 * @example
 * ```typescript
 * import { RemmeWebSocketsEvents, RemmeEvents } from "remme-web-socket-events";
 * const remmeEvents = new RemmeWebSocketsEvents("localhost:8080", false);
 * remmeEvents.subscribe({
 *      events: RemmeEvents.AtomicSwap
 * }, (err: Error, res: any) => {
 *      console.log(err);
 *      console.log(res);
 *      remmeEvents.unsubscribe();
 * });
 * ```
 */
class RemmeWebSocketsEvents extends RemmeWebSocket implements IRemmeWebSocketsEvents  {
    /**
     * Implementation of RemmeWebSocketsEvents;
     * @example
     * ```typescript
     * const remmeEvents = new RemmeWebSocketsEvents({
     *     nodeAddress: "localhost:8080",
     *     sslMode: false
     * });
     * ```
     * @param {INetworkConfig} networkConfig
     */
    public constructor(networkConfig: INetworkConfig) {
        super(networkConfig);
    }

    /**
     * Subscribing to events from WebSocket.
     * Available types for subscribing is covered in
     * https://docs.remme.io/remme-core/docs/remme-ws-events.html#registered-events
     * @example
     * You can subscribe on events about Swap
     * ```typescript
     * remmeEvents.subscribe({
     *      events: RemmeEvents.AtomicSwap
     * }, (err: Error, res: any) => {
     *      console.log(err);
     *      console.log(res);
     * });
     * ```
     * You can subscribe on events about Batch
     * ```typescript
     * remmeEvents.subscribe({
     *      events: RemmeEvents.Batch
     * }, (err: Error, res: any) => {
     *      console.log(err);
     *      console.log(res);
     * });
     * ```
     */
    public subscribe(data: IRemmeRequestParams, callback: (err: Error, res: any) => void): void {
        if (this._socket) {
            super.closeWebSocket();
        }
        switch (data.events) {
            case RemmeEvents.Batch: {
                if (!data.id) {
                    throw new Error("'id' is required");
                }
                break;
            }
            case RemmeEvents.Transfer: {
                if (!data.address) {
                    throw new Error("'address' is required");
                }
                break;
            }
        }
        this.data = new RemmeRequestParams(data);
        super.connectToWebSocket(callback);
    }

    /**
     * Unsubscribing from events.
     * Regardless of how many events you subscribed to, you always unsubscribe from all
     * @example
     * ```typescript
     * remmeEvents.unsubscribe();
     * ```
     */
    public unsubscribe(): void {
        if (this._socket) {
            super.closeWebSocket();
        } else {
            throw new Error("WebSocket is not running");
        }
    }

}

export {
    RemmeWebSocketsEvents,
    IRemmeWebSocketsEvents,
    RemmeEvents,
};
