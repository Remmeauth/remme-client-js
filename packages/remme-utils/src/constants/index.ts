export const PATTERNS = {
    PRIVATE_KEY: /^[a-f0-9]{64}$/,
    PUBLIC_KEY: /^[a-f0-9]{66}$/,
    ADDRESS: /^[a-f0-9]{70}$/,
    SWAP_ID: /^[a-f0-9]{64}$/,
    HEADER_SIGNATURE: /^[a-f0-9]{128}$/,
    SHA256: /^[a-f0-9]{64}$/,
    SHA512: /^[a-f0-9]{128}$/,
    /* tslint:disable */
    PROTOCOL: /^(?!(http|https|ws|wss):\/\/)\S+$/,
};
