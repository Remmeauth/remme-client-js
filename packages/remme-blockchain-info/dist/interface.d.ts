import { BaseQuery, TransactionList, Transaction, BlockList, Block, BatchList, Batch, StateQuery, StateList, State, PeerList, ReceiptList } from "./models";
export interface IRemmeBlockchainInfo {
    getTransactions(query?: BaseQuery): TransactionList;
    getTransactionById(id: string): Transaction;
    getBlocks(query?: BaseQuery): BlockList;
    getBlockById(id: string): Block;
    getBatches(query?: BaseQuery): BatchList;
    getBatchById(id: string): Batch;
    getState(query?: StateQuery): StateList;
    getStateByAddress(address: string): State;
    getPeers(): PeerList;
    getReceipts(id: string): ReceiptList;
}
