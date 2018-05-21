import { RemmeCertificate } from "remme-certificate";
import { RemmeToken } from "remme-token";
import { RemmePersonal } from "remme-personal";
import { IRemmeClient } from "./interface";
declare namespace Remme {
    class Client implements IRemmeClient {
        private readonly _remmeRest;
        certificate: RemmeCertificate;
        token: RemmeToken;
        personal: RemmePersonal;
        constructor(nodeAdress?: string);
    }
}
export = Remme;
