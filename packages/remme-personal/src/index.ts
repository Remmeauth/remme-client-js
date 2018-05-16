import { RemmeMethods, RemmeRest } from "remme-rest";

namespace RemmePersonal {
    export class Personal {
        private readonly _remmeRest: RemmeRest;

        public constructor(nodeAdress: string = "localhost:8080") {
            this._remmeRest = new RemmeRest(nodeAdress);
        }
    }
}

export = RemmePersonal;
