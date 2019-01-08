import {
    forge,
    oids,
    certificateToPem,
    certificateFromPem,
} from "remme-utils";
import { IBaseTransactionResponse } from "remme-transaction-service";
import {
    IRemmePublicKeyStorage,
    PublicKeyInfo,
} from "remme-public-key-storage";
import {
    RSA,
    IKeys,
    RSASignaturePadding,
} from "remme-keys";

import { IRemmeCertificate } from "./interface";
import {
    CertificateTransactionResponse,
    ICertificateTransactionResponse,
    CreateCertificateDto,
} from "./models";

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
class RemmeCertificate implements IRemmeCertificate {

    // index signature
    [key: string]: any;

    private readonly _remmePublicKeyStorage: IRemmePublicKeyStorage;
    private readonly _rsaKeySize: number = 2048;

    private _createSubject(certificateDataToCreate: CreateCertificateDto): forge.pki.CertificateField[] {
        if (!certificateDataToCreate.commonName) {
            throw new Error("Attribute commonName must have a value");
        }
        if (!certificateDataToCreate.validity) {
            throw new Error("Attribute validity must have a value");
        }
        return (Object as any).entries(certificateDataToCreate).map(([key, value]) => {
            let name: string;
            let type: string;
            switch (key) {
                case "email": name = "emailAddress"; break;
                case "streetAddress": name = "street"; break;
                case "stateName": name = "stateOrProvinceName"; break;
                case "generationQualifier": name = "generation"; break;
                case "serial": name = "serialNumber"; break;
                default: name = key;
            }
            if (name in oids) {
                type = oids[name];
            }
            if (!(name in forge.pki.oids) && !(name in oids)) {
                type = name;
            }
            return {
                name,
                value,
                type,
            };
        });
    }

    private _createCertificate(keys: IKeys, certificateDataToCreate: CreateCertificateDto)
        : forge.pki.Certificate {
        const subject = this._createSubject(certificateDataToCreate);
        const cert = forge.pki.createCertificate();
        cert.setSubject(subject);
        cert.publicKey = RSA.getObjectFromPublicKey(keys.publicKey);
        cert.privateKey = RSA.getObjectFromPrivateKey(keys.privateKey);
        cert.serialNumber = certificateDataToCreate.serial;
        cert.validity.notBefore = new Date();
        cert.validity.notAfter = new Date();
        if (certificateDataToCreate.validAfter) {
            cert.validity.notBefore.setDate(cert.validity.notBefore.getDate() + certificateDataToCreate.validAfter);
        }
        cert.validity.notAfter.setDate(cert.validity.notBefore.getDate() + certificateDataToCreate.validity);
        cert.sign(cert.privateKey, forge.md.sha256.create());
        return cert;
    }

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
    public constructor(remmePublicKeyStorage: IRemmePublicKeyStorage) {
        this._remmePublicKeyStorage = remmePublicKeyStorage;
    }

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
    public async create(certificateDataToCreate: CreateCertificateDto)
        : Promise<forge.pki.Certificate> {
        const keys = await RSA.generateKeyPair({ rsaKeySize: this._rsaKeySize });
        return this._createCertificate(keys, certificateDataToCreate);
    }

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
    public async createAndStore(certificateDataToCreate: CreateCertificateDto)
        : Promise<ICertificateTransactionResponse> {
        const certificate = await this.create(certificateDataToCreate);
        return await this.store(certificate);
    }

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
    public async store(certificate: forge.pki.Certificate | forge.pki.PEM): Promise<ICertificateTransactionResponse> {
        if (typeof certificate === "string") {
            certificate = certificateFromPem(certificate);
        }
        const certificatePEM = certificateToPem(certificate);
        const { publicKey, privateKey } = certificate;
        if (!privateKey) {
            throw new Error("Your certificate does not have private key");
        }
        const validFrom = Math.floor(certificate.validity.notBefore.getTime() / 1000);
        const validTo = Math.floor(certificate.validity.notAfter.getTime()  / 1000);
        const batchResponse = await this._remmePublicKeyStorage.store({
            data: certificatePEM,
            keys: new RSA({
                privateKey: RSA.getPrivateKeyFromObject(privateKey),
                publicKey: RSA.getPublicKeyFromObject(publicKey),
            }),
            rsaSignaturePadding: RSASignaturePadding.PSS,
            validFrom,
            validTo,
        });
        return new CertificateTransactionResponse(
            batchResponse.networkConfig,
            batchResponse.batchId,
            certificate,
        );
    }

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
    public async check(certificate: forge.pki.Certificate | forge.pki.PEM): Promise<boolean> {
        if (typeof certificate === "string") {
            certificate = certificateFromPem(certificate);
        }
        const address = RSA.getAddressFromPublicKey(
            RSA.getPublicKeyFromObject(certificate.publicKey),
        );
        const checkResult = await this._remmePublicKeyStorage.check(address);
        if (checkResult !== undefined) {
            return checkResult;
        } else {
            throw new Error(`This certificate was not found`);
        }
    }

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
    public async getInfo(certificate: forge.pki.Certificate | forge.pki.PEM): Promise<PublicKeyInfo> {
        if (typeof certificate === "string") {
            certificate = certificateFromPem(certificate);
        }
        const address = RSA.getAddressFromPublicKey(
            RSA.getPublicKeyFromObject(certificate.publicKey),
        );
        const checkResult = await this._remmePublicKeyStorage.getInfo(address);
        if (checkResult !== undefined) {
            return checkResult;
        } else {
            throw new Error(`This certificate was not found`);
        }
    }

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
    public async revoke(certificate: forge.pki.Certificate | forge.pki.PEM): Promise<IBaseTransactionResponse> {
        if (typeof certificate === "string") {
            certificate = certificateFromPem(certificate);
        }
        const address = RSA.getAddressFromPublicKey(
            RSA.getPublicKeyFromObject(certificate.publicKey),
        );
        return await this._remmePublicKeyStorage.revoke(address);
    }

