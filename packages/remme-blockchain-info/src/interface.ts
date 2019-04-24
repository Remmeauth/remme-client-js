import {
    IBaseQuery,
    TransactionList,
    Transaction,
    TransactionData,
    BlockList,
    Block,
    BatchList,
    Batch,
    IStateQuery,
    StateList,
    State,
    INetworkStatus,
    IBlockInfo,
    IBlockQuery,
} from "./models";

export interface IRemmeBlockchainInfo {
    getTransactions(query?: IBaseQuery): Promise<TransactionList>;
    getTransactionById(id: string): Promise<Transaction>;
    parseTransactionPayload(transaction: TransactionData): object;

    getBlocks(query?: IBlockQuery): Promise<BlockList>;
    getBlockById(id: string): Promise<Block>;
    getBlockInfo(query?: IBaseQuery): Promise<IBlockInfo[]>;

    getBatches(query?: IBaseQuery): Promise<BatchList>;
    getBatchById(id: string): Promise<Batch>;
    getBatchStatus(batchId: string): Promise<string>;

    getState(query?: IStateQuery): Promise<StateList>;
    getStateByAddress(address: string): Promise<State>;
    parseStateData(state: State): object;

    getPeers(): Promise<string[]>;

    // getReceipts(ids: string[]): Promise<string[]>;

    getNetworkStatus(): Promise<INetworkStatus>;

}
