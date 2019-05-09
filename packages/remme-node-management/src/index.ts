import { IBaseTransactionResponse, IRemmeTransactionService } from "remme-transaction-service";
import { IRemmeAccount } from "remme-account";
import { IRemmeApi, RemmeMethods } from "remme-api";
import {
    EmptyPayload,
    ISetBetPayload,
    NodeAccountInternalTransferPayload,
    NodeAccountMethod,
    SetBetPayload,
    Setting,
    TransactionPayload,
} from "remme-protobuf";
import {
    base64ToArrayBuffer,
    generateSettingsAddress,
    RemmeFamilyName,
    ConsensusAddress,
} from "remme-utils";

import { IRemmeNodeManagement } from "./interface";
import {
    BetType,
    INodeAccountResponse,
    INodeConfigResponse,
    INodeInfoResponse,
    IStateResponse,
    NodeAccount,
    NodeAccountAddressRequest,
    NodeAccountState,
    NodeConfig,
    NodeInfo,
    StateRequest,
} from "./models";

/**
 * Class to operate with node and master node;
 * Class provides methods for node management such as openNode, openMasterNode, closeMasterNode, setBet,
 * getInitialStake, getNodeAccount, getNodeInfo, getNodeConfig.
 * Methods works only with AccountType.Node.
 * * @example
 * ```typescript
 * const remme = new Remme.Client({
 *     privateKeyHex: "PRIVATE_KEY_HEX",
 *     accountType: AccountType.Node
 * });
 * const nodeManagementTransactionResult = await remme.nodeManagement.openNode();
 *
 * const nodeManagementTransactionCallback = async (err, response) => {
 *   if (err) {
 *     console.log(err);
 *   }
 *   console.log("nodeManagement", response);
 * };
 *
 * nodeManagementTransactionResult.connectToWebSocket(nodeManagementTransactionCallBack);
 * ```
 */
class RemmeNodeManagement implements IRemmeNodeManagement {

    // index signature
    [key: string]: any;

    private readonly _remmeApi: IRemmeApi;
    private readonly _remmeAccount: IRemmeAccount;
    private readonly _remmeTransaction: IRemmeTransactionService;
    private readonly _stakeSettingsAddress = generateSettingsAddress("remme.settings.minimum_stake");
    private readonly _genesisOwnersAddress = generateSettingsAddress("remme.settings.genesis_owners");
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

    private async _createAndSendTransaction(
            method,
            data: Uint8Array,
            inputsOutputs: { inputs: string[], outputs: string[] } | string[],
        ) {
        const transactionPayload = TransactionPayload.encode({
            method,
            data,
        }).finish();

        let inputs: string[];
        let outputs: string[];

        if (Array.isArray(inputsOutputs)) {
            inputs = outputs = inputsOutputs;
        } else {
            const { inputs: i, outputs: o } = inputsOutputs;
            inputs = i;
            outputs = o;
        }

        const transaction = await this._remmeTransaction.create({
            familyName: this._familyName,
            familyVersion: this._familyVersion,
            inputs,
            outputs,
            payloadBytes: transactionPayload,
        });

        return await this._remmeTransaction.send(transaction);
    }

    /**
     * Open node account
     * @example
     * ```typescript
     * const openNodeTransactionResult = remme.nodeManagement.openNode();
     *
     * const openNodeTransactionCallback = async (err, response) => {
     *   if (err) {
     *     console.log(err);
     *   }
     *   if (res.status === "COMMITTED") {
     *       const nodeAccount = await remme.nodeManagement.getNodeAccount();
     *       console.log("nodeAccount: ", nodeAccount)
     *   }
     * };
     *
     * openNodeTransactionResult.connectToWebSocket(openNodeTransactionCallback);
     * ```
     * @returns {Promise<IBaseTransactionResponse>}
     */
    public async openNode(): Promise<IBaseTransactionResponse> {
        const openNodePayloadData = EmptyPayload.create();
        const openNodePayload = EmptyPayload.encode(openNodePayloadData).finish();

        const inputsOutputs = [];

        return await this._createAndSendTransaction(
            NodeAccountMethod.Method.INITIALIZE_NODE,
            openNodePayload,
            inputsOutputs,
        );
    }

