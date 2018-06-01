import { createContext, CryptoFactory } from "sawtooth-sdk/signing";
import { Secp256k1PrivateKey } from "sawtooth-sdk/signing/secp256k1";
import { RemmeRest } from "remme-rest";
import { RemmeToken } from "remme-token";

import { IRemmePersonal } from "./interface";
import { RemmeAccount } from "./models";

class RemmePersonal implements IRemmePersonal {
    private readonly _remmeRest: RemmeRest;
    private readonly _context: any;
    private _remmeAccount: RemmeAccount;

    public constructor(remmeRest: RemmeRest = new RemmeRest()) {
        this._remmeRest = remmeRest;
        this._context = createContext("secp256k1");
    }

    public generateAccount(privateKeyHex?: string): RemmeAccount {
        if (privateKeyHex && privateKeyHex.search(/^[0-9a-f]{64}$/) === -1) {
            throw new Error("Given privateKey is not a valid");
        }
        let privateKey;
        if (!privateKeyHex) {
            privateKey = this._context.newRandomPrivateKey();
        } else {
            privateKey = Secp256k1PrivateKey.fromHex(privateKeyHex);
        }
        const signer = new CryptoFactory(this._context).newSigner(privateKey);
        return new RemmeAccount(signer, privateKey);
    }

    public setAccount(remmeAccount: RemmeAccount): void {
        if (!remmeAccount) {
            throw new Error("Account is missing in attributes. Please give the account.");
        }
        if (!remmeAccount.privateKey || !remmeAccount.sign || !remmeAccount.remChainAddress) {
            throw new Error("Given remmeAccount is not a valid");
        }
        this._remmeAccount = remmeAccount;
    }

    public getAccount(): RemmeAccount {
        return this._remmeAccount;
    }

    public getAddress(): string {
        return this._remmeAccount.remChainAddress;
    }

    public async getBalance(): Promise<number> {
        const token = new RemmeToken(this._remmeRest);
        return await token.getBalance(this._remmeAccount.remChainAddress);
    }
}

export {
    RemmePersonal,
    IRemmePersonal,
};
