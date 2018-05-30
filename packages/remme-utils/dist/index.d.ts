/// <reference types="node-forge" />
import * as forge from "node-forge";
import { ITransactionResponse } from "./interface";
import { oids } from "./models";
declare global  {
    interface Window {
        WebSocket: any;
    }
}
declare module "node-forge" {
    namespace pki {
        interface Certificate {
            privateKey: Key;
        }
        function certificationRequestToPem(cert: Certificate, maxline?: number): PEM;
        function certificationRequestFromPem(pem: PEM, computeHash?: boolean, strict?: boolean): Certificate;
        function createCertificationRequest(): Certificate;
    }
}
declare class BaseTransactionResponse implements ITransactionResponse {
    batchId: string;
    private _socket;
    private _socketAddress;
    constructor(socketAddress: string);
    connectToWebSocket(callback: any): void;
    closeWebSocket(): void;
    private getSocketQuery(subscribe?);
}
export { forge, BaseTransactionResponse, oids };
