import { RemmeMethods, ValidatorMethods, IQueryParams } from "./models";
export interface IRemmeRest {
    nodeAddress(): string;
    socketAddress(): string;
    sslMode(): boolean;
    getRequest<Output>(method: RemmeMethods | ValidatorMethods, urlParams?: string, queryParams?: IQueryParams): Promise<Output>;
    putRequest<Input, Output>(method: RemmeMethods, requestPayload: Input): Promise<Output>;
    postRequest<Input, Output>(method: RemmeMethods, requestPayload: Input): Promise<Output>;
    deleteRequest<Input, Output>(method: RemmeMethods, requestPayload: Input): Promise<Output>;
}
