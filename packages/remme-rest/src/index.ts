import { HttpClient, AxiosRequestConfig } from "remme-http-client";
import { RemmeMethods } from "./remme-methods";
import { IRemmeRest } from "./interface";

export interface ErrorReceived {
    error?: string;
}

class RemmeRest implements IRemmeRest {
    private readonly _nodeAddress: string;
    private readonly _socketAddress: string;

    public constructor(nodeAddress: string = "localhost:8080", socketAddress: string = "localhost:9080") {
        this._nodeAddress = nodeAddress;
        this._socketAddress = socketAddress;
    }

    public nodeAddress = (): string => this._nodeAddress;
    public socketAddress = (): string => this._socketAddress;

    public async getRequest<Output>(method: RemmeMethods, payload?: string, params?: any): Promise<Output> {
        const url = this._getUrlForRequest(method, payload);
        return await this._sendRequest<string, Output>("GET", url, payload);
    }

    public async putRequest<Input, Output>(method: RemmeMethods, payload: Input): Promise<Output> {
        const url = this._getUrlForRequest(method);
        return await this._sendRequest<Input, Output>("PUT", url, payload);
    }

    public async postRequest<Input, Output>(method: RemmeMethods, payload: Input)
        : Promise<Output> {
        const url = this._getUrlForRequest(method);
        return await this._sendRequest<Input, Output>("POST", url, payload);
    }

    public async deleteRequest<Input, Output>(method: RemmeMethods, payload: Input)
        : Promise<Output> {
        const url = this._getUrlForRequest(method);
        return await this._sendRequest<Input, Output>("DELETE", url, payload);
    }

    private async _sendRequest<Input, Output>(method: string, url: string, payload?: Input)
        : Promise<Output> {
        const options: AxiosRequestConfig = {
            url,
            method,
        };
        if (method.toUpperCase() !== "GET") {
            options.data = payload;
        }
        let response;
        try {
            response = await HttpClient.send(options);
        } catch (e) {
            throw new Error(`Please check if your node running at http://${this._nodeAddress}`);
        }
        this._checkIfErrorReceive(response.data);
        return response.data;
    }

    private _getUrlForRequest(method: RemmeMethods, payload?: string): string {
        let methodUrl: string = method;

        if (payload) {
           methodUrl += `/${payload}${method === RemmeMethods.userPublicKeys ? "/pub_keys" : ""}`;
        }

        const protocol = this._nodeAddress.search(/^http(s)?:\/\//) === -1 ? "http://" : "";
        return `${protocol}${this._nodeAddress}/api/v1/${methodUrl}`;
    }

    private _checkIfErrorReceive({ error }: ErrorReceived): void {
        if (error) {
            throw new Error(error);
        }
    }
}

export {
    RemmeMethods,
    RemmeRest,
    IRemmeRest,
};
