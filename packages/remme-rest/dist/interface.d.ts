import { RemmeMethods } from "./remme-methods";
export interface IRemmeRest {
    nodeAddress(): string;
    socketAddress(): string;
    getRequest<Output>(method: RemmeMethods, requestPayload?: string): Promise<Output>;
    putRequest<Input, Output>(method: RemmeMethods, requestPayload: Input): Promise<Output>;
    postRequest<Input, Output>(method: RemmeMethods, requestPayload: Input): Promise<Output>;
    deleteRequest<Input, Output>(method: RemmeMethods, requestPayload: Input): Promise<Output>;
}
