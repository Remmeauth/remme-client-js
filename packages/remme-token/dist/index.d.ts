import { RemmeRest } from "remme-rest";
import { pki } from "remme-utils";
import { TransactionResult, BalanceResult } from "./models";
declare namespace RemmeToken {
    class Token {
        private readonly _remmeRest;
        constructor(remmeRest?: RemmeRest);
        sendToken(publicKeyTo: pki.Key, amount: number): Promise<TransactionResult>;
        getToken(publicKeyTo: pki.Key): Promise<BalanceResult>;
    }
}
export = RemmeToken;
