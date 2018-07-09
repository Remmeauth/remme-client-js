import { RemmeWebSocket, IRemmeWebSocket } from "remme-web-socket";

export class BaseTransactionResponse extends RemmeWebSocket implements IBaseTransactionResponse {
    public batchId: string;

    public constructor(socketAddress: string, sslMode: boolean, batchId: string) {
        super(socketAddress, sslMode);
        this.batchId = batchId;
        super.data = {
          batch_ids: [
              this.batchId,
          ],
        };
    }
}

export interface IBaseTransactionResponse extends IRemmeWebSocket {
    batchId: string;
}
