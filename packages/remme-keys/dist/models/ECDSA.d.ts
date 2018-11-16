import { KeyDto } from "./index";
import { IRemmeKeys } from "../interface";
declare class ECDSA extends KeyDto implements IRemmeKeys {
    constructor(privateKey: any, publicKey?: any);
    static generateKeyPair(): {
        publicKey: any;
        privateKey: any;
    };
    static getAddressFromPublicKey(publicKey: any): string;
    sign(data: string): string;
    verify(signature: string, data: string): boolean;
}
export { ECDSA };
