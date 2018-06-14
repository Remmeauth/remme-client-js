"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BatchStatusesDto = /** @class */ (function () {
    function BatchStatusesDto(data) {
        this.status = Statuses[data.status];
        this.batchId = data.batch_id;
    }
    return BatchStatusesDto;
}());
exports.BatchStatusesDto = BatchStatusesDto;
var Statuses;
(function (Statuses) {
    Statuses["OK"] = "OK";
    Statuses["NOT_CONFIRMED"] = "NOT_CONFIRMED";
    Statuses["NO_RESOURCE"] = "NO_RESOURCE";
    Statuses["PENDING"] = "PENDING";
})(Statuses = exports.Statuses || (exports.Statuses = {}));
//# sourceMappingURL=BatchStateUpdateDto.js.map