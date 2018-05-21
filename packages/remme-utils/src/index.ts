import * as forge from "node-forge";
import { ITransactionResponse } from "./interface";

declare module "node-forge" {
    namespace pki {
        function certificationRequestToPem(cert: Certificate, maxline?: number): PEM;
        function certificationRequestFromPem(pem: PEM, computeHash?: boolean, strict?: boolean): Certificate;
        function createCertificationRequest(): Certificate;
    }
}

// TODO
class BaseTransactionResponse implements ITransactionResponse {
    public batchId: string;
    private _socket: string;

    public constructor(socket: string) {
        this._socket = socket;
    }

    public closeConnection(): void {
        return;
    }

    public connectToWebSocket(): void {
        return;
    }
}

export {
    forge,
    BaseTransactionResponse,
};
