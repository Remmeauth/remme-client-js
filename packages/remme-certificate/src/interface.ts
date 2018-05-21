import { forge, BaseTransactionResponse } from "remme-utils";
import { CertificateTransactionResponse, CertificateCreateDto } from "./models";

export interface IRemmeCertificate {
    createAndStoreCertificate(certificateDataToCreate: CertificateCreateDto): Promise<CertificateTransactionResponse>;

    storeCertificate(signingRequest: forge.pki.Certificate): Promise<Error>;

    signAndStoreCertificate(signingRequest: forge.pki.Certificate): Promise<CertificateTransactionResponse>;

    checkCertificate(certificate: forge.pki.Certificate): Promise<boolean>;

    revokeCertificate(certificate: forge.pki.Certificate): Promise<BaseTransactionResponse>;
}
