export class CheckResult {
    public owner: string;

    public revoked: boolean;

    public isValid = (): boolean => !this.revoked;
}
