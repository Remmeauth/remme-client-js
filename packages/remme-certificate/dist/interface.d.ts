import { forge, BaseTransactionResponse } from "remme-utils";
import { CertificateCreateDto, CertificateTransactionResponse } from "./models";
export interface IRemmeCertificate {
    createAndStore(certificateDataToCreate: CertificateCreateDto): Promise<CertificateTransactionResponse>;
    store(certificate: forge.pki.Certificate): Promise<BaseTransactionResponse>;
    check(certificate: forge.pki.Certificate): Promise<boolean>;
    revoke(certificate: forge.pki.Certificate): Promise<BaseTransactionResponse>;
}
