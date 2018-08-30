import {
    IBaseQuery,
    TransactionList,
    Transaction,
    BlockList,
    Block,
    BatchList,
    Batch,
    IStateQuery,
    StateList,
    State,
    PeerList,
    ReceiptList,
    INetworkStatus,
    IBlockInfo,
} from "./models";

export interface IRemmeBlockchainInfo {
    getTransactions(query?: IBaseQuery): Promise<TransactionList>;
    getTransactionById(id: string): Promise<Transaction>;

    getBlocks(query?: IBaseQuery): Promise<BlockList>;
    getBlockById(id: string): Promise<Block>;

    getBatches(query?: IBaseQuery): Promise<BatchList>;
    getBatchById(id: string): Promise<Batch>;

    getState(query?: IStateQuery): Promise<StateList>;
    getStateByAddress(address: string): Promise<State>;

    getPeers(): Promise<PeerList>;

    getReceipts(id: string): Promise<ReceiptList>;

    getNetworkStatus(): Promise<INetworkStatus>;

    getBlockInfo(query?: IBaseQuery): Promise<IBlockInfo[]>;
}
