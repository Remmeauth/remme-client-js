import { INodeAccountResponse } from "./NodeAccountResponse";
import { NodeAccountState } from "./NodeAccountState";

export class NodeAccountDTO {

    public state: NodeAccountState;
    public balance: number;
    public reputation: {
        frozen: number;
        unfrozen: number;
    };

    constructor({ node_state, balance, reputation }: INodeAccountResponse) {
        this.state = node_state;
        this.reputation = {
            frozen: parseInt(reputation.frozen, 10),
            unfrozen: parseInt(reputation.unfrozen, 10),
        };
        this.balance = parseInt(balance, 10);
    }
}
