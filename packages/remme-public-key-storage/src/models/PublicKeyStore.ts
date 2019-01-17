// import { NewPubKeyPayload } from "remme-protobuf";
import { IRemmeKeys, RSASignaturePadding } from "remme-keys";

/**
 * Interface that take method store in publicKeyStorage
 */
export interface IPublicKeyStore {
    data: string;
    keys: IRemmeKeys;
    signature?: string;
    validFrom: number;
    validTo: number;
    rsaSignaturePadding?: RSASignaturePadding;
}
