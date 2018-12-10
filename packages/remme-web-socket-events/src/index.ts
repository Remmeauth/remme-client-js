import { IRemmeRequestParams, RemmeEvents, RemmeRequestParams, RemmeWebSocket } from "remme-web-socket";

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
 *      events: RemmeEvents.SwapInit
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
     * const remmeEvents = new RemmeWebSocketsEvents("localhost:8080", false);
     * ```
     * @param {string} nodeAddress
     * @param {boolean} sslMode
     */
    public constructor(nodeAddress: string, sslMode: boolean) {
        super(nodeAddress, sslMode);
    }

    /**
     * Subscribing to events from WebSocket.
     * Available types for subscribing is covered in
     * https://docs.remme.io/remme-core/docs/remme-ws-events.html#registered-events
     * @example
     * You can subscribe on all events about swap
     * ```typescript
     * remmeEvents.subscribe({
     *      events: RemmeEvents.SwapAll
     * }, (err: Error, res: any) => {
     *      console.log(err);
     *      console.log(res);
     * });
     * ```
     * You can subscribe on one event
     * ```typescript
     * remmeEvents.subscribe({
     *      events: RemmeEvents.SwapInit
     * }, (err: Error, res: any) => {
     *      console.log(err);
     *      console.log(res);
     * });
     * ```
     * Also you can subscribe on several events
     * ```typescript
     * remmeEvents.subscribe({
     *      events: [ RemmeEvents.SwapInit, RemmeEvents.SwapClose ]
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
                    throw new Error("BatchID is required");
                }
                break;
            }
            case RemmeEvents.Transfer: {
                if (!data.address) {
                    throw new Error("Address is required");
                }
                break;
            }
            case RemmeEvents.AtomicSwap: {
                if (!data.id) {
                    throw new Error("Atomic SwapId is required");
                }
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
