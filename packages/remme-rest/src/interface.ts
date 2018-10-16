import { RemmeMethods } from "./models";

export interface IRemmeRest {
    nodeAddress: string;
    sslMode: boolean;
    sendRequest<Output>(method: RemmeMethods): Promise<Output>;
    sendRequest<Input, Output>(method: RemmeMethods, requestPayload: Input): Promise<Output>;
}
