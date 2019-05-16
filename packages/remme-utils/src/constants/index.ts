import { RemmeNamespace } from "../models";

export const PATTERNS = {
    PRIVATE_KEY: /^[a-f0-9]{64}$/,
    PUBLIC_KEY: /^[a-f0-9]{66}$/,
    ADDRESS: /^[a-f0-9]{70}$/,
    SWAP_ID: /^[a-f0-9]{64}$/,
    HEADER_SIGNATURE: /^[a-f0-9]{128}$/,
    BLOCK_NUMBER: /^0x[a-f0-9]{16}$/,
    SHA256: /^[a-f0-9]{64}$/,
    SHA512: /^[a-f0-9]{128}$/,
    PROTOCOL: /^(?!(http|https|ws|wss):\/\/)\S+$/,
};

/**
 * Defines consensus address;
 */
export const ConsensusAddress = `${RemmeNamespace.ConsensusAccount}${"0".repeat(64)}`;
export const ZeroAddress = "0".repeat(70);
