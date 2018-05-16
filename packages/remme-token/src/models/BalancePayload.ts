import {pki} from "node-forge";

export class BalancePayload {
    private pub_key_user: pki.Key;
    public constructor(publicKeyTo: pki.Key) {
        this.pub_key_user = publicKeyTo;
    }
}
