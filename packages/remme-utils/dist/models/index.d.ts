/// <reference types="node-forge" />
import * as forge from "node-forge";
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
    public_key: string | forge.pki.PEM;
    constructor(public_key: string | forge.pki.PEM);
}
