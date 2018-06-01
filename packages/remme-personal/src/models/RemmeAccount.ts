export class RemmeAccount {
    private _signer: any;
    public remChainAddress: string;
    public privateKey: any;

    constructor(signer: any, privateKey: any) {
        this._signer = signer;
        this.privateKey = privateKey;
        this.remChainAddress = signer.getPublicKey().asHex();
    }

    public sign(transaction: any) {
        return this._signer.sign(transaction);
    }
}
