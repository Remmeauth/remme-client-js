import { forge, BaseTransactionResponse } from "remme-utils";
export declare class CertificateTransactionResponse extends BaseTransactionResponse {
    constructor(socketAddress: string);
    certificate: forge.pki.Certificate;
}
