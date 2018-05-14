/// <reference types="node-forge" />
import { pki } from "node-forge";
export declare class StoreResult {
    batch_id: string;
    certificate: pki.PEM;
}
