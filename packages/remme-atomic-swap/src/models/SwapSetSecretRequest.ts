import { SwapBaseRequest } from "./SwapBaseRequest";

export class SwapSetSecretRequest extends SwapBaseRequest {
    public secret_lock: string;

    constructor(swapId: string, secretLock: string) {
        super(swapId);
        if (!secretLock) {
            throw new Error("The 'secretLock' was missing in parameters");
        }
        if (secretLock.search(/^[0-9a-f]{64}$/) === -1) {
            throw new Error("Given secretLock is not a valid");
        }
        this.secret_lock = secretLock;
    }
}
