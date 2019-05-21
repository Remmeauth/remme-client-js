import * as protobufs from "remme-protobuf";
import { RemmeMethods, IRemmeApi } from "remme-api";
import { base64ToArrayBuffer, RemmeNamespace, RemmeFamilyName, PATTERNS } from "remme-utils";

import { IRemmeBlockchainInfo } from "./interface";
import {
    BaseQuery,
    IBaseQuery,
    Batch,
    BatchList,
    Block,
    BlockList,
    State,
    StateList,
    StateQuery,
    Transaction,
    TransactionList,
    TransactionData,
    PeerList,
    IStateQuery,
    INetworkStatusResponse,
    INetworkStatus,
    NetworkStatus,
    BlockInfo,
    IAddress,
    ICertVoteResponse,
    ICertVoteMessage,
    ICertVote,
    CertVote,
    CertVoteMessage,
    CertVoteMessagePayload,
    IBaseResponse,
    IBlockInfoResponse,
} from "./models";

/* tslint:disable */
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
/* tslint:enable */
class RemmeBlockchainInfo implements IRemmeBlockchainInfo {

    // index signature
    [key: string]: any;

    private readonly _remmeApi: IRemmeApi;

    private static address = {
        [RemmeNamespace.Swap]: {
            type: "info atomic swap",
            parser: protobufs.AtomicSwapInfo,
        },
        [RemmeNamespace.Account]: {
            type: "account",
            parser: protobufs.Account,
        },
        [RemmeNamespace.NodeAccount]: {
            type: "node account",
            parser: protobufs.NodeAccount,
        },
        [RemmeNamespace.PublicKey]: {
            type: "storage public key",
            parser: protobufs.PubKeyStorage,
        },
    };

    private static correspond = {
        [RemmeFamilyName.Account]: {
            [protobufs.AccountMethod.Method.TRANSFER]: {
                type: "transfer token",
                parser: protobufs.TransferPayload,
            },
            [protobufs.AccountMethod.Method.GENESIS]: {
                type: "genesis",
                parser: protobufs.GenesisPayload,
            },
        },
        [RemmeFamilyName.NodeAccount]: {
            [protobufs.NodeAccountMethod.Method.INITIALIZE_MASTERNODE]: {
                type: "initialize masternode",
                parser: protobufs.NodeAccountInternalTransferPayload,
            },
            [protobufs.NodeAccountMethod.Method.CLOSE_MASTERNODE]: {
                type: "close masternode",
                parser: protobufs.EmptyPayload,
            },
            [protobufs.NodeAccountMethod.Method.SET_BET]: {
                type: "set bet",
                parser: protobufs.SetBetPayload,
            },
            [protobufs.NodeAccountMethod.Method.TRANSFER_FROM_FROZEN_TO_UNFROZEN]: {
                type: "transfer from frozen to unfrozen",
                parser: protobufs.EmptyPayload,
            },
            [protobufs.NodeAccountMethod.Method.TRANSFER_FROM_UNFROZEN_TO_OPERATIONAL]: {
                type: "transfer from unfrozen to operational",
                parser: protobufs.NodeAccountInternalTransferPayload,
            },
        },
        [RemmeFamilyName.Swap]: {
            [protobufs.AtomicSwapMethod.Method.INIT]: {
                type: "atomic-swap-init",
                parser: protobufs.AtomicSwapInitPayload,
            },
            [protobufs.AtomicSwapMethod.Method.APPROVE]: {
                type: "atomic-swap-approve",
                parser: protobufs.AtomicSwapApprovePayload,
            },
            [protobufs.AtomicSwapMethod.Method.EXPIRE]: {
                type: "atomic-swap-expire",
                parser: protobufs.AtomicSwapExpirePayload,
            },
            [protobufs.AtomicSwapMethod.Method.SET_SECRET_LOCK]: {
                type: "atomic-swap-set-secret-lock",
                parser: protobufs.AtomicSwapSetSecretLockPayload,
            },
            [protobufs.AtomicSwapMethod.Method.CLOSE]: {
                type: "atomic-swap-close",
                parser: protobufs.AtomicSwapClosePayload,
            },
        },
        [RemmeFamilyName.PublicKey]: {
            [protobufs.PubKeyMethod.Method.STORE]: {
                type: "store public key",
                parser: protobufs.NewPubKeyPayload,
            },
            [protobufs.PubKeyMethod.Method.REVOKE]: {
                type: "revoke public key",
                parser: protobufs.RevokePubKeyPayload,
            },
            [protobufs.PubKeyMethod.Method.STORE_AND_PAY]: {
                type: "store and pay public key",
                parser: protobufs.NewPubKeyStoreAndPayPayload,
            },
        },
    };

