import { RemmeAccountDto } from "./models/RemmeAccountDto";

export interface IRemmePersonal {
    getBalance(): Promise<number>;
    getAddress(): string;
    generateAccount(): RemmeAccountDto;
}
