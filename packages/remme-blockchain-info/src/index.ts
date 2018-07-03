import { RemmeMethods, IRemmeRest } from "remme-rest";
import { BaseTransactionResponse, IBaseTransactionResponse } from "remme-base-transaction-response";

import { IRemmeBlockchainInfo } from "./interface";
import {
    BaseQuery,
    Batch,
    BatchList,
    Block,
    BlockList,
    State,
    StateList,
    StateQuery,
    Transaction,
    TransactionList,
    PeerList,
    ReceiptList,
} from "./models";

class RemmeBlockchainInfo implements IRemmeBlockchainInfo {
    private readonly _remmeRest: IRemmeRest;

    public getBatchById(id: string): Batch {
        return undefined;
    }

    public getBatches(query?: BaseQuery): BatchList {
        return undefined;
    }

    public getBlockById(id: string): Block {
        return undefined;
    }

    public getBlocks(query?: BaseQuery): BlockList {
        return undefined;
    }

    public getState(query?: StateQuery): StateList {
        return undefined;
    }

    public getStateByAddress(address: string): State {
        return undefined;
    }

    public getTransactionById(id: string): Transaction {
        return undefined;
    }

    public getTransactions(query?: BaseQuery): TransactionList {
        return undefined;
    }

    public getPeers(): PeerList {
        return undefined;
    }

    public getReceipts(id: string): ReceiptList {
        return undefined;
    }
}

export {
    RemmeBlockchainInfo,
    IRemmeBlockchainInfo,
};
