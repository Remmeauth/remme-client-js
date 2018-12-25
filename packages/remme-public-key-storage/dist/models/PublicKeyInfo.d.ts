export interface IPublicKeyInfo {
    owner_public_key: string;
    address: string;
    is_revoked: boolean;
    is_valid: boolean;
    valid_from: number;
    valid_to: number;
    entity_hash: string;
    entity_hash_signature: string;
    public_key: string;
    type: string;
}
/**
 * Model that return to user which want to see information about public key (publicKeyStorage.getInfo)
 */
export declare class PublicKeyInfo {
    ownerPublicKey: string;
    address: string;
    isRevoked: boolean;
    isValid: boolean;
    validFrom: number;
    validTo: number;
    entityHash: string;
    entityHashSignature: string;
    publicKey: string;
    type: string;
    constructor(data: IPublicKeyInfo);
}
