export declare class RemmeAccount {
    private _signer;
    remChainAdress: string;
    privateKey: string;
    constructor(signer: any, privateKey: any);
    sign(transaction: any): any;
}
