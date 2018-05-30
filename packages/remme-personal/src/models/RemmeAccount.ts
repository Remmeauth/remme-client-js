export class RemmeAccount {
    private _signer: any;
    public remChainAdress: string;
    public privateKey: string;

    constructor(signer: any, privateKey: any) {
        this._signer = signer;
        this.privateKey = privateKey;
        this.remChainAdress = signer.getPublicKey().asHex();
    }

    public sign(transaction: any) {
        return this._signer.sign(transaction);
    }
}
