import {SwapEntity} from "./SwapEntity";
import {SwapEvents} from "./WSEEvents";

export interface IWSEData {
    lastKnownBlockId: string;
}

export class WSEData {
    public entity: SwapEntity;
    public events: string[];
    public last_known_block_id: string;
}
