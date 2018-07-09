import { forge } from "remme-utils";
import { BaseTransactionResponse, IBaseTransactionResponse } from "remme-transaction-service";

export class CertificateTransactionResponse extends BaseTransactionResponse implements ICertificateTransactionResponse {
    public certificate: forge.pki.Certificate;

    constructor(socketAddress: string, sslMode: boolean, batchId: string) {
        super(socketAddress, sslMode, batchId);
    }
}

export interface ICertificateTransactionResponse extends IBaseTransactionResponse {
    certificate: forge.pki.Certificate;
}
