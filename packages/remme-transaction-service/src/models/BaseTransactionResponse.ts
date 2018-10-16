import { RemmeWebSocket, IRemmeWebSocket } from "remme-web-socket";

export class BaseTransactionResponse extends RemmeWebSocket implements IBaseTransactionResponse {
    public batchId: string;

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
