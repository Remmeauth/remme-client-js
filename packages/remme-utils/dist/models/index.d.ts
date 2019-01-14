export { oids } from "./oids";
/**
 * https://sawtooth.hyperledger.org/docs/core/releases/latest/architecture/global_state.html#radix-addresses
 * First 6 symbols that belongs to family name.
 */
export declare enum RemmeNamespace {
    Account = "112007",
    PublicKey = "a23be1",
    Swap = "78173b",
}
/**
 * All family names that defined into remChain.
 */
export declare enum RemmeFamilyName {
    Account = "account",
    PublicKey = "pub_key",
    Swap = "AtomicSwap",
}
/**
 * Model that define public key params into request
 */
export declare class PublicKeyRequest {
    public_key_address: string;
    constructor(public_key_address: string);
}
/**
 * Model that define node config params into request
 */
export declare class NodeConfigRequest {
    node_public_key: string;
    constructor(node_public_key: string);
}
/**
 * Network configuration.
 * By default: see DEFAULT_NETWORK_CONFIG
 *  nodeAddress is localhost:8080,
 *  sslMode is false
 */
export interface INetworkConfig {
    nodeAddress?: string;
    sslMode?: boolean;
}
