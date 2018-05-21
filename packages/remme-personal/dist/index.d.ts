import { RemmeRest } from "remme-rest";
import { IRemmePersonal } from "./interface";
import { RemmeAccountDto } from "./models";
declare class RemmePersonal implements IRemmePersonal {
    private readonly _remmeRest;
    constructor(remmeRest?: RemmeRest);
    generateAccount(): RemmeAccountDto;
    getAddress(): string;
    getBalance(): Promise<number>;
}
export { RemmePersonal, IRemmePersonal };
