import { forge, BaseTransactionResponse } from "remme-utils";
import { IRemmeRest } from "remme-rest";
import { IRemmeTransactionService } from "remme-transaction-service";
import { IRemmeCertificate } from "./interface";
import { CertificateCreateDto } from "./models";
declare class RemmeCertificate implements IRemmeCertificate {
    private readonly _remmeRest;
    private readonly _remmeTransaction;
    private readonly _familyName;
    private readonly _familyVersion;
    private readonly _rsaKeySize;
    constructor(remmeRest: IRemmeRest, remmeTransaction: IRemmeTransactionService);
    createAndStore(certificateDataToCreate: CertificateCreateDto): Promise<BaseTransactionResponse>;
    store(certificate: forge.pki.Certificate): Promise<BaseTransactionResponse>;
    check(certificate: forge.pki.Certificate): Promise<boolean>;
    revoke(certificate: forge.pki.Certificate): Promise<BaseTransactionResponse>;
    getUserCertificates(publicKey: string): Promise<string[]>;
    private _generateTransactionPayload(method, data);
    private _createCertificate(subject, keys, validity);
    private _createSubject(certificateDataToCreate);
    private _generateKeyPair();
}
export { RemmeCertificate, IRemmeCertificate };
