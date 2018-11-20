export interface IBlockInfo {
    blockNum: number;
    timestamp: number;
    previousHeaderSignature: string;
    headerSignature: string;
    signerPublicKey: string;
}
export interface IBlockInfoResponse {
    block_number: number;
    timestamp: number;
    previous_header_signature: string;
    header_signature: string;
    signer_public_key: string;
}
export declare class BlockInfo implements IBlockInfo {
    blockNum: number;
    timestamp: number;
    previousHeaderSignature: string;
    headerSignature: string;
    signerPublicKey: string;
    constructor(data: IBlockInfoResponse);
}
