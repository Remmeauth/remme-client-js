import { forge } from "remme-utils";
export declare class TransactionPayload {
    private pub_key_to;
    private amount;
    constructor(publicKeyTo: forge.pki.Key, amount: number);
}
