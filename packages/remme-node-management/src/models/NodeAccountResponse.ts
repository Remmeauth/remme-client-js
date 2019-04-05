import { NodeAccountState } from "./NodeAccountState";

export interface INodeAccountResponse {
    node_state: NodeAccountState;
    balance: string;
    reputation: {
        frozen: string;
        unfrozen: string;
    };
    min?: boolean;
    max?: boolean;
    fixed_amount?: string;
}
