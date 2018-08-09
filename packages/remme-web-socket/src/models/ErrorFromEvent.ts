export class ErrorFromEvent extends Error {
    public status: string;

    constructor(data: any) {
        super(data.info);
        this.status = StatusEvent[data.status];
    }
}

export const StatusEvent = {
    10: "SUBSCRIBED",
    11: "UNSUBSCRIBED",
    100: "MALFORMED_JSON",
    101: "MISSING_ACTION",
    102: "INVALID_ACTION",
    103: "MISSING_ID",
    104: "MISSING_PARAMETERS",
    105: "INVALID_PARAMS",
    106: "INVALID_ENTITY",
    107: "MISSING_ENTITY",
    108: "MESSAGE_ID_EXISTS",
    109: "MISSING_TYPE",
    110: "NO_VALIDATOR",
    111: "MISSING_DATA",
    112: "WRONG_EVENT_TYPE",
    113: "ALREADY_SUBSCRIBED",
    114: "EVENTS_NOT_PROVIDED",
    200: "BATCH_RESPONSE",
};
