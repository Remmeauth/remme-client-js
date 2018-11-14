"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var remme_api_1 = require("remme-api");
var remme_transaction_service_1 = require("remme-transaction-service");
var remme_certificate_1 = require("remme-certificate");
var remme_public_key_storage_1 = require("remme-public-key-storage");
var remme_token_1 = require("remme-token");
var remme_account_1 = require("remme-account");
var remme_atomic_swap_1 = require("remme-atomic-swap");
var remme_blockchain_info_1 = require("remme-blockchain-info");
var remme_web_socket_events_1 = require("remme-web-socket-events");
/**
 * Main namespace. Which include all interaction with our client for developers.
 */
var Remme;
(function (Remme) {
    /**
     * Class representing a client for Remme.
     */
    var Client = /** @class */ (function () {
        /**
         * @param clientInit.privateKeyHex - The hex of private key. Which is used for creating account in library
         * which would sign transactions.
         * @param clientInit.networkConfig - The config of network.
         *
         * @example
         *
         * Create a client. With all configuration.
         *
         * ```typescript
         * const networkConfig = {
         *      nodeAddress: "localhost",
         *      nodePort: "8080",
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
         *
         * Also you can set only a privateKeyHex parameter. So networkConfig would be this: {
         *      nodeAddress: "localhost",
         *      nodePort: "8080",
         *      sslMode: false
         * }.
         *
         * ```typescript
         * const remme = new Remme.Client({
         *      privateKeyHex,
         * });
         * ```
         *
         * Or initialize client without any parameters
         *
         * ```typescript
         * const remme = new Remme.Client();
         * ```
         */
        function Client(clientInit) {
            if (clientInit === void 0) { clientInit = {
                privateKeyHex: "",
                networkConfig: remme_api_1.DEFAULT_NETWORK_CONFIG,
            }; }
            var _a = clientInit.networkConfig, networkConfig = _a === void 0 ? remme_api_1.DEFAULT_NETWORK_CONFIG : _a;
            var _b = clientInit.privateKeyHex, privateKeyHex = _b === void 0 ? "" : _b;
            networkConfig = __assign({}, remme_api_1.DEFAULT_NETWORK_CONFIG, networkConfig);
            this._remmeApi = new remme_api_1.RemmeApi(networkConfig);
            this._account = new remme_account_1.RemmeAccount(privateKeyHex);
            this.transaction = new remme_transaction_service_1.RemmeTransactionService(this._remmeApi, this._account);
            this.publicKeyStorage = new remme_public_key_storage_1.RemmePublicKeyStorage(this._remmeApi, this._account, this.transaction);
            this.certificate = new remme_certificate_1.RemmeCertificate(this.publicKeyStorage);
            this.token = new remme_token_1.RemmeToken(this._remmeApi, this.transaction);
            this.swap = new remme_atomic_swap_1.RemmeSwap(this._remmeApi, this.transaction);
            this.blockchainInfo = new remme_blockchain_info_1.RemmeBlockchainInfo(this._remmeApi);
            this.events = new remme_web_socket_events_1.RemmeWebSocketsEvents(this._remmeApi.nodeAddress, this._remmeApi.sslMode);
        }
        Object.defineProperty(Client.prototype, "account", {
            /* tslint:disable */
            /**
             * Get information about current account
             *
             * @example
             *
             * ```typescript
             * console.log(remme.account);
             * ```
             *
             * Provide an account which sign the transactions that send to our nodes
             *
             * @example
             *
             * ```typescript
             * const account = Remme.Client.generateAccount();
             * remme.account = account;
             * ```
             */
            /* tslint:enable */
            get: function () {
                return this._account;
            },
            set: function (remmeAccount) {
                if (!remmeAccount) {
                    throw new Error("Account is missing in attributes. Please give the account.");
                }
                if (!remmeAccount.privateKeyHex || !remmeAccount.sign || !remmeAccount.publicKeyHex) {
                    throw new Error("Given remmeAccount is not a valid");
                }
                this._account = remmeAccount;
            },
            enumerable: true,
            configurable: true
        });
        /* tslint:disable */
        /**
         * Generate a new account
         *
         * @example
         *
         * ```typescript
         * const account = Remme.Client.generateAccount();
         * console.log(account);
         * ```
         */
        /* tslint:enable */
        Client.generateAccount = function () {
            return new remme_account_1.RemmeAccount();
        };
        return Client;
    }());
    Remme.Client = Client;
})(Remme || (Remme = {}));
module.exports = Remme;
//# sourceMappingURL=index.js.map