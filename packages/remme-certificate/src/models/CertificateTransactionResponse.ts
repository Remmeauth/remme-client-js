import { forge } from "remme-utils";
import { RSA, IRemmeKeys, RSASignaturePadding } from "remme-keys";
import { BaseTransactionResponse, IBaseTransactionResponse } from "remme-transaction-service";

export interface ICertificateTransactionResponse extends IBaseTransactionResponse {
    certificate: forge.pki.Certificate;

    sign(data: string): string;

    verify(data: string, signedData: string): boolean;
}

/**
 * Base class for response on certificate creation
 */
export class CertificateTransactionResponse extends BaseTransactionResponse implements ICertificateTransactionResponse {
    public keys: IRemmeKeys;
    public certificate: forge.pki.Certificate;

    constructor(
        socketAddress: string,
        sslMode: boolean,
        batchId: string,
        certificate: forge.pki.Certificate,
    ) {
        super(socketAddress, sslMode, batchId);
        this.certificate = certificate;
        this.keys = new RSA({
            privateKey: this.certificate.privateKey,
            publicKey: this.certificate.publicKey,
        });
    }

    /**
     * Sign data with a certificate's private key and output DigestInfo DER-encoded bytes
     * (defaults to PSS)
     * @param {string} data
     * @param {RSASignaturePadding} rsaSignaturePadding
     * @returns {string}
     */
    public sign(data: string, rsaSignaturePadding?: RSASignaturePadding): string {
        return this.keys.sign(data, rsaSignaturePadding);
    }

    /**
     * verify data with a public key
     * (defaults to PSS)
     * @param {string} signature
     * @param {string} data
     * @param {RSASignaturePadding} rsaSignaturePadding
     * @returns {boolean}
     */
    public verify(
        data: string,
        signature: string,
        rsaSignaturePadding?: RSASignaturePadding,
    ): boolean {
        return this.keys.verify(data, signature);
    }
}
