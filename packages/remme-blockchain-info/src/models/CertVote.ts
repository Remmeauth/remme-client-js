export interface ICertVoteResponse {
    message_signature: string;
    message: ICertVoteResponseMessage;
}

export interface ICertVoteResponseMessage {
    type: string;
    payload: ICertVoteResponseMessagePayload;
}

export interface ICertVoteResponseMessagePayload {
    proposal_id: string;
    voter_id: string;
    period: string;
}

export interface ICertVote {
    messageSignature: string;
    message: ICertVoteMessage;
}

export interface ICertVoteMessage {
    type: string;
    payload: ICertVoteMessagePayload;
}

export interface ICertVoteMessagePayload {
    proposalId: string;
    voterId: string;
    period: string;
}

export class CertVote implements ICertVote {
    public message: ICertVoteMessage;
    public messageSignature: string;

    constructor({ message, message_signature }: ICertVoteResponse) {
        this.message = new CertVoteMessage(message);
        this.messageSignature = message_signature;
    }
}

export class CertVoteMessage implements ICertVoteMessage {
    public payload: ICertVoteMessagePayload;
    public type: string;

    constructor({ payload, type }: ICertVoteResponseMessage) {
        this.payload = new CertVoteMessagePayload(payload);
        this.type = type;
    }
}

export class CertVoteMessagePayload implements ICertVoteMessagePayload{

    public period: string;
    public proposalId: string;
    public voterId: string;

    constructor({
                    period,
                    proposal_id,
                    voter_id,
    }: ICertVoteResponseMessagePayload) {
        this.period = period;
        this.proposalId = proposal_id;
        this.voterId = voter_id;
    }
}
