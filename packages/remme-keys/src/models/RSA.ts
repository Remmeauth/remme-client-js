import {NewPubKeyPayload} from "remme-protobuf";
import {forge, generateAddress, privateKeyToPem, publicKeyToPem, RemmeFamilyName} from "remme-utils";

import {GenerateOptions, KeyDto} from "./index";
import {IRemmeKeys} from "../interface";

class RSA extends KeyDto implements IRemmeKeys {
    private readonly _rsaKeySize: number = 2048;

    private _calculateSaltLength(md: any): number {
        const emlen = Number(Math.ceil(this._rsaKeySize / 8));
        return emlen - md.digestLength - 2;
    }

    constructor(privateKey: any, publicKey?: any) {
        super();
        if (privateKey && publicKey) {
            this._privateKey = privateKey;
            this._publicKey = publicKey;
        } else if (privateKey) {
            this._privateKey = privateKey;
            this._publicKey = forge.pki.rsa.setPublicKey(this._privateKey.n, this._privateKey.e);
        }

        this._publicKeyPem = publicKeyToPem(this._publicKey);
        this._privateKeyPem = privateKeyToPem(this._privateKey);

        try {
            this._publicKeyBase64 = btoa(this._publicKeyPem);
        } catch (e) {
            this._publicKeyBase64 = Buffer.from(this._publicKeyPem).toString("base64");
        }

        this._address = generateAddress(RemmeFamilyName.PublicKey, this._publicKeyBase64);
    }

    public static async generateKeyPair({ rsaKeySize = 2048 }: GenerateOptions = { rsaKeySize: 2048 }) {
        return await forge.pki.rsa.generateKeyPair(rsaKeySize);
    }

    public static getAddressFromPublicKey(publicKey: any): string {
        let publicKeyBase64 = publicKeyToPem(publicKey);

        try {
            publicKeyBase64 = btoa(publicKeyBase64);
        } catch (e) {
            publicKeyBase64 = Buffer.from(publicKeyBase64).toString("base64");
        }

        return generateAddress(RemmeFamilyName.PublicKey, publicKeyBase64);
    }

    public sign(
        data: string,
        rsaSignaturePadding: NewPubKeyPayload.RSASignaturePadding = NewPubKeyPayload.RSASignaturePadding.PSS,
    ): string {
        const md = forge.md.sha512.create();
        md.update(data, "utf8");
        let signature: string;
        switch (rsaSignaturePadding) {
            case NewPubKeyPayload.RSASignaturePadding.PKCS1v15: {
                signature = this._privateKey.sign(md);
                break;
            }
            case NewPubKeyPayload.RSASignaturePadding.PSS: {
                const pss = forge.pss.create({
                    md: forge.md.sha512.create(),
                    mgf: forge.mgf.mgf1.create(forge.md.sha512.create()),
                    saltLength: this._calculateSaltLength(md),
                });
                signature = this._privateKey.sign(md, pss);
            }
        }
        return forge.util.bytesToHex(signature);
    }

    public verify(
        signature: string,
        data: string,
        rsaSignaturePadding: NewPubKeyPayload.RSASignaturePadding = NewPubKeyPayload.RSASignaturePadding.PSS,
    ): boolean {
        const md = forge.md.sha512.create();
        md.update(data, "utf8");

        signature = forge.util.hexToBytes(signature);

        switch (rsaSignaturePadding) {
            case NewPubKeyPayload.RSASignaturePadding.PKCS1v15: {
                return this._publicKey.verify(md);
            }
            case NewPubKeyPayload.RSASignaturePadding.PSS: {
                const pss = forge.pss.create({
                    md: forge.md.sha512.create(),
                    mgf: forge.mgf.mgf1.create(forge.md.sha512.create()),
                    saltLength: this._calculateSaltLength(md),
                });
                this._publicKey.verify(md, signature, pss);
            }
        }
    }
}

export {
    RSA,
};
