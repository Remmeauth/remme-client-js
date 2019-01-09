import { RemmeWebSocket, IRemmeWebSocket, RemmeRequestParams, RemmeEvents } from "remme-web-socket";
import { PATTERNS, INetworkConfig } from "remme-utils";

/**
 * Main class for response on transaction request, which contain identifier of batch and communication with WebSockets.
 */
export class BaseTransactionResponse extends RemmeWebSocket implements IBaseTransactionResponse {
    private _batchId: string;

    /**
     * Get address of node, ssl mode, and identifier of batch.
     * Then implement RemmeWebSocket class and provide data to it.
     * @param {INetworkConfig} networkConfig;
     * @param {string} batchId
     */
    public constructor(networkConfig: INetworkConfig, batchId: string) {
        super(networkConfig);
        this._batchId = batchId;
        this.data = new RemmeRequestParams({
            events: RemmeEvents.Batch,
            id: batchId,
        });
    }

    /**
     * Identifier of batch that contains sending transaction
     */
    public get batchId() {
        return this._batchId;
    }

    /**
     * Set batch id. When you provide new batch id to this object, program check web socket connection,
     * if connection is open, program close it and then provide new batch id.
     * And you can connect to web socket again with new batch id.
     * @param {string} value
     */
    public set batchId(value: string) {
        if (value.search(PATTERNS.HEADER_SIGNATURE) === -1) {
            throw new Error("Given batch id is invalid");
        }
        if (this._socket) {
            super.closeWebSocket();
        }
        this._batchId = value;
        this.data.id = value;
    }
}

export interface IBaseTransactionResponse extends IRemmeWebSocket {
    batchId: string;
}
