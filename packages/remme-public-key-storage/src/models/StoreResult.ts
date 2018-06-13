import { forge } from "remme-utils";

export class StoreResult {
    public batch_id: string;
    public certificate: forge.pki.PEM;
}
