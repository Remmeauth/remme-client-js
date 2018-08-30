import { NewPubKeyPayload } from "remme-protobuf";
import { forge } from "remme-utils";
export interface PublicKeyStorageStoreDto {
    data: string;
    publicKey: forge.pki.Key | forge.pki.PEM;
    validFrom: number;
    validTo: number;
    privateKey: forge.pki.Key | forge.pki.PEM;
    publicKeyType?: NewPubKeyPayload.PubKeyType;
    entityType?: NewPubKeyPayload.EntityType;
}
