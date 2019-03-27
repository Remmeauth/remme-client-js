import { IBaseTransactionResponse } from "remme-transaction-service";
import { ISetBetPayload } from "remme-protobuf";
import { NodeAccountDTO, NodeInfoDTO } from "./models";
import { NodeConfigDTO } from "./models/NodeConfigDTO";

export interface IRemmeNodeManagement {
    open(initialStake: number): Promise<IBaseTransactionResponse>;
    close(): Promise<IBaseTransactionResponse>;
    setBet(payload: ISetBetPayload): Promise<IBaseTransactionResponse>;
    getInitialStake(): Promise<number>;
    getNodeInfo(): Promise<NodeInfoDTO>;
    getNodeAccount(nodeAccountAddress: string): Promise<NodeAccountDTO>;
    getNodeConfig(): Promise<NodeConfigDTO>;
}
