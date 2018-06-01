export declare class RemmeAccount {
    private _signer;
    remChainAddress: string;
    privateKey: any;
    constructor(signer: any, privateKey: any);
    sign(transaction: any): any;
}
