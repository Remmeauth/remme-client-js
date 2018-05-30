import { forge, BaseTransactionResponse } from "remme-utils";
import { RemmeRest } from "remme-rest";
import { IRemmeCertificate } from "./interface";
import { CertificateTransactionResponse, CertificateCreateDto } from "./models";
declare class RemmeCertificate implements IRemmeCertificate {
    private readonly _remmeRest;
    private _rsaKeySize;
    constructor(remmeRest?: RemmeRest);
    createAndStore(certificateDataToCreate: CertificateCreateDto): Promise<CertificateTransactionResponse>;
    signAndStore(signingRequest: forge.pki.Certificate): Promise<CertificateTransactionResponse>;
    store(certificate: forge.pki.Certificate): Promise<Error>;
    check(certificate: forge.pki.Certificate): Promise<boolean>;
    revoke(certificate: forge.pki.Certificate): Promise<BaseTransactionResponse>;
    getUserCertificates(publicKey: string): Promise<string[]>;
    private createSignRequest(subject, keys);
    private createSubject(certificateDataToCreate);
    private generateKeyPair();
}
export { RemmeCertificate, IRemmeCertificate };
