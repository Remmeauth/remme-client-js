import { pki } from "remme-utils";

export class StoreResult {
    public batch_id: string;
    public certificate: pki.PEM;
}
