import { forge } from "remme-utils";
import { BaseTransactionResponse, IBaseTransactionResponse } from "remme-transaction-service";
export declare class CertificateTransactionResponse extends BaseTransactionResponse implements ICertificateTransactionResponse {
    certificate: forge.pki.Certificate;
    constructor(socketAddress: string, sslMode: boolean, batchId: string);
}
export interface ICertificateTransactionResponse extends IBaseTransactionResponse {
    certificate: forge.pki.Certificate;
}
