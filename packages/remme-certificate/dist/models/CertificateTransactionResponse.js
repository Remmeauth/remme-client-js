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
var remme_keys_1 = require("remme-keys");
var remme_transaction_service_1 = require("remme-transaction-service");
/**
 * Base class for response on certificate creation
 */
var CertificateTransactionResponse = /** @class */ (function (_super) {
    __extends(CertificateTransactionResponse, _super);
    function CertificateTransactionResponse(socketAddress, sslMode, batchId, certificate) {
        var _this = _super.call(this, socketAddress, sslMode, batchId) || this;
        _this.certificate = certificate;
        _this.keys = new remme_keys_1.RemmeKeys({
            keyType: remme_keys_1.KeyType.RSA,
            privateKey: _this.certificate.privateKey,
            publicKey: _this.certificate.publicKey,
        });
        return _this;
    }
    /**
     * Sign data with a certificate's private key and output DigestInfo DER-encoded bytes
     * (defaults to PSS)
     * @param {string} data
     * @param {RSASignaturePadding} rsaSignaturePadding
     * @returns {string}
     */
    CertificateTransactionResponse.prototype.sign = function (data, rsaSignaturePadding) {
        return this.keys.sign(data, rsaSignaturePadding);
    };
    /**
     * verify data with a public key
     * (defaults to PSS)
     * @param {string} signature
     * @param {string} data
     * @param {RSASignaturePadding} rsaSignaturePadding
     * @returns {boolean}
     */
    CertificateTransactionResponse.prototype.verify = function (data, signature, rsaSignaturePadding) {
        return this.keys.verify(data, signature);
    };
    return CertificateTransactionResponse;
}(remme_transaction_service_1.BaseTransactionResponse));
exports.CertificateTransactionResponse = CertificateTransactionResponse;
//# sourceMappingURL=CertificateTransactionResponse.js.map