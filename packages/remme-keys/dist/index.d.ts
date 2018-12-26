/// <reference types="node" />
import { IRemmeKeys } from "./interface";
import { RSA, EdDSA, ECDSA, GenerateOptions, KeyType, IKeys, IRemmeKeysParams, RSASignaturePadding } from "./models";
/**
 * Class that works with different types of keys.
 * For now it is RSA, EdDSA (ED25519), ECDSA (secp256k1).
 *
 * @example
 * If you don't have key pair you can generate it.
 * ```typescript
 * import { KeyType } from "remme-keys";
 *
 * const keys = Remme.Keys.generateKeyPair(KeyType.RSA); // KeyType.EdDSA, KeyType.ECDSA also work.
 *
 * // then you can sign some data. For rsa key type you should provide RSASignaturePadding (by default PSS)
 * const signature = keys.sign("some data");
 * console.log(keys.verify(signature, "some data")); // true
 *
 * // or you can store it in the chain. For rsa key type you should provide RSASignaturePadding (by default PSS)
 *  const publicKeyStoring = await remme.publicKeyStorage.store({
 *       data: "store data",
 *       keys,
 *       validFrom: Math.round(Date.now() / 1000),
 *       validTo: Math.round(Date.now() / 1000 + 1000)
 *  });
 * ```
 *
 * If you have private key. You can construct RemmeKeys based on private key.
 * ```typescript
 * import { KeyType } from "remme-keys";
 * import { hexToBytes } from "remme-utils";
 *
 * const privateKey = "30820122300d06092a864886f70d01010105000382010f003082010a0282010100ad37c7475fe9d987555f8d92f0a440ebbf7bb2a87feffa3e2f229b9b782c4f7a78a1c255a687b1355fb788bef89188832d594a8f4e72d6d009d1ee56e9ff2a7c4de17cab3786bf74c9045bc30dc9475514a296faac9264c265aa4496005d17925c78f324f73a55bdfb6de2109c8ea64d75f10aea31c12f8a226deba507a57d22ad22391c066c5ce2d0072b4f18ddf97214ae3334f7ddff08d92bb6325f8f7c4d9419e7acd23abd9b9b0a3153fef0a626033719f7a9052de822c97fc54007357c8aa3dd416153a670a060edf453e61227f4e2acbb6461bbf40a948c74c4436cf5c10c3c29a42eaf6a74c4124a0f9dade599243cd9420266701254a7f4a4461fbf0203010001";
 * const keys = await Remme.Keys.construct({
 *      keyType: KeyType.RSA,
 *      privateKey: hexToBytes(privateKey),
 * });
 * ```
 *
 * If you have public key. You can construct RemmeKeys based on public key.
 * ```typescript
 * import { KeyType } from "remme-keys";
 * import { hexToBytes } from "remme-utils";
 *
 * const publicKey = "30820122300d06092a864886f70d01010105000382010f003082010a0282010100ad37c7475fe9d987555f8d92f0a440ebbf7bb2a87feffa3e2f229b9b782c4f7a78a1c255a687b1355fb788bef89188832d594a8f4e72d6d009d1ee56e9ff2a7c4de17cab3786bf74c9045bc30dc9475514a296faac9264c265aa4496005d17925c78f324f73a55bdfb6de2109c8ea64d75f10aea31c12f8a226deba507a57d22ad22391c066c5ce2d0072b4f18ddf97214ae3334f7ddff08d92bb6325f8f7c4d9419e7acd23abd9b9b0a3153fef0a626033719f7a9052de822c97fc54007357c8aa3dd416153a670a060edf453e61227f4e2acbb6461bbf40a948c74c4436cf5c10c3c29a42eaf6a74c4124a0f9dade599243cd9420266701254a7f4a4461fbf0203010001";
 * const keys = await Remme.Keys.construct({
 *      keyType: KeyType.RSA,
 *      publicKey: hexToBytes(publicKey),
 * });
 *
 * // OR get an address for it.
 * const address = Remme.getAddressFromPublicKey(KeyType.RSA, hexToBytes(publicKey));
 *
 * ```
 */
