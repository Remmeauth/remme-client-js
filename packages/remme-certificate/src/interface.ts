import { forge } from "remme-utils";
import { IBaseTransactionResponse } from "remme-transaction-service";
import { PublicKeyStorageCheckResult } from "remme-public-key-storage";

import { CertificateCreateDto, ICertificateTransactionResponse } from "./models";

export interface IRemmeCertificate {
    createAndStore(certificateDataToCreate: CertificateCreateDto): Promise<ICertificateTransactionResponse>;

    store(certificate: forge.pki.Certificate | forge.pki.PEM): Promise<IBaseTransactionResponse>;

    check(certificate: forge.pki.Certificate | forge.pki.PEM): Promise<PublicKeyStorageCheckResult>;

    revoke(certificate: forge.pki.Certificate | forge.pki.PEM): Promise<IBaseTransactionResponse>;
}
