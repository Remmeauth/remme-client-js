/// <reference types="node" />
import { IKeys, KeyDto } from "./index";
import { IRemmeKeys } from "../interface";
declare class ECDSA extends KeyDto implements IRemmeKeys {
    constructor({privateKey, publicKey}: IKeys);
    static generateKeyPair(): {
        publicKey: any;
        privateKey: Buffer;
    };
    static getAddressFromPublicKey(publicKey: Buffer): string;
    sign(data: string): string;
    verify(data: string, signature: string): boolean;
}
export { ECDSA };
