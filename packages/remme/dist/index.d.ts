/// <reference types="node-forge" />
import { pki } from "node-forge";
import { IRemmeClient } from "./interface";
declare class RemmeClient implements IRemmeClient {
    private static createSignRequest(subject, keys);
    private static createSubject(commonName, email?);
    private readonly _remmeRest;
    private _rsaKeySize;
    constructor(nodeAdress?: string);
    createCertificate(commonName: string, email?: string): Promise<pki.Certificate>;
    storeCertificate(signingRequest: pki.Certificate): Promise<pki.Certificate>;
    checkCertificate(certificate: pki.Certificate): Promise<boolean>;
    private generateKeyPair();
}
export = RemmeClient;
