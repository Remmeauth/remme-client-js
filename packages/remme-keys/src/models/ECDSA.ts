import {generateAddress, bytesToHex, RemmeFamilyName} from "remme-utils";
import * as secp256k1 from "secp256k1";
import { randomBytes, createHash } from "crypto";

import {IKeys, KeyDto, KeyType} from "./index";
import {IRemmeKeys} from "../interface";

class ECDSA extends KeyDto implements IRemmeKeys {
    constructor({ privateKey, publicKey }: IKeys) {
        super();
        if (privateKey && publicKey) {
            this._privateKey = Buffer.from(privateKey);
            this._publicKey = Buffer.from(publicKey);
        } else if (privateKey) {
            this._privateKey = Buffer.from(privateKey);
            this._publicKey = secp256k1.publicKeyCreate(this._privateKey);
        } else if (publicKey) {
            this._publicKey = publicKey;
        }

        this._publicKeyHex = bytesToHex(this._publicKey);

        if (this._privateKey) {
            this._privateKeyHex = bytesToHex(this._privateKey);
        }

        try {
            this._publicKeyBase64 = btoa(this._publicKeyHex);
        } catch (e) {
            this._publicKeyBase64 = Buffer.from(this._publicKeyHex).toString("base64");
        }

        this._address = generateAddress(RemmeFamilyName.PublicKey, this._publicKey);
        this._keyType = KeyType.ECDSA;
    }

    public static generateKeyPair() {
        let privateKey: Buffer;
        do {
            privateKey = randomBytes(32);
        } while (!secp256k1.privateKeyVerify(privateKey));

        const publicKey = secp256k1.publicKeyCreate(privateKey);
        return {
            publicKey,
            privateKey,
        };
    }

    public static getAddressFromPublicKey(publicKey: Buffer): string {
        return generateAddress(RemmeFamilyName.PublicKey, bytesToHex(publicKey));
    }

    public sign(
        data: string,
    ): string {
        const dataHash = createHash("sha256").update(data).digest();
        const result = secp256k1.sign(dataHash, this._privateKey);
        return result.signature.toString("hex");
    }

    public verify(
        data: string,
        signature: string,
    ): boolean {
        const signatureBytes = Buffer.from(signature, "hex");
        const dataHash = createHash("sha256").update(data).digest();
        return secp256k1.verify(dataHash, signatureBytes, this._publicKey);
    }
}

export {
    ECDSA,
};