    /**
     * Open master node;
     * @example
     * ```typescript
     * const openMasterNodeTransactionResult = remme.nodeManagement.openMasterNode(250000);
     *
     * const openMasterNodeTransactionCallback = async (err, response) => {
     *   if (err) {
     *     console.log(err);
     *   }
     *   if (res.status === "COMMITTED") {
     *       const nodeAccount = await remme.nodeManagement.getNodeAccount();
     *       console.log("nodeAccount: ", nodeAccount)
     *   }
     * };
     *
     * openMasterNodeTransactionResult.connectToWebSocket(openMAsterNodeTransactionCallback);
     * ```
     * @param {number} amount;
     * @returns {Promise<IBaseTransactionResponse>};
     */
    public async openMasterNode(amount: number): Promise<IBaseTransactionResponse> {
        if (this._remmeAccount.familyName !== this._familyName) {
            throw Error(
                `This operation is allowed under NodeAccount.
                Your account type is ${this._remmeAccount.familyName}
                and address is: ${this._remmeAccount.address}`,
            );
        }
        await this._checkNode();
        await this._checkAmount(amount);

        const openMasterNodePayload = NodeAccountInternalTransferPayload.encode({
            value: amount,
        }).finish();

        const inputsOutputs = [
            this._masterNodeListAddress,
            this._stakeSettingsAddress,
            ConsensusAddress,
        ];

        return await this._createAndSendTransaction(
            NodeAccountMethod.Method.INITIALIZE_MASTERNODE,
            openMasterNodePayload,
            inputsOutputs,
        );
    }

    /**
     * Close master node
     * @example
     * ```typescript
     * const closeMasterNodeTransactionResult = remme.nodeManagement.closeMasterNode();
     *
     * const closeMasterNodeTransactionCallback = async (err, response) => {
     *   if (err) {
     *     console.log(err);
     *   }
     *   if (res.status === "COMMITTED") {
     *       const nodeAccount = await remme.nodeManagement.getNodeAccount();
     *       console.log("nodeAccount: ", nodeAccount)
     *   }
     * };
     *
     * closeMasterNodeTransactionResult.connectToWebSocket(closeMasterNodeTransactionCallback);
     * ```
     *
     * @returns {Promise<IBaseTransactionResponse>};
     */
    public async closeMasterNode(): Promise<IBaseTransactionResponse> {
        if (this._remmeAccount.familyName !== RemmeFamilyName.NodeAccount) {
            throw Error(
                `This operation is allowed under NodeAccount.
                Your account type is ${this._remmeAccount.familyName}
                and address is: ${this._remmeAccount.address}`,
            );
        }

        const closePayloadData = EmptyPayload.create();
        const closePayload = EmptyPayload.encode(closePayloadData).finish();

        const inputs = [
            this._masterNodeListAddress,
            this._genesisOwnersAddress,
            ConsensusAddress,
        ];

        const outputs = [
            this._masterNodeListAddress,
            ConsensusAddress,
        ];

        return await this._createAndSendTransaction(
            NodeAccountMethod.Method.CLOSE_MASTERNODE,
            closePayload,
            {  inputs, outputs },
        );
    }
    /**
     * Set bet for master node account;
     * Bet type can be BetType.MIN, BetType.Max or fixed amount;
     * @example
     * ```typescript
     * const setBetTransactionResult = remme.nodeManagement.setBet(BetType.MAX);
     *
     * const setBetTransactionCallback = async (err, response) => {
     *   if (err) {
     *     console.log(err);
     *   }
     *   if (res.status === "COMMITTED") {
     *       const nodeAccount = await remme.nodeManagement.getNodeAccount();
     *       console.log("nodeAccount: ", nodeAccount)
     *   }
     * };
     *
     * setBetTransactionResult.connectToWebSocket(setBetTransactionCallback);
     * ```
     * @param {BetType | number} betType;
     * @return {Promise<IBaseTransactionResponse>};
     */
    public async setBet(betType: BetType | number): Promise<IBaseTransactionResponse> {
        if (this._remmeAccount.familyName !== RemmeFamilyName.NodeAccount) {
            throw Error(
                `This operation is allowed under NodeAccount.
                Your account type is ${this._remmeAccount.familyName}
                and address is: ${this._remmeAccount.address}`,
            );
        }

        const bet: ISetBetPayload = {};

        if (typeof betType === "number") {
            bet.fixedAmount = betType;
        } else if (betType === BetType.MAX || betType === BetType.MIN) {
            bet[betType.toLowerCase()] = true;
        } else {
            throw new Error("Unknown betting behaviour.");
        }

        const betPayload = SetBetPayload.encode(bet).finish();

        const inputsOutputs = [ConsensusAddress];

        return await this._createAndSendTransaction(
            NodeAccountMethod.Method.SET_BET,
            betPayload,
            inputsOutputs,
        );
    }

