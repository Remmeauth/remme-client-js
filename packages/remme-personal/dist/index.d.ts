import { RemmeRest } from "remme-rest";
import { IRemmePersonal } from "./interface";
import { RemmeAccount } from "./models";
declare class RemmePersonal implements IRemmePersonal {
    private readonly _remmeRest;
    private readonly _context;
    private _remmeAccount;
    constructor(remmeRest?: RemmeRest);
    generateAccount(privateKeyHex?: string): RemmeAccount;
    setAccount(remmeAccount: RemmeAccount): void;
    getAccount(): RemmeAccount;
    getAddress(): string;
    getBalance(): Promise<number>;
}
export { RemmePersonal, IRemmePersonal };
