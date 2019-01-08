import {forge, generateAddress, bytesToHex, RemmeFamilyName} from "remme-utils";

import {IRemmeKeys} from "../interface";
import {GenerateOptions, IKeys, KeyDto, KeyType} from "./index";

class EdDSA extends KeyDto implements IRemmeKeys {
    constructor({ privateKey, publicKey }: IKeys) {
        super();
        if (privateKey && publicKey) {
            this._privateKey = privateKey;
            this._publicKey = publicKey;
        } else if (privateKey) {
            this._privateKey = privateKey;
            this._publicKey = forge.pki.ed25519.publicKeyFromPrivateKey(this._privateKey);
        } else if (publicKey) {
            this._publicKey = publicKey;
        }

        this._publicKeyHex = bytesToHex(this._publicKey);

        if (this._privateKey) {
            this._privateKeyHex = bytesToHex(this._privateKey);
        }

        this._address = generateAddress(RemmeFamilyName.PublicKey, this._publicKey);
        this._keyType = KeyType.EdDSA;
    }

    public static generateKeyPair({ seed }: GenerateOptions = {}) {
        if (seed) {
            seed = new forge.util.ByteBuffer(seed, "utf8");
            return forge.pki.ed25519.generateKeyPair({ seed });
        }
        return forge.pki.ed25519.generateKeyPair();
    }

    public static getAddressFromPublicKey(publicKey: Buffer): string {
        return generateAddress(RemmeFamilyName.PublicKey, publicKey);
    }

    public sign(
        data: string,
    ): string {
        const md = forge.md.sha256.create();
        md.update(data, "utf8");
        const signature = forge.pki.ed25519.sign({
            md,
            privateKey: this._privateKey,
        });
        return forge.util.bytesToHex(signature);
    }

    public verify(
        data: string,
        signature: string,
    ): boolean {
        const md = forge.md.sha256.create();
        md.update(data, "utf8");
        return forge.pki.ed25519.verify({
            md,
            signature: forge.util.hexToBytes(signature),
            publicKey: this._publicKey,
        });
    }
}

export {
    EdDSA,
};
