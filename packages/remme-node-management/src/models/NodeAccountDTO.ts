import { INodeAccountResponse } from "./NodeAccountResponse";
import { NodeAccountState } from "./NodeAccountState";

export class NodeAccountDTO {

    public state: NodeAccountState;
    public balance: number;
    public reputation: {
        frozen: number;
        unfrozen: number;
    };

    private _reputationDefault = {
        frozen: 0,
        unfrozen: 0,
    };

    constructor({ node_state, balance, reputation }: INodeAccountResponse) {
        this.state = node_state;
        this.reputation = reputation
            ? {
                frozen: parseInt(reputation.frozen, 10),
                unfrozen: parseInt(reputation.unfrozen, 10),
              }
            : this._reputationDefault;
        this.balance = parseInt(balance, 10);
    }
}
