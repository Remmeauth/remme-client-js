export class PublicKeyStorageCheckResult {
    public owner_public_key: string;
    public is_revoked: boolean;
    public is_valid: boolean;
    public valid_from: number;
    public valid_to: number;
    public entity_hash: string;
}
