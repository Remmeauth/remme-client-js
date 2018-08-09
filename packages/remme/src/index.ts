import { RemmeRest, IRemmeRest } from "remme-rest";
import { RemmeTransactionService, IRemmeTransactionService } from "remme-transaction-service";
import { RemmeCertificate, IRemmeCertificate } from "remme-certificate";
import { RemmePublicKeyStorage, IRemmePublicKeyStorage } from "remme-public-key-storage";
import { RemmeToken, IRemmeToken } from "remme-token";
import { RemmeAccount, IRemmeAccount } from "remme-account";
import { RemmeBatch, IRemmeBatch } from "remme-batch";
import { RemmeSwap, IRemmeSwap } from "remme-atomic-swap";
import { RemmeBlockchainInfo, IRemmeBlockchainInfo} from "remme-blockchain-info";

import { IRemmeClient, IClientInit } from "./interface";

const defaultConfig = {
    nodeAddress: "localhost",
    socketPort: "9080",
    apiPort: "8080",
    validatorPort: "8008",
    sslMode: false,
};
/**
 * Main namespace. Which include all interaction with our client for developers.
 */
namespace Remme {
    /**
     * Class representing a client for Remme.
     */
    export class Client implements IRemmeClient {
        private readonly _remmeRest: IRemmeRest;
        private _account: IRemmeAccount;
        /**
         * @hidden
         */
        public transaction: IRemmeTransactionService;
        /* tslint:disable */


