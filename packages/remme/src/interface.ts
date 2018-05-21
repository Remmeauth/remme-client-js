import { IRemmeCertificate } from "remme-certificate";
import { IRemmeToken } from "remme-token";
import { IRemmePersonal } from "remme-personal";

export interface IRemmeClient {
    certificate: IRemmeCertificate;
    token: IRemmeToken;
    personal: IRemmePersonal;
}
