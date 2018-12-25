/// <reference types="node" />
import { forge } from "remme-utils";
import { GenerateOptions, IKeys, KeyDto, RSASignaturePadding } from "./index";
import { IRemmeKeys } from "../interface";
declare class RSA extends KeyDto implements IRemmeKeys {
    private readonly _rsaKeySize;
    private readonly _privateKeyObject;
    private readonly _publicKeyObject;
    private _calculateSaltLength(md);
    constructor({privateKey, publicKey}: IKeys);
    static generateKeyPair({rsaKeySize}?: GenerateOptions): Promise<{
        privateKey: Buffer;
        publicKey: Buffer;
    }>;
    static getAddressFromPublicKey(publicKey: Buffer): string;
    sign(data: string, rsaSignaturePadding?: RSASignaturePadding): string;
    verify(data: string, signature: string, rsaSignaturePadding?: RSASignaturePadding): boolean;
    static getPublicKeyFromObject(publicKey: forge.pki.Key): Buffer;
    static getPrivateKeyFromObject(privateKey: forge.pki.Key): Buffer;
    static getObjectFromPublicKey(publicKey: Buffer): forge.pki.Key;
    static getObjectFromPrivateKey(privateKey: Buffer): forge.pki.Key;
}
export { RSA };