    /**
     * Method that returns current initial stake for opening master node;
     * @example
     * ```typescript
     * const initialStake = await remme.nodeManagement.getInitialStake();
     * console.log("initialStake: ", initialStake)
     * const openMasterNodeTransactionResult = remme.nodeManagement.openMasterNode(initialStake);
     *
     * const openMasterNodeTransactionCallback = async (err, response) => {
     *   if (err) {
     *     console.log(err);
     *   }
     *   if (res.status === "COMMITTED") {
     *       const nodeAccount = await remme.nodeManagement.getNodeAccount();
     *       console.log("nodeAccount: ", nodeAccount)
     *   }
     * };
     *
     * openMasterNodeTransactionResult.connectToWebSocket(openMAsterNodeTransactionCallback);
     * ```
     * @return {number};
     */
    public async getInitialStake(): Promise<number> {
        const data: IStateResponse = await this._remmeApi.sendRequest<StateRequest, IStateResponse>(
            RemmeMethods.fetchState,
            new StateRequest(this._stakeSettingsAddress),
        );
        const { value } = Setting.decode(base64ToArrayBuffer(data.data)).entries[0];
        return parseInt(value, 10);
    }

    /**
     * Method to get node account settings;
     * @example
     * ```typescript
     * const { bet, balance, reputation, shares, lastDefrostTimestamp } = await remme.nodeManagement.getNodeAccount();
     *
     * console.log("betType: ", bet.type);
     * console.log("nodeBalance: ", balance);
     * console.log("reputation: ", reputation);
     * console.log("shares: ", shares);
     * console.log("lastDefrostTimestamp: ", lastDefrostTimestamp);
     * ```
     * @param {string} nodeAccountAddress;
     * @return {Promise<NodeAccount>};
     */
    public async getNodeAccount(
        nodeAccountAddress: string = this._remmeAccount.address,
    ): Promise<NodeAccount> {
        const data: INodeAccountResponse = await this._remmeApi
            .sendRequest<NodeAccountAddressRequest, INodeAccountResponse>(
                RemmeMethods.nodeAccount, new NodeAccountAddressRequest(nodeAccountAddress),
            );
        return new NodeAccount(data);
    }

    /**
     * Method to get node info;
     * @example
     * ```typescript
     * const { isSynced, peerCount } = await remme.nodeManagement.getNodeInfo();
     *
     * console.log("isSynced: ", isSynced);
     * console.log("peerCount: ", peerCount);
     * ```
     * @return {Promise<NodeInfo>};
     */
    public async getNodeInfo(): Promise<NodeInfo> {
        const apiResult = await this._remmeApi
            .sendRequest<INodeInfoResponse>(RemmeMethods.networkStatus);
        return new NodeInfo(apiResult);
    }

    /**
     * Method to get current node config;
     * @example
     * ```typescript
     * const { nodePublicKey } = await remme.nodeManagement.getNodeConfig();
     *
     * console.log("nodePublicKey: ", nodePublicKey);
     * ```
     * @return {Promise<NodeConfig>};
     */
    public async getNodeConfig(): Promise<NodeConfig> {
        const apiResult = await this._remmeApi
            .sendRequest<INodeConfigResponse>(RemmeMethods.nodeConfig);
        return new NodeConfig(apiResult);
    }
}

export {
    NodeAccountAddressRequest,
    NodeAccount,
    NodeAccountState,
    NodeInfo,
    NodeConfig,
    RemmeNodeManagement,
    IRemmeNodeManagement,
    BetType,
};
