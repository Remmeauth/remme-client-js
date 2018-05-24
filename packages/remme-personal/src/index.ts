import { RemmeMethods, RemmeRest } from "remme-rest";

import { IRemmePersonal } from "./interface";
import { RemmeAccountDto } from "./models";

class RemmePersonal implements IRemmePersonal {
    private readonly _remmeRest: RemmeRest;

    public constructor(remmeRest: RemmeRest = new RemmeRest()) {
        this._remmeRest = remmeRest;
    }

    public generateAccount(): RemmeAccountDto {
        throw new Error("not implemented");
    }

    public getAddress(): string {
        throw new Error("not implemented");
    }

    public async getBalance(): Promise<number> {
        throw new Error("not implemented");
    }
}

export {
    RemmePersonal,
    IRemmePersonal,
};
