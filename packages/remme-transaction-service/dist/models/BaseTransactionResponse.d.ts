import { RemmeWebSocket, IRemmeWebSocket } from "remme-web-socket";
import { INetworkConfig } from "remme-utils";
/**
 * Main class for response on transaction request, which contain identifier of batch and communication with WebSockets.
 */
export declare class BaseTransactionResponse extends RemmeWebSocket implements IBaseTransactionResponse {
    private _batchId;
    /**
     * Get address of node, ssl mode, and identifier of batch.
     * Then implement RemmeWebSocket class and provide data to it.
     * @param {INetworkConfig} networkConfig;
     * @param {string} batchId
     */
    constructor(networkConfig: INetworkConfig, batchId: string);
    /**
     * Identifier of batch that contains sending transaction
     */
    /**
     * Set batch id. When you provide new batch id to this object, program check web socket connection,
     * if connection is open, program close it and then provide new batch id.
     * And you can connect to web socket again with new batch id.
     * @param {string} value
     */
    batchId: string;
}
export interface IBaseTransactionResponse extends IRemmeWebSocket {
    batchId: string;
}
