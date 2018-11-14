import { IRemmeApi } from "remme-api";
import { IRemmeBlockchainInfo } from "./interface";
import { IBaseQuery, Batch, BatchList, Block, BlockList, State, StateList, Transaction, TransactionList, IStateQuery, INetworkStatus, IBlockInfo } from "./models";
/**
 * Main class that works with blockchain data. Blocks, batches, transactions, addresses, peers.
 * @example
 * ```typescript
 * const blockInfo = await remme.blockchainInfo.getBlockInfo();
 * console.log("blockInfo:", blockInfo);
 * const network = await remme.blockchainInfo.getNetworkStatus();
 * console.log("network:", network);
 * const blocks = await remme.blockchainInfo.getBlocks();
 * console.log("blocks:", blocks);
 * const block = await remme.blockchainInfo.getBlockById(blocks.data[1].header_signature);
 * console.log("block:", block);
 * const batches = await remme.blockchainInfo.getBatches();
 * console.log("batches:", batches);
 * const batch = await remme.blockchainInfo.getBatchById(batches.data[1].header_signature);
 * console.log("batch:", batch);
 * const transactions = await remme.blockchainInfo.getTransactions();
 * console.log("transactions:", transactions);
 * const transaction = await remme.blockchainInfo.getTransactionById(transactions.data[2].header_signature);
 * console.log("transaction:", transaction);
 * const parsedTransaction = remme.blockchainInfo.parseTransactionPayload(transaction.data);
 * console.log("parsedTransaction:", parsedTransaction);
 * const states = await remme.blockchainInfo.getState();
 * console.log("states:", states);
 * const state = await remme.blockchainInfo.getStateByAddress(states.data[1].address);
 * console.log("state:", state);
 * const parsedState = remme.blockchainInfo.parseStateData(state);
 * console.log("parsedState:", parsedState);
 * const batchStatus = await remme.blockchainInfo.getBatchStatus(batches.data[1].header_signature);
 * console.log("batchStatus:", batchStatus);
 * const peers = await remme.blockchainInfo.getPeers();
 * console.log("peers:", peers);
 * ```
 */
