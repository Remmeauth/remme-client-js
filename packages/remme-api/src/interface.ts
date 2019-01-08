import { INetworkConfig, RemmeMethods } from "./models";

export interface IRemmeApi {
    nodeAddress: string;
    sslMode: boolean;
    networkConfig: INetworkConfig;
    sendRequest<Output>(method: RemmeMethods): Promise<Output>;
    sendRequest<Input, Output>(method: RemmeMethods, requestPayload: Input): Promise<Output>;
}
