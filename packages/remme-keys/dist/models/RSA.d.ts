import { GenerateOptions, IKeys, KeyDto, RSASignaturePadding } from "./index";
import { IRemmeKeys } from "../interface";
declare class RSA extends KeyDto implements IRemmeKeys {
    private readonly _rsaKeySize;
    private _calculateSaltLength(md);
    constructor({privateKey, publicKey}: IKeys);
    static generateKeyPair({rsaKeySize}?: GenerateOptions): Promise<{
        privateKey: any;
        publicKey: any;
    }>;
    static getAddressFromPublicKey(publicKey: any): string;
    sign(data: string, rsaSignaturePadding?: RSASignaturePadding): string;
    verify(data: string, signature: string, rsaSignaturePadding?: RSASignaturePadding): boolean;
}
export { RSA };
