import { forge } from "remme-utils";

export class BalancePayload {
    private pub_key_user: forge.pki.PEM;
    public constructor(publicKeyTo: forge.pki.Key) {
        this.pub_key_user = forge.pki.publicKeyToPem(publicKeyTo);
    }
}
