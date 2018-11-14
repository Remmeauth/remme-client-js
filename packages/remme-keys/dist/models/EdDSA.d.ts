import { IRemmeKeys } from "../index";
import { GenerateOptions, KeyDto } from "./index";
declare class EdDSA extends KeyDto implements IRemmeKeys {
    constructor(privateKey: any, publicKey?: any);
    static generateKeyPair({seed}: GenerateOptions): any;
    static getAddressFromPublicKey(publicKey: any): string;
    sign(data: string): string;
    verify(signature: string, data: string): boolean;
}
export { EdDSA };
