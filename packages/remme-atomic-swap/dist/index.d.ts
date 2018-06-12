import { IRemmeRest } from "remme-rest";
import { BaseTransactionResponse } from "remme-utils";
import { IRemmeTransactionService } from "remme-transaction-service";
import { IRemmeSwap } from "./interface";
import { SwapInitDto, SwapInfoData } from "./models";
declare class RemmeSwap implements IRemmeSwap {
    private readonly _remmeRest;
    private readonly _remmeTransactionService;
    private readonly familyName;
    private readonly familyVersion;
    private readonly zeroAddress;
    constructor(remmeRest: IRemmeRest, remmeTransactionService: IRemmeTransactionService);
    approve(swapId: string): Promise<BaseTransactionResponse>;
    close(swapId: string, secretKey: string): Promise<BaseTransactionResponse>;
    expire(swapId: string): Promise<BaseTransactionResponse>;
    getInfo(swapId: string): Promise<SwapInfoData>;
    getPublicKey(): Promise<string>;
    init(data: SwapInitDto): Promise<BaseTransactionResponse>;
    setSecretLock(swapId: string, secretLock: string): Promise<BaseTransactionResponse>;
    private baseRequest<Input>(method, payload);
    private generateTransactionPayload(method, data);
    private validateData(data);
    private getAddresses(method, swapId, receiverAddress?);
    private createAndSendTransaction(transactionPayload, inputsOutputs);
    private checkParameters(parameters);
}
export { RemmeSwap, IRemmeSwap };
