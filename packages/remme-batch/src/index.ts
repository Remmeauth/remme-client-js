import { RemmeMethods, IRemmeRest } from "remme-rest";

import { IRemmeBatch } from "./interface";
import { BatchResult } from "./models";

class RemmeBatch implements IRemmeBatch {
    private readonly _remmeRest: IRemmeRest;

    public constructor(remmeRest: IRemmeRest) {
        this._remmeRest = remmeRest;
    }

    public async getStatus(batchId: string): Promise<BatchResult> {
        if (batchId.search(/^[0-9a-f]{128}$/) === -1) {
            throw new Error("Given batchId is not a valid");
        }
        return await this._remmeRest.getRequest<BatchResult>(RemmeMethods.batchStatus, batchId);
    }
}

export {
    RemmeBatch,
    IRemmeBatch,
};
