import { IBaseTransactionResponse } from "remme-transaction-service";
import { ISetBetPayload } from "remme-protobuf";

export interface IRemmeNodeManagement {
    open(initialStake: number): Promise<IBaseTransactionResponse>;
    close(): Promise<IBaseTransactionResponse>;
    setBet(payload: ISetBetPayload): Promise<IBaseTransactionResponse>;
}
