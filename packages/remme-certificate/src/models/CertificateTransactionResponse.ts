import { forge } from "remme-utils";
import { BaseTransactionResponse } from "remme-base-transaction-response";

export class CertificateTransactionResponse extends BaseTransactionResponse {
    constructor(socketAddress: string) {
        super(socketAddress);
    }

    public certificate: forge.pki.Certificate;
}
