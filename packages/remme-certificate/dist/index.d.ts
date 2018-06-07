import { forge, BaseTransactionResponse } from "remme-utils";
import { IRemmeRest } from "remme-rest";
import { IRemmeTransactionService } from "remme-transaction-service";
import { IRemmeCertificate } from "./interface";
import { CertificateTransactionResponse, CertificateCreateDto } from "./models";
declare class RemmeCertificate implements IRemmeCertificate {
    private readonly _remmeRest;
    private readonly _remmeTransaction;
    private readonly familyName;
    private readonly familyVersion;
    private _rsaKeySize;
    constructor(remmeRest: IRemmeRest, remmeTransaction: IRemmeTransactionService);
    createAndStore(certificateDataToCreate: CertificateCreateDto): Promise<CertificateTransactionResponse>;
    signAndStore(signingRequest: forge.pki.Certificate): Promise<CertificateTransactionResponse>;
    store(certificate: forge.pki.Certificate): Promise<Error>;
    check(certificate: forge.pki.Certificate): Promise<boolean>;
    revoke(certificate: forge.pki.Certificate): Promise<BaseTransactionResponse>;
    getUserCertificates(publicKey: string): Promise<string[]>;
    private generateTransactionPayload(method, data);
    private createSignRequest(subject, keys);
    private createSubject(certificateDataToCreate);
    private generateKeyPair();
}
export { RemmeCertificate, IRemmeCertificate };
