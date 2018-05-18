import { pki } from "remme-utils";
export declare class TransactionPayload {
    private pub_key_to;
    private amount;
    constructor(publicKeyTo: pki.Key, amount: number);
}
