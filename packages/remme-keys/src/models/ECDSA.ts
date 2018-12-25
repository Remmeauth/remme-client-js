import {
    generateAddress,
    bytesToHex,
    RemmeFamilyName,
    hexToBytes,
} from "remme-utils";
import { createHash } from "crypto";
import { ec as EC } from "elliptic";
import BN = require("bn.js");

import { IKeys, KeyDto, KeyType } from "./index";
import { IRemmeKeys } from "../interface";

const ec = new EC("secp256k1");

class ECDSA extends KeyDto implements IRemmeKeys {

    constructor({ privateKey, publicKey }: any) {
        super();
        if (privateKey && publicKey) {
            this._privateKey = privateKey;
            this._publicKey = publicKey;
        } else if (privateKey) {
            this._privateKey = privateKey;
            this._publicKey = hexToBytes(ec.keyFromPrivate(privateKey).getPublic(true, "hex"));
        } else if (publicKey) {
            this._publicKey = publicKey;
        }

        this._publicKeyHex = bytesToHex(this._publicKey);

        if (this._privateKey) {
            this._privateKeyHex = bytesToHex(this._privateKey);
        }

        this._address = generateAddress(RemmeFamilyName.PublicKey, this._publicKey);
        this._keyType = KeyType.ECDSA;
    }

    public static generateKeyPair(): IKeys {
        const keys = ec.genKeyPair();

        return {
            publicKey: hexToBytes(keys.getPublic(true, "hex")),
            privateKey: hexToBytes(keys.getPrivate( "hex")),
        };
    }

    public static getAddressFromPublicKey(publicKey: Buffer): string {
        return generateAddress(RemmeFamilyName.PublicKey, publicKey);
    }

    public sign(data: string): string {
        if (!this._privateKey) {
            throw new Error("No private key to sign");
        }

        const dataHash = createHash("sha256").update(data).digest("hex");
        const signature = ec.sign(dataHash, this._privateKey, "hex", { canonical: true, pers: true });

        return signature.r.toString(16) + signature.s.toString(16);
    }

    public verify(data: string, signature: string): boolean {
        const dataHash = createHash("sha256").update(data).digest("hex");

        const r = new BN(signature.slice(0, 64), 16);
        const s = new BN(signature.slice(64, 128), 16);

        return ec.verify(dataHash, { r, s }, this._publicKey);
    }
}

export {
    ECDSA,
};
