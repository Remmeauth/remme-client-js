import {INetworkConfig} from "remme-api";

export interface IRemmeWebSocket {
    nodeAddress: string;
    sslMode: boolean;
    networkConfig: INetworkConfig;

    connectToWebSocket(callback: (err: Error, res: any) => void): void;
    closeWebSocket(): void;
}
