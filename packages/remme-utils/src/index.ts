import * as forge from "node-forge";

/**
 * @hidden
 */
declare module "node-forge" {
    /**
     * @hidden
     */
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

        /**
         * @hidden
         */
        export namespace ed25519 {
            function generateKeyPair(obj?: any): any;
            function sign(obj: any): any;
            function verify(obj: any): any;
        }
    }

    /**
     * @hidden
     */
    export namespace md {
        namespace sha512 {
            function create(): MessageDigest;
        }
    }

    /**
     * @hidden
     */
    export namespace pss {
        function create(any: any): any;
    }

    /**
     * @hidden
     */
    export namespace mgf {
        namespace mgf1 {
            function create(any: any): any;
        }
    }
}

export { forge };
export * from "./models";
export * from "./functions";
export * from "./constants";
