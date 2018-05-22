import { RemmeMethods } from "./remme-methods";
declare class RemmeRest {
    private readonly _nodeAddress;
    private readonly _socketAddress;
    constructor(nodeAddress?: string, socketAddress?: string);
    nodeAddress: () => string;
    socketAddress: () => string;
    getRequest<Output>(method: RemmeMethods, payload: string): Promise<Output>;
    putRequest<Input, Output>(method: RemmeMethods, payload: Input): Promise<Output>;
    postRequest<Input, Output>(method: RemmeMethods, payload: Input): Promise<Output>;
    deleteRequest<Input, Output>(method: RemmeMethods, payload: Input): Promise<Output>;
    private sendRequest<Input, Output>(method, remmeMethod, payload);
    private getUrlForRequest<Input>(method, payload?);
}
export { RemmeMethods, RemmeRest };
