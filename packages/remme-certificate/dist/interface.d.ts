import { forge } from "remme-utils";
import { IBaseTransactionResponse } from "remme-transaction-service";
import { PublicKeyInfo } from "remme-public-key-storage";
import { CreateCertificateDto, ICertificateTransactionResponse } from "./models";
export interface IRemmeCertificate {
    create(certificateDataToCreate: CreateCertificateDto): Promise<forge.pki.Certificate>;
    createAndStore(certificateDataToCreate: CreateCertificateDto): Promise<ICertificateTransactionResponse>;
    store(certificate: forge.pki.Certificate | forge.pki.PEM): Promise<IBaseTransactionResponse>;
    check(certificate: forge.pki.Certificate | forge.pki.PEM): Promise<boolean>;
    getInfo(certificate: forge.pki.Certificate | forge.pki.PEM): Promise<PublicKeyInfo>;
    revoke(certificate: forge.pki.Certificate | forge.pki.PEM): Promise<IBaseTransactionResponse>;
    sign(certificate: forge.pki.Certificate | forge.pki.PEM, data: string): string;
    verify(certificate: forge.pki.Certificate | forge.pki.PEM, data: string, signedData: string): boolean;
}
