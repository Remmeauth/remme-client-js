import * as forge from "node-forge";

declare module "node-forge" {
    namespace pki {
        function certificationRequestToPem(cert: Certificate, maxline?: number): PEM;
        function certificationRequestFromPem(pem: PEM, computeHash?: boolean, strict?: boolean): Certificate;
        function createCertificationRequest(): Certificate;
    }
}

export = forge;
