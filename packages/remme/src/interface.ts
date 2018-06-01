import { IRemmeCertificate } from "remme-certificate";
import { IRemmeToken } from "remme-token";
import { IRemmePersonal } from "remme-personal";
import { IRemmeBatch } from "remme-batch";
import { IRemmeSwap } from "remme-atomic-swap";

export interface IRemmeClient {
    certificate: IRemmeCertificate;
    token: IRemmeToken;
    personal: IRemmePersonal;
    batch: IRemmeBatch;
    swap: IRemmeSwap;
}

export interface ClientInitInterface {
    privateKeyHex?: string;
    nodeAddress?: string;
    socketAddress?: string;
}
