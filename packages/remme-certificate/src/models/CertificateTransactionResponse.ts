import { forge, BaseTransactionResponse } from "remme-utils";

export class CertificateTransactionResponse extends BaseTransactionResponse {
    constructor(socketAddress: string) {
        super(socketAddress);
    }

    public certificate: forge.pki.Certificate;
}
