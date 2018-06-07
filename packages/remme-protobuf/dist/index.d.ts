import * as $protobuf from "protobufjs";

/** Properties of an AccountMethod. */
export interface IAccountMethod {
}

/** Represents an AccountMethod. */
export class AccountMethod implements IAccountMethod {

    /**
     * Constructs a new AccountMethod.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAccountMethod);

    /**
     * Creates a new AccountMethod instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AccountMethod instance
     */
    public static create(properties?: IAccountMethod): AccountMethod;

    /**
     * Encodes the specified AccountMethod message. Does not implicitly {@link AccountMethod.verify|verify} messages.
     * @param message AccountMethod message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAccountMethod, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AccountMethod message, length delimited. Does not implicitly {@link AccountMethod.verify|verify} messages.
     * @param message AccountMethod message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAccountMethod, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AccountMethod message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AccountMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountMethod;

    /**
     * Decodes an AccountMethod message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AccountMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AccountMethod;

    /**
     * Verifies an AccountMethod message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AccountMethod message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AccountMethod
     */
    public static fromObject(object: { [k: string]: any }): AccountMethod;

    /**
     * Creates a plain object from an AccountMethod message. Also converts values to other types if specified.
     * @param message AccountMethod
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AccountMethod, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AccountMethod to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace AccountMethod {

    /** Method enum. */
    enum Method {
        TRANSFER = 0,
        GENESIS = 1
    }
}

/** Properties of a TransferPayload. */
export interface ITransferPayload {

    /** TransferPayload addressTo */
    addressTo?: (string|null);

    /** TransferPayload value */
    value?: (number|Long|null);
}

/** Represents a TransferPayload. */
export class TransferPayload implements ITransferPayload {

    /**
     * Constructs a new TransferPayload.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITransferPayload);

    /** TransferPayload addressTo. */
    public addressTo: string;

    /** TransferPayload value. */
    public value: (number|Long);

    /**
     * Creates a new TransferPayload instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TransferPayload instance
     */
    public static create(properties?: ITransferPayload): TransferPayload;

    /**
     * Encodes the specified TransferPayload message. Does not implicitly {@link TransferPayload.verify|verify} messages.
     * @param message TransferPayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITransferPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TransferPayload message, length delimited. Does not implicitly {@link TransferPayload.verify|verify} messages.
     * @param message TransferPayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITransferPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TransferPayload message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TransferPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TransferPayload;

    /**
     * Decodes a TransferPayload message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TransferPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TransferPayload;

    /**
     * Verifies a TransferPayload message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TransferPayload message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TransferPayload
     */
    public static fromObject(object: { [k: string]: any }): TransferPayload;

    /**
     * Creates a plain object from a TransferPayload message. Also converts values to other types if specified.
     * @param message TransferPayload
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TransferPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TransferPayload to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GenesisPayload. */
export interface IGenesisPayload {

    /** GenesisPayload totalSupply */
    totalSupply?: (number|Long|null);
}

/** Represents a GenesisPayload. */
export class GenesisPayload implements IGenesisPayload {

    /**
     * Constructs a new GenesisPayload.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGenesisPayload);

    /** GenesisPayload totalSupply. */
    public totalSupply: (number|Long);

    /**
     * Creates a new GenesisPayload instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GenesisPayload instance
     */
    public static create(properties?: IGenesisPayload): GenesisPayload;

    /**
     * Encodes the specified GenesisPayload message. Does not implicitly {@link GenesisPayload.verify|verify} messages.
     * @param message GenesisPayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGenesisPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GenesisPayload message, length delimited. Does not implicitly {@link GenesisPayload.verify|verify} messages.
     * @param message GenesisPayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGenesisPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GenesisPayload message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GenesisPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GenesisPayload;

    /**
     * Decodes a GenesisPayload message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GenesisPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GenesisPayload;

    /**
     * Verifies a GenesisPayload message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GenesisPayload message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GenesisPayload
     */
    public static fromObject(object: { [k: string]: any }): GenesisPayload;

    /**
     * Creates a plain object from a GenesisPayload message. Also converts values to other types if specified.
     * @param message GenesisPayload
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GenesisPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GenesisPayload to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Account. */
export interface IAccount {

    /** Account balance */
    balance?: (number|Long|null);

    /** Account certificates */
    certificates?: (string[]|null);
}

/** Represents an Account. */
export class Account implements IAccount {

    /**
     * Constructs a new Account.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAccount);

    /** Account balance. */
    public balance: (number|Long);

    /** Account certificates. */
    public certificates: string[];

    /**
     * Creates a new Account instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Account instance
     */
    public static create(properties?: IAccount): Account;

    /**
     * Encodes the specified Account message. Does not implicitly {@link Account.verify|verify} messages.
     * @param message Account message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Account message, length delimited. Does not implicitly {@link Account.verify|verify} messages.
     * @param message Account message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Account message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Account
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Account;

    /**
     * Decodes an Account message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Account
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Account;

    /**
     * Verifies an Account message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Account message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Account
     */
    public static fromObject(object: { [k: string]: any }): Account;

