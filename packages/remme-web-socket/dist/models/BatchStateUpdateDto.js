"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BatchStatus;
(function (BatchStatus) {
    BatchStatus["Unknown"] = "UNKNOWN";
    BatchStatus["Pending"] = "PENDING";
    BatchStatus["Invalid"] = "INVALID";
    BatchStatus["Committed"] = "COMMITTED";
})(BatchStatus = exports.BatchStatus || (exports.BatchStatus = {}));
var BatchInfoDto = /** @class */ (function () {
    function BatchInfoDto(data) {
        this.status = data.status;
        this.batchId = data.id;
    }
    return BatchInfoDto;
}());
exports.BatchInfoDto = BatchInfoDto;
//# sourceMappingURL=BatchStateUpdateDto.js.map