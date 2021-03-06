"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PATTERNS = {
    PRIVATE_KEY: /^[a-f0-9]{64}$/,
    PUBLIC_KEY: /^[a-f0-9]{66}$/,
    ADDRESS: /^[a-f0-9]{70}$/,
    SWAP_ID: /^[a-f0-9]{64}$/,
    HEADER_SIGNATURE: /^[a-f0-9]{128}$/,
    /* tslint:disable */
    NODE_ADDRESS: /^(!(http|https):\/\/)?(([\w\d\-+%=~&@#?!;*,\._\(\)|$\/\\\]\[-]*)(\.|\:))+([\w\d\-+%=~&@#?!;*,\._\(\)|$\/\\\]\[-]+)$/,
};
//# sourceMappingURL=index.js.map