import { IRemmeRequestParams, RemmeEvents, RemmeWebSocket } from "remme-web-socket";
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
declare class RemmeWebSocketsEvents extends RemmeWebSocket implements IRemmeWebSocketsEvents {
    /**
     * Implementation of RemmeWebSocketsEvents;
     * @example
     * ```typescript
     * const remmeEvents = new RemmeWebSocketsEvents("localhost:8080", false);
     * ```
     * @param {string} nodeAddress
     * @param {boolean} sslMode
     */
    constructor(nodeAddress: string, sslMode: boolean);
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
