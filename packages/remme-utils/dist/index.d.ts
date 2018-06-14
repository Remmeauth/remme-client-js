/// <reference types="node-forge" />
import * as forge from "node-forge";
import { ITransactionResponse } from "./interface";
import { oids } from "./models";
import { hexToBytes, bytesToHex, getAddressFromData } from "./functions";
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
        function publicKeyToAsn1(publicKey: Key): any;
        function publicKeyToRSAPublicKey(publicKey: Key): any;
    }
    namespace md {
        namespace sha512 {
            function create(): MessageDigest;
        }
    }
    namespace pss {
        function create(any: any): any;
    }
    namespace mgf {
        namespace mgf1 {
            function create(any: any): any;
        }
    }
}
declare class BaseTransactionResponse implements ITransactionResponse {
    batchId: string;
    private _socket;
    socketAddress: string;
    constructor(socketAddress: string);
    connectToWebSocket(callback: any): void;
    closeWebSocket(): void;
    private getSocketQuery(subscribe?);
}
export { forge, BaseTransactionResponse, oids, hexToBytes, bytesToHex, getAddressFromData };
