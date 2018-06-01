import { RemmeAccount } from "./models";
export interface IRemmePersonal {
    getBalance(): Promise<number>;
    getAddress(): string;
    generateAccount(privateKey?: string): RemmeAccount;
    setAccount(remmeAccount: RemmeAccount): void;
    getAccount(): RemmeAccount;
}
