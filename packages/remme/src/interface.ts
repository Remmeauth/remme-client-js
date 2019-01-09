import { IRemmeCertificate } from "remme-certificate";
import { IRemmeToken } from "remme-token";
import { IRemmeAccount } from "remme-account";
import { IRemmeSwap } from "remme-atomic-swap";
import { IRemmeTransactionService } from "remme-transaction-service";
import { IRemmePublicKeyStorage } from "remme-public-key-storage";
import { IRemmeBlockchainInfo } from "remme-blockchain-info";
import { INetworkConfig } from "remme-utils";
import { IRemmeWebSocketsEvents } from "remme-web-socket-events";

export interface IRemmeClient {
    certificate: IRemmeCertificate;
    token: IRemmeToken;
    account: IRemmeAccount;
    swap: IRemmeSwap;
    transaction: IRemmeTransactionService;
    publicKeyStorage: IRemmePublicKeyStorage;
    blockchainInfo: IRemmeBlockchainInfo;
    events: IRemmeWebSocketsEvents;
}

export interface IClientInit {
    privateKeyHex?: string;
    networkConfig?: INetworkConfig;
}
