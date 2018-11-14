import { NewPubKeyPayload } from "remme-protobuf";
import { GenerateOptions, KeyDto } from "./index";
import { IRemmeKeys } from "../interface";
declare class RSA extends KeyDto implements IRemmeKeys {
    private readonly _rsaKeySize;
    private _calculateSaltLength(md);
    constructor(privateKey: any, publicKey?: any);
    static generateKeyPair({rsaKeySize}?: GenerateOptions): Promise<any>;
    static getAddressFromPublicKey(publicKey: any): string;
    sign(data: string, rsaSignaturePadding?: NewPubKeyPayload.RSASignaturePadding): string;
    verify(signature: string, data: string, rsaSignaturePadding?: NewPubKeyPayload.RSASignaturePadding): boolean;
}
export { RSA };
