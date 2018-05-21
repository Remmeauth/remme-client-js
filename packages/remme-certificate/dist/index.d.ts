import { forge, BaseTransactionResponse } from "remme-utils";
import { RemmeRest } from "remme-rest";
import { IRemmeCertificate } from "./interface";
import { CertificateTransactionResponse, CertificateCreateDto } from "./models";
declare class RemmeCertificate implements IRemmeCertificate {
    private readonly _remmeRest;
    private _rsaKeySize;
    constructor(remmeRest?: RemmeRest);
    createAndStoreCertificate(certificateDataToCreate: CertificateCreateDto): Promise<CertificateTransactionResponse>;
    signAndStoreCertificate(signingRequest: forge.pki.Certificate): Promise<CertificateTransactionResponse>;
    storeCertificate(certificate: forge.pki.Certificate): Promise<Error>;
    checkCertificate(certificate: forge.pki.Certificate): Promise<boolean>;
    revokeCertificate(certificate: forge.pki.Certificate): Promise<BaseTransactionResponse>;
    private createSignRequest(subject, keys);
    private createSubject(certificateDataToCreate);
    private generateKeyPair();
}
export { RemmeCertificate, IRemmeCertificate };
