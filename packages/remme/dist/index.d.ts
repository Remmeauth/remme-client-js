import { IRemmeTransactionService } from "remme-transaction-service";
import { IRemmeCertificate } from "remme-certificate";
import { IRemmeToken } from "remme-token";
import { IRemmeAccount } from "remme-account";
import { IRemmeBatch } from "remme-batch";
import { IRemmeSwap } from "remme-atomic-swap";
import { IRemmeClient, ClientInitInterface } from "./interface";
declare namespace Remme {
    class Client implements IRemmeClient {
        private readonly _remmeRest;
        private _account;
        transaction: IRemmeTransactionService;
        certificate: IRemmeCertificate;
        token: IRemmeToken;
        batch: IRemmeBatch;
        swap: IRemmeSwap;
        constructor({privateKeyHex, nodeAddress, socketAddress}?: ClientInitInterface);
        account: IRemmeAccount;
        static generateAccount(): IRemmeAccount;
    }
}
export = Remme;
