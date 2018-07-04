import { IRemmeCertificate } from "remme-certificate";
import { IRemmeToken } from "remme-token";
import { IRemmeAccount } from "remme-account";
import { IRemmeBatch } from "remme-batch";
import { IRemmeSwap } from "remme-atomic-swap";
import { IRemmeTransactionService } from "remme-transaction-service";
import { IRemmePublicKeyStorage } from "remme-public-key-storage";
import { IRemmeBlockchainInfo } from "remme-blockchain-info";
export interface IRemmeClient {
    certificate: IRemmeCertificate;
    token: IRemmeToken;
    account: IRemmeAccount;
    batch: IRemmeBatch;
    swap: IRemmeSwap;
    transaction: IRemmeTransactionService;
    publicKeyStorage: IRemmePublicKeyStorage;
    blockchainInfo: IRemmeBlockchainInfo;
}
export interface ClientInitInterface {
    privateKeyHex?: string;
    networkConfig?: INetworkConfig;
}
export interface INetworkConfig {
    nodeAddress: string;
    socketPort: string | number;
    apiPort: string | number;
    validatorPort: string | number;
    sslMode: boolean;
}
