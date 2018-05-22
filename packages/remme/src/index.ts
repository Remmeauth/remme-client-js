import { RemmeRest } from "remme-rest";
import { RemmeCertificate } from "remme-certificate";
import { RemmeToken } from "remme-token";
import { RemmePersonal } from "remme-personal";

import { IRemmeClient } from "./interface";

namespace Remme {
    export class Client implements IRemmeClient {
        private readonly _remmeRest: RemmeRest;
        public certificate: RemmeCertificate = new RemmeCertificate(this._remmeRest);
        public token: RemmeToken = new RemmeToken(this._remmeRest);
        public personal: RemmePersonal = new RemmePersonal(this._remmeRest);

        public constructor(nodeAdress: string = "localhost:8080", socketAddress: string = "localhost:9080") {
            this._remmeRest = new RemmeRest(nodeAdress, socketAddress);
        }
    }
}

export = Remme;
