export interface INetworkStatusResponse {
    is_synced: boolean;
    peer_count: number;
}
export interface INetworkStatus {
    isSynced: boolean;
    peerCount: number;
}
export declare class NetworkStatus implements INetworkStatus {
    isSynced: boolean;
    peerCount: number;
    constructor(networkStatus: INetworkStatusResponse);
}
