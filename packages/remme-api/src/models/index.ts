export { RemmeMethods } from "./remme-methods";
export {
    nodeAddressValidator,
    nodePortValidator,
} from "./validators";

/**
 * Network configuration.
 * By default: see DEFAULT_NETWORK_CONFIG
 *  nodeAddress is localhost,
 *  nodePort is 8080,
 *  sslMode is false
 */
export interface INetworkConfig {
    nodeAddress?: string;
    nodePort?: string | number;
    sslMode?: boolean;
}
