"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var remme_utils_1 = require("remme-utils");
var models_1 = require("./models");
exports.CreateCertificateDto = models_1.CreateCertificateDto;
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
var RemmeCertificate = /** @class */ (function () {
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
    function RemmeCertificate(remmePublicKeyStorage) {
        this._rsaKeySize = 2048;
        this._remmePublicKeyStorage = remmePublicKeyStorage;
    }
    RemmeCertificate.prototype._createSubject = function (certificateDataToCreate) {
        if (!certificateDataToCreate.commonName) {
            throw new Error("Attribute commonName must have a value");
        }
        if (!certificateDataToCreate.validity) {
            throw new Error("Attribute validity must have a value");
        }
        return Object.entries(certificateDataToCreate).map(function (_a) {
            var key = _a[0], value = _a[1];
            var name;
            var type;
            switch (key) {
                case "email":
                    name = "emailAddress";
                    break;
                case "streetAddress":
                    name = "street";
                    break;
                case "stateName":
                    name = "stateOrProvinceName";
                    break;
                case "generationQualifier":
                    name = "generation";
                    break;
                case "serial":
                    name = "serialNumber";
                    break;
                default: name = key;
            }
            if (name in remme_utils_1.oids) {
                type = remme_utils_1.oids[name];
            }
            if (!(name in remme_utils_1.forge.pki.oids) && !(name in remme_utils_1.oids)) {
                type = name;
            }
            return {
                name: name,
                value: value,
                type: type,
            };
        });
    };
    RemmeCertificate.prototype._createCertificate = function (keys, certificateDataToCreate) {
        var subject = this._createSubject(certificateDataToCreate);
        var cert = remme_utils_1.forge.pki.createCertificate();
        cert.setSubject(subject);
        cert.publicKey = keys.publicKey;
        cert.privateKey = keys.privateKey;
        cert.serialNumber = certificateDataToCreate.serial;
        cert.validity.notBefore = new Date();
        cert.validity.notAfter = new Date();
        if (certificateDataToCreate.validAfter) {
            cert.validity.notBefore.setDate(cert.validity.notBefore.getDate() + certificateDataToCreate.validAfter);
        }
        cert.validity.notAfter.setDate(cert.validity.notBefore.getDate() + certificateDataToCreate.validity);
        cert.sign(keys.privateKey, remme_utils_1.forge.md.sha256.create());
        return cert;
    };
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
    RemmeCertificate.prototype.create = function (certificateDataToCreate) {
        return __awaiter(this, void 0, void 0, function () {
            var keys;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, remme_utils_1.generateRSAKeyPair(this._rsaKeySize)];
                    case 1:
                        keys = _a.sent();
                        return [2 /*return*/, this._createCertificate(keys, certificateDataToCreate)];
                }
            });
        });
    };
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
    RemmeCertificate.prototype.createAndStore = function (certificateDataToCreate) {
        return __awaiter(this, void 0, void 0, function () {
            var certificate, batchResponse, certResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.create(certificateDataToCreate)];
                    case 1:
                        certificate = _a.sent();
                        return [4 /*yield*/, this.store(certificate)];
                    case 2:
                        batchResponse = _a.sent();
                        certResponse = new models_1.CertificateTransactionResponse(batchResponse.nodeAddress, batchResponse.sslMode, batchResponse.batchId);
                        certResponse.certificate = certificate;
                        return [2 /*return*/, certResponse];
                }
            });
        });
    };
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
     * const storeResponse = remme.certificate.store(certificate);
     * ```
     * @param {module:node-forge.pki.Certificate | module:node-forge.pki.PEM} certificate
     * @returns {Promise<IBaseTransactionResponse>}
     */
    RemmeCertificate.prototype.store = function (certificate) {
        return __awaiter(this, void 0, void 0, function () {
            var certificatePEM, publicKey, privateKey, validFrom, validTo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof certificate === "string") {
                            certificate = remme_utils_1.certificateFromPem(certificate);
                        }
                        certificatePEM = remme_utils_1.certificateToPem(certificate);
                        publicKey = certificate.publicKey, privateKey = certificate.privateKey;
                        if (!privateKey) {
                            throw new Error("Your certificate does not have private key");
                        }
                        validFrom = Math.floor(certificate.validity.notBefore.getTime() / 1000);
                        validTo = Math.floor(certificate.validity.notAfter.getTime() / 1000);
                        return [4 /*yield*/, this._remmePublicKeyStorage.store({
                                data: certificatePEM,
                                publicKey: publicKey,
                                privateKey: privateKey,
                                validFrom: validFrom,
                                validTo: validTo,
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
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
    RemmeCertificate.prototype.check = function (certificate) {
        return __awaiter(this, void 0, void 0, function () {
            var publicKeyPEM, checkResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof certificate === "string") {
                            certificate = remme_utils_1.certificateFromPem(certificate);
                        }
                        publicKeyPEM = remme_utils_1.publicKeyToPem(certificate.publicKey);
                        return [4 /*yield*/, this._remmePublicKeyStorage.check(publicKeyPEM)];
                    case 1:
                        checkResult = _a.sent();
                        if (checkResult !== undefined) {
                            return [2 /*return*/, checkResult];
                        }
                        else {
                            throw new Error("This certificate was not found");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
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
    RemmeCertificate.prototype.getInfo = function (certificate) {
        return __awaiter(this, void 0, void 0, function () {
            var publicKeyPEM, checkResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof certificate === "string") {
                            certificate = remme_utils_1.certificateFromPem(certificate);
                        }
                        publicKeyPEM = remme_utils_1.publicKeyToPem(certificate.publicKey);
                        return [4 /*yield*/, this._remmePublicKeyStorage.getInfo(publicKeyPEM)];
                    case 1:
                        checkResult = _a.sent();
                        if (checkResult !== undefined) {
                            return [2 /*return*/, checkResult];
                        }
                        else {
                            throw new Error("This certificate was not found");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
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
    RemmeCertificate.prototype.revoke = function (certificate) {
        return __awaiter(this, void 0, void 0, function () {
            var publicKeyPEM;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof certificate === "string") {
                            certificate = remme_utils_1.certificateFromPem(certificate);
                        }
                        publicKeyPEM = remme_utils_1.publicKeyToPem(certificate.publicKey);
                        return [4 /*yield*/, this._remmePublicKeyStorage.revoke(publicKeyPEM)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Sign data with a certificate's private key and output DigestInfo DER-encoded bytes
     * (defaults to RSASSA PKCS#1 v1.5)
     * @param {module:node-forge.pki.Certificate | module:node-forge.pki.PEM} certificate
     * @param {string} data
     * @returns {string}
     */
    RemmeCertificate.prototype.sign = function (certificate, data) {
        if (typeof certificate === "string") {
            certificate = remme_utils_1.certificateFromPem(certificate);
        }
        var md = remme_utils_1.forge.md.sha512.create().update(data, "utf8");
        return certificate.privateKey.sign(md);
    };
    /**
     * verify data with a public key
     * (defaults to RSASSA PKCS#1 v1.5)
     * @param {module:node-forge.pki.Certificate | module:node-forge.pki.PEM} certificate
     * @param {string} data
     * @param {string} signature
     * @returns {boolean}
     */
    RemmeCertificate.prototype.verify = function (certificate, data, signature) {
        if (typeof certificate === "string") {
            certificate = remme_utils_1.certificateFromPem(certificate);
        }
        data = remme_utils_1.forge.md.sha512.create().update(data, "utf8").digest().bytes();
        return certificate.publicKey.verify(data, signature);
    };
    return RemmeCertificate;
}());
exports.RemmeCertificate = RemmeCertificate;
//# sourceMappingURL=index.js.map