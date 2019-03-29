import { INodeAccountResponse } from "./NodeAccountResponse";
import { NodeAccountState } from "./NodeAccountState";

const DEFAULT_NODE_ACCOUNT_INFO: INodeAccountResponse = {
    node_state: NodeAccountState.New,
    balance: "0",
    reputation: {
        frozen: "0",
        unfrozen: "0",
    },
};

export class NodeAccount {

    public state: NodeAccountState;
    public balance: number;
    public reputation: {
        frozen: number;
        unfrozen: number;
    };

    constructor(
        nodeAccountResponse: INodeAccountResponse = DEFAULT_NODE_ACCOUNT_INFO,
    ) {
        const nodeAccount = {
            ...DEFAULT_NODE_ACCOUNT_INFO,
            ...nodeAccountResponse,
        };

        const { reputation, balance, node_state } = nodeAccount;

        this.state = node_state;
        this.reputation = {
            frozen: parseInt(reputation.frozen, 10),
            unfrozen: parseInt(reputation.unfrozen, 10),
        };
        this.balance = parseInt(balance, 10);
    }
}
