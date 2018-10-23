/// <reference types="node-forge" />
import { forge } from "remme-utils";
import { IBaseTransactionResponse } from "remme-transaction-service";
import { IRemmePublicKeyStorage } from "remme-public-key-storage";
import { IRemmeCertificate } from "./interface";
import { ICertificateTransactionResponse, CertificateCreateDto } from "./models";
/**
 *
 */
declare class RemmeCertificate implements IRemmeCertificate {
    [key: string]: any;
    private readonly _remmePublicKeyStorage;
    private readonly _rsaKeySize;
    private _createCertificate(keys, certificateDataToCreate);
    private _createSubject(certificateDataToCreate);
    private _getPublicKeyPEM(certificate);
    private _getCertificateFromPEM(certificate);
    constructor(remmePublicKeyStorage: IRemmePublicKeyStorage);
    createAndStore(certificateDataToCreate: CertificateCreateDto): Promise<ICertificateTransactionResponse>;
    store(certificate: forge.pki.Certificate | forge.pki.PEM): Promise<IBaseTransactionResponse>;
    check(certificate: forge.pki.Certificate | forge.pki.PEM): Promise<boolean>;
    revoke(certificate: forge.pki.Certificate | forge.pki.PEM): Promise<IBaseTransactionResponse>;
}
export { RemmeCertificate, IRemmeCertificate };
