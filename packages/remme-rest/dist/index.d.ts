import { RemmeMethods } from "./remme-methods";
declare class RemmeRest {
    private readonly _nodeAddress;
    constructor(nodeAddress?: string);
    putRequest(payload: any, method: RemmeMethods): Promise<string>;
    postRequest<Input, Output>(payload: any, method: RemmeMethods): Promise<Output>;
    private getUrlForRequest(method);
}
export { RemmeMethods, RemmeRest };
