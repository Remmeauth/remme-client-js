import { NewPubKeyPayload } from "remme-protobuf";
import { IRemmeKeys } from "remme-keys";

/**
 * Interface that take method store in publicKeyStorage
 */
export interface IPublicKeyStore {
    data: string;
    keys: IRemmeKeys;
    validFrom: number;
    validTo: number;
    publicKeyType?: NewPubKeyPayload.PubKeyType;
    rsaSignaturePadding?: NewPubKeyPayload.RSASignaturePadding;
}
