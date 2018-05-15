/// <reference types="node-forge" />
import { pki } from "node-forge";
export declare class CheckPayload {
    certificate: pki.PEM;
    constructor(certificate: pki.Certificate);
}