    private _checkId(id?: string): void {
        if (!id || id.search(PATTERNS.HEADER_SIGNATURE) === -1) {
            throw new Error("Given 'id' is not a valid");
        }
    }

    private _checkAddress(address?: string): void {
        if (!address || address.search(PATTERNS.ADDRESS) === -1) {
            throw new Error("Given 'address' is not a valid");
        }
    }

    /**
     * @example
     * Usage without remme main package
     * ```typescript
     * const remmeApi = new RemmeApi();
     * const remmeBlockchainInfo = new RemmeBlockchainInfo(remmeApi);
     * ```
     * @param {IRemmeApi} remmeApi
     */
    public constructor(remmeApi: IRemmeApi) {
        this._remmeApi = remmeApi;
    }

    /* tslint:disable */
    /**
     * Get all blocks from REMChain.
     * You can specify one or more query parameters.
     * @example
     * Without query
     * ```typescript
     * const blocks = await remme.blockchainInfo.getBlocks();
     * console.log(blocks); // BlockList
     * ```
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
     * @param {IBlockQuery} query
     * @returns {Promise<BlockList>}
     */
    /* tslint:enable */
    public async getBlocks(query?: IBaseQuery): Promise<BlockList> {
        if (query) {
            query = new BaseQuery(query);
        }
        return await this._remmeApi.sendRequest<IBaseQuery, BlockList>(RemmeMethods.blocks, query);
    }

    /* tslint:disable */
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
    /* tslint:enable */
    public async getBlockById(id: string): Promise<Block> {
        this._checkId(id);
        return await this._remmeApi.sendRequest<IAddress, Block>(RemmeMethods.fetchBlock, { id });
    }

    /**
     * Get information about block.
     * @example
     * Without parameters.
     * ```typescript
     * const blocksInfo = await remme.blockchainInfo.getBlockInfo();
     * console.log("blockInfo:", blockInfo); // BlockInfo
     * ```
     * Start from specifying block number.
     * ```typescript
     * const blockInfo = await remme.blockchainInfo.getBlockInfo({
     *      start: 2
     * });
     * console.log(blockInfo); // BlockInfo
     *
     * Specify limit of output
     * ```typescript
     * const blockInfo = await remme.blockchainInfo.getBlockInfo({ limit: 2 });
     * console.log(blockInfo); // BlockInfo
     * ```
     * BlockInfo get next page
     * ```typescript
     * const blockInfo = await remme.blockchainInfo.getBlockInfo();
     * console.log(blockInfo.data); // BlockInfoData[]
     * const blockInfoNextPage = await remme.blockchainInfo.getBlockInfo({ next: blockInfo.paging.next });
     * console.log(blockInfoNextPage.data); // BlockInfoData[]
     * ```
     * @param {IBaseQuery} query
     * @returns {Promise<BlockInfo>}
     */
    public async getBlockInfo(query?: IBaseQuery): Promise<BlockInfo> {
        const res = await this._remmeApi
            .sendRequest<IBaseQuery, IBaseResponse<IBlockInfoResponse[]>>(RemmeMethods.blockInfo, query);
        return new BlockInfo(res);
    }

    /* tslint:disable */
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
    /* tslint:enable */
    public async getBatches(query?: IBaseQuery): Promise<BatchList> {
        if (query) {
            query = new BaseQuery(query);
        }
        return await this._remmeApi.sendRequest<IBaseQuery, BatchList>(RemmeMethods.batches, query);
    }

    /* tslint:disable */
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
    /* tslint:enable */
    public async getBatchById(id: string): Promise<Batch> {
        this._checkId(id);
        return await this._remmeApi.sendRequest<IAddress, Batch>(RemmeMethods.fetchBatch, { id });
    }

