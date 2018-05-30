import { RemmeCertificate } from "remme-certificate";
import { RemmeToken } from "remme-token";
import { RemmePersonal } from "remme-personal";
import { RemmeBatch } from "remme-batch";
import { IRemmeClient } from "./interface";
declare namespace Remme {
    class Client implements IRemmeClient {
        private readonly _remmeRest;
        private readonly _pathToKeyStore;
        certificate: RemmeCertificate;
        token: RemmeToken;
        personal: RemmePersonal;
        batch: RemmeBatch;
        constructor(nodeAdress?: string, socketAddress?: string, pathToKeyStore?: string);
    }
}
export = Remme;
