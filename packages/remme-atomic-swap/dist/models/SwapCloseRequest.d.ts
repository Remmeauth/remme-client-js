import { SwapBaseRequest } from "./SwapBaseRequest";
export declare class SwapCloseRequest extends SwapBaseRequest {
    secret_key: string;
    constructor(swapId: string, secretKey: string);
}
