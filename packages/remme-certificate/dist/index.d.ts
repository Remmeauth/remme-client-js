import { forge, BaseTransactionResponse } from "remme-utils";
import { IRemmePublicKeyStorage } from "remme-public-key-storage";
import { IRemmeCertificate } from "./interface";
import { CertificateTransactionResponse, CertificateCreateDto } from "./models";
declare class RemmeCertificate implements IRemmeCertificate {
    private readonly _remmePublicKeyStorage;
    private readonly _rsaKeySize;
    private readonly _socketAddress;
    constructor(remmePublicKeyStorage: IRemmePublicKeyStorage, socketAddress: () => string);
    createAndStore(certificateDataToCreate: CertificateCreateDto): Promise<CertificateTransactionResponse>;
    store(certificate: forge.pki.Certificate): Promise<BaseTransactionResponse>;
    check(certificate: forge.pki.Certificate): Promise<boolean>;
    revoke(certificate: forge.pki.Certificate): Promise<BaseTransactionResponse>;
    private _createCertificate(keys, certificateDataToCreate);
    private _createSubject(certificateDataToCreate);
    private _generateKeyPair();
    private _getPublicKeyPEM(certificate);
    private _getCertificatePEM(certificate);
}
export { RemmeCertificate, IRemmeCertificate };
