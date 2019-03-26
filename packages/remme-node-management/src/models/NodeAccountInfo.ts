import { NodeAccountState } from "./NodeAccountState";

export interface INodeAccountInfo {
    node_state: NodeAccountState;
    balance: string;
    reputation: {
        frozen: string;
        unfrozen: string;
    };
}
