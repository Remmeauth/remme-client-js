import { forge } from "remme-utils";
import { BaseTransactionResponse } from "remme-base-transaction-response";
export declare class CertificateTransactionResponse extends BaseTransactionResponse {
    constructor(socketAddress: string);
    certificate: forge.pki.Certificate;
}
