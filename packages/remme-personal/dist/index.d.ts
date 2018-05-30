import { RemmeRest } from "remme-rest";
import { IRemmePersonal } from "./interface";
import { RemmeAccount } from "./models";
declare class RemmePersonal implements IRemmePersonal {
    private readonly _remmeRest;
    private readonly _pathToKeyStore;
    private _remmeAccount;
    constructor(remmeRest?: RemmeRest, pathToKeyStore?: string);
    generateAccount(): RemmeAccount;
    getAddress(): string;
    getBalance(): Promise<number>;
}
export { RemmePersonal, IRemmePersonal };
