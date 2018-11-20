import { IKeys, KeyDto } from "./index";
import { IRemmeKeys } from "../interface";
declare class ECDSA extends KeyDto implements IRemmeKeys {
    constructor({privateKey, publicKey}: IKeys);
    static generateKeyPair(): {
        publicKey: any;
        privateKey: any;
    };
    static getAddressFromPublicKey(publicKey: any): string;
    sign(data: string): string;
    verify(data: string, signature: string): boolean;
}
export { ECDSA };
