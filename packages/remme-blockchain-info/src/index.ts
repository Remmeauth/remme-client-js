import {
    RemmeMethods,
    // ValidatorMethods,
    IRemmeRest,
} from "remme-rest";
import * as protobufs from "remme-protobuf";
import { base64ToArrayBuffer } from "remme-utils";

import { IRemmeBlockchainInfo } from "./interface";
import {
    BaseQuery,
    IBaseQuery,
    Batch,
    BatchData,
    BatchList,
    Block,
    BlockData,
    BlockList,
    State,
    StateData,
    StateList,
    StateQuery,
    Transaction,
    TransactionData,
    TransactionList,
    PeerList,
    ReceiptList,
    IStateQuery,
    INetworkStatusResponse,
    INetworkStatus,
    NetworkStatus,
    IBlockInfoResponse,
    IBlockInfo,
    BlockInfo,
    IAddress,
} from "./models";

class RemmeBlockchainInfo implements IRemmeBlockchainInfo {
    // index signature
    [key: string]: any;

    private readonly _remmeRest: IRemmeRest;

    private static address = {
        "78173b": {
            type: "info atomic swap",
            parser: protobufs.AtomicSwapInfo,
        },
        "112007": {
            type: "account",
            parser: protobufs.Account,
        },
        "a23be1": {
            type: "storage public key",
            parser: protobufs.PubKeyStorage,
        },
    };

