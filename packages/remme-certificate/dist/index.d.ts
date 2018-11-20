import { forge } from "remme-utils";
import { IBaseTransactionResponse } from "remme-transaction-service";
import { IRemmePublicKeyStorage, PublicKeyInfo } from "remme-public-key-storage";
import { RSASignaturePadding } from "remme-keys";
import { IRemmeCertificate } from "./interface";
import { ICertificateTransactionResponse, CreateCertificateDto } from "./models";
/**
 * Class for working with certificates, such as create, store, revoke, check, getInfo.
 * @example
 * ```typescript
 * const remme = new Remme.Client();
 * const certificateTransactionResult = await remme.certificate.createAndStore({
 *   commonName: "userName",
 *   email: "user@email.com",
 *   name: "John",
 *   surname: "Smith",
 *   countryName: "US",
 *   validity: 360,
 *   serial: `${Date.now()}`
 * });
 *
 * const certificateTransactionCallback = async (err, response) => {
 *   if (err) {
 *     console.log(err);
 *   }
 *   console.log("store", response);
 *   if (response.status === "COMMITTED") {
 *     certificateTransactionResult.closeWebSocket();
 *     const status = await remme.certificate.check(certificateTransactionResult.certificate);
 *     console.log('status:', status); // true
 *     const info = await remme.certificate.getInfo(certificateTransactionResult.certificate);
 *     console.log("info:", info);
 *     const revoke = await remme.certificate.revoke(certificateTransactionResult.certificate);
 *     revoke.connectToWebSocket(async (err, response) => {
 *       console.log("error", err);
 *       console.log("revoke", response);
 *       if (res.status === "COMMITTED") {
 *          revoke.closeWebSocket();
 *          const status = await remme.certificate.check(certificateTransactionResult.certificate);
 *          console.log(status); // false;
 *       }
 *     })
 *   }
 * };
 *
 * certificateTransactionResult.connectToWebSocket(certificateTransactionCallback);
 * ```
 */