        /**
         * This properties hold implementation of RemmePublicKeyStorage,
         * which get a possibility to work with public key.
         *
         * @example
         *
         * Store public key in the network. PrivateKey is used only for generation signature.
         *
         * ```typescript
         *      const remme = new Remme.Client();
         *      const certificatePEM = "-----BEGIN CERTIFICATE-----\r\nMIIDATCCAemgAwIBAgIHAVM4JmMVEDANBgkqhkiG9w0BAQsFADAAMB4XDTE4MDgw\r\nOTE0NTcxNFoXDTE5MDgwNDE0NTcxNFowgYExEjAQBgNVBAMTCXVzZXJOYW1lMTEd\r\nMBsGCSqGSIb3DQEJARMOdXNlckBlbWFpbC5jb20xDTALBgNVBCoTBEpvaG4xDjAM\r\nBgNVBAQTBVNtaXRoMQswCQYDVQQGEwJVUzEKMAgGAQATAzM2MDEUMBIGAQATDTE1\r\nMzM4MjY2MzE1MTAwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCSF3Dr\r\nhYqu9cJa0aw15VM8oM+lwc3SRwXhpy989q4MTxOkgW7ysVB2cZ0GV0kyj6IcLhWQ\r\nRztKo/RntvKcFdnN7pgCyLtVSCA77mQO4mcquDRUnmzB9X8l2+P16/WIbVN5VMDK\r\nnVS+OZ6T24CHoOCht21Yz9WlVixsFwxPhdenOa6/SqQR/1iZHeQnlIEZ2RvqNo6e\r\nMlY7Q7qQ5Q7njLTrCvQFephZZBOcYLcMl/aKq7rwJ6hmyD91E2zXNc/jHTQbI5bs\r\n52eYxSzJKq5//8odSWcPc5rVPJbOMXo1wxa/Q+AODq7yrjvf1fS54E0OlcnKIwyl\r\nBRn/xhtb8iN1+/sNAgMBAAEwDQYJKoZIhvcNAQELBQADggEBAHs/oTQRl2Dhlnk6\r\ncA0ZG5DDHvh2CFVcrKaA4DEgrVmPJ3YUL+xYzrkfhT7v8a53AImcBqrZmgN8y7I1\r\n8Yj1z3EQikCwkhVNI6yRpEU7icgqNsGBXzFJ2syH3Cntt2WOqND+M4vS/yL/XY0I\r\nVNo/goW/QoGHs5082ZsfUhZs1k9+wpVOygzug9orcd1myP6ddBu7dllcDDtpB0uC\r\nh9QxMh5mGZbai2MU0lSQqSoYqwbYosCcO+Ha/RI97/lvp1R89/5K9uFmRotDljLH\r\nvty07Cw2I1cHTYcUuZJr3WAmMiMvuCdwky3V3U6xqv1Q+LRNIvE1DqqFFeaEKbkC\r\nhj2Cw9o=\r\n-----END CERTIFICATE-----\r\n"
         *      const privateKey = "-----BEGIN RSA PRIVATE KEY-----\r\nMIIEowIBAAKCAQEAkhdw64WKrvXCWtGsNeVTPKDPpcHN0kcF4acvfPauDE8TpIFu\r\n8rFQdnGdBldJMo+iHC4VkEc7SqP0Z7bynBXZze6YAsi7VUggO+5kDuJnKrg0VJ5s\r\nwfV/Jdvj9ev1iG1TeVTAyp1Uvjmek9uAh6DgobdtWM/VpVYsbBcMT4XXpzmuv0qk\r\nEf9YmR3kJ5SBGdkb6jaOnjJWO0O6kOUO54y06wr0BXqYWWQTnGC3DJf2iqu68Ceo\r\nZsg/dRNs1zXP4x00GyOW7OdnmMUsySquf//KHUlnD3Oa1TyWzjF6NcMWv0PgDg6u\r\n8q4739X0ueBNDpXJyiMMpQUZ/8YbW/Ijdfv7DQIDAQABAoIBADRnHCYfXMOte+2/\r\n0Bn1DIpu1I0Mm5uVxlJO+gXFJmFb7BvSIc4ENGyIDF896A+u3eNl1G5QXsBDV2Ps\r\nh9HdNKddskEtZ6ULniRhOprsMz1rnbnMqg5Y1SbrXTXVUdmB/bND53PGQ6OIX42B\r\n6vS7jFf1x89XnbcU1hJfohbUV6qvwr+hyrvrV859LM80rErCKGXXi6gtiRBiTYA3\r\n2qgO+F/ntmoU638XDzeIhKNjCP+KcWcQX1TRlrcuKfPKfCttHTb1MCGWnrOqy56w\r\nU628Iz4lKfjCOOdAXvyDRBEFSPKfriuB5JQQ67cZ9w783/2ZChhAY4wzBqvgnnlo\r\np6cPXDECgYEA+shoBswhqkA81RHxdkMoM9/iGwfkdFwxr9TqHGN7+L0hRXJlysKP\r\npBFX7Wg6GWF3BDHQzLoWQCEox0NgHbAVTC5DBxjIEjRemmlYEeAPqVRTub1lfp37\r\nYcK8BqsllDgXsqlQQNKqqVj4V2y/PO6NzlHWN9inJrp8ZZKSKPSamq8CgYEAlSF7\r\nDB0STde20E+ZPzQZi7zLWl59yM29mlKujlRktp2vl3foRJgQsndOAIc6k4+ImXR8\r\ngtfwpCYrXTQhJE4GHO/E/52vuwkVVz9qN5ZmgzR13yzlicCVmfZ7aaZ6jblNiQ1G\r\ngnIx1chcb8Vl5fncmaoa9SgefwWciPERNg31RQMCgYEApH1SjjLSWgMsY20Tfchq\r\n1Cui+Kviktft1zDGJbyzEeGrswtn7OhUov6lN5jHkuI02FF8bOwZsBKP1rNAlfhq\r\n377wQ/VjNV2YN5ulIoRegWhISmoJ6lThD6xU++LCEUgBczRO6VXEjrNGoME5ZlPq\r\nO0u+QH8gk+x5r33F1Isr5Q0CgYBHrmEjsHGU4wPnWutROuywgx3HoTWaqHHjVKy8\r\nkwoZ0O+Owb7uAZ28+qWOkXFxbgN9p0UV60+qxwH++ciYV7yOeh1ZtGS8ZSBR4JRg\r\nhbVeiX/CtyTZsqz15Ujqvm+X4aLIJo5msxcLKBRuURaqlRAY+G+euRr3eS4FkMHy\r\nFoF3GwKBgFDNeJc7VfbQq2toRSxCNuUTLXoZPrPfQrV+mA9umGCep44Ea02xIKQu\r\nbYpYghpdbASOp6fJvBlwjI8LNX3dC/PfUpbIG84bVCokgBCMNJQ+/DBuPBt7L29A\r\n7Ra1poXMbXt0nF3LgAtZHveRmVDtcr52dZ/6Yd2km5mAHj+4yPZo\r\n-----END RSA PRIVATE KEY-----\r\n"
         *      const publicKey = "-----BEGIN PUBLIC KEY-----\r\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkhdw64WKrvXCWtGsNeVT\r\nPKDPpcHN0kcF4acvfPauDE8TpIFu8rFQdnGdBldJMo+iHC4VkEc7SqP0Z7bynBXZ\r\nze6YAsi7VUggO+5kDuJnKrg0VJ5swfV/Jdvj9ev1iG1TeVTAyp1Uvjmek9uAh6Dg\r\nobdtWM/VpVYsbBcMT4XXpzmuv0qkEf9YmR3kJ5SBGdkb6jaOnjJWO0O6kOUO54y0\r\n6wr0BXqYWWQTnGC3DJf2iqu68CeoZsg/dRNs1zXP4x00GyOW7OdnmMUsySquf//K\r\nHUlnD3Oa1TyWzjF6NcMWv0PgDg6u8q4739X0ueBNDpXJyiMMpQUZ/8YbW/Ijdfv7\r\nDQIDAQAB\r\n-----END PUBLIC KEY-----\r\n";
         *      const validFrom = Math.floor(Date.now() / 1000);
         *      const validTo = Math.floor(Date.now() / 1000) + 3.11e7;
         *      const store = await remme.publicKeyStorage.store({
         *          data: certificatePEM,
         *          publicKey,
         *          privateKey,
         *          validFrom,
         *          validTo,
         *      });
         *      store.connectToWebSocket((err: Error, resp: any) => {
         *          if (err) {
         *              throw new Error(err.message);
         *          }
         *          console.log(response);
         *      })
         * ```
         *
         * Revoke public key.
         *
         * ```typescript
         *      const publicKey = "-----BEGIN PUBLIC KEY-----\r\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkhdw64WKrvXCWtGsNeVT\r\nPKDPpcHN0kcF4acvfPauDE8TpIFu8rFQdnGdBldJMo+iHC4VkEc7SqP0Z7bynBXZ\r\nze6YAsi7VUggO+5kDuJnKrg0VJ5swfV/Jdvj9ev1iG1TeVTAyp1Uvjmek9uAh6Dg\r\nobdtWM/VpVYsbBcMT4XXpzmuv0qkEf9YmR3kJ5SBGdkb6jaOnjJWO0O6kOUO54y0\r\n6wr0BXqYWWQTnGC3DJf2iqu68CeoZsg/dRNs1zXP4x00GyOW7OdnmMUsySquf//K\r\nHUlnD3Oa1TyWzjF6NcMWv0PgDg6u8q4739X0ueBNDpXJyiMMpQUZ/8YbW/Ijdfv7\r\nDQIDAQAB\r\n-----END PUBLIC KEY-----\r\n";
         *      const revoke = await remme.publicKeyStorage.revoke(publicKey);
         * ```
         *
         * Check public key.
         *
         * ```typescript
         *      const publicKey = "-----BEGIN PUBLIC KEY-----\r\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkhdw64WKrvXCWtGsNeVT\r\nPKDPpcHN0kcF4acvfPauDE8TpIFu8rFQdnGdBldJMo+iHC4VkEc7SqP0Z7bynBXZ\r\nze6YAsi7VUggO+5kDuJnKrg0VJ5swfV/Jdvj9ev1iG1TeVTAyp1Uvjmek9uAh6Dg\r\nobdtWM/VpVYsbBcMT4XXpzmuv0qkEf9YmR3kJ5SBGdkb6jaOnjJWO0O6kOUO54y0\r\n6wr0BXqYWWQTnGC3DJf2iqu68CeoZsg/dRNs1zXP4x00GyOW7OdnmMUsySquf//K\r\nHUlnD3Oa1TyWzjF6NcMWv0PgDg6u8q4739X0ueBNDpXJyiMMpQUZ/8YbW/Ijdfv7\r\nDQIDAQAB\r\n-----END PUBLIC KEY-----\r\n";
         *      const status = remme.publicKeyStorage.check(publicKey);
         *      console.log(status);
         * ```
         */
        /* tslint:enable */
        public publicKeyStorage: IRemmePublicKeyStorage;
        /* tslint:disable */


