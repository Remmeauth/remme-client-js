import { BatchResult } from "./models";

export interface IRemmeBatch {
    getStatus(batchId: string): Promise<BatchResult>;
}
