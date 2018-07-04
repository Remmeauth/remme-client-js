import { IRemmeRest } from "remme-rest";
import { IRemmeBlockchainInfo } from "./interface";
import { BaseQuery, Batch, BatchList, Block, BlockList, State, StateList, StateQuery, Transaction, TransactionList, PeerList, ReceiptList } from "./models";
declare class RemmeBlockchainInfo implements IRemmeBlockchainInfo {
    private readonly _remmeRest;
    constructor(remmeRest: IRemmeRest);
    getBatchById(id: string): Promise<Batch>;
    getBatches(query?: BaseQuery): Promise<BatchList>;
    getBlockById(id: string): Promise<Block>;
    getBlocks(query?: BaseQuery): Promise<BlockList>;
    getPeers(): Promise<PeerList>;
    getReceipts(id: string): Promise<ReceiptList>;
    getState(query?: StateQuery): Promise<StateList>;
    getStateByAddress(address: string): Promise<State>;
    getTransactionById(id: string): Promise<Transaction>;
    getTransactions(query?: BaseQuery): Promise<TransactionList>;
}
export { RemmeBlockchainInfo, IRemmeBlockchainInfo };
