import { HttpClient, AxiosRequestConfig } from "remme-http-client";
import { IRemmeRest } from "./interface";
import { ErrorReceived, IQueryParams, RemmeMethods, ValidatorMethods, INetworkConfig } from "./models";

class RemmeRest implements IRemmeRest {
    // index signature
    [key: string]: any;

    private readonly _nodeAddress: string;
    private readonly _sslMode: boolean;

    public constructor({ nodeAddress, nodePort, sslMode }: INetworkConfig) {
        this._nodeAddress = `${nodeAddress}:${nodePort}`;
        this._sslMode = sslMode;
    }

    public nodeAddress = (): string => this._nodeAddress;
    public sslMode = (): boolean => this._sslMode;

    // public async getRequest
    // <Output>(method: RemmeMethods | ValidatorMethods, urlParam?: string, queryParam?: IQueryParams)
    //     : Promise<Output> {
    //     const url = this._getUrlForRequest(method, urlParam);
    //     return await this._sendRequest<IQueryParams, Output>("GET", url, queryParam);
    // }
    public async getRequest
    <Output>(method: RemmeMethods | ValidatorMethods, payload?: IQueryParams)
        : Promise<Output> {
        const url = this._getUrlForRequest(method);
        return await this._sendRequest<IQueryParams, Output>(method, url, payload);
    }

    public async putRequest<Input, Output>(method: RemmeMethods, payload: Input): Promise<Output> {
        const url = this._getUrlForRequest(method);
        // return await this._sendRequest<Input, Output>("PUT", url, payload);
        return await this._sendRequest<Input, Output>(method, url, payload);
    }

    public async postRequest<Input, Output>(method: RemmeMethods, payload: Input)
        : Promise<Output> {
        const url = this._getUrlForRequest(method);
        // return await this._sendRequest<Input, Output>("POST", url, payload);
        return await this._sendRequest<Input, Output>(method, url, payload);
    }

    public async deleteRequest<Input, Output>(method: RemmeMethods, payload: Input)
        : Promise<Output> {
        const url = this._getUrlForRequest(method);
        // return await this._sendRequest<Input, Output>("DELETE", url, payload);
        return await this._sendRequest<Input, Output>(method, url, payload);
    }

    // private async _sendRequest<Input, Output>(method: string, url: string, payload?: Input)
    //     : Promise<Output> {
    //     const options: AxiosRequestConfig = {
    //         url,
    //         method,
    //     };
    //     if (payload) {
    //         options[method.toUpperCase() === "GET" ? "params" : "data"] = payload;
    //     }
    //     let response;
    //     response = await HttpClient.send(options);
    //     if (response) {
    //         if (response.data.error) {
    //             this._throwErrorReceive(response.data);
    //         } else {
    //             return response.data.result;
    //         }
    //     } else {
    //         throw new Error(`Please check if your node running at http://${this._nodeAddress}`);
    //     }
    // }

    private async _sendRequest<Input, Output>(method: RemmeMethods | ValidatorMethods, url: string, payload?: Input)
        : Promise<Output> {
        const options: AxiosRequestConfig = {
            url,
            method: "POST",
            data: {
                jsonrpc: "2.0",
                method,
                params: {},
                id: Math.round(Math.random() * 100),
            },
        };
        if (payload) {
            options.data.params = payload;
        }
        let response;
        response = await HttpClient.send(options);
        if (response) {
            if (response.data.error) {
                this._throwErrorReceive(response.data);
            } else {
                return response.data.result;
            }
        } else {
            throw new Error(`Please check if your node running at http://${this._nodeAddress}`);
        }
    }

    // private _getUrlForRequest(method: RemmeMethods | ValidatorMethods, payload?: string): string {
    //     let methodUrl: string = method;
    //
    //     if (payload) {
    //        methodUrl += `/${payload}${method === RemmeMethods.userPublicKeys ? "/pub_keys" : ""}`;
    //     }
    //
    //     const protocol = this._sslMode ? "https://" : "http://";
    //     let url;
    //     if ((Object as any).values(RemmeMethods).includes(method)) {
    //         url = `${this._nodeAddress}/api/v1/`;
    //     } else if ((Object as any).values(ValidatorMethods).includes(method)) {
    //         url = `${this._nodeAddress}/validator/`;
    //     }
    //     return `${protocol}${url}${methodUrl}`;
    // }

    private _getUrlForRequest(method: RemmeMethods | ValidatorMethods, payload?: string): string {
        let methodUrl: string = "";

        const protocol = this._sslMode ? "https://" : "http://";
        let url;
        if ((Object as any).values(RemmeMethods).includes(method)) {
            url = this._nodeAddress;
        } else if ((Object as any).values(ValidatorMethods).includes(method)) {
            if (payload) {
                methodUrl += `${method}/${payload}${method === RemmeMethods.userPublicKeys ? "/pub_keys" : ""}`;
            }
            url = `${this._nodeAddress}/validator/`;
        }
        return `${protocol}${url}${methodUrl}`;
    }

    private _throwErrorReceive({ error }: ErrorReceived): void {
        if (typeof error === "string") {
            throw new Error(error);
        }
        if (error.message) {
            throw new Error(error.message);
        }
    }
}

export {
    RemmeMethods,
    ValidatorMethods,
    RemmeRest,
    IRemmeRest,
    INetworkConfig,
};
