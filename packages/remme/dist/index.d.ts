import { IRemmeTransactionService } from "remme-transaction-service";
import { IRemmeCertificate } from "remme-certificate";
import { IRemmePublicKeyStorage } from "remme-public-key-storage";
import { IRemmeToken } from "remme-token";
import { IRemmeAccount } from "remme-account";
import { IRemmeBatch } from "remme-batch";
import { IRemmeSwap } from "remme-atomic-swap";
import { IRemmeBlockchainInfo } from "remme-blockchain-info";
import { IRemmeWebSocketsEvents } from "remme-web-socket-events";
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
        /**
         * @hidden
         */
        transaction: IRemmeTransactionService;
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
        publicKeyStorage: IRemmePublicKeyStorage;
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
        certificate: IRemmeCertificate;
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
        token: IRemmeToken;
        /**
         * This properties hold implementation of RemmeBatch,
         * which get a possibility to check status of batch if you don't do it by using WebSocket.
         *
         * @example
         *
         * Get status of batch.
         *
         * ```typescript
         * const batchId = "92c77c41705f2f68d5f7bc03676d0f917b0f9ef4099ee8417bd7f2470a233f3f2da5e93ee1658588f5baa0b95c81656ed187705fb72658203a7686c9749b7ad2"
         * const status = await remme.batch.getStatus(batchId);
         * console.log(status);
         * ```
         */
        batch: IRemmeBatch;
        /**
         * This properties hold implementation of RemmeSwap,
         * which get a possibility to work with atomic swap.
         *
         * @example
         *
         * Init swap.
         *
         * ```typescript
         * const swapId = "033102e41346242476b15a3a7966eb5249271025fc7fb0b37ed3fdb4bcce6815";
         * const secret = "secretkey";
         * const secretKey = sha512(secret); // "039eaa877ff63694f8f09c8034403f8b5165a7418812a642396d5d539f90b170";
         * const secretLock = sha512(secretKey); // "b605112c2d7489034bbd7beab083fb65ba02af787786bb5e3d99bb26709f4f68";
         *
         * const init = await remme.swap.init({
         *      receiverAddress: "112007484def48e1c6b77cf784aeabcac51222e48ae14f3821697f4040247ba01558b1",
         *      senderAddressNonLocal: "0xe6ca0e7c974f06471759e9a05d18b538c5ced11e",
         *      amount: 100,
         *      swapId,
         *      secretLock,
         *      createdAt: Math.floor(Date.now() / 1000)
         * });
         * ```
         *
         * Get a public key with which to enсrypt sensitive data during the swap.
         *
         * ```typescript
         * const pubkey = await remme.swap.getPublicKey();
         * console.log(pubkey);
         * ```
         *
         * Set secret lock if it didn't set in init method
         *
         * ```typescript
         * const setSecretLock = await remme.swap.setSecretLock(swapId, secretLock);
         * ```
         *
         * Get information about swap
         *
         * ```typescript
         * const res = await remme.swap.getInfo(swapId);
         * console.log(res);
         * ```
         *
         * Approve swap with given swap id
         *
         * ```typescript
         * const approve = await remme.swap.approve(swapId);
         * ```
         *
         * Expire swap with given swap id
         *
         * ```typescript
         * const expire = await remme.swap.expire(swapId);
         * ```
         *
         * Close swap with given swap id and secret key
         *
         * ```typescript
         * const close = await remme.swap.close(swapId, secretKey);
         * ```
         */
        swap: IRemmeSwap;
        /**
         * This properties hold implementation of RemmeBlockchainInfo,
         * which get a possibility to work with blockchain information (blocks, batches, states, transactions).
         * For all information about blockchain information please see this doc:
         * https://sawtooth.hyperledger.org/docs/core/releases/latest/rest_api/endpoint_specs.html
         *
         * @example
         *
         * Get all blocks. With different params.
         *
         * ```typescript
         * const blocks = await remme.blockchainInfo.getBlocks({
         *      limit: 2,
         *      reverse: true,
         *      start: "0x0000000000000000", // block num
         * });
         * console.log(blocks);
         * ```
         *
         * Get block by id.
         *
         * ```typescript
         * const blockId = "92c77c41705f2f68d5f7bc03676d0f917b0f9ef4099ee8417bd7f2470a233f3f2da5e93ee1658588f5baa0b95c81656ed187705fb72658203a7686c9749b7ad2";
         * const block = await remme.blockchainInfo.getBlockById(blockId);
         * console.log(block);
         * ```
         *
         * Get all batches. With different params.
         *
         * ```typescript
         * const batches = await remme.blockchainInfo.getBatches({
         *      limit: 2,
         *      reverse: true,
         *      start: "92c77c41705f2f68d5f7bc03676d0f917b0f9ef4099ee8417bd7f2470a233f3f2da5e93ee1658588f5baa0b95c81656ed187705fb72658203a7686c9749b7ad2", // batch_id
         * });
         * console.log(batches);
         * ```
         *
         * Get block by id.
         *
         * ```typescript
         * const batchId = "92c77c41705f2f68d5f7bc03676d0f917b0f9ef4099ee8417bd7f2470a233f3f2da5e93ee1658588f5baa0b95c81656ed187705fb72658203a7686c9749b7ad2";
         * const batch = await remme.blockchainInfo.getBatchById(batchId);
         * console.log(batch);
         * ```
         *
         * Get all transactions. With different params.
         *
         * ```typescript
         * const transactions = await remme.blockchainInfo.getTransactions({
         *      limit: 2,
         *      reverse: true,
         *      start: "92c77c41705f2f68d5f7bc03676d0f917b0f9ef4099ee8417bd7f2470a233f3f2da5e93ee1658588f5baa0b95c81656ed187705fb72658203a7686c9749b7ad2", // batch_id
         * });
         * console.log(transactions);
         * ```
         *
         * Get transaction by id.
         *
         * ```typescript
         * const transactionId = "92c77c41705f2f68d5f7bc03676d0f917b0f9ef4099ee8417bd7f2470a233f3f2da5e93ee1658588f5baa0b95c81656ed187705fb72658203a7686c9749b7ad2";
         * const transaction = await remme.blockchainInfo.getTransactionById(transactionId);
         * console.log(transaction);
         * ```
         *
         * Get all state. With different params.
         *
         * ```typescript
         * const state = await remme.blockchainInfo.getState({
         *      limit: 2,
         *      reverse: true,
         * });
         * console.log(state);
         * ```
         *
         * Get state by address.
         *
         * ```typescript
         * const address = "112007e4e7d40588cc13f1abee0d3cf70b74a0b47bb31204c467c114f68a7f417e2f86";
         * const state = await remme.blockchainInfo.getStateByAddress(address);
         * console.log(state);
         * ```
         */
        blockchainInfo: IRemmeBlockchainInfo;
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
         *     lastKnownBlockId
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
        events: IRemmeWebSocketsEvents;
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
        constructor(clientInit?: IClientInit);
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
        account: IRemmeAccount;
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
        static generateAccount(): IRemmeAccount;
    }
}
export = Remme;
