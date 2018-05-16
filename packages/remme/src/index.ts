import * as RemmeCertificate from "remme-certificate";
import * as RemmeToken from "remme-token";
import { RemmeRest } from "remme-rest";

namespace Remme {
    export class Client {
        private readonly _remmeRest: RemmeRest;
        public certificate: RemmeCertificate.Certificate = new RemmeCertificate.Certificate(this._remmeRest);
        public token: RemmeToken.Token = new RemmeToken.Token(this._remmeRest);

        public constructor(nodeAdress: string = "localhost:8080") {
            this._remmeRest = new RemmeRest(nodeAdress);
        }
    }
}

export = Remme;
