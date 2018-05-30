import { createContext, CryptoFactory } from "sawtooth-sdk/signing";
import { RemmeRest } from "remme-rest";
import { RemmeToken } from "remme-token";

import { IRemmePersonal } from "./interface";
import { RemmeAccount } from "./models";

class RemmePersonal implements IRemmePersonal {
    private readonly _remmeRest: RemmeRest;
    private readonly _pathToKeyStore: string;
    private _remmeAccount: RemmeAccount;

    public constructor(remmeRest: RemmeRest = new RemmeRest(), pathToKeyStore: string = "") {
        this._remmeRest = remmeRest;
        this._pathToKeyStore = pathToKeyStore;
    }

    public generateAccount(): RemmeAccount {
        const context = createContext("secp256k1");
        const privateKey = context.newRandomPrivateKey();
        const signer = CryptoFactory(context).newSigner(privateKey);
        this._remmeAccount = new RemmeAccount(signer, privateKey);
        return this._remmeAccount;
    }

    public getAddress(): string {
        return this._remmeAccount.remChainAdress;
    }

    public async getBalance(): Promise<number> {
        const token = new RemmeToken(this._remmeRest);
        return await token.getBalance(this._remmeAccount.remChainAdress);
    }
}

export {
    RemmePersonal,
    IRemmePersonal,
};
