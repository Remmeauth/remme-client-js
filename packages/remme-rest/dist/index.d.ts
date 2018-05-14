import { RemmeMethods } from "./remme-methods";
declare class RemmeRest {
    private readonly _nodeAddress;
    constructor(nodeAddress?: string);
    putRequest<Input, Output>(payload: Input, method: RemmeMethods): Promise<Output>;
    postRequest<Input, Output>(payload: Input, method: RemmeMethods): Promise<Output>;
    deleteRequest<Input, Output>(payload: Input, method: RemmeMethods): Promise<Output>;
    private getUrlForRequest(method);
}
export { RemmeMethods, RemmeRest };
