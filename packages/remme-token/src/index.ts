import { RemmeMethods, RemmeRest } from "remme-rest";
// import { pki } from "node-forge";
import { TransactionPayload, TransactionResult, BalancePayload, BalanceResult } from "./models";

namespace RemmeToken {
    export class Token {
        private readonly _remmeRest: RemmeRest;

        // public constructor(nodeAdress: string = "localhost:8080") {
        //     this._remmeRest = new RemmeRest(nodeAdress);
        // }

        public constructor(remmeRest: RemmeRest = new RemmeRest()) {
            this._remmeRest = remmeRest;
        }

        public async sendToken(publicKeyTo: string, amount: number): Promise<TransactionResult> {
            const payload = new TransactionPayload(publicKeyTo, amount);
            const result = this._remmeRest
                .postRequest<TransactionPayload, TransactionResult>(payload, RemmeMethods.token);
            return result;
        }

        public async getToken(publicKeyTo: string): Promise<BalanceResult> {
            const payload = new BalancePayload(publicKeyTo);
            const result = this._remmeRest
                .getRequest<BalancePayload, BalanceResult>(payload, RemmeMethods.token);
            return result;
        }
    }
}

export = RemmeToken;
