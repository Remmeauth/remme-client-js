import { ValidatorMethods, IRemmeRest } from "remme-rest";
import * as protobufs from "remme-protobuf";
import { base64ToArrayBuffer } from "remme-utils";

import { IRemmeBlockchainInfo } from "./interface";
import {
    BaseQuery,
    Batch,
    BatchData,
    BatchList,
    Block,
    BlockData,
    BlockList,
    State,
    StateList,
    StateQuery,
    Transaction,
    TransactionData,
    TransactionList,
    PeerList,
    ReceiptList,
} from "./models";

class RemmeBlockchainInfo implements IRemmeBlockchainInfo {
    private readonly _remmeRest: IRemmeRest;
    private static correspond = {
        account: {
            [protobufs.AccountMethod.Method.TRANSFER]: protobufs.TransferPayload,
            [protobufs.AccountMethod.Method.GENESIS]: protobufs.GenesisPayload,
        },
        AtomicSwap: {
            [protobufs.AtomicSwapMethod.Method.INIT]: protobufs.AtomicSwapInitPayload,
            [protobufs.AtomicSwapMethod.Method.APPROVE]: protobufs.AtomicSwapApprovePayload,
            [protobufs.AtomicSwapMethod.Method.EXPIRE]: protobufs.AtomicSwapExpirePayload,
            [protobufs.AtomicSwapMethod.Method.SET_SECRET_LOCK]: protobufs.AtomicSwapSetSecretLockPayload,
            [protobufs.AtomicSwapMethod.Method.CLOSE]: protobufs.AtomicSwapClosePayload,
        },
        pub_key: {
            [protobufs.PubKeyMethod.Method.STORE]: protobufs.NewPubKeyPayload,
            [protobufs.PubKeyMethod.Method.REVOKE]: protobufs.RevokePubKeyPayload,
        },
    };

    public constructor(remmeRest: IRemmeRest) {
        this._remmeRest = remmeRest;
    }

    public async getBatchById(id: string): Promise<Batch> {
        this._checkId(id);
        const apiResult = await this._remmeRest.getRequest<Batch>(ValidatorMethods.batches, id);
        apiResult.data = this._prepareBatch(apiResult.data);
        return apiResult;
    }

    public async getBatches(query?: BaseQuery): Promise<BatchList> {
        if (query) {
            query = this._checkQuery(query);
        }
        const apiResult = await this._remmeRest.getRequest<BatchList>(ValidatorMethods.batches, "", query);
        apiResult.data = apiResult.data.map((item) => {
            this._prepareBatch(item);
        });
        return apiResult;
    }

    public async getBlockById(id: string): Promise<Block> {
        this._checkId(id);
        const apiResult = await this._remmeRest.getRequest<Block>(ValidatorMethods.blocks, id);
        apiResult.data = this._prepareBlock(apiResult.data);
        return apiResult;
    }

    public async getBlocks(query?: BaseQuery): Promise<BlockList> {
        if (query) {
            query = this._checkQuery(query);
        }
        const apiResult = await this._remmeRest.getRequest<BlockList>(ValidatorMethods.blocks, "", query);
        apiResult.data = apiResult.data.map((block) => {
            return this._prepareBlock(block);
        });
        return apiResult;
    }

    public async getPeers(): Promise<PeerList> {
        return await this._remmeRest.getRequest<PeerList>(ValidatorMethods.peers);
    }

    public async getReceipts(id: string): Promise<ReceiptList> {
        this._checkId(id);
        return await this._remmeRest.getRequest<ReceiptList>(ValidatorMethods.receipts, "", { id });
    }

    public async getState(query?: StateQuery): Promise<StateList> {
        if (query) {
            query = this._checkQuery(query);
        }
        return await this._remmeRest.getRequest<StateList>(ValidatorMethods.state, "", query);
    }

    public async getStateByAddress(address: string): Promise<State> {
        this._checkAddress(address);
        return await this._remmeRest.getRequest<State>(ValidatorMethods.state, address);
    }

    public async getTransactionById(id: string): Promise<Transaction> {
        this._checkId(id);
        const apiResult = await this._remmeRest.getRequest<Transaction>(ValidatorMethods.transactions, id);
        apiResult.data = this._prepareTransaction(apiResult.data);
        return apiResult;
    }

    public async getTransactions(query?: BaseQuery): Promise<TransactionList> {
        if (query) {
            query = this._checkQuery(query);
        }
        const apiResult = await this._remmeRest.getRequest<TransactionList>(ValidatorMethods.transactions, "", query);
        apiResult.data = apiResult.data.map((item) => {
            return this._prepareTransaction(item);
        });
        return apiResult;
    }

    private _checkId(id?: string): void {
        if (!id || id.search(/[a-f0-9]{128}/) === -1) {
            throw new Error("Given 'id' is not a valid");
        }
    }

    private _checkAddress(address?: string): void {
        if (!address || address.search(/[a-f0-9]{70}/) === -1) {
            throw new Error("Given 'address' is not a valid");
        }
    }

    private _checkQuery(query: StateQuery): StateQuery {
        return (Object as any).entries(query).reduce((prev, [key, value]) => {
            let error: string;
            switch (key) {
                case "head":
                case "start":
                    if (value.search(/[a-f0-9]{128}/) === -1) {
                        error = `Parameter '${key}' need to a valid`;
                    } else {
                        return {
                            ...prev,
                            [key]: value,
                        };
                    }
                    break;
                case "limit":
                    if (typeof value !== "number") {
                        error = `Parameter '${key}' need to be a number`;
                    } else {
                        return {
                            ...prev,
                            [key]: value,
                        };
                    }
                    break;
                case "address":
                    if (value.search(/[a-f0-9]{70}/) === -1) {
                        error = `Given '${key}' is not a valid`;
                    } else {
                        return {
                            ...prev,
                            [key]: value,
                        };
                    }
                    break;
                // case "reverse":
                //     if (typeof value !== "boolean") {
                //         error = `Parameter '${key}' need to be a boolean`;
                //     }
                //     break;
                default: return prev;
            }
            if (error) {
                throw new Error(error);
            }
        }, {});
    }

    // private _prepareAddress(): void {
    //
    // }

    private _prepareBlock(block: BlockData): BlockData {
        block.batches = block.batches.map((batch) => {
            return this._prepareBatch(batch);
        });
        return block;
    }

    private _prepareBatch(batch: BatchData): BatchData {
        batch.transactions = batch.transactions.map((transaction) => {
            return this._prepareTransaction(transaction);
        };
        return batch;
    }

    private _prepareTransaction(transaction: TransactionData): TransactionData {
        const { family_name } = transaction.header;
        if (family_name in RemmeBlockchainInfo.correspond) {
            const data = protobufs.TransactionPayload.decode(base64ToArrayBuffer(transaction.payload));
            return {
                ...transaction,
                transactionProtobuf: protobufs.TransactionPayload,
                protobuf: RemmeBlockchainInfo.correspond[family_name][data.method],
            };
        }
        return transaction;
    }
}

export {
    RemmeBlockchainInfo,
    IRemmeBlockchainInfo,
};
