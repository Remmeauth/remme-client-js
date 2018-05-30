import { RemmeRest } from "remme-rest";
import { RemmeCertificate } from "remme-certificate";
import { RemmeToken } from "remme-token";
import { RemmePersonal } from "remme-personal";
import { RemmeBatch } from "remme-batch";

import { IRemmeClient } from "./interface";

namespace Remme {
    export class Client implements IRemmeClient {
        private readonly _remmeRest: RemmeRest;
        private readonly _pathToKeyStore: string;
        public certificate: RemmeCertificate = new RemmeCertificate(this._remmeRest);
        public token: RemmeToken = new RemmeToken(this._remmeRest);
        public personal: RemmePersonal = new RemmePersonal(this._remmeRest, this._pathToKeyStore);
        public batch: RemmeBatch = new RemmeBatch(this._remmeRest);

        public constructor(
            nodeAdress: string = "localhost:8080",
            socketAddress: string = "localhost:9080",
            pathToKeyStore: string = "",
            ) {
            this._remmeRest = new RemmeRest(nodeAdress, socketAddress);
            this._pathToKeyStore = pathToKeyStore;
        }
    }
}

export = Remme;
