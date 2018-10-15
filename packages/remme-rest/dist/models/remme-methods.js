"use strict";
// export enum RemmeMethods {
//     publicKey = "pub_key",
//     token = "token",
//     batchStatus = "batch_status",
//     userPublicKeys = "user",
//     atomicSwap = "atomic-swap",
//     atomicSwapInit = "atomic-swap/init",
//     atomicSwapApprove = "atomic-swap/approve",
//     atomicSwapExpire = "atomic-swap/expire",
//     atomicSwapSecretLock = "atomic-swap/set-secret-lock",
//     atomicSwapClose = "atomic-swap/close",
//     atomicSwapPublicKey = "atomic-swap/pub-key-encryption",
//     nodeKey = "node_key",
//     transaction = "transaction",
//     networkStatus = "network",
//     blockInfo = "block-info",
// }
Object.defineProperty(exports, "__esModule", { value: true });
var RemmeMethods;
(function (RemmeMethods) {
    RemmeMethods["publicKey"] = "get_public_key_info";
    RemmeMethods["token"] = "get_balance";
    RemmeMethods["batchStatus"] = "get_batch_status";
    RemmeMethods["atomicSwap"] = "get_atomic_swap_info";
    RemmeMethods["atomicSwapPublicKey"] = "get_atomic_swap_public_key";
    RemmeMethods["userPublicKeys"] = "get_public_keys_list";
    RemmeMethods["nodeKey"] = "get_node_public_key";
    RemmeMethods["nodePrivateKey"] = "export_node_key";
    RemmeMethods["transaction"] = "send_raw_transaction";
    RemmeMethods["networkStatus"] = "get_node_info";
    RemmeMethods["blockInfo"] = "get_blocks";
    RemmeMethods["blocks"] = "list_blocks";
    RemmeMethods["fetchBlock"] = "fetch_block";
    RemmeMethods["batches"] = "list_batches";
    RemmeMethods["fetchBatch"] = "fetch_batch";
    RemmeMethods["transactions"] = "list_transactions";
    RemmeMethods["fetchTransaction"] = "fetch_transaction";
    RemmeMethods["state"] = "list_state";
    RemmeMethods["fetchState"] = "fetch_state";
    RemmeMethods["peers"] = "fetch_peers";
    RemmeMethods["receipts"] = "list_receipts";
})(RemmeMethods = exports.RemmeMethods || (exports.RemmeMethods = {}));
//# sourceMappingURL=remme-methods.js.map