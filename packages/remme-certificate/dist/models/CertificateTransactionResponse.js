"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var remme_utils_1 = require("remme-utils");
var remme_transaction_service_1 = require("remme-transaction-service");
/**
 * Base class for response on certificate creation
 */
var CertificateTransactionResponse = /** @class */ (function (_super) {
    __extends(CertificateTransactionResponse, _super);
    function CertificateTransactionResponse(socketAddress, sslMode, batchId) {
        return _super.call(this, socketAddress, sslMode, batchId) || this;
    }
    /**
     * Sign data with a certificate's private key and output DigestInfo DER-encoded bytes
     * (defaults to RSASSA PKCS#1 v1.5)
     * @param {string} data
     * @returns {string}
     */
    CertificateTransactionResponse.prototype.sign = function (data) {
        var md = remme_utils_1.forge.md.sha512.create().update(data, "utf8");
        return this.certificate.privateKey.sign(md);
    };
    /**
     * verify data with a public key
     * (defaults to RSASSA PKCS#1 v1.5)
     * @param {string} data
     * @param {string} signature
     * @returns {boolean}
     */
    CertificateTransactionResponse.prototype.verify = function (data, signature) {
        data = remme_utils_1.forge.md.sha512.create().update(data, "utf8").digest().bytes();
        return this.certificate.publicKey.verify(data, signature);
    };
    return CertificateTransactionResponse;
}(remme_transaction_service_1.BaseTransactionResponse));
exports.CertificateTransactionResponse = CertificateTransactionResponse;
//# sourceMappingURL=CertificateTransactionResponse.js.map