    /**
     * Creates a plain object from an Account message. Also converts values to other types if specified.
     * @param message Account
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Account, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Account to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GenesisStatus. */
export interface IGenesisStatus {

    /** GenesisStatus status */
    status?: (boolean|null);
}

/** Represents a GenesisStatus. */
export class GenesisStatus implements IGenesisStatus {

    /**
     * Constructs a new GenesisStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGenesisStatus);

    /** GenesisStatus status. */
    public status: boolean;

    /**
     * Creates a new GenesisStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GenesisStatus instance
     */
    public static create(properties?: IGenesisStatus): GenesisStatus;

    /**
     * Encodes the specified GenesisStatus message. Does not implicitly {@link GenesisStatus.verify|verify} messages.
     * @param message GenesisStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGenesisStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GenesisStatus message, length delimited. Does not implicitly {@link GenesisStatus.verify|verify} messages.
     * @param message GenesisStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGenesisStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GenesisStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GenesisStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GenesisStatus;

    /**
     * Decodes a GenesisStatus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GenesisStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GenesisStatus;

    /**
     * Verifies a GenesisStatus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GenesisStatus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GenesisStatus
     */
    public static fromObject(object: { [k: string]: any }): GenesisStatus;

    /**
     * Creates a plain object from a GenesisStatus message. Also converts values to other types if specified.
     * @param message GenesisStatus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GenesisStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GenesisStatus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CertificateMethod. */
export interface ICertificateMethod {
}

/** Represents a CertificateMethod. */
export class CertificateMethod implements ICertificateMethod {

    /**
     * Constructs a new CertificateMethod.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICertificateMethod);

    /**
     * Creates a new CertificateMethod instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CertificateMethod instance
     */
    public static create(properties?: ICertificateMethod): CertificateMethod;

    /**
     * Encodes the specified CertificateMethod message. Does not implicitly {@link CertificateMethod.verify|verify} messages.
     * @param message CertificateMethod message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICertificateMethod, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CertificateMethod message, length delimited. Does not implicitly {@link CertificateMethod.verify|verify} messages.
     * @param message CertificateMethod message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICertificateMethod, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CertificateMethod message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CertificateMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CertificateMethod;

    /**
     * Decodes a CertificateMethod message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CertificateMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CertificateMethod;

    /**
     * Verifies a CertificateMethod message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CertificateMethod message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CertificateMethod
     */
    public static fromObject(object: { [k: string]: any }): CertificateMethod;

    /**
     * Creates a plain object from a CertificateMethod message. Also converts values to other types if specified.
     * @param message CertificateMethod
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CertificateMethod, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CertificateMethod to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace CertificateMethod {

    /** Method enum. */
    enum Method {
        STORE = 0,
        REVOKE = 1
    }
}

/** Properties of a NewCertificatePayload. */
export interface INewCertificatePayload {

    /** NewCertificatePayload certificateRaw */
    certificateRaw?: (string|null);

    /** NewCertificatePayload signatureRem */
    signatureRem?: (string|null);

    /** NewCertificatePayload signatureCrt */
    signatureCrt?: (string|null);

    /** NewCertificatePayload certSignerPublicKey */
    certSignerPublicKey?: (string|null);
}

/** Represents a NewCertificatePayload. */
export class NewCertificatePayload implements INewCertificatePayload {

    /**
     * Constructs a new NewCertificatePayload.
     * @param [properties] Properties to set
     */
    constructor(properties?: INewCertificatePayload);

    /** NewCertificatePayload certificateRaw. */
    public certificateRaw: string;

    /** NewCertificatePayload signatureRem. */
    public signatureRem: string;

    /** NewCertificatePayload signatureCrt. */
    public signatureCrt: string;

    /** NewCertificatePayload certSignerPublicKey. */
    public certSignerPublicKey: string;

    /**
     * Creates a new NewCertificatePayload instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NewCertificatePayload instance
     */
    public static create(properties?: INewCertificatePayload): NewCertificatePayload;

    /**
     * Encodes the specified NewCertificatePayload message. Does not implicitly {@link NewCertificatePayload.verify|verify} messages.
     * @param message NewCertificatePayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INewCertificatePayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NewCertificatePayload message, length delimited. Does not implicitly {@link NewCertificatePayload.verify|verify} messages.
     * @param message NewCertificatePayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INewCertificatePayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NewCertificatePayload message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NewCertificatePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NewCertificatePayload;

    /**
     * Decodes a NewCertificatePayload message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NewCertificatePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NewCertificatePayload;

    /**
     * Verifies a NewCertificatePayload message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NewCertificatePayload message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NewCertificatePayload
     */
    public static fromObject(object: { [k: string]: any }): NewCertificatePayload;

