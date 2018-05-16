import { pki } from "node-forge";
export declare class BalancePayload {
    private pub_key_user;
    constructor(publicKeyTo: pki.Key);
}
