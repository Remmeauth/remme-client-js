import { RemmeMethods, RemmeRest } from "remme-rest";

import { IRemmeBatch } from "./interface";
import { BatchResult } from "./models";

class RemmeBatch implements IRemmeBatch {
    private readonly _remmeRest: RemmeRest;

    public constructor(remmeRest: RemmeRest = new RemmeRest()) {
        this._remmeRest = remmeRest;
    }

    public async getStatus(batchId: string): Promise<BatchResult> {
        return await this._remmeRest.getRequest<BatchResult>(RemmeMethods.batchStatus, batchId);
    }
}

export {
    RemmeBatch,
    IRemmeBatch,
};
