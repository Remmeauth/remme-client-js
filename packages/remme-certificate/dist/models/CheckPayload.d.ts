/// <reference types="node-forge" />
import { pki } from "node-forge";
export declare class CheckPayload {
    certificate: string;
    constructor(certificate: pki.Certificate);
}
