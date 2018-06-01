import { SwapBaseRequest } from "./SwapBaseRequest";
export declare class SwapSetSecretRequest extends SwapBaseRequest {
    secret_lock: string;
    constructor(swapId: string, secretLock: string);
}
