import { INodeInfoResponse } from "./NodeInfoResponse";

export class NodeInfo {
    public isSynced: boolean;
    public peerCount: number;

    constructor({ is_synced, peer_count }: INodeInfoResponse) {
        this.isSynced = is_synced;
        this.peerCount = peer_count;
    }
}
