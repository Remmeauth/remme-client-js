import { IRemmeKeys, RSASignaturePadding } from "remme-keys";

/**
 * Interface that take method store in publicKeyStorage
 */
export interface IPublicKeyCreate {
    data: string;
    keys: IRemmeKeys;
    validFrom: number;
    validTo: number;
    rsaSignaturePadding?: RSASignaturePadding;
    signature?: string;
    doOwnerPay?: boolean;
}
