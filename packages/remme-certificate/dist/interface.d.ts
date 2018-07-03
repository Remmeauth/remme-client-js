import { forge } from "remme-utils";
import { IBaseTransactionResponse } from "remme-base-transaction-response";
import { PublicKeyStorageCheckResult } from "remme-public-key-storage";
import { CertificateCreateDto, CertificateTransactionResponse } from "./models";
export interface IRemmeCertificate {
    createAndStore(certificateDataToCreate: CertificateCreateDto): Promise<CertificateTransactionResponse>;
    store(certificate: forge.pki.Certificate | forge.pki.PEM): Promise<IBaseTransactionResponse>;
    check(certificate: forge.pki.Certificate | forge.pki.PEM): Promise<PublicKeyStorageCheckResult>;
    revoke(certificate: forge.pki.Certificate | forge.pki.PEM): Promise<IBaseTransactionResponse>;
}
