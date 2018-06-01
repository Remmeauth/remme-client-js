import { RemmeRest } from "remme-rest";
import { RemmeCertificate } from "remme-certificate";
import { RemmeToken } from "remme-token";
import { RemmePersonal } from "remme-personal";
import { RemmeBatch } from "remme-batch";
import { RemmeSwap } from "remme-atomic-swap";

import { IRemmeClient, ClientInitInterface } from "./interface";

namespace Remme {
    export class Client implements IRemmeClient {
        private readonly _remmeRest: RemmeRest;
        public certificate: RemmeCertificate;
        public token: RemmeToken;
        public personal: RemmePersonal;
        public batch: RemmeBatch;
        public swap: RemmeSwap;

        public constructor({
                               privateKeyHex = "",
                               nodeAddress = "localhost:8080",
                               socketAddress = "localhost:9080",
                           }: ClientInitInterface = {
            privateKeyHex: "",
            nodeAddress: "localhost:8080",
            socketAddress: "localhost:9080",
        }) {
            this._remmeRest = new RemmeRest(nodeAddress, socketAddress);
            this.certificate = new RemmeCertificate(this._remmeRest);
            this.token = new RemmeToken(this._remmeRest);
            this.personal = new RemmePersonal(this._remmeRest);
            this.batch = new RemmeBatch(this._remmeRest);
            this.swap = new RemmeSwap(this._remmeRest);
            this.personal.setAccount(this.personal.generateAccount(privateKeyHex));
        }
    }
}

export = Remme;
