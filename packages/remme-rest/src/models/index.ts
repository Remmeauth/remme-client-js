export { RemmeMethods } from "./remme-methods";

/**
 * Network configuration.
 * By default:
 *  nodeAddress is localhost,
 *  nodePort is 8080,
 *  sslMode is false
 */
export interface INetworkConfig {
    nodeAddress?: string;
    nodePort?: string | number;
    sslMode?: boolean;
}
