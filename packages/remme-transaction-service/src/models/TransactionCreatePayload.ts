export interface TransactionCreatePayload {
    familyName: string;
    familyVersion: string;
    inputs: string[];
    outputs: string[];
    payloadBytes: Uint8Array;
}
