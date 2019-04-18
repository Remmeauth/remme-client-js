export { oids } from "./oids";

/**
 * https://sawtooth.hyperledger.org/docs/core/releases/latest/architecture/global_state.html#radix-addresses
 * First 6 symbols that belongs to family name.
 */
export enum RemmeNamespace {
    Account = "112007",
    NodeAccount = "116829",
    ConsensusAccount = "fd0e4f",
    PublicKey = "a23be1",
    Swap = "78173b",
}

/**
 * All family names that defined into remChain.
 */
export enum RemmeFamilyName {
    Account = "account",
    NodeAccount = "node_account",
    ConsensusAccount = "consensus_account",
    PublicKey = "pub_key",
    Swap = "AtomicSwap",
}

/**
 * Defines consensus address;
 */
export const ConsensusAddress = `${RemmeNamespace.ConsensusAccount}${"0".repeat(64)}`;

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
 *  nodeAddress is localhost:8080,
 *  sslMode is false
 */
export interface INetworkConfig {
    nodeAddress?: string;
    sslMode?: boolean;
}
