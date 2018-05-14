import { pki } from "node-forge";

export interface IRemmeCertificate {
    createCertificate(commonName: string, email?: string): Promise<pki.Certificate>;

    storeCertificate(signingRequest: pki.Certificate): Promise<pki.Certificate>;

    checkCertificate(certificate: pki.Certificate): Promise<boolean>;
}
