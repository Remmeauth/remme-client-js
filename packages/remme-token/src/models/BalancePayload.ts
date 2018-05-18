import {pki} from "remme-utils";

export class BalancePayload {
    private pub_key_user: pki.PEM;
    public constructor(publicKeyTo: pki.Key) {
        this.pub_key_user = pki.publicKeyToPem(publicKeyTo);
    }
}
