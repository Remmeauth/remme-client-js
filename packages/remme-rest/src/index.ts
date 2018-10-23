import { HttpClient, AxiosRequestConfig } from "remme-http-client";
import { IRemmeRest } from "./interface";
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
 * import { RemmeRest, RemmeMethods } from "remme-rest";
 *
 * const remmeRest = new RemmeRest({
 *      nodeAddress: "localhost",
 *      nodePort: 8080,
 *      sslMode: false,
 * });
 *
 * const response = await remmeRest.sendRequest<object>(RemmeMethods.fetchBlocks);
 * console.log(response);
 * ```
 */
class RemmeRest implements IRemmeRest {

    // index signature
    [key: string]: any;

    private readonly _nodeAddress: string;
    private readonly _sslMode: boolean;

    private _getUrlForRequest(): string {
        return `${this._sslMode ? "https://" : "http://"}${this._nodeAddress}`;
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
        this._nodeAddress = `${nodeAddress}:${nodePort}`;
        this._sslMode = sslMode;
    }

    /**
     * Return node address which contain domain name and port.
     * @returns {string}
     */
    public get nodeAddress(): string {
        return this._nodeAddress;
    }

    /**
     * Return ssl mode which was provided by user.
     * @returns {boolean}
     */
    public get sslMode(): boolean {
        return this._sslMode;
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
    RemmeRest,
    IRemmeRest,
    RemmeMethods,
    INetworkConfig,
    DEFAULT_NETWORK_CONFIG,
};
