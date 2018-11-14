export { RSA } from "./RSA";
export { EdDSA } from "./EdDSA";
export { KeyDto } from "./KeyDto";
export interface GenerateOptions {
    seed?: string;
    rsaKeySize?: number;
}
