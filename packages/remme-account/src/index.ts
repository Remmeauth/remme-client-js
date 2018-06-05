import { createContext, CryptoFactory } from "sawtooth-sdk/signing";
import { Secp256k1PrivateKey } from "sawtooth-sdk/signing/secp256k1";
import { getAddressFromData } from "remme-utils";

import { IRemmeAccount } from "./interface";

class RemmeAccount implements IRemmeAccount {
    private _signer: any;
    public address: string;
    public publicKeyHex: string;
    public privateKeyHex: string;

    constructor(privateKeyHex?: string) {
        if (privateKeyHex && privateKeyHex.search(/^[0-9a-f]{64}$/) === -1) {
            throw new Error("Given privateKey is not a valid");
        }
        const context = createContext("secp256k1");
        let privateKey;
        if (!privateKeyHex) {
            privateKey = context.newRandomPrivateKey();
        } else {
            privateKey = Secp256k1PrivateKey.fromHex(privateKeyHex);
        }
        this._signer = new CryptoFactory(context).newSigner(privateKey);
        this.privateKeyHex = privateKey.asHex();
        this.publicKeyHex = this._signer.getPublicKey().asHex();
        this.address = getAddressFromData(privateKeyHex, "account");
    }

    public get privateKey(): any {
        return Secp256k1PrivateKey.fromHex(this.privateKeyHex);
    }

    public sign(transaction: any): any {
        return this._signer.sign(transaction);
    }
}

export {
    RemmeAccount,
    IRemmeAccount,
};