        /**
         * This properties hold implementation of RemmeCertificate,
         * which get a possibility to work with certificates.
         *
         * @example
         *
         * Store certificate's public key and hash of certificate in the network.
         *
         * ```typescript
         *      const remme = new Remme.Client();
         *      const certificateTransactionResult = await remme.certificate.createAndStore({
         *          commonName: "userName1",
         *          email: "user@email.com",
         *          name: "John",
         *          surname: "Smith",
         *          countryName: "US",
         *          validity: 360,
         *          serial: `${Date.now()}`
         *      });
         *      certificateTransactionResult.connectToWebSocket((err: Error, resp: any) => {
         *          if (err) {
         *              throw new Error(err.message);
         *          }
         *          console.log(response);
         *      })
         * ```
         *
         * Revoke certificate's public key.
         *
         * ```typescript
         *      const certificatePEM = "-----BEGIN CERTIFICATE-----\r\nMIIDATCCAemgAwIBAgIHAVM4JmMVEDANBgkqhkiG9w0BAQsFADAAMB4XDTE4MDgw\r\nOTE0NTcxNFoXDTE5MDgwNDE0NTcxNFowgYExEjAQBgNVBAMTCXVzZXJOYW1lMTEd\r\nMBsGCSqGSIb3DQEJARMOdXNlckBlbWFpbC5jb20xDTALBgNVBCoTBEpvaG4xDjAM\r\nBgNVBAQTBVNtaXRoMQswCQYDVQQGEwJVUzEKMAgGAQATAzM2MDEUMBIGAQATDTE1\r\nMzM4MjY2MzE1MTAwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCSF3Dr\r\nhYqu9cJa0aw15VM8oM+lwc3SRwXhpy989q4MTxOkgW7ysVB2cZ0GV0kyj6IcLhWQ\r\nRztKo/RntvKcFdnN7pgCyLtVSCA77mQO4mcquDRUnmzB9X8l2+P16/WIbVN5VMDK\r\nnVS+OZ6T24CHoOCht21Yz9WlVixsFwxPhdenOa6/SqQR/1iZHeQnlIEZ2RvqNo6e\r\nMlY7Q7qQ5Q7njLTrCvQFephZZBOcYLcMl/aKq7rwJ6hmyD91E2zXNc/jHTQbI5bs\r\n52eYxSzJKq5//8odSWcPc5rVPJbOMXo1wxa/Q+AODq7yrjvf1fS54E0OlcnKIwyl\r\nBRn/xhtb8iN1+/sNAgMBAAEwDQYJKoZIhvcNAQELBQADggEBAHs/oTQRl2Dhlnk6\r\ncA0ZG5DDHvh2CFVcrKaA4DEgrVmPJ3YUL+xYzrkfhT7v8a53AImcBqrZmgN8y7I1\r\n8Yj1z3EQikCwkhVNI6yRpEU7icgqNsGBXzFJ2syH3Cntt2WOqND+M4vS/yL/XY0I\r\nVNo/goW/QoGHs5082ZsfUhZs1k9+wpVOygzug9orcd1myP6ddBu7dllcDDtpB0uC\r\nh9QxMh5mGZbai2MU0lSQqSoYqwbYosCcO+Ha/RI97/lvp1R89/5K9uFmRotDljLH\r\nvty07Cw2I1cHTYcUuZJr3WAmMiMvuCdwky3V3U6xqv1Q+LRNIvE1DqqFFeaEKbkC\r\nhj2Cw9o=\r\n-----END CERTIFICATE-----\r\n"
         *      const revoke = await remme.certificate.revoke(certificatePEM);
         * ```
         *
         * Check certificate's public key.
         *
         * ```typescript
         *      const certificatePEM = "-----BEGIN CERTIFICATE-----\r\nMIIDATCCAemgAwIBAgIHAVM4JmMVEDANBgkqhkiG9w0BAQsFADAAMB4XDTE4MDgw\r\nOTE0NTcxNFoXDTE5MDgwNDE0NTcxNFowgYExEjAQBgNVBAMTCXVzZXJOYW1lMTEd\r\nMBsGCSqGSIb3DQEJARMOdXNlckBlbWFpbC5jb20xDTALBgNVBCoTBEpvaG4xDjAM\r\nBgNVBAQTBVNtaXRoMQswCQYDVQQGEwJVUzEKMAgGAQATAzM2MDEUMBIGAQATDTE1\r\nMzM4MjY2MzE1MTAwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCSF3Dr\r\nhYqu9cJa0aw15VM8oM+lwc3SRwXhpy989q4MTxOkgW7ysVB2cZ0GV0kyj6IcLhWQ\r\nRztKo/RntvKcFdnN7pgCyLtVSCA77mQO4mcquDRUnmzB9X8l2+P16/WIbVN5VMDK\r\nnVS+OZ6T24CHoOCht21Yz9WlVixsFwxPhdenOa6/SqQR/1iZHeQnlIEZ2RvqNo6e\r\nMlY7Q7qQ5Q7njLTrCvQFephZZBOcYLcMl/aKq7rwJ6hmyD91E2zXNc/jHTQbI5bs\r\n52eYxSzJKq5//8odSWcPc5rVPJbOMXo1wxa/Q+AODq7yrjvf1fS54E0OlcnKIwyl\r\nBRn/xhtb8iN1+/sNAgMBAAEwDQYJKoZIhvcNAQELBQADggEBAHs/oTQRl2Dhlnk6\r\ncA0ZG5DDHvh2CFVcrKaA4DEgrVmPJ3YUL+xYzrkfhT7v8a53AImcBqrZmgN8y7I1\r\n8Yj1z3EQikCwkhVNI6yRpEU7icgqNsGBXzFJ2syH3Cntt2WOqND+M4vS/yL/XY0I\r\nVNo/goW/QoGHs5082ZsfUhZs1k9+wpVOygzug9orcd1myP6ddBu7dllcDDtpB0uC\r\nh9QxMh5mGZbai2MU0lSQqSoYqwbYosCcO+Ha/RI97/lvp1R89/5K9uFmRotDljLH\r\nvty07Cw2I1cHTYcUuZJr3WAmMiMvuCdwky3V3U6xqv1Q+LRNIvE1DqqFFeaEKbkC\r\nhj2Cw9o=\r\n-----END CERTIFICATE-----\r\n"
         *      const status = remme.certificate.check(certificatePEM);
         *      console.log(status);
         * ```
         */
        /* tslint:enable */
        public certificate: IRemmeCertificate;
        /* tslint:disable */


