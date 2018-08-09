import { IRemmeRest } from "remme-rest";
import { IRemmeBlockchainInfo } from "./interface";
import { IBaseQuery, Batch, BatchList, Block, BlockList, State, StateList, Transaction, TransactionList, PeerList, ReceiptList, IStateQuery } from "./models";
declare class RemmeBlockchainInfo implements IRemmeBlockchainInfo {
    [key: string]: any;
    private readonly _remmeRest;
    private static address;
    private static correspond;
    constructor(remmeRest: IRemmeRest);
    getBatchById(id: string): Promise<Batch>;
    getBatches(query?: IBaseQuery): Promise<BatchList>;
    getBlockById(id: string): Promise<Block>;
    getBlocks(query?: IBaseQuery): Promise<BlockList>;
    getPeers(): Promise<PeerList>;
    getReceipts(id: string): Promise<ReceiptList>;
    getState(query?: IStateQuery): Promise<StateList>;
    getStateByAddress(address: string): Promise<State>;
    getTransactionById(id: string): Promise<Transaction>;
    getTransactions(query?: IBaseQuery): Promise<TransactionList>;
    private _checkId(id?);
    private _checkAddress(address?);
    private _prepareAddress(state);
    private _prepareBlock(block);
    private _prepareBatch(batch);
    private _prepareTransaction(transaction);
}
export { RemmeBlockchainInfo, IRemmeBlockchainInfo };
