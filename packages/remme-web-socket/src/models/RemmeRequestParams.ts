import { PATTERNS } from "remme-utils";
import { RemmeEvents } from "./RemmeEvents";

export interface IRemmeRequestParams {
    events: RemmeEvents;
    lastKnownBlockId?: string;
    id?: string;
    address?: string;
}

export class RemmeRequestParams {
    public event_type: RemmeEvents;
    public id?: string;
    public from_block?: string;
    public address?: string;
    constructor(data: IRemmeRequestParams) {
        this.event_type = data.events;

        switch (true) {
            case this.event_type === RemmeEvents.Batch && !PATTERNS.HEADER_SIGNATURE.test(data.id):
            case this.event_type === RemmeEvents.AtomicSwap && data.id && !PATTERNS.HEADER_SIGNATURE.test(data.id):
            case data.id && typeof data.id !== "string":
                throw new Error("'id' is not correct or not provide");
        }
        this.id = data.id;

        if (this.event_type === RemmeEvents.Transfer && (
            !data.address || !PATTERNS.ADDRESS.test(data.address) || typeof data.address !== "string"
        )) {
            throw new Error("'address' is not correct or not provide");
        }
        this.address = data.address;

        if (data.lastKnownBlockId && (
            typeof data.lastKnownBlockId !== "string" || !PATTERNS.HEADER_SIGNATURE.test(data.lastKnownBlockId)
        )) {
            throw new Error("'lastKnownBlockId' is not correct or not provide");
        }
        this.from_block = data.lastKnownBlockId;
    }
}
