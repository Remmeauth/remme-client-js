import { IRemmeRest } from "remme-rest";
import { IBaseTransactionResponse } from "remme-base-transaction-response";
import { IRemmeTransactionService } from "remme-transaction-service";
import { IRemmeSwap } from "./interface";
import { SwapInitDto, SwapInfoData } from "./models";
declare class RemmeSwap implements IRemmeSwap {
    private readonly _remmeRest;
    private readonly _remmeTransactionService;
    private readonly _familyName;
    private readonly _familyVersion;
    private readonly _zeroAddress;
    private readonly _fiAddress;
    constructor(remmeRest: IRemmeRest, remmeTransactionService: IRemmeTransactionService);
    approve(swapId: string): Promise<IBaseTransactionResponse>;
    close(swapId: string, secretKey: string): Promise<IBaseTransactionResponse>;
    expire(swapId: string): Promise<IBaseTransactionResponse>;
    getInfo(swapId: string): Promise<SwapInfoData>;
    getPublicKey(): Promise<string>;
    init(data: SwapInitDto): Promise<IBaseTransactionResponse>;
    setSecretLock(swapId: string, secretLock: string): Promise<IBaseTransactionResponse>;
    private generateTransactionPayload(method, data);
    private validateData(data);
    private getAddresses(method, swapId, receiverAddress?);
    private createAndSendTransaction(transactionPayload, inputsOutputs);
    private checkParameters(parameters);
}
export { RemmeSwap, IRemmeSwap };
