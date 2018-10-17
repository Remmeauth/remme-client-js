import { RemmeAccountPrivateKey, RemmeAccountPublicKey } from "./models";

export interface IRemmeAccount {
    familyName: string;
    publicKeyHex: string;
    privateKeyHex: string;
    address: string;
    privateKey: RemmeAccountPrivateKey;
    publicKey: RemmeAccountPublicKey;
    sign(transaction: Uint8Array | string): any;
    verify(signature: Buffer | string, transaction: Uint8Array | string): boolean;
}
