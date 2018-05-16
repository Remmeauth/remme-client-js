import * as RemmeCertificate from "remme-certificate";
import * as RemmeToken from "remme-token";
declare namespace Remme {
    class Client {
        private readonly _remmeRest;
        certificate: RemmeCertificate.Certificate;
        token: RemmeToken.Token;
        constructor(nodeAdress?: string);
    }
}
export = Remme;
