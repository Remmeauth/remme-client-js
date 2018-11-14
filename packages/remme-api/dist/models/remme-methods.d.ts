/**
 * Enumeration all currently available methods in our JSON-RPC.
 */
export declare enum RemmeMethods {
    publicKey = "get_public_key_info",
    token = "get_balance",
    batchStatus = "get_batch_status",
    atomicSwap = "get_atomic_swap_info",
    atomicSwapPublicKey = "get_atomic_swap_public_key",
    userPublicKeys = "get_public_keys_list",
    nodeKey = "get_node_public_key",
    transaction = "send_raw_transaction",
    networkStatus = "get_node_info",
    blockInfo = "get_blocks",
    blocks = "list_blocks",
    fetchBlock = "fetch_block",
    batches = "list_batches",
    fetchBatch = "fetch_batch",
    transactions = "list_transactions",
    fetchTransaction = "fetch_transaction",
    state = "list_state",
    fetchState = "fetch_state",
    peers = "fetch_peers",
    receipts = "list_receipts",
}
