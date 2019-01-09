"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PATTERNS = {
    PRIVATE_KEY: /^[a-f0-9]{64}$/,
    PUBLIC_KEY: /^[a-f0-9]{66}$/,
    ADDRESS: /^[a-f0-9]{70}$/,
    SWAP_ID: /^[a-f0-9]{64}$/,
    HEADER_SIGNATURE: /^[a-f0-9]{128}$/,
    NODE_ADDRESS: /^(?:(?:\w|\d)+\.)(?:(?:\w|\d)+\.?){1,255}$/,
    NODE_PORT: /^(?:[0-9]{1,65535})$/,
};
//# sourceMappingURL=index.js.map