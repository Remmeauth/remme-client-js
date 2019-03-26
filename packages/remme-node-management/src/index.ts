import { IBaseTransactionResponse, IRemmeTransactionService } from "remme-transaction-service";
import { IRemmeAccount } from "remme-account";
import { IRemmeApi, RemmeMethods } from "remme-api";
import {
    NodeAccountInternalTransferPayload,
    NodeAccountMethod,
    TransactionPayload,
    ISetBetPayload,
    SetBetPayload,
} from "remme-protobuf";
import {
    RemmeFamilyName,
    checkAddress,
    NodeAccountAddressRequest,
} from "remme-utils";

import { IRemmeNodeManagement } from "./interface";
import { INodeAccountInfo, NodeAccountInfoDTO } from "./models";

class RemmeNodeManagement implements IRemmeNodeManagement {

    // index signature
    [key: string]: any;

    private readonly _remmeApi: IRemmeApi;
    private readonly _remmeAccount: IRemmeAccount;
    private readonly _remmeTransaction: IRemmeTransactionService;
    private readonly _initialStake = 250000;
    private readonly _familyVersion = "0.1";
    private readonly _masterNodeListAddress = "0".repeat(69) + "2";

    constructor(
        remmeApi: IRemmeApi,
        remmeTransaction: IRemmeTransactionService,
        remmeAccount: IRemmeAccount,
    ) {
        this._remmeApi = remmeApi;
        this._remmeTransaction = remmeTransaction;
        this._remmeAccount = remmeAccount;
    }

    private async _createAndSendTransaction(method: NodeAccountMethod.Method, data?: Uint8Array) {
        const transactionPayload = TransactionPayload.encode({
            method,
            data,
        }).finish();

        const transaction = await this._remmeTransaction.create({
            familyName: this._remmeAccount.familyName,
            familyVersion: this._familyVersion,
            inputs: [this._masterNodeListAddress],
            outputs: [this._masterNodeListAddress],
            payloadBytes: transactionPayload,
        });

        return await this._remmeTransaction.send(transaction);
    }

    public async open(initialStake: number): Promise<IBaseTransactionResponse> {
        if (this._remmeAccount.familyName !== RemmeFamilyName.NodeAccount) {
            throw Error("Should be a node account");
        }
        if (!initialStake) {
            throw new Error("Initial stake was not provided, please set the initial stake amount");
        }
        if (initialStake < this._initialStake) {
            throw Error("Your operational balance should have at least 250 000 REM tokens");
        }
        const openPayload = NodeAccountInternalTransferPayload.encode({
            value: initialStake,
        }).finish();

        return await this._createAndSendTransaction(
            NodeAccountMethod.Method.INITIALIZE_MASTERNODE,
            openPayload,
        );
    }

    public async close(): Promise<IBaseTransactionResponse> {
        if (this._remmeAccount.familyName !== RemmeFamilyName.NodeAccount) {
            throw Error("Should be a node account");
        }

        return await this._createAndSendTransaction(
            NodeAccountMethod.Method.CLOSE_MASTERNODE,
        );
    }

    public async setBet(payload: ISetBetPayload): Promise<IBaseTransactionResponse> {
        if (this._remmeAccount.familyName !== RemmeFamilyName.NodeAccount) {
            throw Error("Should be a node account");
        }

        const betPayload = SetBetPayload.encode(payload).finish();

        return await this._createAndSendTransaction(
            NodeAccountMethod.Method.SET_BET,
            betPayload,
        );
    }

    public async getNodeInfo(
        nodeAccountAddress: string = this._remmeAccount.address,
    ): Promise<NodeAccountInfoDTO> {
        const data: INodeAccountInfo = await this._remmeApi
            .sendRequest<NodeAccountAddressRequest, INodeAccountInfo>(
                RemmeMethods.nodeAccount, new NodeAccountAddressRequest(this._remmeAccount.address),
            );
        return new NodeAccountInfoDTO(data);
    }
}

export {
    RemmeNodeManagement,
    IRemmeNodeManagement,
};