declare class RemmeKeys {
    /**
     * Generate key pair and get instance of RemmeKeys.
     * @example
     * If you don't have key pair you can generate it.
     * ```typescript
     * import { KeyType } from "remme-keys";
     *
     * const keys = await Remme.Keys.generateKeyPair(KeyType.RSA); // KeyType.EdDSA, KeyType.ECDSA also work.
     * ```
     * @param {KeyType} keyType
     * @param {GenerateOptions} options
     * @returns {Promise<IRemmeKeys>}
     */
    static generateKeyPair(keyType: KeyType, options?: GenerateOptions): Promise<{
        privateKey: any;
        publicKey: any;
    }>;
    /**
     * Can get address from public key.
     * @example
     * If you have public key. You can get an address for it.
     * ```typescript
     * import { KeyType } from "remme-keys";
     * import { hexToBytes } from "remme-utils";
     *
     * const publicKey = "30820122300d06092a864886f70d01010105000382010f003082010a0282010100ad37c7475fe9d987555f8d92f0a440ebbf7bb2a87feffa3e2f229b9b782c4f7a78a1c255a687b1355fb788bef89188832d594a8f4e72d6d009d1ee56e9ff2a7c4de17cab3786bf74c9045bc30dc9475514a296faac9264c265aa4496005d17925c78f324f73a55bdfb6de2109c8ea64d75f10aea31c12f8a226deba507a57d22ad22391c066c5ce2d0072b4f18ddf97214ae3334f7ddff08d92bb6325f8f7c4d9419e7acd23abd9b9b0a3153fef0a626033719f7a9052de822c97fc54007357c8aa3dd416153a670a060edf453e61227f4e2acbb6461bbf40a948c74c4436cf5c10c3c29a42eaf6a74c4124a0f9dade599243cd9420266701254a7f4a4461fbf0203010001";
     * const address = Remme.getAddressFromPublicKey(KeyType.RSA, hexToBytes(publicKey));
     * ```
     * @param {KeyType} keyType
     * @param {Buffer} publicKey
     * @returns {string}
     */
    static getAddressFromPublicKey(keyType: KeyType, publicKey: Buffer): string;
    /**
     * @example
     * If you have private key. You can construct RemmeKeys based on private key.
     * ```typescript
     * import { KeyType } from "remme-keys";
     * import { hexToBytes } from "remme-utils";
     *
     * const privateKey = "30820122300d06092a864886f70d01010105000382010f003082010a0282010100ad37c7475fe9d987555f8d92f0a440ebbf7bb2a87feffa3e2f229b9b782c4f7a78a1c255a687b1355fb788bef89188832d594a8f4e72d6d009d1ee56e9ff2a7c4de17cab3786bf74c9045bc30dc9475514a296faac9264c265aa4496005d17925c78f324f73a55bdfb6de2109c8ea64d75f10aea31c12f8a226deba507a57d22ad22391c066c5ce2d0072b4f18ddf97214ae3334f7ddff08d92bb6325f8f7c4d9419e7acd23abd9b9b0a3153fef0a626033719f7a9052de822c97fc54007357c8aa3dd416153a670a060edf453e61227f4e2acbb6461bbf40a948c74c4436cf5c10c3c29a42eaf6a74c4124a0f9dade599243cd9420266701254a7f4a4461fbf0203010001";
     * const keys = await Remme.Keys.contsruct({
     *      keyType: KeyType.RSA,
     *      privateKey: hexToBytes(privateKey),
     * });
     * ```
     *
     * If you public key. You can construct RemmeKeys based on public key.
     * ```typescript
     * import { KeyType } from "remme-keys";
     * import { hexToBytes } from "remme-utils";
     *
     * const publicKey = "30820122300d06092a864886f70d01010105000382010f003082010a0282010100ad37c7475fe9d987555f8d92f0a440ebbf7bb2a87feffa3e2f229b9b782c4f7a78a1c255a687b1355fb788bef89188832d594a8f4e72d6d009d1ee56e9ff2a7c4de17cab3786bf74c9045bc30dc9475514a296faac9264c265aa4496005d17925c78f324f73a55bdfb6de2109c8ea64d75f10aea31c12f8a226deba507a57d22ad22391c066c5ce2d0072b4f18ddf97214ae3334f7ddff08d92bb6325f8f7c4d9419e7acd23abd9b9b0a3153fef0a626033719f7a9052de822c97fc54007357c8aa3dd416153a670a060edf453e61227f4e2acbb6461bbf40a948c74c4436cf5c10c3c29a42eaf6a74c4124a0f9dade599243cd9420266701254a7f4a4461fbf0203010001";
     * const keys = await Remme.Keys.construct({
     *      keyType: KeyType.RSA,
     *      publicKey: hexToBytes(publicKey),
     * });
     * ```
     *
     * If you don't have any key. You can construct RemmeKeys without keys and it generate keys for you with default generation options.
     * ```typescript
     * import { KeyType } from "remme-keys";
     *
     * const keys = await Remme.Keys.construct({
     *      keyType: KeyType.RSA,
     * });
     * ```
     *
     * Also you can construct RemmeKeys without any params so keyType will be RSA by default.
     * ```typescript
     * import { KeyType } from "remme-keys";
     *
     * const keys = await Remme.Keys.construct();
     * ```
     * @param {KeyType} keyType
     * @param {Buffer} privateKey
     * @param {Buffer} publicKey
     */
    static construct({keyType, privateKey, publicKey}?: IRemmeKeysParams): Promise<IRemmeKeys>;
}
export { RemmeKeys, IRemmeKeys, KeyType, RSASignaturePadding, IRemmeKeysParams, RSA, ECDSA, EdDSA, IKeys };
