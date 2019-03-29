import { IBaseTransactionResponse } from "remme-transaction-service";
import { ISetBetPayload } from "remme-protobuf";
import { NodeAccount, NodeInfo, NodeConfig } from "./models";

export interface IRemmeNodeManagement {
    open(initialStake: number): Promise<IBaseTransactionResponse>;
    close(): Promise<IBaseTransactionResponse>;
    setBet(payload: ISetBetPayload): Promise<IBaseTransactionResponse>;
    getInitialStake(): Promise<number>;
    getNodeInfo(): Promise<NodeInfo>;
    getNodeAccount(nodeAccountAddress: string): Promise<NodeAccount>;
    getNodeConfig(): Promise<NodeConfig>;
}
