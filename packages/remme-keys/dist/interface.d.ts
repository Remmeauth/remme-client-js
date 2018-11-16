/// <reference types="node" />
import { NewPubKeyPayload } from "remme-protobuf";
export interface IRemmeKeys {
    address: string;
    publicKey: any;
    privateKey: any;
    keyType: string | number;
    publicKeyBase64: string;
    privateKeyHex?: string;
    publicKeyHex?: string;
    privateKeyPem?: string;
    publicKeyPem?: string;
    sign(data: Uint8Array | string, rsaSignaturePadding?: NewPubKeyPayload.RSASignaturePadding): any;
    verify(signature: Buffer | string, data: Uint8Array | string): boolean;
}
