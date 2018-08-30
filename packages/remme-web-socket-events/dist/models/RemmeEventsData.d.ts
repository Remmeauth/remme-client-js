import { RemmeEventsEntity } from "./RemmeEventsEntity";
import { RemmeEvents } from "./RemmeEvents";
export interface IRemmeEventsData {
    entity: RemmeEventsEntity;
    events: RemmeEvents | RemmeEvents[];
    lastKnownBlockId?: string;
}
export declare class RemmeEventsData {
    entity: RemmeEventsEntity;
    events: RemmeEvents[];
    last_known_block_id?: string;
}
