import { RemmeMethods, RemmeRest } from "remme-rest";

import { IRemmePersonal } from "./interface";
import { RemmeAccountDto } from "./models";

class RemmePersonal implements IRemmePersonal {
    private readonly _remmeRest: RemmeRest;

    public constructor(remmeRest: RemmeRest = new RemmeRest()) {
        this._remmeRest = remmeRest;
    }

    public generateAccount(): RemmeAccountDto {
        return new RemmeAccountDto();
    }

    public getAddress(): string {
        return "";
    }

    public async getBalance(): Promise<number> {
        return undefined;
    }
}

export {
    RemmePersonal,
    IRemmePersonal,
};