declare class RemmeCertificate implements IRemmeCertificate {
    [key: string]: any;
    private readonly _remmePublicKeyStorage;
    private readonly _rsaKeySize;
    private _createSubject(certificateDataToCreate);
    private _createCertificate(keys, certificateDataToCreate);
    /**
     * @example
     * Usage without remme main package
     * ```typescript
     * const rest = new RemmeRest();
     * const account = new RemmeAccount();
     * const transaction = new RemmeTransactionService(rest, account);
     * const publicKeyStorage = new RemmePublicKeyStorage(rest, account, transaction);
     * const certificate = new RemmeCertificate(publicKeyStorage);
     * ```
     * @param {IRemmePublicKeyStorage} remmePublicKeyStorage
     */
    constructor(remmePublicKeyStorage: IRemmePublicKeyStorage);
    /**
     * Create certificate.
     * @example
     * ```typescript
     *  const certificate = await remme.certificate.create({
     *   commonName: "userName",
     *   email: "user@email.com",
     *   name: "John",
     *   surname: "Smith",
     *   countryName: "US",
     *   validity: 360,
     *   serial: `${Date.now()}`
     * });
     * console.log(certificate);
     * ```
     * @param {CreateCertificateDto} certificateDataToCreate
     * @returns {Promise<module:node-forge.pki.Certificate>}
     */
    create(certificateDataToCreate: CreateCertificateDto): Promise<forge.pki.Certificate>;
    /**
     * Method that creates certificate and stores it in to REMChain.
     * Send transaction to chain.
     * @example
     * ```typescript
     * const remme = new Remme.Client();
     * const certificateTransactionResult = await remme.certificate.createAndStore({
     *   commonName: "userName",
     *   email: "user@email.com",
     *   name: "John",
     *   surname: "Smith",
     *   countryName: "US",
     *   validity: 360,
     *   serial: `${Date.now()}`
     * });
     *
     * const certificateTransactionCallback = (err: Error, response: any) => {
     *   if (err) {
     *     console.log(err);
     *   }
     *   console.log("store", response);
     * }
     * ```
     * @param {CreateCertificateDto} certificateDataToCreate
     * @returns {Promise<ICertificateTransactionResponse>}
     */
    createAndStore(certificateDataToCreate: CreateCertificateDto): Promise<ICertificateTransactionResponse>;
    /**
     * Store your certificate public key and hash of certificate into REMChain.
     * Your certificate should contains private and public keys.
     * Send transaction to chain.
     * @example
     * ```typescript
     * const certificate = await remme.certificate.create({
     *   commonName: "userName",
     *   email: "user@email.com",
     *   name: "John",
     *   surname: "Smith",
     *   countryName: "US",
     *   validity: 360,
     *   serial: `${Date.now()}`
     * });
     * const storeResponse = await remme.certificate.store(certificate);
     * ```
     * @param {module:node-forge.pki.Certificate | module:node-forge.pki.PEM} certificate
     * @returns {Promise<ICertificateTransactionResponse>}
     */
    store(certificate: forge.pki.Certificate | forge.pki.PEM): Promise<ICertificateTransactionResponse>;
    /**
     * Check certificate's public key on validity and revocation.
     * @example
     * ```typescript
     * const isValid = await remme.certificate.check(certificate);
     * console.log(isValid); // true or false
     * ```
     * @param {module:node-forge.pki.Certificate | module:node-forge.pki.PEM} certificate
     * @returns {Promise<boolean>}
     */
    check(certificate: forge.pki.Certificate | forge.pki.PEM): Promise<boolean>;
    /**
     * Get info about certificate's public key.
     * @example
     * ```typescript
     * const isValid = await remme.certificate.getInfo(certificate);
     * console.log(info); // PublicKeyInfo
     * ```
     * @param {module:node-forge.pki.Certificate | module:node-forge.pki.PEM} certificate
     * @returns {Promise<PublicKeyInfo>}
     */
    getInfo(certificate: forge.pki.Certificate | forge.pki.PEM): Promise<PublicKeyInfo>;
    /**
     * Revoke certificate's public key into REMChain.
     * Send transaction to chain.
     * @example
     * ```typescript
     * const revokeResponse = await remme.certificate.revoke(certificate);
     * revokeResponse.connectToWebSocket((err: Error, res: any) => {
     *      if (err) {
     *          console.log(err);
     *          return;
     *      }
     *      console.log(res);
     * })
     * ```
     * @param {module:node-forge.pki.Certificate | module:node-forge.pki.PEM} certificate
     * @returns {Promise<IBaseTransactionResponse>}
     */
    revoke(certificate: forge.pki.Certificate | forge.pki.PEM): Promise<IBaseTransactionResponse>;
    /**
     * Sign data with a certificate's private key and output DigestInfo DER-encoded bytes
     * (defaults to PSS)
     * @param {module:node-forge.pki.Certificate | module:node-forge.pki.PEM} certificate
     * @param {string} data
     * @param {RSASignaturePadding} rsaSignaturePadding
     * @returns {string}
     */
    sign(certificate: forge.pki.Certificate | forge.pki.PEM, data: string, rsaSignaturePadding?: RSASignaturePadding): string;
    /**
     * verify data with a public key
     * (defaults to PSS)
     * @param {module:node-forge.pki.Certificate | module:node-forge.pki.PEM} certificate
     * @param {string} data
     * @param {string} signature
     * @param {RSASignaturePadding} rsaSignaturePadding
     * @returns {boolean}
     */
    verify(certificate: forge.pki.Certificate | forge.pki.PEM, data: string, signature: string, rsaSignaturePadding?: RSASignaturePadding): boolean;
}
export { RemmeCertificate, IRemmeCertificate, CreateCertificateDto, ICertificateTransactionResponse };
