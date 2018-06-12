import { forge, BaseTransactionResponse } from "remme-utils";
import { CertificateCreateDto } from "./models";
export interface IRemmeCertificate {
    createAndStore(certificateDataToCreate: CertificateCreateDto): Promise<BaseTransactionResponse>;
    store(signingRequest: forge.pki.Certificate): Promise<BaseTransactionResponse>;
    check(certificate: forge.pki.Certificate): Promise<boolean>;
    revoke(certificate: forge.pki.Certificate): Promise<BaseTransactionResponse>;
    getUserCertificates(publicKey: string): Promise<string[]>;
}
