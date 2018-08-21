import { WSEEntity } from "./WSEEntity";
import { WSEEvents } from "./WSEEvents";

export interface IWSEData {
    entity: WSEEntity;
    events: WSEEvents | WSEEvents[];
    lastKnownBlockId?: string;
}

export class WSEData {
    public entity: WSEEntity;
    public events: WSEEvents[];
    public last_known_block_id?: string;
}
