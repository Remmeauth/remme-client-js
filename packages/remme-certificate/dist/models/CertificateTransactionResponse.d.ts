import { forge, INetworkConfig } from "remme-utils";
import { IRemmeKeys, RSASignaturePadding } from "remme-keys";
import { BaseTransactionResponse, IBaseTransactionResponse } from "remme-transaction-service";
export interface ICertificateTransactionResponse extends IBaseTransactionResponse {
    certificate: forge.pki.Certificate;
    sign(data: string): string;
    verify(data: string, signedData: string): boolean;
}
/**
 * Base class for response on certificate creation
 */
export declare class CertificateTransactionResponse extends BaseTransactionResponse implements ICertificateTransactionResponse {
    keys: IRemmeKeys;
    certificate: forge.pki.Certificate;
    constructor(networkConfig: INetworkConfig, batchId: string, certificate: forge.pki.Certificate);
    /**
     * Sign data with a certificate's private key and output DigestInfo DER-encoded bytes
     * (defaults to PSS)
     * @param {string} data
     * @param {RSASignaturePadding} rsaSignaturePadding
     * @returns {string}
     */
    sign(data: string, rsaSignaturePadding?: RSASignaturePadding): string;
    /**
     * verify data with a public key
     * (defaults to PSS)
     * @param {string} signature
     * @param {string} data
     * @param {RSASignaturePadding} rsaSignaturePadding
     * @returns {boolean}
     */
    verify(data: string, signature: string, rsaSignaturePadding?: RSASignaturePadding): boolean;
}
