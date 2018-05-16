import { RemmeRest } from "remme-rest";
import { TransactionResult, BalanceResult } from "./models";
declare namespace RemmeToken {
    class Token {
        private readonly _remmeRest;
        constructor(remmeRest?: RemmeRest);
        sendToken(publicKeyTo: string, amount: number): Promise<TransactionResult>;
        getToken(publicKeyTo: string): Promise<BalanceResult>;
    }
}
export = RemmeToken;
