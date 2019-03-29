import { IBaseTransactionResponse, IRemmeTransactionService } from "remme-transaction-service";
import { IRemmeAccount } from "remme-account";
import { IRemmeApi, RemmeMethods } from "remme-api";
import {
    CloseMasternodePayload,
    ISetBetPayload,
    NodeAccountInternalTransferPayload,
    NodeAccountMethod,
    SetBetPayload,
    Setting,
    TransactionPayload,
} from "remme-protobuf";
import { generateSettingsAddress, RemmeFamilyName, base64ToArrayBuffer } from "remme-utils";

import { IRemmeNodeManagement } from "./interface";
import {
    INodeAccountResponse,
    INodeInfoResponse,
    NodeAccountAddressRequest,
    NodeAccount,
    NodeAccountState,
    NodeInfo,
    INodeConfigResponse,
    IStateResponse,
    StateRequest,
    NodeConfig,
} from "./models";

class RemmeNodeManagement implements IRemmeNodeManagement {

    // index signature
    [key: string]: any;

    private readonly _remmeApi: IRemmeApi;
    private readonly _remmeAccount: IRemmeAccount;
    private readonly _remmeTransaction: IRemmeTransactionService;
    private readonly _stakeSettingsAddress = generateSettingsAddress("remme.settings.minimum_stake");
    private readonly _masterNodeListAddress = "0".repeat(69) + "2";
    private readonly _familyName = RemmeFamilyName.NodeAccount;
    private readonly _familyVersion = "0.1";

    constructor(
        remmeApi: IRemmeApi,
        remmeTransaction: IRemmeTransactionService,
        remmeAccount: IRemmeAccount,
    ) {
        this._remmeApi = remmeApi;
        this._remmeTransaction = remmeTransaction;
        this._remmeAccount = remmeAccount;
    }

    private async _checkNode() {
        const { state } = await this.getNodeAccount();
        if (state !== NodeAccountState.New) {
            throw new Error(`Master Node is already ${state}`);
        }
    }

    private async _checkAmount(amount: number) {
        if (!amount) {
            throw new Error("Initial stake was not provided, please set the initial stake amount");
        }

        const initialStake = await this.getInitialStake();
        if (amount < initialStake) {
            throw Error(`Value for initialize Master Node is lower than ${initialStake}`);
        }
    }

    private async _createAndSendTransaction(method, data: Uint8Array, inputsOutputs: string[]) {
        const transactionPayload = TransactionPayload.encode({
            method,
            data,
        }).finish();

        const transaction = await this._remmeTransaction.create({
            familyName: this._familyName,
            familyVersion: this._familyVersion,
            inputs: inputsOutputs,
            outputs: inputsOutputs,
            payloadBytes: transactionPayload,
        });

        return await this._remmeTransaction.send(transaction);
    }

    public async open(amount: number): Promise<IBaseTransactionResponse> {
        if (this._remmeAccount.familyName !== this._familyName) {
            throw Error(
                `This operation is allowed under NodeAccount.
                Your account type is ${this._remmeAccount.familyName}
                and address is: ${this._remmeAccount.address}`,
            );
        }
        await this._checkNode();
        await this._checkAmount(amount);

        const openPayload = NodeAccountInternalTransferPayload.encode({
            value: amount,
        }).finish();

        const inputsOutputs = [
            this._masterNodeListAddress,
            this._stakeSettingsAddress,
        ];

        return await this._createAndSendTransaction(
            NodeAccountMethod.Method.INITIALIZE_MASTERNODE,
            openPayload,
            inputsOutputs,
        );
    }

    public async close(): Promise<IBaseTransactionResponse> {
        if (this._remmeAccount.familyName !== RemmeFamilyName.NodeAccount) {
            throw Error(
                `This operation is allowed under NodeAccount.
                Your account type is ${this._remmeAccount.familyName}
                and address is: ${this._remmeAccount.address}`,
            );
        }

        const closePayloadData = CloseMasternodePayload.create();
        const closePayload = CloseMasternodePayload.encode(closePayloadData).finish();

        const inputsOutputs = [
            this._masterNodeListAddress,
        ];

        return await this._createAndSendTransaction(
            NodeAccountMethod.Method.CLOSE_MASTERNODE,
            closePayload,
            inputsOutputs,
        );
    }

    public async setBet(payload: ISetBetPayload): Promise<IBaseTransactionResponse> {
        if (this._remmeAccount.familyName !== RemmeFamilyName.NodeAccount) {
            throw Error(
                `This operation is allowed under NodeAccount.
                Your account type is ${this._remmeAccount.familyName}
                and address is: ${this._remmeAccount.address}`,
            );
        }
        const betPayload = SetBetPayload.encode(payload).finish();

        const inputsOutputs = [];

        return await this._createAndSendTransaction(
            NodeAccountMethod.Method.SET_BET,
            betPayload,
            inputsOutputs,
        );
    }

    public async getInitialStake(): Promise<number> {
        const data: IStateResponse = await this._remmeApi.sendRequest<StateRequest, IStateResponse>(
            RemmeMethods.fetchState,
            new StateRequest(this._stakeSettingsAddress),
        );
        const { value } = Setting.decode(base64ToArrayBuffer(data.data)).entries[0];
        return parseInt(value, 10);
    }

    public async getNodeAccount(
        nodeAccountAddress: string = this._remmeAccount.address,
    ): Promise<NodeAccount> {
        const data: INodeAccountResponse = await this._remmeApi
            .sendRequest<NodeAccountAddressRequest, INodeAccountResponse>(
                RemmeMethods.nodeAccount, new NodeAccountAddressRequest(nodeAccountAddress),
            );
        return new NodeAccount(data);
    }

    public async getNodeInfo(): Promise<NodeInfo> {
        const apiResult = await this._remmeApi
            .sendRequest<INodeInfoResponse>(RemmeMethods.networkStatus);
        return new NodeInfo(apiResult);
    }

    public async getNodeConfig(): Promise<NodeConfig> {
        const apiResult = await this._remmeApi
            .sendRequest<INodeConfigResponse>(RemmeMethods.nodeConfig);
        return new NodeConfig(apiResult);
    }
}

export {
    NodeAccountAddressRequest,
    NodeAccount,
    NodeInfo,
    NodeConfig,
    RemmeNodeManagement,
    IRemmeNodeManagement,
};
