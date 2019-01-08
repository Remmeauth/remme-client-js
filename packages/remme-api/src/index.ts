import { HttpClient, AxiosRequestConfig } from "remme-http-client";
import { IRemmeApi } from "./interface";
import { RemmeMethods, INetworkConfig } from "./models";

/**
 * Default config for creating url that passed to RemmeRest constructor;
 * @type {{nodeAddress: string; nodePort: string; sslMode: boolean}}
 */
const DEFAULT_NETWORK_CONFIG = {
    nodeAddress: "localhost",
    nodePort: "8080",
    sslMode: false,
};

/**
 * Main class that send requests to our REMME protocol;
 * Check JSON-RPC API specification:
 *      https://remmeio.atlassian.net/wiki/spaces/WikiREMME/pages/292814862/RPC+API+specification.
 * @param {string} nodeAddress
 * @param {string | number} nodePort
 * @param {boolean} sslMode
 *
 * @example
 * ```typescript
 * import { RemmeApi, RemmeMethods } from "remme-api";
 *
 * const remmeApi = new RemmeApi({
 *      nodeAddress: "localhost",
 *      nodePort: 8080,
 *      sslMode: false,
 * });
 *
 * const response = await remmeApi.sendRequest<object>(RemmeMethods.fetchBlocks);
 * console.log(response);
 * ```
 */
class RemmeApi implements IRemmeApi {

    // index signature
    [key: string]: any;

    private readonly _networkConfig: INetworkConfig;

    private _getUrlForRequest(): string {
        const { nodeAddress, nodePort, sslMode} = this._networkConfig;
        return `${sslMode ? "https://" : "http://"}${nodeAddress}:${nodePort}`;
    }

    private _getRequestConfig<Input>(method: RemmeMethods, payload?: Input): AxiosRequestConfig {
        const options: AxiosRequestConfig = {
            url: this._getUrlForRequest(),
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
        return options;
    }

    /**
     * Constructor can implement with different sets of params. By default params for constructor are:
     * nodeAddress: "localhost"
     * nodePort: 8080
     * sslMode: false
     * @example
     * Implementation with all params.
     * ```typescript
     * import { RemmeRest, RemmeMethods } from "remme-rest";
     *
     * const remmeRest = new RemmeRest({
     *      nodeAddress: "localhost",
     *      nodePort: 8080,
     *      sslMode: false,
     * });
     * ```
     *
     * Implementation with one param
     * ```typescript
     * import { RemmeRest, RemmeMethods } from "remme-rest";
     *
     * const remmeRest = new RemmeRest({
     *      nodeAddress: "localhost"
     * });
     * ```
     *
     * Implementation without params
     * ```typescript
     * import { RemmeRest, RemmeMethods } from "remme-rest";
     *
     * const remmeRest = new RemmeRest();
     * ```
     */
    public constructor({
                           nodeAddress = "localhost",
                           nodePort = 8080,
                           sslMode = false,
    }: INetworkConfig = DEFAULT_NETWORK_CONFIG) {
        this._networkConfig = {
            nodeAddress,
            nodePort,
            sslMode,
        };
    }

    /**
     * Return network config object which contain domain name, port and ssl.
     * @returns {INetworkConfig}
     */
    public get networkConfig(): INetworkConfig {
        return this._networkConfig;
    }

    public async sendRequest<Output>(method: RemmeMethods): Promise<Output>;
    public async sendRequest<Input, Output>(method: RemmeMethods, payload?: Input): Promise<Output>;
    /**
     * Make and send request with given method and payload.
     * Create url from given network config
     * Get JSON-RPC method and create request config in correspond to this spec https://www.jsonrpc.org/specification.
     * @param {RemmeMethods} method
     * @param {Input} payload
     * @returns {Promise<Output>}
     */
    public async sendRequest<Input, Output>(method: RemmeMethods, payload?: Input): Promise<Output> {
        const options = this._getRequestConfig(method, payload);
        const response = await HttpClient.send(options);
        if (response) {
            if (response.data.error) {
                throw new Error(response.data.error.message);
            } else {
                return response.data.result;
            }
        } else {
            throw new Error(
                `Please check if your node running at ${this._getUrlForRequest()}`,
            );
        }
    }

}

export {
    RemmeApi,
    IRemmeApi,
    RemmeMethods,
    INetworkConfig,
    DEFAULT_NETWORK_CONFIG,
};
