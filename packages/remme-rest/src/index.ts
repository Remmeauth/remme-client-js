import { HttpClient, AxiosRequestConfig } from "remme-http-client";
import { IRemmeRest } from "./interface";
import { ErrorReceived, IQueryParams, RemmeMethods, ValidatorMethods, INetworkConfig } from "./models";

class RemmeRest implements IRemmeRest {
    private readonly _nodeAddress: string;
    private readonly _socketAddress: string;
    private readonly _validatorAddress: string;
    private readonly _sslMode: boolean;

    public constructor({ nodeAddress, apiPort, socketPort, validatorPort, sslMode }: INetworkConfig) {
        this._nodeAddress = `${nodeAddress}:${apiPort}`;
        this._socketAddress = `${nodeAddress}:${socketPort}`;
        this._validatorAddress = `${nodeAddress}:${validatorPort}`;
        this._sslMode = sslMode;
    }

    public nodeAddress = (): string => this._nodeAddress;
    public socketAddress = (): string => this._socketAddress;
    public sslMode = (): boolean => this._sslMode;

    public async getRequest
    <Output>(method: RemmeMethods | ValidatorMethods, urlParam?: string, queryParam?: IQueryParams)
        : Promise<Output> {
        const url = this._getUrlForRequest(method, urlParam);
        return await this._sendRequest<IQueryParams, Output>("GET", url, queryParam);
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
        try {
            const options: AxiosRequestConfig = {
                url,
                method,
            };
            if (payload) {
                options[method.toUpperCase() === "GET" ? "params" : "data"] = payload;
            }
            let response;
            response = await HttpClient.send(options);
            this._checkIfErrorReceive(response.data);
            return response.data;
        } catch (e) {
            throw new Error(`Please check if your node running at http://${this._nodeAddress}`);
        }
    }

    private _getUrlForRequest(method: RemmeMethods | ValidatorMethods, payload?: string): string {
        let methodUrl: string = method;

        if (payload) {
           methodUrl += `/${payload}${method === RemmeMethods.userPublicKeys ? "/pub_keys" : ""}`;
        }

        const protocol = this._sslMode ? "https://" : "http://";
        let url;
        if ((Object as any).values(RemmeMethods).includes(method)) {
            url = `${this._nodeAddress}/api/v1/`;
        } else if ((Object as any).values(ValidatorMethods).includes(method)) {
            url = `${this._validatorAddress}/`;
        }
        return `${protocol}${url}${methodUrl}`;
    }

    private _checkIfErrorReceive({ error }: ErrorReceived): void {
        if (error) {
            throw new Error(error);
        }
    }
}

export {
    RemmeMethods,
    ValidatorMethods,
    RemmeRest,
    IRemmeRest,
};
