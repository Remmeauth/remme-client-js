import { RemmeCertificate } from "remme-certificate";
import { RemmeToken } from "remme-token";
import { RemmePersonal } from "remme-personal";
import { RemmeBatch } from "remme-batch";
import { RemmeSwap } from "remme-atomic-swap";
import { IRemmeClient, ClientInitInterface } from "./interface";
declare namespace Remme {
    class Client implements IRemmeClient {
        private readonly _remmeRest;
        certificate: RemmeCertificate;
        token: RemmeToken;
        personal: RemmePersonal;
        batch: RemmeBatch;
        swap: RemmeSwap;
        constructor({privateKeyHex, nodeAddress, socketAddress}?: ClientInitInterface);
    }
}
export = Remme;
