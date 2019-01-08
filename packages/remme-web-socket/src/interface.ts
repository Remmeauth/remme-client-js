import { INetworkConfig } from "remme-api";

export interface IRemmeWebSocket {
    networkConfig: INetworkConfig;

    connectToWebSocket(callback: (err: Error, res: any) => void): void;
    closeWebSocket(): void;
}
