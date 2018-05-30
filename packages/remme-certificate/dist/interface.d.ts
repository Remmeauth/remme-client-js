import { forge, BaseTransactionResponse } from "remme-utils";
import { CertificateTransactionResponse, CertificateCreateDto } from "./models";
export interface IRemmeCertificate {
    createAndStore(certificateDataToCreate: CertificateCreateDto): Promise<CertificateTransactionResponse>;
    store(signingRequest: forge.pki.Certificate): Promise<Error>;
    signAndStore(signingRequest: forge.pki.Certificate): Promise<CertificateTransactionResponse>;
    check(certificate: forge.pki.Certificate): Promise<boolean>;
    revoke(certificate: forge.pki.Certificate): Promise<BaseTransactionResponse>;
    getUserCertificates(publicKey: string): Promise<string[]>;
}