declare class RemmeBlockchainInfo implements IRemmeBlockchainInfo {
    [key: string]: any;
    private readonly _remmeApi;
    private static address;
    private static correspond;
    private _checkId(id?);
    private _checkAddress(address?);
    /**
     * @example
     * Usage without remme main package
     * ```typescript
     * const remmeApi = new RemmeApi();
     * const remmeBlockchainInfo = new RemmeBlockchainInfo(remmeApi);
     * ```
     * @param {IRemmeApi} remmeApi
     */
    constructor(remmeApi: IRemmeApi);
    /**
     * Get all blocks from REMChain.
     * You can specify one or more query parameters.
     * @example
     * Without query
     * ```typescript
     * const blocks = await remme.blockchainInfo.getBlocks();
     * console.log(blocks); // BlockList
     * ```
     *
     * Start from specifying block number
     * ```typescript
     * const blocks = await remme.blockchainInfo.getBlocks({ start: 4 });
     * console.log(blocks); // BlockList
     * ```
     *
     * Reverse output
     * ```typescript
     * const blocks = await remme.blockchainInfo.getBlocks({ reverse: true });
     * console.log(blocks); // BlockList
     * ```
     *
     * Specify limit of output
     * ```typescript
     * const blocks = await remme.blockchainInfo.getBlocks({ limit: 2 });
     * console.log(blocks); // BlockList
     * ```
     *
     * Specify head of block for start
     * ```typescript
     * const blocks = await remme.blockchainInfo.getBlocks({
     *      head: "9d2dc2ab673d028bc1dd8b5be8d2d885e4383a827cd0261f58334252bf807c08113207eabbd12d0786d6bba5378a791129f9c520c17597b5504d4b547ef57491"
     * });
     * console.log(blocks); // BlockList
     * ```
     * @param {IBaseQuery} query
     * @returns {Promise<BlockList>}
     */
    getBlocks(query?: IBaseQuery): Promise<BlockList>;
    /**
     * Get block by id (header_signature) from REMChain.
     * @example
     * ```typescript
     * const block = await remme.blockchainInfo.getBlockById(
     *      "9d2dc2ab673d028bc1dd8b5be8d2d885e4383a827cd0261f58334252bf807c08113207eabbd12d0786d6bba5378a791129f9c520c17597b5504d4b547ef57491"
     * );
     * console.log("block:", block); // Block
     * ```
     * @param {string} id
     * @returns {Promise<Block>}
     */
    getBlockById(id: string): Promise<Block>;
    /**
     * Get information about block.
     * @example
     * Without parameters.
     * ```typescript
     * const blockInfo = await remme.blockchainInfo.getBlockInfo();
     * console.log("blockInfo:", blockInfo); // IBlockInfo[]
     * ```
     * Start from specifying block number.
     * ```typescript
     * const blockInfo = await remme.blockchainInfo.getBlockInfo({
     *      start: 2
     * });
     * console.log(blockInfo); // IBlockInfo[]
     *
     * Specify limit of output
     * ```typescript
     * const blockInfo = await remme.blockchainInfo.getBlockInfo({ limit: 2 });
     * console.log(blockInfo); // IBlockInfo[]
     * ```
     * @param {IBaseQuery} query
     * @returns {Promise<IBlockInfo[]>}
     */
    getBlockInfo(query?: IBaseQuery): Promise<IBlockInfo[]>;
    /**
     * Get all batches from REMChain.
     * @example
     * Without parameters
     * ```typescript
     * const batches = await remme.blockchainInfo.getBatches();
     * console.log("batches:", batches); // BatchList
     * ```
     *
     * Start from specifying batch header_signature (batch ID).
     * ```typescript
     * const batches = await remme.blockchainInfo.getBatches({
     *      start: "8e4dc2ab673d028bc1dd8b5be8d2d885e4383a827cd0261f58334252bf807c08113207eabbd12d0786d6bba5378a791129f9c520c17597b5504d4b547ef5fe5c"
     * });
     * console.log(batches); // BatchList
     * ```
     *
     * Reverse output
     * ```typescript
     * const batches = await remme.blockchainInfo.getBatches({ reverse: true });
     * console.log(batches); // BatchList
     * ```
     *
     * Specify limit of output
     * ```typescript
     * const batches = await remme.blockchainInfo.getBatches({ limit: 2 });
     * console.log(batches); // BatchList
     * ```
     *
     * Specify head of block for start
     * ```typescript
     * const batches = await remme.blockchainInfo.getBatches({
     *      head: "9d2dc2ab673d028bc1dd8b5be8d2d885e4383a827cd0261f58334252bf807c08113207eabbd12d0786d6bba5378a791129f9c520c17597b5504d4b547ef57491"
     * });
     * console.log(batches); // BatchList
     * ```
     * @param {IBaseQuery} query
     * @returns {Promise<BatchList>}
     */
    getBatches(query?: IBaseQuery): Promise<BatchList>;
    /**
     * Get batch by id (header_signature) from REMChain.
     * @example
     * ```typescript
     * const batch = await remme.blockchainInfo.getBatchById(
     *      "9d2dc2ab673d028bc1dd8b5be8d2d885e4383a827cd0261f58334252bf807c08113207eabbd12d0786d6bba5378a791129f9c520c17597b5504d4b547ef57491"
     * );
     * console.log("batch:", batch); // Batch
     * ```
     * @param {string} id
     * @returns {Promise<Batch>}
     */
    getBatchById(id: string): Promise<Batch>;
    /**
     * Get status for batch.
     * @example
     * ```typescript
     * const batchStatus = await remme.blockchainInfo.getBatchStatus(
     *  "8e4dc2ab673d028bc1dd8b5be8d2d885e4383a827cd0261f58334252bf807c08113207eabbd12d0786d6bba5378a791129f9c520c17597b5504d4b547ef5fe5c"
     * );
     * console.log("batchStatus:", batchStatus);
     * ```
     * @param {string} id
     * @returns {Promise<string>}
     */
    getBatchStatus(id: string): Promise<string>;
    /**
     * Get states in REMChain
     * @example
     * Without parameters
     * ```typescript
     * const states = await remme.blockchainInfo.getState();
     * console.log("states:", states); // StateList
     * ```
     *
     * Start from specifying state address
     * ```typescript
     * const states = await remme.blockchainInfo.getState({
     *  start: "6a437247a1c12c0fb03aa6e242e6ce988d1cdc7fcc8c2a62ab3ab1202325d7d677e84c"
     * });
     * console.log(states); // StateList
     * ```
     *
     * Reverse output
     * ```typescript
     * const states = await remme.blockchainInfo.getState({ reverse: true });
     * console.log(states); // StateList
     * ```
     *
     * Specify limit of output
     * ```typescript
     * const states = await remme.blockchainInfo.getState({ limit: 2 });
     * console.log(states); // StateList
     * ```
     *
     * Specify head of block for start
     * ```typescript
     * const states = await remme.blockchainInfo.getState({
     *      address: "6a437247a1c12c0fb03aa6e242e6ce988d1cdc7fcc8c2a62ab3ab1202325d7d677e84c"
     * });
     * console.log(states); // StateList
     * ```
     * @param {IStateQuery} query
     * @returns {Promise<StateList>}
     */
    getState(query?: IStateQuery): Promise<StateList>;
    /**
     * Get state by address
     * @example
     * ```typescript
     * const state = await remme.blockchainInfo.getStateByAddress(
     *      "6a437247a1c12c0fb03aa6e242e6ce988d1cdc7fcc8c2a62ab3ab1202325d7d677e84c"
     * );
     * console.log("state:", state);
     * ```
     * @param {string} address
     * @returns {Promise<State>}
     */
    getStateByAddress(address: string): Promise<State>;
    /**
     * Parse state data.
     * @example
     * ```typescript
     * const state = await remme.blockchainInfo.getStateByAddress(
     *      "6a437247a1c12c0fb03aa6e242e6ce988d1cdc7fcc8c2a62ab3ab1202325d7d677e84c"
     * );
     * const parsedState = remme.blockchainInfo.parseStateData(state);
     * console.log("parsedState:", parsedState); // { data: any, type: string }
     * ```
     * @param {State} state
     * @returns {object}
     */
    parseStateData(state: State): object;
    /**
     * Get all transactions from REMChain.
     * @example
     * Without parameters
     * ```typescript
     * const transactions = await remme.blockchainInfo.getBatches();
     * console.log("transactions:", transactions); // TransactionList
     * ```
     *
     * Start from specifying transactions header_signature.
     * ```typescript
     * const transactions = await remme.blockchainInfo.getTransactions({
     *      start: "f32fc2ab673d028bc1dd8b5be8d2d885e4383a827cd0261f58334252bf807c08113207eabbd12d0786d6bba5378a791129f9c520c17597b5504d4b547ef543fe"
     * });
     * console.log(transactions); // TransactionList
     * ```
     *
     * Reverse output
     * ```typescript
     * const transactions = await remme.blockchainInfo.getTransactions({ reverse: true });
     * console.log(transactions); // TransactionList
     * ```
     *
     * Specify limit of output
     * ```typescript
     * const transactions = await remme.blockchainInfo.getTransactions({ limit: 2 });
     * console.log(transactions); // TransactionList
     * ```
     *
     * Specify head of block for start
     * ```typescript
     * const transactions = await remme.blockchainInfo.getTransactions({
     *      head: "9d2dc2ab673d028bc1dd8b5be8d2d885e4383a827cd0261f58334252bf807c08113207eabbd12d0786d6bba5378a791129f9c520c17597b5504d4b547ef57491"
     * });
     * console.log(transactions); // TransactionList
     * ```
     * @param {IBaseQuery} query
     * @returns {Promise<TransactionList>}
     */
    getTransactions(query?: IBaseQuery): Promise<TransactionList>;
    /**
     * Get transaction by id (header_signature) from REMChain
     * @example
     * ```typescript
     * const transaction = await remme.blockchainInfo.getTransactionById(
     *      "f32fc2ab673d028bc1dd8b5be8d2d885e4383a827cd0261f58334252bf807c08113207eabbd12d0786d6bba5378a791129f9c520c17597b5504d4b547ef543fe"
     * );
     * console.log("transaction:", transaction); // Block
     * ```
     * @param {string} id
     * @returns {Promise<Transaction>}
     */
    getTransactionById(id: string): Promise<Transaction>;
    /**
     * Parse transaction payload. Take transaction and return object with payload and type
     * @example
     * ```typescript
     * const transaction = await remme.blockchainInfo.getTransactionById(
     *  "f32fc2ab673d028bc1dd8b5be8d2d885e4383a827cd0261f58334252bf807c08113207eabbd12d0786d6bba5378a791129f9c520c17597b5504d4b547ef543fe"
     * );
     * console.log("transaction:", transaction);
     * const parsedTransaction = remme.blockchainInfo.parseTransactionPayload(transaction.data);
     * console.log("parsedTransaction:", parsedTransaction); // { payload: any, type: string }
     * ```
     * @param {Transaction} transaction
     * @returns {object}
     */
    parseTransactionPayload(transaction: Transaction): object;
    /**
     * Get network status for node.
     * @example
     * ```typescript
     * const networkStatus = await remme.blockchainInfo.getNetworkStatus();
     * console.log(networkStatus); // INetworkStatus
     * ```
     * @returns {Promise<INetworkStatus>}
     */
    getNetworkStatus(): Promise<INetworkStatus>;
    /**
     * Get peers that connected to this node.
     * @example
     * ```typescript
     * const peers = await remme.blockchainInfo.getPeers();
     * console.log(peers); // string[]
     * ```
     * @returns {Promise<string[]>}
     */
    getPeers(): Promise<string[]>;
}
export { RemmeBlockchainInfo, IRemmeBlockchainInfo, Block, BlockList, Batch, BatchList, Transaction, TransactionList, INetworkStatus, IBlockInfo, State, StateList };
