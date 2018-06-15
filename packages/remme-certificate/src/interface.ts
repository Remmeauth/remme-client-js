import { forge } from "remme-utils";
import { BaseTransactionResponse, IBaseTransactionResponse } from "remme-base-transaction-response";
import { CertificateCreateDto, CertificateTransactionResponse } from "./models";

export interface IRemmeCertificate {
    createAndStore(certificateDataToCreate: CertificateCreateDto): Promise<CertificateTransactionResponse>;

    store(certificate: forge.pki.Certificate): Promise<IBaseTransactionResponse>;

    check(certificate: forge.pki.Certificate): Promise<boolean>;

    revoke(certificate: forge.pki.Certificate): Promise<IBaseTransactionResponse>;
}
