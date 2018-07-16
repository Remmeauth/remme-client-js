import { IRemmeRest } from "remme-rest";
import { IRemmeBlockchainInfo } from "./interface";
import { BaseQuery, Batch, BatchList, Block, BlockList, State, StateList, StateQuery, Transaction, TransactionList, PeerList, ReceiptList } from "./models";
declare class RemmeBlockchainInfo implements IRemmeBlockchainInfo {
    private readonly _remmeRest;
    private static address;
    private static correspond;
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
    private _checkId(id?);
    private _checkAddress(address?);
    private _checkQuery(query);
    private _prepareAddress(state);
    private _prepareBlock(block);
    private _prepareBatch(batch);
    private _prepareTransaction(transaction);
}
export { RemmeBlockchainInfo, IRemmeBlockchainInfo };
