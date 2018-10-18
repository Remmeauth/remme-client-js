import { RemmeWebSocket, IRemmeWebSocket } from "remme-web-socket";

/**
 * Main class for response on transaction request, which contain identifier of batch and communication with WebSockets.
 */
export class BaseTransactionResponse extends RemmeWebSocket implements IBaseTransactionResponse {
    /**
     * Identifier of batch that contain sending transaction
     */
    public batchId: string;

    /**
     * Get address of node, ssl mode, and identifier of batch.
     * Then implement RemmeWebSocket class and provide data to it.
     * @param {string} nodeAddress
     * @param {boolean} sslMode
     * @param {string} batchId
     */
    public constructor(nodeAddress: string, sslMode: boolean, batchId: string) {
        super(nodeAddress, sslMode);
        this.batchId = batchId;
        this.data = {
          batch_ids: [
              this.batchId,
          ],
        };
    }

}

export interface IBaseTransactionResponse extends IRemmeWebSocket {
    batchId: string;
}
