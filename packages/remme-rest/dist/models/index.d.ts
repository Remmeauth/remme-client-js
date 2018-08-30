export interface ErrorReceived {
    error?: string | IValidatorError;
}
export interface IValidatorError {
    code: number;
    title: string;
    message: string;
}
export interface IQueryParams {
    [propName: string]: any;
}
export { RemmeMethods } from "./remme-methods";
export { ValidatorMethods } from "./validator-methods";
export interface INetworkConfig {
    nodeAddress: string;
    nodePort: string | number;
    sslMode: boolean;
}
