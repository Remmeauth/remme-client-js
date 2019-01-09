import { INetworkConfig } from "remme-utils";
import { IRemmeWebSocket } from "./interface";
import { BatchInfoDto, IJsonRpcRequest, JsonRpcRequest, RemmeEvents, RemmeRequestParams, IRemmeRequestParams, BatchStatus, SwapState, SwapInfoDto, SwapInfo, W3CSocket } from "./models";
/**
 * @hidden
 */
declare global  {
    /**
     * @hidden
     */
    interface Window {
        WebSocket: any;
    }
}
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
 * /* transactionResult is inherit from RemmeWebSocket and
 *      this.data = {
 *          event_type: "batch",
 *          id: transactionResult.batchId,
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
 *      constructor({networkConfig, data}) {
 *          super(networkConfig);
 *          this.data = data;
 *      }
 * }
 *
 * const remmeWebSocket = new mySocketConnection({
 *      networkConfig: {
 *          nodeAddress: "localhost",
 *          nodePort: "8080",
 *          sslMode: false
 *      },
 *      data: {
 *          event_type: "batch",
 *          id: transactionResult.batchId,
 *      }
 * });
 *
 * remmeWebSocket.connectToWebSocket((err: Error, res: any) => {
 *     if (err) {
 *         console.log(err);
 *         return;
 *     }
 *     console.log(res);
 *     mySocketConnection.closeConnection();
 * });
 * ```
 */
declare class RemmeWebSocket implements IRemmeWebSocket {
    [key: string]: any;
    private readonly _networkConfig;
    private readonly _map;
    protected _socket: W3CSocket;
    protected data: RemmeRequestParams;
    private _sendAnError(error, callback);
    private _getSubscribeUrl();
    private _getSocketQuery(isSubscribe?);
    /**
     * Implement RemmeWebSocket by providing node address and ssl mode.
     * @example
     * ```typescript
     * const remmeWebSocket = new RemmeWebSocket(networkConfig);
     * ```
     * @param {INetworkConfig} networkConfig
     */
    constructor(networkConfig: INetworkConfig);
    /**
     * Get network config that was provided by user
     * @returns {INetworkConfig}
     */
    readonly networkConfig: INetworkConfig;
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
    connectToWebSocket(callback: (err: Error, res?: any) => void): void;
    /**
     * Call this method when your connection is open for close it.
     */
    closeWebSocket(): void;
}
export { RemmeWebSocket, IRemmeWebSocket, BatchStatus, BatchInfoDto, RemmeEvents, IJsonRpcRequest, JsonRpcRequest, RemmeRequestParams, IRemmeRequestParams, SwapInfoDto, SwapInfo, SwapState };
