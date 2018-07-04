export interface ErrorReceived {
    error?: string;
}

export interface IQueryParams {
    [propName: string]: string | number;
}

export { RemmeMethods } from "./remme-methods";
export { ValidatorMethods } from "./validator-methods";

export interface INetworkConfig {
    nodeAddress: string;
    socketPort: string | number;
    apiPort: string | number;
    validatorPort: string | number;
    sslMode: boolean;
}
