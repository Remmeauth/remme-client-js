/// <reference types="node-forge" />
import { pki } from "node-forge";
export declare class StorePayload {
    certificate: pki.PEM;
    constructor(certificate: pki.Certificate);
}
