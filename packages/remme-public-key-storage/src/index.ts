import {
    forge,
    getAddressFromData,
    toHexString,
    toUTF8Array,
} from "remme-utils";
import { RemmeMethods, IRemmeRest } from "remme-rest";
import { IRemmeTransactionService, IBaseTransactionResponse } from "remme-transaction-service";
import { TransactionPayload, NewPubKeyPayload, PubKeyMethod, RevokePubKeyPayload } from "remme-protobuf";
import {IRemmeAccount} from "remme-account";

import { IRemmePublicKeyStorage } from "./interface";
import {
    PublicKeyStorageCheckPayload,
    PublicKeyStorageCheckResult,
    PublicKeyStorageStoreDto,
    PublicKeyStorageUserStoreResult,
} from "./models";

class RemmePublicKeyStorage implements IRemmePublicKeyStorage {
    // index signature
    [key: string]: any;

    private readonly _remmeRest: IRemmeRest;
    private readonly _remmeTransaction: IRemmeTransactionService;
    private readonly _remmeAccount: IRemmeAccount;
    private readonly _familyName = "pub_key";
    private readonly _familyVersion = "0.1";
    private readonly _economyAddress = "0000007ca83d6bbb759da9ebbaccb7f4037885e3b0c44298fc1c14e3b0c44298fc1c14";

    public constructor(remmeRest: IRemmeRest, remmeTransaction: IRemmeTransactionService, remmeAccount: IRemmeAccount) {
        this._remmeRest = remmeRest;
        this._remmeTransaction = remmeTransaction;
        this._remmeAccount = remmeAccount;
    }

    public async store({
                           data,
                           publicKey,
                           privateKey,
                           validTo,
                           validFrom,
                           publicKeyType = NewPubKeyPayload.PubKeyType.RSA,
                           entityType = NewPubKeyPayload.EntityType.PERSONAL,
                           rsaSignaturePadding = NewPubKeyPayload.RSASignaturePadding.PSS
                       }: PublicKeyStorageStoreDto): Promise<IBaseTransactionResponse> {
        if (typeof publicKey === "string") {
            publicKey = forge.pki.publicKeyFromPem(publicKey);
        }
        if (typeof privateKey === "string") {
            privateKey = forge.pki.privateKeyFromPem(privateKey);
        }
        const publicKeyPEM = forge.pki.publicKeyToPem(publicKey);
        const message = this.generateMessage(data);
        const entityHash = this.generateEntityHash(message);
        const entityHashSignature = this._generateSignature(publicKeyType, rsaSignaturePadding, message, privateKey);
        const payload =  NewPubKeyPayload.encode({
            publicKey: publicKeyPEM,
            publicKeyType,
            rsaSignaturePadding,
            entityType,
            entityHash,
            entityHashSignature,
            validFrom,
            validTo,
        }).finish();
        const pubKeyAddress = getAddressFromData(this._familyName, publicKeyPEM);
        const payloadBytes = this._generateTransactionPayload(PubKeyMethod.Method.STORE, payload);
        return await this._createAndSendTransaction([pubKeyAddress, this._economyAddress], payloadBytes);
    }

    public async check(publicKey: forge.pki.PEM | forge.pki.Key): Promise<PublicKeyStorageCheckResult> {
        this._checkPublicKey(publicKey);
        if (typeof publicKey === "object") {
            publicKey = forge.pki.publicKeyToPem(publicKey);
        }
        const payload = new PublicKeyStorageCheckPayload(publicKey);
        return await this._remmeRest
            .postRequest<PublicKeyStorageCheckPayload, PublicKeyStorageCheckResult>(RemmeMethods.publicKey, payload);
    }

    public async revoke(publicKey: forge.pki.PEM | forge.pki.Key): Promise<IBaseTransactionResponse> {
        this._checkPublicKey(publicKey);
        if (typeof publicKey === "object") {
            publicKey = forge.pki.publicKeyToPem(publicKey);
        }
        const address = getAddressFromData(this._familyName, publicKey);
        const revokePayload = RevokePubKeyPayload.encode({
            address,
        }).finish();
        const payloadBytes = this._generateTransactionPayload(PubKeyMethod.Method.REVOKE, revokePayload);
        return await this._createAndSendTransaction([address], payloadBytes);
    }

    public async getUserPublicKeys(userAccountPublicKey: string): Promise<string[]> {
        const apiResult = await this._remmeRest
            .getRequest<PublicKeyStorageUserStoreResult>(RemmeMethods.userPublicKeys, userAccountPublicKey);
        return apiResult.pub_keys;
    }

    public generateMessage(data: string): string {
        const certSHA512 = forge.md.sha512.create().update(data);
        return certSHA512.digest().toHex();
    }

    public generateEntityHash(message: string): string {
        const entityHashBytes = toUTF8Array(message);
        return toHexString(entityHashBytes);
    }

    private _generateSignature(publicKeyType: any, rsaSignaturePadding: any, data: string, privateKey: forge.pki.Key): string {
        switch (publicKeyType) {
          case NewPubKeyPayload.PubKeyType.RSA: {
            const md = forge.md.sha512.create();
            md.update(data, "utf8");
            switch (rsaSignaturePadding) {
              case NewPubKeyPayload.RSASignaturePadding.PKCS1v15: {
                const signature = privateKey.sign(md);
                break;
              }
              case NewPubKeyPayload.RSASignaturePadding.PSS: {
                const md = forge.md.sha512.create();
                const pss = forge.pss.create({
                  md: forge.md.sha1.create(),
                  mgf: forge.mgf.mgf1.create(forge.md.sha1.create()),
                  saltLength: 20
                });
                const signature = privateKey.sign(md, pss);
                break;
            }
            break;
          }
          case NewPubKeyPayload.PubKeyType.EdDSA: {
            // Ed25519
            const ed25519 = forge.pki.ed25519;

            const signature = ED25519.sign({
              message: data,
              // also accepts `binary` if you want to pass a binary string
              encoding: 'utf8',
              // node.js Buffer, Uint8Array, forge ByteBuffer, binary string
              privateKey: privateKey
            });
            break;
          }
          case NewPubKeyPayload.PubKeyType.EdDSA: {
            console.log('EdDSA is not supported yet');
            break;
          }
        }
        return forge.util.bytesToHex(signature);
    }

    private _generateTransactionPayload(method: number, data: Uint8Array): Uint8Array {
        return TransactionPayload.encode({
            method,
            data,
        }).finish();
    }

    private async _createAndSendTransaction(inputsOutputs: string[], payloadBytes: Uint8Array)
        : Promise<IBaseTransactionResponse> {
        const transaction = await this._remmeTransaction.create({
            familyName: this._familyName,
            familyVersion: this._familyVersion,
            inputs: inputsOutputs,
            outputs: inputsOutputs,
            payloadBytes,
        });
        return await this._remmeTransaction.send(transaction);
    }

    private _checkPublicKey(publicKey: forge.pki.PEM | forge.pki.Key) {
        try {
            if (typeof publicKey === "string") {
                forge.pki.publicKeyFromPem(publicKey);
            } else {
                forge.pki.publicKeyToPem(publicKey);
            }
        } catch (e) {
            throw new Error("Given publicKey is not a valid");
        }
    }
}

export {
    RemmePublicKeyStorage,
    IRemmePublicKeyStorage,
    PublicKeyStorageCheckResult,
};
