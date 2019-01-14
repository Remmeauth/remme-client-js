import { IRemmeRequestParams, RemmeEvents, RemmeWebSocket } from "remme-web-socket";
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
declare class RemmeWebSocketsEvents extends RemmeWebSocket implements IRemmeWebSocketsEvents {
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
    constructor(networkConfig: INetworkConfig);
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
    subscribe(data: IRemmeRequestParams, callback: (err: Error, res: any) => void): void;
    /**
     * Unsubscribing from events.
     * Regardless of how many events you subscribed to, you always unsubscribe from all
     * @example
     * ```typescript
     * remmeEvents.unsubscribe();
     * ```
     */
    unsubscribe(): void;
}
export { RemmeWebSocketsEvents, IRemmeWebSocketsEvents, RemmeEvents };
