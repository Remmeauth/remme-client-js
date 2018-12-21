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
    private readonly _privateKeyObject: forge.pki.Key;
    private readonly _publicKeyObject: forge.pki.Key;

    private _getPrivateKeyObject(): forge.pki.Key {
        const sk = new forge.util.ByteStringBuffer(this._privateKey);
        return forge.pki.privateKeyFromAsn1(forge.asn1.fromDer(sk));
    }

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
            this._privateKeyObject = this._getPrivateKeyObject();
            this._publicKey = forge.pki.rsa.setPublicKey(this._privateKeyObject.n, this._privateKeyObject.e);
        } else if (publicKey) {
            this._publicKey = publicKey;
        }

        const pk = new forge.util.ByteStringBuffer(this._publicKey);
        this._publicKeyObject = forge.pki.publicKeyFromAsn1(forge.asn1.fromDer(pk));
        this._publicKeyHex = bytesToHex(this._publicKey);

        if (this._privateKey) {
            if (!this._privateKeyObject) {
                this._privateKeyObject = this._getPrivateKeyObject();
            }
            this._privateKeyHex = bytesToHex(this._privateKey);
        }

        this._address = generateAddress(RemmeFamilyName.PublicKey, this._publicKey);
        this._keyType = KeyType.RSA;
    }

    public static async generateKeyPair({ rsaKeySize = 2048 }: GenerateOptions = { rsaKeySize: 2048 }) {
        const { privateKey, publicKey } = await forge.pki.rsa.generateKeyPair(rsaKeySize);
        return {
            privateKey: Buffer.from(forge.asn1.toDer(forge.pki.privateKeyToAsn1(privateKey)).getBytes(), "binary"),
            publicKey:  Buffer.from(forge.asn1.toDer(forge.pki.publicKeyToAsn1(publicKey)).getBytes(), "binary"),
        };
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
                signature = this._privateKeyObject.sign(md);
                break;
            }
            case RSASignaturePadding.PSS: {
                const pss = forge.pss.create({
                    md: forge.md.sha256.create(),
                    mgf: forge.mgf.mgf1.create(forge.md.sha256.create()),
                    saltLength: this._calculateSaltLength(md),
                });
                signature = this._privateKeyObject.sign(md, pss);
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
                return this._publicKeyObject.verify(md);
            }
            case RSASignaturePadding.PSS: {
                const pss = forge.pss.create({
                    md: forge.md.sha256.create(),
                    mgf: forge.mgf.mgf1.create(forge.md.sha256.create()),
                    saltLength: this._calculateSaltLength(md),
                });
                return this._publicKeyObject.verify(md.digest().bytes(), signature, pss);
            }
        }
    }
}

export {
    RSA,
};
