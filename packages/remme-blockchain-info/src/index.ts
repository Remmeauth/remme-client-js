import { RemmeMethods, ValidatorMethods, IRemmeRest } from "remme-rest";

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

    public constructor(remmeRest: IRemmeRest) {
        this._remmeRest = remmeRest;
    }

    public async getBatchById(id: string): Promise<Batch> {
        return await this._remmeRest.getRequest<Batch>(ValidatorMethods.batches, id);
    }

    public async getBatches(query?: BaseQuery): Promise<BatchList> {
        return await this._remmeRest.getRequest<BatchList>(ValidatorMethods.batches, "", query);
    }

    public async getBlockById(id: string): Promise<Block> {
        return await this._remmeRest.getRequest<Block>(ValidatorMethods.blocks, id);
    }

    public async getBlocks(query?: BaseQuery): Promise<BlockList> {
        return await this._remmeRest.getRequest<BlockList>(ValidatorMethods.blocks, "", query);
    }

    public async getPeers(): Promise<PeerList> {
        return await this._remmeRest.getRequest<PeerList>(ValidatorMethods.peers);
    }

    public async getReceipts(id: string): Promise<ReceiptList> {
        return await this._remmeRest.getRequest<ReceiptList>(ValidatorMethods.receipts, "", { id });
    }

    public async getState(query?: StateQuery): Promise<StateList> {
        return await this._remmeRest.getRequest<StateList>(ValidatorMethods.state, "", query);
    }

    public async getStateByAddress(address: string): Promise<State> {
        return await this._remmeRest.getRequest<State>(ValidatorMethods.state, address);
    }

    public async getTransactionById(id: string): Promise<Transaction> {
        return await this._remmeRest.getRequest<Transaction>(ValidatorMethods.transactions, id);
    }

    public async getTransactions(query?: BaseQuery): Promise<TransactionList> {
        return await this._remmeRest.getRequest<TransactionList>(ValidatorMethods.transactions, "", query);
    }
}

export {
    RemmeBlockchainInfo,
    IRemmeBlockchainInfo,
};
