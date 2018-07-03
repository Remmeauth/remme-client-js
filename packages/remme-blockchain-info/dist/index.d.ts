import { IRemmeBlockchainInfo } from "./interface";
import { BaseQuery, Batch, BatchList, Block, BlockList, State, StateList, StateQuery, Transaction, TransactionList, PeerList, ReceiptList } from "./models";
declare class RemmeBlockchainInfo implements IRemmeBlockchainInfo {
    private readonly _remmeRest;
    getBatchById(id: string): Batch;
    getBatches(query?: BaseQuery): BatchList;
    getBlockById(id: string): Block;
    getBlocks(query?: BaseQuery): BlockList;
    getState(query?: StateQuery): StateList;
    getStateByAddress(address: string): State;
    getTransactionById(id: string): Transaction;
    getTransactions(query?: BaseQuery): TransactionList;
    getPeers(): PeerList;
    getReceipts(id: string): ReceiptList;
}
export { RemmeBlockchainInfo, IRemmeBlockchainInfo };
