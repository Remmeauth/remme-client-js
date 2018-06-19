export class PublicKeyStorageCheckResult {
    public owner: string;
    public revoked: boolean;
    public valid: boolean;
    public valid_from: number;
    public valid_to: number;
    public entity_hash: string;
}
