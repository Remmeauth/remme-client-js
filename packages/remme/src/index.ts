import { RemmeRest, IRemmeRest } from "remme-rest";
import { RemmeTransactionService, IRemmeTransactionService } from "remme-transaction-service";
import { RemmeCertificate, IRemmeCertificate } from "remme-certificate";
import { RemmePublicKeyStorage, IRemmePublicKeyStorage } from "remme-public-key-storage";
import { RemmeToken, IRemmeToken } from "remme-token";
import { RemmeAccount, IRemmeAccount } from "remme-account";
import { RemmeBatch, IRemmeBatch } from "remme-batch";
import { RemmeSwap, IRemmeSwap } from "remme-atomic-swap";
import { RemmeBlockchainInfo, IRemmeBlockchainInfo} from "remme-blockchain-info";

import { IRemmeClient, ClientInitInterface } from "./interface";

const defaultConfig = {
    nodeAddress: "localhost",
    socketPort: "9080",
    apiPort: "8080",
    validatorPort: "8008",
    sslMode: false,
};

namespace Remme {
    export class Client implements IRemmeClient {
        private readonly _remmeRest: IRemmeRest;
        private _account: IRemmeAccount;
        public transaction: IRemmeTransactionService;
        public publicKeyStorage: IRemmePublicKeyStorage;
        public certificate: IRemmeCertificate;
        public token: IRemmeToken;
        public batch: IRemmeBatch;
        public swap: IRemmeSwap;
        public blockchainInfo: IRemmeBlockchainInfo;

        public constructor({
                               privateKeyHex = "",
                               networkConfig = defaultConfig,
                           }: ClientInitInterface = {
            privateKeyHex: "",
            networkConfig: defaultConfig,
        }) {
            networkConfig = {
                ...defaultConfig,
                ...networkConfig,
            };
            this._remmeRest = new RemmeRest(networkConfig);
            this._account = new RemmeAccount(privateKeyHex);
            this.transaction = new RemmeTransactionService(this._remmeRest, this._account);
            this.publicKeyStorage = new RemmePublicKeyStorage(this._remmeRest, this.transaction, this._account);
            this.certificate = new RemmeCertificate(this.publicKeyStorage);
            this.token = new RemmeToken(this._remmeRest, this.transaction);
            this.batch = new RemmeBatch(this._remmeRest);
            this.swap = new RemmeSwap(this._remmeRest, this.transaction);
            this.blockchainInfo = new RemmeBlockchainInfo(this._remmeRest);
        }

        public set account(remmeAccount: IRemmeAccount) {
            if (!remmeAccount) {
                throw new Error("Account is missing in attributes. Please give the account.");
            }
            if (!remmeAccount.privateKeyHex || !remmeAccount.sign || !remmeAccount.publicKeyHex) {
                throw new Error("Given remmeAccount is not a valid");
            }
            this._account = remmeAccount;
        }

        public get account(): IRemmeAccount {
            return this._account;
        }

        public static generateAccount(): IRemmeAccount {
            return new RemmeAccount();
        }
    }
}

export = Remme;
