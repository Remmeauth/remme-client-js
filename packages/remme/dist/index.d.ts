import { IRemmeTransactionService } from "remme-transaction-service";
import { IRemmeCertificate } from "remme-certificate";
import { IRemmePublicKeyStorage } from "remme-public-key-storage";
import { IRemmeToken } from "remme-token";
import { IRemmeAccount } from "remme-account";
import { IRemmeBatch } from "remme-batch";
import { IRemmeSwap } from "remme-atomic-swap";
import { IRemmeBlockchainInfo } from "remme-blockchain-info";
import { IRemmeClient, IClientInit } from "./interface";
/**
 * Main namespace. Which include all interaction with our client for developers.
 */
declare namespace Remme {
    /**
     * Class representing a client for Remme.
     */
    class Client implements IRemmeClient {
        private readonly _remmeRest;
        private _account;
        transaction: IRemmeTransactionService;
        publicKeyStorage: IRemmePublicKeyStorage;
        certificate: IRemmeCertificate;
        token: IRemmeToken;
        batch: IRemmeBatch;
        swap: IRemmeSwap;
        blockchainInfo: IRemmeBlockchainInfo;
        /**
         * @param privateKeyHex - The hex of private key. Which is used for creating account in library
         * which would sign transactions.
         * @param networkConfig - The config of network.
         *
         * @example
         *
         * Create a client. With all configuration.
         *
         * ```typescript
         * const networkConfig = {
         *      nodeAddress: "localhost",
         *      socketPort: "9080",
         *      apiPort: "8080",
         *      validatorPort: "8008",
         *      sslMode: false,
         * };
         *
         * const privateKeyHex = "7f752a99bbaf6755dc861bb4a7bb19acb913948d75f3b718ff4545d01d9d4ff5";
         *
         * const remme = new Remme.Client({
         *      privateKeyHex,
         *      newtworkConfig,
         * });
         * ```
         * @example
         *
         * But you also can initialize Client only with one networkConfig parameter.
         * In this case account would be creating from newly creating private key.
         *
         * ```typescript
         * const remme = new Remme.Client({
         *      networkConfig: {
         *          nodeAddress: "localhost",
         *      }
         * });
         * ```
         * @example
         *
         * Also you can set only a privateKeyHex parameter. So networkConfig would be this: {
         *      nodeAddress: "localhost",
         *      socketPort: "9080",
         *      apiPort: "8080",
         *      validatorPort: "8008",
         *      sslMode: false
         * }.
         *
         * ```typescript
         * const remme = new Remme.Client({
         *      privateKeyHex,
         * });
         * ```
         * @example
         *
         * Or initialize client without any parameters
         *
         * ```typescript
         * const remme = new Remme.Client();
         * ```
         */
        constructor({privateKeyHex, networkConfig}?: IClientInit);
        account: IRemmeAccount;
        static generateAccount(): IRemmeAccount;
    }
}
export = Remme;
