import { BaseQuery, TransactionList, Transaction, BlockList, Block, BatchList, Batch, StateQuery, StateList, State, PeerList, ReceiptList } from "./models";
export interface IRemmeBlockchainInfo {
    getTransactions(query?: BaseQuery): Promise<TransactionList>;
    getTransactionById(id: string): Promise<Transaction>;
    getBlocks(query?: BaseQuery): Promise<BlockList>;
    getBlockById(id: string): Promise<Block>;
    getBatches(query?: BaseQuery): Promise<BatchList>;
    getBatchById(id: string): Promise<Batch>;
    getState(query?: StateQuery): Promise<StateList>;
    getStateByAddress(address: string): Promise<State>;
    getPeers(): Promise<PeerList>;
    getReceipts(id: string): Promise<ReceiptList>;
}
