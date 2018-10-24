import { IBaseQuery, TransactionList, Transaction, BlockList, Block, BatchList, Batch, IStateQuery, StateList, State, INetworkStatus, IBlockInfo } from "./models";
export interface IRemmeBlockchainInfo {
    getTransactions(query?: IBaseQuery): Promise<TransactionList>;
    getTransactionById(id: string): Promise<Transaction>;
    parseTransactionPayload(transaction: Transaction): object;
    getBlocks(query?: IBaseQuery): Promise<BlockList>;
    getBlockById(id: string): Promise<Block>;
    getBlockInfo(query?: IBaseQuery): Promise<IBlockInfo[]>;
    getBatches(query?: IBaseQuery): Promise<BatchList>;
    getBatchById(id: string): Promise<Batch>;
    getBatchStatus(batchId: string): Promise<string>;
    getState(query?: IStateQuery): Promise<StateList>;
    getStateByAddress(address: string): Promise<State>;
    parseStateData(state: State): object;
    getPeers(): Promise<string[]>;
    getNetworkStatus(): Promise<INetworkStatus>;
}
