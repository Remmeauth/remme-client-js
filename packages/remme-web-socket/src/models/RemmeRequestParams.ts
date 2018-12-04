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
        this.address = data.address;
        this.id = data.id;
        this.from_block = data.lastKnownBlockId;
    }
}
