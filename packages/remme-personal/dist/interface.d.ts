import { RemmeAccount } from "./models";
export interface IRemmePersonal {
    getBalance(): Promise<number>;
    getAddress(): string;
    generateAccount(): RemmeAccount;
}
