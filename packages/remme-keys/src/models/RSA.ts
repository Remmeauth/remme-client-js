import {
    bytesToHex,
    forge,
    generateAddress,
    privateKeyToPem,
    publicKeyToPem,
    RemmeFamilyName,
} from "remme-utils";

import {GenerateOptions, IKeys, KeyDto, KeyType, RSASignaturePadding} from "./index";
import {IRemmeKeys} from "../interface";

class RSA extends KeyDto implements IRemmeKeys {
    private readonly _rsaKeySize: number = 2048;

    private _calculateSaltLength(md: any): number {
        const emlen = Number(Math.ceil(this._rsaKeySize / 8));
        return emlen - md.digestLength - 2;
    }

    constructor({ privateKey, publicKey }: IKeys ) {
        super();
        if (privateKey && publicKey) {
            this._privateKey = privateKey;
            this._publicKey = publicKey;
        } else if (privateKey) {
            this._privateKey = privateKey;
            this._publicKey = forge.pki.rsa.setPublicKey(this._privateKey.n, this._privateKey.e);
        } else if (publicKey) {
            this._publicKey = publicKey;
        }

        this._publicKeyPem = publicKeyToPem(this._publicKey);
        this._publicKeyHex = forge.pki.pemToDer(this._publicKeyPem).toHex();

        this._publicKey = Buffer.from(forge.pki.pemToDer(this._publicKeyPem).getBytes(), "binary");

        if (this._privateKey) {
            this._privateKeyPem = privateKeyToPem(this._privateKey);
            this._privateKeyHex = forge.pki.pemToDer(this._privateKeyPem).toHex();
        }

        this._address = generateAddress(RemmeFamilyName.PublicKey, this._publicKey);
        this._keyType = KeyType.RSA;
    }

    public static async generateKeyPair({ rsaKeySize = 2048 }: GenerateOptions = { rsaKeySize: 2048 }) {
        return await forge.pki.rsa.generateKeyPair(rsaKeySize);
    }

    public static getAddressFromPublicKey(publicKey: any): string {
        return generateAddress(RemmeFamilyName.PublicKey, forge.pki.pemToDer(publicKeyToPem(publicKey)).toHex());
    }

    public sign(
        data: string,
        rsaSignaturePadding: RSASignaturePadding = RSASignaturePadding.PSS,
    ): string {
        const md = forge.md.sha256.create();
        md.update(data, "utf8");
        let signature: string;
        switch (rsaSignaturePadding) {
            case RSASignaturePadding.PKCS1v15: {
                signature = this._privateKey.sign(md);
                break;
            }
            case RSASignaturePadding.PSS: {
                const pss = forge.pss.create({
                    md: forge.md.sha256.create(),
                    mgf: forge.mgf.mgf1.create(forge.md.sha256.create()),
                    saltLength: this._calculateSaltLength(md),
                });
                signature = this._privateKey.sign(md, pss);
            }
        }
        return forge.util.bytesToHex(signature);
    }

    public verify(
        data: string,
        signature: string,
        rsaSignaturePadding: RSASignaturePadding = RSASignaturePadding.PSS,
    ): boolean {
        const md = forge.md.sha256.create();
        md.update(data, "utf8");

        signature = forge.util.hexToBytes(signature);

        switch (rsaSignaturePadding) {
            case RSASignaturePadding.PKCS1v15: {
                return this._publicKey.verify(md);
            }
            case RSASignaturePadding.PSS: {
                const pss = forge.pss.create({
                    md: forge.md.sha256.create(),
                    mgf: forge.mgf.mgf1.create(forge.md.sha256.create()),
                    saltLength: this._calculateSaltLength(md),
                });
                return this._publicKey.verify(md.digest().bytes(), signature, pss);
            }
        }
    }
}

export {
    RSA,
};
