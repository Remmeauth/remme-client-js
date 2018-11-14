export interface IPublicKeyInfo {
    owner_public_key: string;
    address: string;
    is_revoked: boolean;
    is_valid: boolean;
    valid_from: number;
    valid_to: number;
    entity_hash: string;
    entity_hash_signature: string;
    type: string;
}

/**
 * Model that return to user which want to see information about public key (publicKeyStorage.getInfo)
 */
export class PublicKeyInfo {
    public ownerPublicKey: string;
    public address: string;
    public isRevoked: boolean;
    public isValid: boolean;
    public validFrom: number;
    public validTo: number;
    public entityHash: string;
    public entityHashSignature: string;
    public type: string;

    constructor(data: IPublicKeyInfo) {
        this.ownerPublicKey = data.owner_public_key;
        this.address = data.address;
        this.isRevoked = data.is_revoked;
        this.isValid = data.is_valid;
        this.validFrom = data.valid_from;
        this.validTo = data.valid_to;
        this.entityHash = data.entity_hash;
        this.entityHashSignature = data.entity_hash_signature;
        this.type = data.type;
    }
}
