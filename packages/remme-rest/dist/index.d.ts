import { IRemmeRest } from "./interface";
import { IQueryParams, RemmeMethods, ValidatorMethods, INetworkConfig } from "./models";
declare class RemmeRest implements IRemmeRest {
    private readonly _nodeAddress;
    private readonly _socketAddress;
    private readonly _validatorAddress;
    private readonly _sslMode;
    constructor({nodeAddress, apiPort, socketPort, validatorPort, sslMode}: INetworkConfig);
    nodeAddress: () => string;
    socketAddress: () => string;
    sslMode: () => boolean;
    getRequest<Output>(method: RemmeMethods | ValidatorMethods, urlParam?: string, queryParam?: IQueryParams): Promise<Output>;
    putRequest<Input, Output>(method: RemmeMethods, payload: Input): Promise<Output>;
    postRequest<Input, Output>(method: RemmeMethods, payload: Input): Promise<Output>;
    deleteRequest<Input, Output>(method: RemmeMethods, payload: Input): Promise<Output>;
    private _sendRequest<Input, Output>(method, url, payload?);
    private _getUrlForRequest(method, payload?);
    private _throwErrorReceive({error});
}
export { RemmeMethods, ValidatorMethods, RemmeRest, IRemmeRest };
