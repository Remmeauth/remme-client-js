import { forge } from "remme-utils";
import { BaseTransactionResponse, IBaseTransactionResponse } from "remme-transaction-service";

/**
 * Base class for response on certificate creation
 */
export class CertificateTransactionResponse extends BaseTransactionResponse implements ICertificateTransactionResponse {
    public certificate: forge.pki.Certificate;

    constructor(socketAddress: string, sslMode: boolean, batchId: string) {
        super(socketAddress, sslMode, batchId);
    }

    /**
     * Sign data with a certificate's private key and output DigestInfo DER-encoded bytes
     * (defaults to RSASSA PKCS#1 v1.5)
     * @param {string} data
     * @returns {string}
     */
    public sign(data: string): string {
        const md = forge.md.sha512.create().update(data, "utf8");
        return this.certificate.privateKey.sign(md);
    }

    /**
     * verify data with a public key
     * (defaults to RSASSA PKCS#1 v1.5)
     * @param {string} data
     * @param {string} signature
     * @returns {boolean}
     */
    public verify(
        data: string,
        signature: string,
    ): boolean {
        data = forge.md.sha512.create().update(data, "utf8").digest().bytes();
        return this.certificate.publicKey.verify(data, signature);
    }
}

export interface ICertificateTransactionResponse extends IBaseTransactionResponse {
    certificate: forge.pki.Certificate;

    sign(data: string): string;

    verify(data: string, signedData: string): boolean;
}
