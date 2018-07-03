/// <reference types="node-forge" />
import * as forge from "node-forge";
import { oids } from "./models";
import { hexToBytes, bytesToHex, utf8ToBytes, toHex, getAddressFromData, toHexString, toUTF8Array } from "./functions";
declare module "node-forge" {
    namespace pki {
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
    namespace md {
        namespace sha512 {
            function create(): MessageDigest;
        }
    }
    namespace pss {
        function create(any: any): any;
    }
    namespace mgf {
        namespace mgf1 {
            function create(any: any): any;
        }
    }
}
declare const certificateToPem: (certificate: forge.pki.Certificate) => string;
declare const certificateFromPem: (certificate: string) => forge.pki.Certificate;
declare const publicKeyToPem: (publicKey: any) => string;
declare const publicKeyFromPem: (publicKey: string) => forge.pki.Certificate;
export { forge, oids, hexToBytes, bytesToHex, utf8ToBytes, toHex, getAddressFromData, toHexString, toUTF8Array, certificateToPem, certificateFromPem, publicKeyToPem, publicKeyFromPem };