    /* tslint:disable */
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
    /* tslint:enable */
    public async getBatchStatus(id: string): Promise<string> {
        this._checkId(id);
        return await this._remmeApi.sendRequest<IAddress, string>(RemmeMethods.batchStatus, { id });
    }

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
    public async getState(query?: IStateQuery): Promise<StateList> {
        if (query) {
            query = new StateQuery(query);
        }
        return await this._remmeApi.sendRequest<IStateQuery, StateList>(RemmeMethods.state, query);
    }

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
    public async getStateByAddress(address: string): Promise<State> {
        this._checkAddress(address);
        return await this._remmeApi
            .sendRequest<IAddress, State>(RemmeMethods.fetchState, { address });
    }

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
    public parseStateData(state: State): object {
        if (!state.address) {
            throw new Error("State should have address for parsing");
        }
        if (RemmeBlockchainInfo.address[state.address.slice(0, 6)]) {
            const { parser, type } = RemmeBlockchainInfo.address[state.address.slice(0, 6)];
            return {
                data: parser.decode(base64ToArrayBuffer(state.data)),
                type,
            };
        } else {
            throw new Error(`This address (${state.address}) don't supported for parsing`);
        }
    }

    /* tslint:disable */
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
    /* tslint:enable */
    public async getTransactions(query?: IBaseQuery): Promise<TransactionList> {
        if (query) {
            query = new BaseQuery(query);
        }
        return await this._remmeApi
            .sendRequest<IBaseQuery, TransactionList>(RemmeMethods.transactions, query);
    }

    /* tslint:disable */
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
    /* tslint:enable */
    public async getTransactionById(id: string): Promise<Transaction> {
        this._checkId(id);
        return await this._remmeApi
            .sendRequest<IAddress, Transaction>(RemmeMethods.fetchTransaction, { id });
    }

    /* tslint:disable */
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
    /* tslint:enable */
    public parseTransactionPayload(transaction: TransactionData): object {
        const { family_name } = transaction.header;
        if (family_name in RemmeBlockchainInfo.correspond) {
            const { method, data } = protobufs.TransactionPayload.decode(base64ToArrayBuffer(transaction.payload));
            const { parser, type } = RemmeBlockchainInfo.correspond[family_name][method];
            return {
                payload: parser.decode(data),
                type,
            };
        } else {
            throw new Error(`This family name (${family_name}) don't supported for parsing`);
        }
    }

    /**
     * Get network status for node.
     * @example
     * ```typescript
     * const networkStatus = await remme.blockchainInfo.getNetworkStatus();
     * console.log(networkStatus); // INetworkStatus
     * ```
     * @returns {Promise<INetworkStatus>}
     */
    public async getNetworkStatus(): Promise<INetworkStatus> {
        const apiResult = await this._remmeApi
            .sendRequest<INetworkStatusResponse>(RemmeMethods.networkStatus);
        return new NetworkStatus(apiResult);
    }

    /**
     * Get peers that connected to this node.
     * @example
     * ```typescript
     * const peers = await remme.blockchainInfo.getPeers();
     * console.log(peers); // string[]
     * ```
     * @returns {Promise<string[]>}
     */
    public async getPeers(): Promise<string[]> {
        return (await this._remmeApi.sendRequest<PeerList>(RemmeMethods.peers)).data;
    }

    // TODO: uncomment after refactoring receipts
    // /**
    //  * Get transactions receipts
    //  *
    //  * @param {string[]} ids
    //  * @returns {Promise<ReceiptList>}
    //  */
    // public async getReceipts(ids: string[]): Promise<string[]> {
    //     ids.forEach((id: string) => this._checkId(id));
    //     return (await this._remmeRest.sendRequest<IAddress, ReceiptList>(RemmeMethods.receipts, { ids })).data;
    // }

}

export {
    RemmeBlockchainInfo,
    IRemmeBlockchainInfo,
    Block,
    BlockList,
    Batch,
    BatchList,
    Transaction,
    TransactionList,
    INetworkStatus,
    BlockInfo,
    IBaseQuery,
    State,
    StateList,
    ICertVoteResponse,
    ICertVoteMessage,
    ICertVote,
    CertVote,
    CertVoteMessage,
    CertVoteMessagePayload,
};
