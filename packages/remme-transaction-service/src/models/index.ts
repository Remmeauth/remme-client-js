export { BaseTransactionResponse, IBaseTransactionResponse } from "./BaseTransactionResponse";

/**
 * DTO for send transaction
 */
export class SendTransactionDto {
    constructor(
        public data: string,
    ) {}
}
/* tslint:disable */
/**
 * DTO for creating transaction:
 * Documentation for building transactions
 * https://sawtooth.hyperledger.org/docs/core/releases/latest/_autogen/sdk_submit_tutorial_js.html#building-the-transaction
 */
/* tslint:enable */
export class CreateTransactionDto {
    constructor(
        public familyName: string,
        public familyVersion: string,
        public inputs: string[],
        public outputs: string[],
        public payloadBytes: Buffer | Uint8Array,
    ) {}
}
