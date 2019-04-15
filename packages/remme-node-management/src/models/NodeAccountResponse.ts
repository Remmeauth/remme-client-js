import { NodeAccountState } from "./NodeAccountState";

export interface INodeAccountResponse {
    node_state: NodeAccountState;
    balance: string;
    reputation: {
        frozen: string;
        unfrozen: string;
    };
    min?: boolean;
    last_defrost_timestamp: number;
    shares: IShares[];
    max?: boolean;
    fixed_amount?: string;
}

export interface IShares {
    block_num: number;
    frozen_shares: number;
    reward: number;
    block_timestamp: number;
    defrost_month: number;
}
