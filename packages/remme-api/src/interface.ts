import { INetworkConfig, RemmeMethods } from "./models";

export interface IRemmeApi {
    networkConfig: INetworkConfig;
    sendRequest<Output>(method: RemmeMethods): Promise<Output>;
    sendRequest<Input, Output>(method: RemmeMethods, requestPayload: Input): Promise<Output>;
}
