export interface INetworkStatusResponse {
    is_synced: boolean;
    peer_count: number;
}

export interface INetworkStatus {
    isSynced: boolean;
    peerCount: number;
}

export class NetworkStatus implements INetworkStatus {
    public isSynced: boolean;
    public peerCount: number;

    constructor(networkStatus: INetworkStatusResponse) {
        this.isSynced = networkStatus.is_synced;
        this.peerCount = networkStatus.peer_count;
    }
}
