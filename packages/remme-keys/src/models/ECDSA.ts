import {generateAddress, bytesToHex, RemmeFamilyName} from "remme-utils";
import * as secp256k1 from "secp256k1";
import { randomBytes, createHash } from "crypto";

import {KeyDto} from "./index";
import {IRemmeKeys} from "../interface";

class ECDSA extends KeyDto implements IRemmeKeys {
    constructor(privateKey: any, publicKey?: any) {
        super();
        if (privateKey && publicKey) {
            this._privateKey = privateKey;
            this._publicKey = publicKey;
        } else if (privateKey) {
            this._privateKey = privateKey;
            this._publicKey = secp256k1.publicKeyCreate(this._privateKey);
        }

        this._publicKeyHex = bytesToHex(this._publicKey);
        this._privateKeyHex = bytesToHex(this._privateKey);

        try {
            this._publicKeyBase64 = btoa(this._publicKeyHex);
        } catch (e) {
            this._publicKeyBase64 = Buffer.from(this._publicKeyHex).toString("base64");
        }

        this._address = generateAddress(RemmeFamilyName.PublicKey, this._publicKeyBase64);
    }

    public static generateKeyPair() {
        let privateKey: any;
        do {
            privateKey = randomBytes(32);
        } while (!secp256k1.privateKeyVerify(privateKey));

        const publicKey = secp256k1.publicKeyCreate(privateKey);
        return {
            publicKey,
            privateKey,
        };
    }

    public static getAddressFromPublicKey(publicKey: any): string {
        let publicKeyBase64 = bytesToHex(publicKey);

        try {
            publicKeyBase64 = btoa(publicKeyBase64);
        } catch (e) {
            publicKeyBase64 = Buffer.from(publicKeyBase64).toString("base64");
        }

        return generateAddress(RemmeFamilyName.PublicKey, publicKeyBase64);
    }

    public sign(
        data: string,
    ): string {
        const dataHash = createHash("sha256").update(data).digest();
        const result = secp256k1.sign(dataHash, this._privateKey);
        return result.signature.toString("hex");
    }

    public verify(
        signature: string,
        data: string,
    ): boolean {
        const signatureBytes = Buffer.from(signature, "hex");
        const dataHash = createHash("sha256").update(data).digest();
        return secp256k1.verify(dataHash, signatureBytes, this._publicKey);
    }
}

export {
    ECDSA,
};
