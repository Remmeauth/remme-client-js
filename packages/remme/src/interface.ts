import { IRemmeCertificate } from "remme-certificate";
import { IRemmeToken } from "remme-token";
import { IRemmeAccount } from "remme-account";
import { IRemmeBatch } from "remme-batch";
import { IRemmeSwap } from "remme-atomic-swap";
import { IRemmeTransactionService } from "remme-transaction-service";

export interface IRemmeClient {
    certificate: IRemmeCertificate;
    token: IRemmeToken;
    account: IRemmeAccount;
    batch: IRemmeBatch;
    swap: IRemmeSwap;
    transaction: IRemmeTransactionService;
}

export interface ClientInitInterface {
    privateKeyHex?: string;
    nodeAddress?: string;
    socketAddress?: string;
}
