import axios from "axios";
import { RemmeMethods } from "./remme-methods";

class RemmeRest {
    private readonly _nodeAddress: string;
    public constructor(nodeAddress: string = "localhost:8080") {
        this._nodeAddress = nodeAddress;
    }

    public async putRequest<Input, Output>(payload: Input, method: RemmeMethods): Promise<Output> {
        const url = this.getUrlForRequest(method);
        const response = await axios.put(url, payload);
        return response.data;
    }

    public async postRequest<Input, Output>(payload: Input, method: RemmeMethods): Promise<Output> {
        const url = this.getUrlForRequest(method);
        const response = await axios.post(url, payload);
        return response.data;
    }

    public async deleteRequest<Input, Output>(payload: Input, method: RemmeMethods): Promise<Output> {
        const url = this.getUrlForRequest(method);
        const response = await axios.delete(url, payload);
        return response.data;
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
