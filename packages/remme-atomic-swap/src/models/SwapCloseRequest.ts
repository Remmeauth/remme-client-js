import { SwapBaseRequest } from "./SwapBaseRequest";

export class SwapCloseRequest extends SwapBaseRequest {
    public secret_key: string;

    constructor(swapId: string, secretKey: string) {
        super(swapId);
        if (!secretKey) {
            throw new Error("The 'secretKey' was missing in parameters");
        }
        if (secretKey.search(/^[0-9a-f]{64}$/) === -1) {
            throw new Error("Given secretKey is not a valid");
        }
        this.secret_key = secretKey;
    }
}
