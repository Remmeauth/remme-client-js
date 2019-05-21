import { CertVote, ICertVoteResponse } from "./CertVote";
import { IBaseResponse, IPaging } from "./Response";

export interface IBlockInfoData {
    blockNum: number;
    timestamp: number;
    previousHeaderSignature: string;
    headerSignature: string;
    signerPublicKey: string;
    certVotes: CertVote[];
}

export interface IBlockInfoResponse {
    block_number: number;
    timestamp: number;
    previous_header_signature: string;
    header_signature: string;
    signer_public_key: string;
    cert_votes: ICertVoteResponse[];
}

export class BlockInfoData implements IBlockInfoData {
    public blockNum: number;
    public timestamp: number;
    public previousHeaderSignature: string;
    public headerSignature: string;
    public signerPublicKey: string;
    public certVotes: CertVote[];

    constructor(data: IBlockInfoResponse) {
        this.blockNum = data.block_number;
        this.timestamp = data.timestamp;
        this.previousHeaderSignature = data.previous_header_signature;
        this.headerSignature = data.header_signature;
        this.signerPublicKey = data.signer_public_key;
        this.certVotes = data.cert_votes.map((res) => new CertVote(res));
    }
}

export class BlockInfo implements IBaseResponse<BlockInfoData[]> {
    public data: BlockInfoData[];
    public paging: IPaging;

    constructor({
                    data,
                    paging,
                }: IBaseResponse<IBlockInfoResponse[]>) {
        this.data = data.map((value) => new BlockInfoData(value));
        this.paging = paging;
    }
}
