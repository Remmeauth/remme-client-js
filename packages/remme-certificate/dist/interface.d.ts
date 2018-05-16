/// <reference types="node-forge" />
import { pki } from "node-forge";
import { StoreResult } from "./models";
export interface IRemmeCertificate {
    createCertificate(commonName: string, email?: string): Promise<StoreResult>;
    storeCertificate(signingRequest: pki.Certificate): Promise<StoreResult>;
    checkCertificate(certificate: pki.Certificate): Promise<boolean>;
}
