import { IBaseTransactionResponse } from "remme-transaction-service";
import { NodeAccount, NodeInfo, NodeConfig, BetType } from "./models";

export interface IRemmeNodeManagement {

    openNode(): Promise<IBaseTransactionResponse>;
    openMasterNode(initialStake: number): Promise<IBaseTransactionResponse>;
    closeMasterNode(): Promise<IBaseTransactionResponse>;
    setBet(betType: BetType | number): Promise<IBaseTransactionResponse>;
    getInitialStake(): Promise<number>;
    getNodeInfo(): Promise<NodeInfo>;
    getNodeAccount(nodeAccountAddress: string): Promise<NodeAccount>;
    getNodeConfig(): Promise<NodeConfig>;

}
