import { INodeAccountResponse } from "./NodeAccountResponse";
import { NodeAccountState } from "./NodeAccountState";
import {BetType} from "./BetType";

const DEFAULT_NODE_ACCOUNT_INFO: INodeAccountResponse = {
    node_state: NodeAccountState.New,
    balance: "0.0000",
    reputation: {
        frozen: "0.0000",
        unfrozen: "0.0000",
    },
    min: true,
};
export class NodeAccount {

    public state: NodeAccountState;
    public balance: string;
    public reputation: {
        frozen: string;
        unfrozen: string;
    };
    public bet: {
        type: string;
        value?: string;
    };

    private _getBetValue(res: INodeAccountResponse) {
        switch (true) {
            case res[BetType.MIN.toLowerCase()]: {
                return {
                    type: BetType.MIN,
                };
            }
            case res[BetType.MAX.toLowerCase()]: {
                return {
                    type: BetType.MAX,
                };
            }
            case !!res[BetType.FIXED_AMOUNT.toLowerCase()]: {
                return {
                    type: BetType.FIXED_AMOUNT,
                    value: res[BetType.FIXED_AMOUNT.toLowerCase()],
                };
            }
            default: {
                throw new Error("No bet set");
            }
        }
    }

    constructor(
        nodeAccountResponse: INodeAccountResponse = DEFAULT_NODE_ACCOUNT_INFO,
    ) {
        const nodeAccount = {
            ...DEFAULT_NODE_ACCOUNT_INFO,
            ...nodeAccountResponse,
        };

        let { reputation } = nodeAccount;

        reputation = {
            ...DEFAULT_NODE_ACCOUNT_INFO.reputation,
            ...reputation,
        };

        const { node_state, balance } = nodeAccount;

        this.state = node_state;
        this.reputation = {
            frozen: reputation.frozen,
            unfrozen: reputation.unfrozen,
        };
        this.balance = balance;
        this.bet = this._getBetValue(nodeAccountResponse);
    }
}
