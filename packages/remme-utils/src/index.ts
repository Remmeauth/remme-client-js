import * as forge from "node-forge";
import {
    oids,
} from "./models";
import {
    hexToBytes,
    bytesToHex,
    utf8ToBytes,
    toHex,
    getAddressFromData,
    toHexString,
    toUTF8Array,
    base64ToArrayBuffer,
} from "./functions";

declare module "node-forge" {
    export namespace pki {
        interface Certificate {
            privateKey: Key;
        }
        function certificationRequestToPem(cert: Certificate, maxline?: number): PEM;
        function certificationRequestFromPem(pem: PEM, computeHash?: boolean, strict?: boolean): Certificate;
        function createCertificationRequest(): Certificate;
        function publicKeyToAsn1(publicKey: Key): any;
        function publicKeyToRSAPublicKey(publicKey: Key): any;
        namespace rsa {
            function setPublicKey(n: any, e: any): any;
        }
    }

    export namespace md {
        namespace sha512 {
            function create(): MessageDigest;
        }
    }

    export namespace pss {
        function create(any: any): any;
    }

    export namespace mgf {
        namespace mgf1 {
            function create(any: any): any;
        }
    }
}

const certificateToPem = (certificate: forge.pki.Certificate): forge.pki.PEM => {
    try {
        return forge.pki.certificateToPem(certificate);
    } catch (e) {
        throw new Error("Given certificate is not a valid");
    }
};

const certificateFromPem = (certificate: forge.pki.PEM): forge.pki.Certificate => {
    try {
        return forge.pki.certificateFromPem(certificate);
    } catch (e) {
        throw new Error("Given certificate is not a valid");
    }
};

const publicKeyToPem = (publicKey: forge.pki.Key): forge.pki.PEM => {
    try {
        return forge.pki.publicKeyToPem(publicKey);
    } catch (e) {
        throw new Error("Given publicKey is not a valid");
    }
};

const publicKeyFromPem = (publicKey: forge.pki.PEM): forge.pki.Certificate => {
    try {
        return forge.pki.publicKeyFromPem(publicKey);
    } catch (e) {
        throw new Error("Given publicKey is not a valid");
    }
};

export {
    forge,
    oids,
    hexToBytes,
    bytesToHex,
    utf8ToBytes,
    toHex,
    getAddressFromData,
    toHexString,
    toUTF8Array,
    certificateToPem,
    certificateFromPem,
    publicKeyToPem,
    publicKeyFromPem,
    base64ToArrayBuffer,
};
