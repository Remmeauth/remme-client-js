// import { NewPubKeyPayload } from "remme-protobuf";
import { RemmeFamilyName } from "remme-utils";
import { RSASignaturePadding } from "./models";

export interface IRemmeKeys {
    address: string;
    publicKey: any;
    familyName: RemmeFamilyName;
    keyType: string | number;
    privateKey?: any;
    publicKeyBase64: string;
    privateKeyHex?: string;
    publicKeyHex?: string;
    privateKeyPem?: string;
    publicKeyPem?: string;

    sign(data: string, rsaSignaturePadding?: RSASignaturePadding): string;
    verify(signature: string, data: string): boolean;
}
