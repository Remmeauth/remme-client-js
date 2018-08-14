import { InvalidTransactions } from "./BatchStateUpdateDto";
export declare class ErrorMessage extends Error {
    extendedData: string;
    transactionId: string;
    constructor(data: InvalidTransactions);
}
