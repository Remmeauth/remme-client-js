export { oids } from "./oids";

/**
 * https://sawtooth.hyperledger.org/docs/core/releases/latest/architecture/global_state.html#radix-addresses
 * First 6 symbols that belongs to family name.
 */
export enum RemmeNamespace {
    Account = "112007",
    PublicKey = "a23be1",
    Swap = "78173b",
}

/**
 * All family names that defined into remChain.
 */
export enum RemmeFamilyName {
    Account = "account",
    PublicKey = "pub_key",
    Swap = "AtomicSwap",
}

/**
 * Model that define public key params into request
 */
export class PublicKeyRequest {
    constructor(
        public public_key_address: string,
    ) {}
}

/**
 * Model that define node config params into request
 */
export class NodeConfigRequest {
    constructor(
        public node_public_key: string,
    ) {}
}

/**
 * Network configuration.
 * By default: see DEFAULT_NETWORK_CONFIG
 *  nodeAddress is localhost,
 *  nodePort is 8080,
 *  sslMode is false
 */
export interface INetworkConfig {
    nodeAddress?: string;
    nodePort?: string | number;
    sslMode?: boolean;
}
