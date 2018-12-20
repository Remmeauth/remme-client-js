import { IBatch } from "./BatchStateUpdateDto";
export declare class ErrorMessage extends Error {
    transactionId: string;
    constructor(data: IBatch);
}
