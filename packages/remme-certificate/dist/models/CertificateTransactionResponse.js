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
var remme_transaction_service_1 = require("remme-transaction-service");
var CertificateTransactionResponse = /** @class */ (function (_super) {
    __extends(CertificateTransactionResponse, _super);
    function CertificateTransactionResponse(socketAddress, sslMode, batchId) {
        return _super.call(this, socketAddress, sslMode, batchId) || this;
    }
    return CertificateTransactionResponse;
}(remme_transaction_service_1.BaseTransactionResponse));
exports.CertificateTransactionResponse = CertificateTransactionResponse;
//# sourceMappingURL=CertificateTransactionResponse.js.map