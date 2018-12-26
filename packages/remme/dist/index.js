"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var remme_keys_1 = require("remme-keys");
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
        }
        Object.defineProperty(Client.prototype, "events", {
            /* tslint:disable */
            /**
             * This properties hold implementation of RemmeWebSocketEvents,
             * which get a possibility to listen events from validator about transactions.
             *
             * @example
             *
             * Subscribe to event
             * ```typescript
             * import { RemmeEvents } from "remme-web-socket-events";
             *
             * remme.events.subscribe({
             *     events: RemmeEvents.SwapAll,
             *     // lastKnownBlockId <-- also can be set if you know it.
             * }, (err, res) => {
             *     console.log(res);
             * });
             * ```
             *
             * Unsubscribe
             * ```typescript
             * remme.events.unsubscribe();
             * ```
             */
            /* tslint:enable */
            get: function () {
                return new remme_web_socket_events_1.RemmeWebSocketsEvents(this._remmeApi.nodeAddress, this._remmeApi.sslMode);
            },
            enumerable: true,
            configurable: true
        });
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
             * Provide an account which sign the transactions that send to our nodes.
             * For account use ECDSA (secp256k1) key pair
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
    /* tslint:disable */
    /**
     * Class that works with different types of keys.
     * For now it is RSA, EdDSA (ED25519), ECDSA (secp256k1).
     *
     * @example
     * If you don't have key pair you can generate it.
     * ```typescript
     * import { KeyType } from "remme-keys";
     *
     * const keys = Remme.Keys.generateKeyPair(KeyType.RSA); // Our chain works only with RSA now.
     *
     * // then you can sign some data. For rsa key type you should provide RSASignaturePadding (by default PSS)
     * const signature = keys.sign("some data");
     * console.log(keys.verify(signature, "some data")); // true
     *
     * // or you can store it in the chain. For rsa key type you should provide RSASignaturePadding (by default EMPTY)
     *  const publicKeyStoring = await remme.publicKeyStorage.store({
     *       data: "store data",
     *       keys,
     *       rsaSignaturePadding: RSASignaturePadding.PSS
     *       validFrom: Math.round(Date.now() / 1000),
     *       validTo: Math.round(Date.now() / 1000 + 1000)
     *  });
     * ```
     *
     * If you have private key. You can construct RemmeKeys based on private key.
     * ```typescript
     * import { KeyType } from "remme-keys";
     * import { privateKeyFromPem } from "remme-utils";
     *
     * const privateKey = "-----BEGIN RSA PRIVATE KEY-----\r\nMIIEowIBAAKCAQEAkhdw64WKrvXCWtGsNeVTPKDPpcHN0kcF4acvfPauDE8TpIFu\r\n8rFQdnGdBldJMo+iHC4VkEc7SqP0Z7bynBXZze6YAsi7VUggO+5kDuJnKrg0VJ5s\r\nwfV/Jdvj9ev1iG1TeVTAyp1Uvjmek9uAh6DgobdtWM/VpVYsbBcMT4XXpzmuv0qk\r\nEf9YmR3kJ5SBGdkb6jaOnjJWO0O6kOUO54y06wr0BXqYWWQTnGC3DJf2iqu68Ceo\r\nZsg/dRNs1zXP4x00GyOW7OdnmMUsySquf//KHUlnD3Oa1TyWzjF6NcMWv0PgDg6u\r\n8q4739X0ueBNDpXJyiMMpQUZ/8YbW/Ijdfv7DQIDAQABAoIBADRnHCYfXMOte+2/\r\n0Bn1DIpu1I0Mm5uVxlJO+gXFJmFb7BvSIc4ENGyIDF896A+u3eNl1G5QXsBDV2Ps\r\nh9HdNKddskEtZ6ULniRhOprsMz1rnbnMqg5Y1SbrXTXVUdmB/bND53PGQ6OIX42B\r\n6vS7jFf1x89XnbcU1hJfohbUV6qvwr+hyrvrV859LM80rErCKGXXi6gtiRBiTYA3\r\n2qgO+F/ntmoU638XDzeIhKNjCP+KcWcQX1TRlrcuKfPKfCttHTb1MCGWnrOqy56w\r\nU628Iz4lKfjCOOdAXvyDRBEFSPKfriuB5JQQ67cZ9w783/2ZChhAY4wzBqvgnnlo\r\np6cPXDECgYEA+shoBswhqkA81RHxdkMoM9/iGwfkdFwxr9TqHGN7+L0hRXJlysKP\r\npBFX7Wg6GWF3BDHQzLoWQCEox0NgHbAVTC5DBxjIEjRemmlYEeAPqVRTub1lfp37\r\nYcK8BqsllDgXsqlQQNKqqVj4V2y/PO6NzlHWN9inJrp8ZZKSKPSamq8CgYEAlSF7\r\nDB0STde20E+ZPzQZi7zLWl59yM29mlKujlRktp2vl3foRJgQsndOAIc6k4+ImXR8\r\ngtfwpCYrXTQhJE4GHO/E/52vuwkVVz9qN5ZmgzR13yzlicCVmfZ7aaZ6jblNiQ1G\r\ngnIx1chcb8Vl5fncmaoa9SgefwWciPERNg31RQMCgYEApH1SjjLSWgMsY20Tfchq\r\n1Cui+Kviktft1zDGJbyzEeGrswtn7OhUov6lN5jHkuI02FF8bOwZsBKP1rNAlfhq\r\n377wQ/VjNV2YN5ulIoRegWhISmoJ6lThD6xU++LCEUgBczRO6VXEjrNGoME5ZlPq\r\nO0u+QH8gk+x5r33F1Isr5Q0CgYBHrmEjsHGU4wPnWutROuywgx3HoTWaqHHjVKy8\r\nkwoZ0O+Owb7uAZ28+qWOkXFxbgN9p0UV60+qxwH++ciYV7yOeh1ZtGS8ZSBR4JRg\r\nhbVeiX/CtyTZsqz15Ujqvm+X4aLIJo5msxcLKBRuURaqlRAY+G+euRr3eS4FkMHy\r\nFoF3GwKBgFDNeJc7VfbQq2toRSxCNuUTLXoZPrPfQrV+mA9umGCep44Ea02xIKQu\r\nbYpYghpdbASOp6fJvBlwjI8LNX3dC/PfUpbIG84bVCokgBCMNJQ+/DBuPBt7L29A\r\n7Ra1poXMbXt0nF3LgAtZHveRmVDtcr52dZ/6Yd2km5mAHj+4yPZo\r\n-----END RSA PRIVATE KEY-----\r\n"
     * const keys = new Remme.Keys({
     *      keyType: KeyType.RSA,
     *      privateKey: privateKeyFromPem(privateKey),
     * }); // Our chain works only with RSA now.
     * ```
     *
     * If you have public key. You can get an address for it.
     * ```typescript
     * import { KeyType } from "remme-keys";
     * import { publicKeyFromPem } from "remme-utils";
     *
     * const publicKey = "-----BEGIN PUBLIC KEY-----\r\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkhdw64WKrvXCWtGsNeVT\r\nPKDPpcHN0kcF4acvfPauDE8TpIFu8rFQdnGdBldJMo+iHC4VkEc7SqP0Z7bynBXZ\r\nze6YAsi7VUggO+5kDuJnKrg0VJ5swfV/Jdvj9ev1iG1TeVTAyp1Uvjmek9uAh6Dg\r\nobdtWM/VpVYsbBcMT4XXpzmuv0qkEf9YmR3kJ5SBGdkb6jaOnjJWO0O6kOUO54y0\r\n6wr0BXqYWWQTnGC3DJf2iqu68CeoZsg/dRNs1zXP4x00GyOW7OdnmMUsySquf//K\r\nHUlnD3Oa1TyWzjF6NcMWv0PgDg6u8q4739X0ueBNDpXJyiMMpQUZ/8YbW/Ijdfv7\r\nDQIDAQAB\r\n-----END PUBLIC KEY-----\r\n";
     * const address = Remme.getAddressFromPublicKey(KeyType.RSA, publicKeyFromPem(publicKey)); // Our chain works only with RSA now.
     * ```
     */
    /* tslint:enable */
    var Keys = /** @class */ (function (_super) {
        __extends(Keys, _super);
        function Keys() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Keys;
    }(remme_keys_1.RemmeKeys));
    Remme.Keys = Keys;
})(Remme || (Remme = {}));
module.exports = Remme;
//# sourceMappingURL=index.js.map