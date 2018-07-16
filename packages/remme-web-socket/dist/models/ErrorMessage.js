"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorMessage = /** @class */ (function () {
    function ErrorMessage(data) {
        this.extendedData = data.extended_data;
        this.message = data.message;
        this.transactionId = data.transaction_id;
    }
    return ErrorMessage;
}());
exports.ErrorMessage = ErrorMessage;
//# sourceMappingURL=ErrorMessage.js.map