import { AccountType } from "./AccountType";

export interface IAccountConfig {
    privateKeyHex?: string;
    type?: AccountType;
}
