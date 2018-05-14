import { pki } from "node-forge";

export class StoreResult {
    public batch_id: string;
    public certificate: pki.PEM;
}