    private static correspond = {
        account: {
            [protobufs.AccountMethod.Method.TRANSFER]: {
                type: "transfer token",
                parser: protobufs.TransferPayload,
            },
            [protobufs.AccountMethod.Method.GENESIS]: {
                type: "genesis",
                parser: protobufs.GenesisPayload,
            },
        },
        AtomicSwap: {
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
        pub_key: {
            [protobufs.PubKeyMethod.Method.STORE]: {
                type: "store public key",
                parser: protobufs.NewPubKeyPayload,
            },
            [protobufs.PubKeyMethod.Method.REVOKE]: {
                type: "revoke public key",
                parser: protobufs.RevokePubKeyPayload,
            },
        },
    };

    private _checkId(id?: string): void {
        if (!id || id.search(/^[a-f0-9]{128}$/) === -1) {
            throw new Error("Given 'id' is not a valid");
        }
    }

    private _checkAddress(address?: string): void {
        if (!address || address.search(/^[a-f0-9]{70}$/) === -1) {
            throw new Error("Given 'address' is not a valid");
        }
    }

    private _prepareAddress(state: State): State {
        if (RemmeBlockchainInfo.address[state.address.slice(0, 6)]) {
            const { parser: protobuf, type: addressType } = RemmeBlockchainInfo.address[state.address.slice(0, 6)];
            return {
                ...state,
                protobuf,
                addressType,
            };
        }
        return state;
    }

    private _prepareBlock(block: BlockData): BlockData {
        block.batches = block.batches.map((batch) => {
            return this._prepareBatch(batch);
        });
        return block;
    }

    private _prepareBatch(batch: BatchData): BatchData {
        batch.transactions = batch.transactions.map((transaction) => this._prepareTransaction(transaction));
        return batch;
    }

    private _prepareTransaction(transaction: TransactionData): TransactionData {
        const { family_name } = transaction.header;
        if (family_name in RemmeBlockchainInfo.correspond) {
            const data = protobufs.TransactionPayload.decode(base64ToArrayBuffer(transaction.payload));
            const {
                parser: protobuf,
                type: transactionType,
            } = RemmeBlockchainInfo.correspond[family_name][data.method];
            return {
                ...transaction,
                transactionProtobuf: protobufs.TransactionPayload,
                protobuf,
                transactionType,
            };
        }
        return transaction;
    }

    public constructor(remmeRest: IRemmeRest) {
        this._remmeRest = remmeRest;
    }

    public async getBatchById(id: string): Promise<Batch> {
        this._checkId(id);
        const apiResult = await this._remmeRest.sendRequest<IAddress, Batch>(RemmeMethods.fetchBatch, { id });
        apiResult.data = this._prepareBatch(apiResult.data);
        return apiResult;
    }

    public async getBatches(query?: IBaseQuery): Promise<BatchList> {
        if (query) {
            query = new BaseQuery(query);
        }
        const apiResult = await this._remmeRest.sendRequest<BaseQuery, BatchList>(RemmeMethods.batches, query);
        apiResult.data = apiResult.data.map((item) => this._prepareBatch(item));
        return apiResult;
    }

    public async getBlockById(id: string): Promise<Block> {
        this._checkId(id);
        const apiResult = await this._remmeRest.sendRequest<IAddress, Block>(RemmeMethods.fetchBlock, { id });
        apiResult.data = this._prepareBlock(apiResult.data);
        return apiResult;
    }

    public async getBlocks(query?: IBaseQuery): Promise<BlockList> {
        if (query) {
            if (typeof query.start === "number") {
                query.start = `0x${("0000000000000000" + query.start.toString(16)).slice(-16)}`;
            }
            query = new BaseQuery(query);
        }
        const apiResult = await this._remmeRest.sendRequest<BaseQuery, BlockList>(RemmeMethods.blocks, query);
        apiResult.data = apiResult.data.map((block) => this._prepareBlock(block));
        return apiResult;
    }

    public async getPeers(): Promise<PeerList> {
        return await this._remmeRest.sendRequest<PeerList>(RemmeMethods.peers);
    }

    public async getReceipts(ids: string[]): Promise<ReceiptList> {
        ids.map((id) => this._checkId(id));
        return await this._remmeRest.sendRequest<IAddress, ReceiptList>(RemmeMethods.receipts, { ids });
    }

    public async getState(query?: IStateQuery): Promise<StateList> {
        if (query) {
            query = new StateQuery(query);
        }
        const apiResult = await this._remmeRest.sendRequest<StateQuery, StateList>(RemmeMethods.state, query);
        apiResult.data = apiResult.data.map((state) => this._prepareAddress(state));
        return apiResult;
    }

    public async getStateByAddress(address: string): Promise<State> {
        this._checkAddress(address);
        let apiResult = await this._remmeRest
            .sendRequest<IAddress, State>(RemmeMethods.fetchState, { address });
        apiResult = this._prepareAddress({ address, ...apiResult });
        return apiResult;
    }

    public async getTransactionById(id: string): Promise<Transaction> {
        this._checkId(id);
        const apiResult = await this._remmeRest
            .sendRequest<IAddress, Transaction>(RemmeMethods.fetchTransaction, { id });
        apiResult.data = this._prepareTransaction(apiResult.data);
        return apiResult;
    }

    public async getTransactions(query?: IBaseQuery): Promise<TransactionList> {
        if (query) {
            query = new BaseQuery(query);
        }
        const apiResult = await this._remmeRest
            .sendRequest<BaseQuery, TransactionList>(RemmeMethods.transactions, query);
        apiResult.data = apiResult.data.map((item) => {
            return this._prepareTransaction(item);
        });
        return apiResult;
    }

    public async getNetworkStatus(): Promise<INetworkStatus> {
        const apiResult = await this._remmeRest
            .sendRequest<INetworkStatusResponse>(RemmeMethods.networkStatus);
        return new NetworkStatus(apiResult);
    }

    public async getBlockInfo(query?: IBaseQuery): Promise<IBlockInfo[]> {
        const blocks = await this._remmeRest
            .sendRequest<IBaseQuery, IBlockInfoResponse[]>(RemmeMethods.blockInfo, query);
        if (!blocks) {
            throw new Error("Unknown error occurs in the server");
        }
        return blocks.map((item) => new BlockInfo(item));
    }

    public async getBatchStatus(id: string): Promise<string> {
        this._checkId(id);
        return await this._remmeRest.sendRequest<IAddress, string>(RemmeMethods.batchStatus, { id });
    }

    public parseTransactionPayload(transaction: Transaction): object {
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

    public parseStateData(state: State): object {
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
}

export {
    RemmeBlockchainInfo,
    IRemmeBlockchainInfo,
};
