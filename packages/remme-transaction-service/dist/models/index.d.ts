export { BaseTransactionResponse, IBaseTransactionResponse } from "./BaseTransactionResponse";
/**
 * DTO for send transaction
 */
export declare class SendTransactionDto {
    data: string;
    constructor(data: string);
}
/**
 * DTO for creating transaction:
 * Documentation for building transactions
 * https://sawtooth.hyperledger.org/docs/core/releases/latest/_autogen/sdk_submit_tutorial_js.html#building-the-transaction
 */
export declare class CreateTransactionDto {
    familyName: string;
    familyVersion: string;
    inputs: string[];
    outputs: string[];
    payloadBytes: Uint8Array;
    constructor(familyName: string, familyVersion: string, inputs: string[], outputs: string[], payloadBytes: Uint8Array);
}
