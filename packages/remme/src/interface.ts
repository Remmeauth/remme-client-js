import { IRemmeCertificate } from "remme-certificate";
import { IRemmeToken } from "remme-token";
import { IRemmePersonal } from "remme-personal";
import { IRemmeBatch } from "remme-batch";

export interface IRemmeClient {
    certificate: IRemmeCertificate;
    token: IRemmeToken;
    personal: IRemmePersonal;
    batch: IRemmeBatch;
}
