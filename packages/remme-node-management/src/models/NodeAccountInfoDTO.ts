import { INodeAccountInfo } from "./NodeAccountInfo";
import { NodeAccountState } from "./NodeAccountState";

export class NodeAccountInfoDTO {

    public nodeState: NodeAccountState;
    public balance: number;
    public reputation: {
        frozen: number;
        unfrozen: number;
    };

    constructor(data: INodeAccountInfo) {
        this.nodeState = data.node_state;
        this.reputation = {
            frozen: parseInt(data.reputation.frozen, 10),
            unfrozen: parseInt(data.reputation.unfrozen, 10),
        };
        this.balance = parseInt(data.balance, 10);
    }
}