        /**
         * This properties hold implementation of RemmeToken,
         * which get a possibility to work with tokens.
         *
         * @example
         *
         * Transfer tokens to another public key in the network.
         *
         * ```typescript
         *      const remme = new Remme.Client();
         *      const somePubKey = "02926476095ea28904c11f22d0da20e999801a267cd3455a00570aa1153086eb13";
         *      const transactionResult = await remme.token.transfer(somePubKey, 1000000);
         *      transactionResult.connectToWebSocket((err: Error, resp: any) => {
         *          if (err) {
         *              throw new Error(err.message);
         *          }
         *          console.log(response);
         *      })
         * ```
         *
         * Get balance for public key.
         *
         * ```typescript
         *      const balance = await remme.token.getBalance(remme.account.publicKeyHex);
         *      console.log(balance);
         * ```
         *
         */
        /* tslint:enable */
        public token: IRemmeToken;
        /* tslint:disable */


        /**
         * This properties hold implementation of RemmeBatch,
         * which get a possibility to check status of batch if you don't do it by using WebSocket.
         */
        /* tslint:enable */
        public batch: IRemmeBatch;
        public swap: IRemmeSwap;
        public blockchainInfo: IRemmeBlockchainInfo;

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
         *
         * Or initialize client without any parameters
         *
         * ```typescript
         * const remme = new Remme.Client();
         * ```
         */
        public constructor(clientInit: IClientInit = {
            privateKeyHex: "",
            networkConfig: defaultConfig,
        }) {
            let {
                privateKeyHex = "",
                networkConfig = defaultConfig,
            } = clientInit;

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
