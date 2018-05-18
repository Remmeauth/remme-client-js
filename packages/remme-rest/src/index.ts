import { HttpClient, AxiosRequestConfig } from "remme-http-client";
import { RemmeMethods } from "./remme-methods";

class RemmeRest {
    private readonly _nodeAddress: string;
    public constructor(nodeAddress: string = "localhost:8080") {
        this._nodeAddress = nodeAddress;
    }

    public async getRequest<Input, Output>(payload: Input, method: RemmeMethods): Promise<Output> {
        return await this.sendRequest<Input, Output>("GET", payload, method);
    }

    public async putRequest<Input, Output>(payload: Input, method: RemmeMethods): Promise<Output> {
        // const url = this.getUrlForRequest(method);
        // const options: AxiosRequestConfig = {
        //     url,
        //     method: "PUT",
        //     data: payload,
        // };
        // const response = await HttpClient.send(options);
        // return response.data;
        return await this.sendRequest<Input, Output>("PUT", payload, method);
    }

    public async postRequest<Input, Output>(payload: Input, method: RemmeMethods): Promise<Output> {
        // const url = this.getUrlForRequest(method);
        // const options: AxiosRequestConfig = {
        //     url,
        //     method: "POST",
        //     data: payload,
        // };
        // const response = await HttpClient.send(options);
        // return response.data;
        return await this.sendRequest<Input, Output>("POST", payload, method);
    }

    public async deleteRequest<Input, Output>(payload: Input, method: RemmeMethods): Promise<Output> {
        // const url = this.getUrlForRequest(method);
        // const options: AxiosRequestConfig = {
        //     url,
        //     method: "DELETE",
        //     data: payload,
        // };
        // const response = await HttpClient.send(options);
        // return response.data;
        return await this.sendRequest<Input, Output>("DELETE", payload, method);
    }

    private async sendRequest<Input, Output>(method: string, payload: Input, remmeMethod: RemmeMethods)
        : Promise<Output> {
        try {
            const url = this.getUrlForRequest(remmeMethod);
            const options: AxiosRequestConfig = {
                url,
                method,
                [method.toUpperCase() === "GET" ? "params" : "data"]: payload,
            };
            const response = await HttpClient.send(options);
            return response.data;
        } catch (e) {
            throw new Error(`Please check if your node running at http://${this._nodeAddress}`);
        }
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
