import { RemmeMethods } from "./remme-methods";

class RemmeRest {
    private readonly _nodeAddress: string;
    public constructor(nodeAddress: string = "localhost:8080") {
        this._nodeAddress = nodeAddress;
    }

    public async putRequest<Input, Output>(payload: Input, method: RemmeMethods): Promise<Output> {
        // search for http request library
        return "true";
    }

    public async postRequest<Input, Output>(payload: Input, method: RemmeMethods): Promise<Output> {
        // search for http request library
        return {
            revoked: false,
        };
    }

    private getUrlForRequest(method: RemmeMethods): string {
        let methodUrl: string;
        switch (method) {
            case RemmeMethods.certificate:
                methodUrl = "certificate";
                break;
            case RemmeMethods.certificateStore:
                methodUrl = "certificate/store";
                break;
            case RemmeMethods.token:
                methodUrl = "token";
                break;
            case RemmeMethods.batchStatus:
                methodUrl = "batch_status";
                break;
            case RemmeMethods.personal:
                methodUrl = "personal";
                break;
        }
        return `http://${this._nodeAddress}/api/v1/${methodUrl}`;
    }
}

export {
    RemmeMethods,
    RemmeRest,
};
