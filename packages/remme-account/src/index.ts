import { createContext, CryptoFactory } from "sawtooth-sdk/signing";
import { Secp256k1PrivateKey } from "sawtooth-sdk/signing/secp256k1";
import { getAddressFromData, hexToBytes } from "remme-utils";

import { IRemmeAccount } from "./interface";

class RemmeAccount implements IRemmeAccount {
    private _signer: any;
    private _familyName = "account";
    public mapping = "account_pub_key_mapping";
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
        this.address = getAddressFromData(this._familyName, this.publicKeyHex);
    }

    public get privateKey(): any {
        return Secp256k1PrivateKey.fromHex(this.privateKeyHex);
    }

    public sign(transaction: Uint8Array | string): any {
        if (typeof transaction === "string") {
            transaction = hexToBytes(transaction);
        }
        return this._signer.sign(transaction);
    }
}

export {
    RemmeAccount,
    IRemmeAccount,
};
