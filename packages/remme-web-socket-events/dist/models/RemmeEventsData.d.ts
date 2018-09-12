import { RemmeEventsEntity } from "./RemmeEventsEntity";
import { RemmeEvents } from "./RemmeEvents";
export interface IRemmeEventsData {
    events: RemmeEvents | RemmeEvents[];
    lastKnownBlockId?: string;
}
export declare class RemmeEventsData {
    entity: RemmeEventsEntity;
    events: RemmeEvents[];
    last_known_block_id?: string;
}
