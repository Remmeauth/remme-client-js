import { forge } from "remme-utils";
import { BaseTransactionResponse, IBaseTransactionResponse } from "remme-transaction-service";
/**
 * Base class for response on certificate creation
 */
export declare class CertificateTransactionResponse extends BaseTransactionResponse implements ICertificateTransactionResponse {
    certificate: forge.pki.Certificate;
    constructor(socketAddress: string, sslMode: boolean, batchId: string);
    /**
     * Sign data with a certificate's private key and output DigestInfo DER-encoded bytes
     * (defaults to RSASSA PKCS#1 v1.5)
     * @param {string} data
     * @returns {string}
     */
    sign(data: string): string;
    /**
     * verify data with a public key
     * (defaults to RSASSA PKCS#1 v1.5)
     * @param {string} data
     * @param {string} signature
     * @returns {boolean}
     */
    verify(data: string, signature: string): boolean;
}
export interface ICertificateTransactionResponse extends IBaseTransactionResponse {
    certificate: forge.pki.Certificate;
    sign(data: string): string;
    verify(data: string, signedData: string): boolean;
}
