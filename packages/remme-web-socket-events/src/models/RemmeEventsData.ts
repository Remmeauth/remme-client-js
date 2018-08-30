import { RemmeEventsEntity } from "./RemmeEventsEntity";
import { RemmeEvents } from "./RemmeEvents";

export interface IRemmeEventsData {
    entity: RemmeEventsEntity;
    events: RemmeEvents | RemmeEvents[];
    lastKnownBlockId?: string;
}

export class RemmeEventsData {
    public entity: RemmeEventsEntity;
    public events: RemmeEvents[];
    public last_known_block_id?: string;
}
