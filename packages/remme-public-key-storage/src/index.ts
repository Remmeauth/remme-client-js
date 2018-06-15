import {
    forge,
    getAddressFromData,
    toHexString,
    toUTF8Array,
} from "remme-utils";
import { BaseTransactionResponse, IBaseTransactionResponse } from "remme-base-transaction-response";
import { RemmeMethods, IRemmeRest } from "remme-rest";
import { IRemmeTransactionService } from "remme-transaction-service";
import { TransactionPayload, NewPubKeyPayload, PubKeyMethod, RevokePubKeyPayload } from "remme-protobuf";

import { IRemmePublicKeyStorage } from "./interface";
import {
    CheckPayload,
    CheckResult,
    PublicKeyStorageStoreDto,
    UserStorePublicKeysResult,
} from "./models";

class RemmePublicKeyStorage implements IRemmePublicKeyStorage {
    private readonly _remmeRest: IRemmeRest;
    private readonly _remmeTransaction: IRemmeTransactionService;
    private readonly _familyName = "pub_key";
    private readonly _familyVersion = "0.1";

    public constructor(remmeRest: IRemmeRest, remmeTransaction: IRemmeTransactionService) {
        this._remmeRest = remmeRest;
        this._remmeTransaction = remmeTransaction;
    }

    public async store({
                           data,
                           publicKey,
                           privateKey,
                           validTo,
                           validFrom,
                           publicKeyType = NewPubKeyPayload.PubKeyType.RSA,
                           entityType = NewPubKeyPayload.EntityType.PERSONAL,
                       }: PublicKeyStorageStoreDto): Promise<IBaseTransactionResponse> {
        const publicKeyPEM = forge.pki.publicKeyToPem(publicKey);
        const message = this._generateMessage(data);
        const entityHash = this._generateEntityHash(message);
        const entityHashSignature = this._generateSignature(message, privateKey);
        const  payload =  NewPubKeyPayload.encode({
            publicKey: publicKeyPEM,
            publicKeyType,
            entityType,
            entityHash,
            entityHashSignature,
            validFrom,
            validTo,
        }).finish();
        const pubKeyAddress = getAddressFromData(this._familyName, publicKeyPEM);
        const payloadBytes = this._generateTransactionPayload(PubKeyMethod.Method.STORE, payload);
        return await this._createAndSendTransaction([pubKeyAddress], payloadBytes);
    }

    public async check(publicKeyPEM: forge.pki.PEM): Promise<boolean> {
        this._checkPublicKey(publicKeyPEM);
        const payload = new CheckPayload(publicKeyPEM);
        const result = await this._remmeRest
            .postRequest<CheckPayload, CheckResult>(RemmeMethods.publicKey, payload);
        return !!result && !result.revoked;
    }

    public async revoke(publicKeyPEM: forge.pki.PEM): Promise<IBaseTransactionResponse> {
        this._checkPublicKey(publicKeyPEM);
        const address = getAddressFromData(this._familyName, publicKeyPEM);
        const revokePayload = RevokePubKeyPayload.encode({
            address,
        }).finish();
        const payloadBytes = this._generateTransactionPayload(PubKeyMethod.Method.REVOKE, revokePayload);
        return await this._createAndSendTransaction([address], payloadBytes);
    }

    public async getUserPublicKeys(userAccountPublicKey: string): Promise<string[]> {
        const apiResult = await this._remmeRest
            .getRequest<UserStorePublicKeysResult>(RemmeMethods.userPublicKeys, userAccountPublicKey);
        return apiResult.pub_keys;
    }

    private _generateMessage(certificate: forge.pki.PEM): string {
        const certSHA512 = forge.md.sha512.create().update(certificate);
        return certSHA512.digest().toHex();
    }

    private _generateEntityHash(message: string): string {
        const entityHashBytes = toUTF8Array(message);
        return toHexString(entityHashBytes);
    }

    private _generateSignature(data: string, privateKey: forge.pki.Key): string {
        const md = forge.md.sha512.create();
        md.update(data, "utf8");
        const signature = privateKey.sign(md);
        return forge.util.bytesToHex(signature);
    }

    private _generateTransactionPayload(method: number, data: Uint8Array): Uint8Array {
        return TransactionPayload.encode({
            method,
            data,
        }).finish();
    }

    private async _createAndSendTransaction(inputsOutputs: string[], payloadBytes: Uint8Array)
        : Promise<BaseTransactionResponse> {
        const transaction = await this._remmeTransaction.create({
            familyName: this._familyName,
            familyVersion: this._familyVersion,
            inputs: inputsOutputs,
            outputs: inputsOutputs,
            payloadBytes,
        });
        return await this._remmeTransaction.send(transaction);
    }

    private _checkPublicKey(publicKeyPEM) {
        try {
            forge.pki.publicKeyFromPem(publicKeyPEM);
        } catch (e) {
            throw new Error("Given publicKey is not a valid");
        }
    }
}

export {
    RemmePublicKeyStorage,
    IRemmePublicKeyStorage,
};
