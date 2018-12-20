import { RemmeEvents } from "./RemmeEvents";
export interface IRemmeRequestParams {
    events: RemmeEvents;
    lastKnownBlockId?: string;
    id?: string;
    address?: string;
}
export declare class RemmeRequestParams {
    event_type: RemmeEvents;
    id?: string;
    from_block?: string;
    address?: string;
    constructor(data: IRemmeRequestParams);
}
