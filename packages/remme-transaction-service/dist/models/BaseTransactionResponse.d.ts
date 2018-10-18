import { RemmeWebSocket, IRemmeWebSocket } from "remme-web-socket";
/**
 * Main class for response on transaction request, which contain identifier of batch and communication with WebSockets.
 */
export declare class BaseTransactionResponse extends RemmeWebSocket implements IBaseTransactionResponse {
    /**
     * Identifier of batch that contain sending transaction
     */
    batchId: string;
    /**
     * Get address of node, ssl mode, and identifier of batch.
     * Then implement RemmeWebSocket class and provide data to it.
     * @param {string} nodeAddress
     * @param {boolean} sslMode
     * @param {string} batchId
     */
    constructor(nodeAddress: string, sslMode: boolean, batchId: string);
}
export interface IBaseTransactionResponse extends IRemmeWebSocket {
    batchId: string;
}
