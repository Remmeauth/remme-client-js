import { InvalidTransactions } from "./BatchStateUpdateDto";
export declare class ErrorMessage {
    extendedData: string;
    message: string;
    transactionId: string;
    constructor(data: InvalidTransactions);
}
