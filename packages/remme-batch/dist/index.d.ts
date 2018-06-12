import { IRemmeRest } from "remme-rest";
import { IRemmeBatch } from "./interface";
import { BatchResult } from "./models";
declare class RemmeBatch implements IRemmeBatch {
    private readonly _remmeRest;
    constructor(remmeRest: IRemmeRest);
    getStatus(batchId: string): Promise<BatchResult>;
}
export { RemmeBatch, IRemmeBatch };
