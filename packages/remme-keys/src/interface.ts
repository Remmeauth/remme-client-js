// import { NewPubKeyPayload } from "remme-protobuf";
import { RemmeFamilyName } from "remme-utils";
import { RSASignaturePadding } from "./models";

export interface IRemmeKeys {
    address: string;
    publicKey: any;
    familyName: RemmeFamilyName;
    keyType: string;
    privateKey?: any;
    privateKeyHex?: string;
    publicKeyHex?: string;
    privateKeyPem?: string;
    publicKeyPem?: string;

    sign(data: string | Uint8Array, rsaSignaturePadding?: RSASignaturePadding): string;
    verify(data: string, signature: string): boolean;
}