    /**
     * Creates a plain object from a NewCertificatePayload message. Also converts values to other types if specified.
     * @param message NewCertificatePayload
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NewCertificatePayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NewCertificatePayload to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RevokeCertificatePayload. */
export interface IRevokeCertificatePayload {

    /** RevokeCertificatePayload address */
    address?: (string|null);
}

/** Represents a RevokeCertificatePayload. */
export class RevokeCertificatePayload implements IRevokeCertificatePayload {

    /**
     * Constructs a new RevokeCertificatePayload.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRevokeCertificatePayload);

    /** RevokeCertificatePayload address. */
    public address: string;

    /**
     * Creates a new RevokeCertificatePayload instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RevokeCertificatePayload instance
     */
    public static create(properties?: IRevokeCertificatePayload): RevokeCertificatePayload;

    /**
     * Encodes the specified RevokeCertificatePayload message. Does not implicitly {@link RevokeCertificatePayload.verify|verify} messages.
     * @param message RevokeCertificatePayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRevokeCertificatePayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RevokeCertificatePayload message, length delimited. Does not implicitly {@link RevokeCertificatePayload.verify|verify} messages.
     * @param message RevokeCertificatePayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRevokeCertificatePayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RevokeCertificatePayload message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RevokeCertificatePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RevokeCertificatePayload;

    /**
     * Decodes a RevokeCertificatePayload message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RevokeCertificatePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RevokeCertificatePayload;

    /**
     * Verifies a RevokeCertificatePayload message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RevokeCertificatePayload message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RevokeCertificatePayload
     */
    public static fromObject(object: { [k: string]: any }): RevokeCertificatePayload;

    /**
     * Creates a plain object from a RevokeCertificatePayload message. Also converts values to other types if specified.
     * @param message RevokeCertificatePayload
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RevokeCertificatePayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RevokeCertificatePayload to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CertificateStorage. */
export interface ICertificateStorage {

    /** CertificateStorage hash */
    hash?: (string|null);

    /** CertificateStorage owner */
    owner?: (string|null);

    /** CertificateStorage revoked */
    revoked?: (boolean|null);
}

/** Represents a CertificateStorage. */
export class CertificateStorage implements ICertificateStorage {

    /**
     * Constructs a new CertificateStorage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICertificateStorage);

    /** CertificateStorage hash. */
    public hash: string;

    /** CertificateStorage owner. */
    public owner: string;

    /** CertificateStorage revoked. */
    public revoked: boolean;

    /**
     * Creates a new CertificateStorage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CertificateStorage instance
     */
    public static create(properties?: ICertificateStorage): CertificateStorage;

    /**
     * Encodes the specified CertificateStorage message. Does not implicitly {@link CertificateStorage.verify|verify} messages.
     * @param message CertificateStorage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICertificateStorage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CertificateStorage message, length delimited. Does not implicitly {@link CertificateStorage.verify|verify} messages.
     * @param message CertificateStorage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICertificateStorage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CertificateStorage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CertificateStorage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CertificateStorage;

    /**
     * Decodes a CertificateStorage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CertificateStorage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CertificateStorage;

    /**
     * Verifies a CertificateStorage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CertificateStorage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CertificateStorage
     */
    public static fromObject(object: { [k: string]: any }): CertificateStorage;

    /**
     * Creates a plain object from a CertificateStorage message. Also converts values to other types if specified.
     * @param message CertificateStorage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CertificateStorage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CertificateStorage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TransactionPayload. */
export interface ITransactionPayload {

    /** TransactionPayload method */
    method?: (number|null);

    /** TransactionPayload data */
    data?: (Uint8Array|null);
}

/** Represents a TransactionPayload. */
export class TransactionPayload implements ITransactionPayload {

    /**
     * Constructs a new TransactionPayload.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITransactionPayload);

    /** TransactionPayload method. */
    public method: number;

    /** TransactionPayload data. */
    public data: Uint8Array;

    /**
     * Creates a new TransactionPayload instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TransactionPayload instance
     */
    public static create(properties?: ITransactionPayload): TransactionPayload;

    /**
     * Encodes the specified TransactionPayload message. Does not implicitly {@link TransactionPayload.verify|verify} messages.
     * @param message TransactionPayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITransactionPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TransactionPayload message, length delimited. Does not implicitly {@link TransactionPayload.verify|verify} messages.
     * @param message TransactionPayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITransactionPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TransactionPayload message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TransactionPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TransactionPayload;

    /**
     * Decodes a TransactionPayload message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TransactionPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TransactionPayload;

    /**
     * Verifies a TransactionPayload message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TransactionPayload message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TransactionPayload
     */
    public static fromObject(object: { [k: string]: any }): TransactionPayload;

    /**
     * Creates a plain object from a TransactionPayload message. Also converts values to other types if specified.
     * @param message TransactionPayload
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TransactionPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TransactionPayload to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
