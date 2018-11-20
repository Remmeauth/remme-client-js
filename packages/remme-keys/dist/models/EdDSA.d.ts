import { IRemmeKeys } from "../interface";
import { GenerateOptions, IKeys, KeyDto } from "./index";
declare class EdDSA extends KeyDto implements IRemmeKeys {
    constructor({privateKey, publicKey}: IKeys);
    static generateKeyPair({seed}?: GenerateOptions): any;
    static getAddressFromPublicKey(publicKey: any): string;
    sign(data: string): string;
    verify(data: string, signature: string): boolean;
}
export { EdDSA };
