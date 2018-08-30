"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NetworkStatus = /** @class */ (function () {
    function NetworkStatus(networkStatus) {
        this.isSynced = networkStatus.is_synced;
        this.peerCount = networkStatus.peer_count;
    }
    return NetworkStatus;
}());
exports.NetworkStatus = NetworkStatus;
//# sourceMappingURL=NetworkStatus.js.map