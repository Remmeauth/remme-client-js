import { INetworkConfig } from "remme-utils";
import { IRemmeApi } from "./interface";
import { RemmeMethods } from "./models";
/**
 * Default config for creating url that passed to RemmeRest constructor;
 * @type {{nodeAddress: string; nodePort: string; sslMode: boolean}}
 */
declare const DEFAULT_NETWORK_CONFIG: {
    nodeAddress: string;
    nodePort: string;
    sslMode: boolean;
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
declare class RemmeApi implements IRemmeApi {
    [key: string]: any;
    private readonly _networkConfig;
    private _getUrlForRequest();
    private _getRequestConfig<Input>(method, payload?);
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
    constructor({nodeAddress, nodePort, sslMode}?: INetworkConfig);
    /**
     * Return network config object which contain domain name, port and ssl.
     * @returns {INetworkConfig}
     */
    readonly networkConfig: INetworkConfig;
    sendRequest<Output>(method: RemmeMethods): Promise<Output>;
    sendRequest<Input, Output>(method: RemmeMethods, payload?: Input): Promise<Output>;
}
export { RemmeApi, IRemmeApi, RemmeMethods, INetworkConfig, DEFAULT_NETWORK_CONFIG };