    /**
     * Sign data with a certificate's private key and output DigestInfo DER-encoded bytes
     * (defaults to PSS)
     * @param {module:node-forge.pki.Certificate | module:node-forge.pki.PEM} certificate
     * @param {string} data
     * @param {RSASignaturePadding} rsaSignaturePadding
     * @returns {string}
     */
    public sign(
        certificate: forge.pki.Certificate | forge.pki.PEM,
        data: string,
        rsaSignaturePadding?: RSASignaturePadding,
    ): string {
        if (typeof certificate === "string") {
            certificate = certificateFromPem(certificate);
        }
        if (!certificate.privateKey) {
            throw new Error("Your certificate does not have private key");
        }
        const keys = new RSA({
            privateKey: RSA.getPrivateKeyFromObject(certificate.privateKey),
        });
        return keys.sign(data, rsaSignaturePadding);
    }

    /**
     * verify data with a public key
     * (defaults to PSS)
     * @param {module:node-forge.pki.Certificate | module:node-forge.pki.PEM} certificate
     * @param {string} data
     * @param {string} signature
     * @param {RSASignaturePadding} rsaSignaturePadding
     * @returns {boolean}
     */
    public verify(
        certificate: forge.pki.Certificate | forge.pki.PEM,
        data: string,
        signature: string,
        rsaSignaturePadding?: RSASignaturePadding,
    ): boolean {
        if (typeof certificate === "string") {
            certificate = certificateFromPem(certificate);
        }
        const keys = new RSA({
            publicKey: RSA.getPublicKeyFromObject(certificate.publicKey),
        });
        return keys.verify(data, signature, rsaSignaturePadding);
    }

}

export {
    RemmeCertificate,
    IRemmeCertificate,
    CreateCertificateDto,
    ICertificateTransactionResponse,
};
