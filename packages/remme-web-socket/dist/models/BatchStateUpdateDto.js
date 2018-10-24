"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BatchInfoDto = /** @class */ (function () {
    function BatchInfoDto(data) {
        this.status = BatchStatus[data.status];
        this.batchId = data.batch_id;
    }
    return BatchInfoDto;
}());
exports.BatchInfoDto = BatchInfoDto;
var BatchStatus;
(function (BatchStatus) {
    BatchStatus["UNKNOWN"] = "UNKNOWN";
    BatchStatus["INVALID"] = "INVALID";
    BatchStatus["PENDING"] = "PENDING";
    BatchStatus["COMMITTED"] = "COMMITTED";
})(BatchStatus = exports.BatchStatus || (exports.BatchStatus = {}));
//# sourceMappingURL=BatchStateUpdateDto.js.map