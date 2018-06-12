// class RemmePersonal {
//     private readonly _remmeToken: RemmeToken;
//     private readonly _context: any;
//     private _remmeAccount: RemmeAccount;
//
//     public constructor(remmeToken: RemmeToken) {
//         this._remmeToken = remmeToken;
//         this._context = createContext("secp256k1");
//     }
//
//     public generateAccount(privateKeyHex?: string): RemmeAccount {
//         if (privateKeyHex && privateKeyHex.search(/^[0-9a-f]{64}$/) === -1) {
//             throw new Error("Given privateKey is not a valid");
//         }
//         let privateKey;
//         if (!privateKeyHex) {
//             privateKey = this._context.newRandomPrivateKey();
//         } else {
//             privateKey = Secp256k1PrivateKey.fromHex(privateKeyHex);
//         }
//         const signer = new CryptoFactory(this._context).newSigner(privateKey);
//         return new RemmeAccount(signer, privateKey);
//     }
//
//     public set remmeAccount(remmeAccount: RemmeAccount) {
//         if (!remmeAccount) {
//             throw new Error("Account is missing in attributes. Please give the account.");
//         }
//         if (!remmeAccount.privateKey || !remmeAccount.sign || !remmeAccount.remChainAddress) {
//             throw new Error("Given remmeAccount is not a valid");
//         }
//         this._remmeAccount = remmeAccount;
//     }
// }
//# sourceMappingURL=RemmeAccount.js.map