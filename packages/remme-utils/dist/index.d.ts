/// <reference types="node-forge" />
import * as forge from "node-forge";
import { ITransactionResponse } from "./interface";
declare module "node-forge" {
    namespace pki {
        function certificationRequestToPem(cert: Certificate, maxline?: number): PEM;
        function certificationRequestFromPem(pem: PEM, computeHash?: boolean, strict?: boolean): Certificate;
        function createCertificationRequest(): Certificate;
    }
}
declare class BaseTransactionResponse implements ITransactionResponse {
    batchId: string;
    private _socket;
    constructor(socket: string);
    closeConnection(): void;
    connectToWebSocket(): void;
}
export { forge, BaseTransactionResponse };
