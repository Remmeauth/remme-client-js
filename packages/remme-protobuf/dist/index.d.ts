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

    /** Account pubKeys */
    pubKeys?: (string[]|null);
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

    /** Account pubKeys. */
    public pubKeys: string[];

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

/** Properties of an AtomicSwapMethod. */
export interface IAtomicSwapMethod {
}

/** Represents an AtomicSwapMethod. */
export class AtomicSwapMethod implements IAtomicSwapMethod {

    /**
     * Constructs a new AtomicSwapMethod.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAtomicSwapMethod);

    /**
     * Creates a new AtomicSwapMethod instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AtomicSwapMethod instance
     */
    public static create(properties?: IAtomicSwapMethod): AtomicSwapMethod;

    /**
     * Encodes the specified AtomicSwapMethod message. Does not implicitly {@link AtomicSwapMethod.verify|verify} messages.
     * @param message AtomicSwapMethod message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAtomicSwapMethod, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AtomicSwapMethod message, length delimited. Does not implicitly {@link AtomicSwapMethod.verify|verify} messages.
     * @param message AtomicSwapMethod message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAtomicSwapMethod, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AtomicSwapMethod message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AtomicSwapMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AtomicSwapMethod;

    /**
     * Decodes an AtomicSwapMethod message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AtomicSwapMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AtomicSwapMethod;

    /**
     * Verifies an AtomicSwapMethod message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AtomicSwapMethod message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AtomicSwapMethod
     */
    public static fromObject(object: { [k: string]: any }): AtomicSwapMethod;

    /**
     * Creates a plain object from an AtomicSwapMethod message. Also converts values to other types if specified.
     * @param message AtomicSwapMethod
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AtomicSwapMethod, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AtomicSwapMethod to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace AtomicSwapMethod {

    /** Method enum. */
    enum Method {
        INIT = 0,
        APPROVE = 1,
        EXPIRE = 2,
        SET_SECRET_LOCK = 3,
        CLOSE = 4
    }
}

/** Properties of an AtomicSwapInitPayload. */
export interface IAtomicSwapInitPayload {

    /** AtomicSwapInitPayload receiverAddress */
    receiverAddress?: (string|null);

    /** AtomicSwapInitPayload senderAddressNonLocal */
    senderAddressNonLocal?: (string|null);

    /** AtomicSwapInitPayload amount */
    amount?: (number|Long|null);

    /** AtomicSwapInitPayload swapId */
    swapId?: (string|null);

    /** AtomicSwapInitPayload secretLockBySolicitor */
    secretLockBySolicitor?: (string|null);

    /** AtomicSwapInitPayload emailAddressEncryptedByInitiator */
    emailAddressEncryptedByInitiator?: (string|null);

    /** AtomicSwapInitPayload createdAt */
    createdAt?: (number|null);
}

/** Represents an AtomicSwapInitPayload. */
export class AtomicSwapInitPayload implements IAtomicSwapInitPayload {

    /**
     * Constructs a new AtomicSwapInitPayload.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAtomicSwapInitPayload);

    /** AtomicSwapInitPayload receiverAddress. */
    public receiverAddress: string;

    /** AtomicSwapInitPayload senderAddressNonLocal. */
    public senderAddressNonLocal: string;

    /** AtomicSwapInitPayload amount. */
    public amount: (number|Long);

    /** AtomicSwapInitPayload swapId. */
    public swapId: string;

    /** AtomicSwapInitPayload secretLockBySolicitor. */
    public secretLockBySolicitor: string;

    /** AtomicSwapInitPayload emailAddressEncryptedByInitiator. */
    public emailAddressEncryptedByInitiator: string;

    /** AtomicSwapInitPayload createdAt. */
    public createdAt: number;

    /**
     * Creates a new AtomicSwapInitPayload instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AtomicSwapInitPayload instance
     */
    public static create(properties?: IAtomicSwapInitPayload): AtomicSwapInitPayload;

    /**
     * Encodes the specified AtomicSwapInitPayload message. Does not implicitly {@link AtomicSwapInitPayload.verify|verify} messages.
     * @param message AtomicSwapInitPayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAtomicSwapInitPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AtomicSwapInitPayload message, length delimited. Does not implicitly {@link AtomicSwapInitPayload.verify|verify} messages.
     * @param message AtomicSwapInitPayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAtomicSwapInitPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AtomicSwapInitPayload message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AtomicSwapInitPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AtomicSwapInitPayload;

    /**
     * Decodes an AtomicSwapInitPayload message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AtomicSwapInitPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AtomicSwapInitPayload;

    /**
     * Verifies an AtomicSwapInitPayload message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AtomicSwapInitPayload message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AtomicSwapInitPayload
     */
    public static fromObject(object: { [k: string]: any }): AtomicSwapInitPayload;

    /**
     * Creates a plain object from an AtomicSwapInitPayload message. Also converts values to other types if specified.
     * @param message AtomicSwapInitPayload
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AtomicSwapInitPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AtomicSwapInitPayload to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AtomicSwapApprovePayload. */
export interface IAtomicSwapApprovePayload {

    /** AtomicSwapApprovePayload swapId */
    swapId?: (string|null);
}

/** Represents an AtomicSwapApprovePayload. */
export class AtomicSwapApprovePayload implements IAtomicSwapApprovePayload {

    /**
     * Constructs a new AtomicSwapApprovePayload.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAtomicSwapApprovePayload);

    /** AtomicSwapApprovePayload swapId. */
    public swapId: string;

    /**
     * Creates a new AtomicSwapApprovePayload instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AtomicSwapApprovePayload instance
     */
    public static create(properties?: IAtomicSwapApprovePayload): AtomicSwapApprovePayload;

    /**
     * Encodes the specified AtomicSwapApprovePayload message. Does not implicitly {@link AtomicSwapApprovePayload.verify|verify} messages.
     * @param message AtomicSwapApprovePayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAtomicSwapApprovePayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AtomicSwapApprovePayload message, length delimited. Does not implicitly {@link AtomicSwapApprovePayload.verify|verify} messages.
     * @param message AtomicSwapApprovePayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAtomicSwapApprovePayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AtomicSwapApprovePayload message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AtomicSwapApprovePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AtomicSwapApprovePayload;

    /**
     * Decodes an AtomicSwapApprovePayload message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AtomicSwapApprovePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AtomicSwapApprovePayload;

    /**
     * Verifies an AtomicSwapApprovePayload message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AtomicSwapApprovePayload message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AtomicSwapApprovePayload
     */
    public static fromObject(object: { [k: string]: any }): AtomicSwapApprovePayload;

    /**
     * Creates a plain object from an AtomicSwapApprovePayload message. Also converts values to other types if specified.
     * @param message AtomicSwapApprovePayload
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AtomicSwapApprovePayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AtomicSwapApprovePayload to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AtomicSwapExpirePayload. */
export interface IAtomicSwapExpirePayload {

    /** AtomicSwapExpirePayload swapId */
    swapId?: (string|null);
}

/** Represents an AtomicSwapExpirePayload. */
export class AtomicSwapExpirePayload implements IAtomicSwapExpirePayload {

    /**
     * Constructs a new AtomicSwapExpirePayload.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAtomicSwapExpirePayload);

    /** AtomicSwapExpirePayload swapId. */
    public swapId: string;

    /**
     * Creates a new AtomicSwapExpirePayload instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AtomicSwapExpirePayload instance
     */
    public static create(properties?: IAtomicSwapExpirePayload): AtomicSwapExpirePayload;

    /**
     * Encodes the specified AtomicSwapExpirePayload message. Does not implicitly {@link AtomicSwapExpirePayload.verify|verify} messages.
     * @param message AtomicSwapExpirePayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAtomicSwapExpirePayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AtomicSwapExpirePayload message, length delimited. Does not implicitly {@link AtomicSwapExpirePayload.verify|verify} messages.
     * @param message AtomicSwapExpirePayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAtomicSwapExpirePayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AtomicSwapExpirePayload message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AtomicSwapExpirePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AtomicSwapExpirePayload;

    /**
     * Decodes an AtomicSwapExpirePayload message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AtomicSwapExpirePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AtomicSwapExpirePayload;

    /**
     * Verifies an AtomicSwapExpirePayload message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AtomicSwapExpirePayload message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AtomicSwapExpirePayload
     */
    public static fromObject(object: { [k: string]: any }): AtomicSwapExpirePayload;

    /**
     * Creates a plain object from an AtomicSwapExpirePayload message. Also converts values to other types if specified.
     * @param message AtomicSwapExpirePayload
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AtomicSwapExpirePayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AtomicSwapExpirePayload to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AtomicSwapSetSecretLockPayload. */
export interface IAtomicSwapSetSecretLockPayload {

    /** AtomicSwapSetSecretLockPayload swapId */
    swapId?: (string|null);

    /** AtomicSwapSetSecretLockPayload secretLock */
    secretLock?: (string|null);
}

/** Represents an AtomicSwapSetSecretLockPayload. */
export class AtomicSwapSetSecretLockPayload implements IAtomicSwapSetSecretLockPayload {

    /**
     * Constructs a new AtomicSwapSetSecretLockPayload.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAtomicSwapSetSecretLockPayload);

    /** AtomicSwapSetSecretLockPayload swapId. */
    public swapId: string;

    /** AtomicSwapSetSecretLockPayload secretLock. */
    public secretLock: string;

    /**
     * Creates a new AtomicSwapSetSecretLockPayload instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AtomicSwapSetSecretLockPayload instance
     */
    public static create(properties?: IAtomicSwapSetSecretLockPayload): AtomicSwapSetSecretLockPayload;

    /**
     * Encodes the specified AtomicSwapSetSecretLockPayload message. Does not implicitly {@link AtomicSwapSetSecretLockPayload.verify|verify} messages.
     * @param message AtomicSwapSetSecretLockPayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAtomicSwapSetSecretLockPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AtomicSwapSetSecretLockPayload message, length delimited. Does not implicitly {@link AtomicSwapSetSecretLockPayload.verify|verify} messages.
     * @param message AtomicSwapSetSecretLockPayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAtomicSwapSetSecretLockPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AtomicSwapSetSecretLockPayload message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AtomicSwapSetSecretLockPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AtomicSwapSetSecretLockPayload;

    /**
     * Decodes an AtomicSwapSetSecretLockPayload message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AtomicSwapSetSecretLockPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AtomicSwapSetSecretLockPayload;

    /**
     * Verifies an AtomicSwapSetSecretLockPayload message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AtomicSwapSetSecretLockPayload message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AtomicSwapSetSecretLockPayload
     */
    public static fromObject(object: { [k: string]: any }): AtomicSwapSetSecretLockPayload;

    /**
     * Creates a plain object from an AtomicSwapSetSecretLockPayload message. Also converts values to other types if specified.
     * @param message AtomicSwapSetSecretLockPayload
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AtomicSwapSetSecretLockPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AtomicSwapSetSecretLockPayload to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AtomicSwapClosePayload. */
export interface IAtomicSwapClosePayload {

    /** AtomicSwapClosePayload swapId */
    swapId?: (string|null);

    /** AtomicSwapClosePayload secretKey */
    secretKey?: (string|null);
}

/** Represents an AtomicSwapClosePayload. */
export class AtomicSwapClosePayload implements IAtomicSwapClosePayload {

    /**
     * Constructs a new AtomicSwapClosePayload.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAtomicSwapClosePayload);

    /** AtomicSwapClosePayload swapId. */
    public swapId: string;

    /** AtomicSwapClosePayload secretKey. */
    public secretKey: string;

    /**
     * Creates a new AtomicSwapClosePayload instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AtomicSwapClosePayload instance
     */
    public static create(properties?: IAtomicSwapClosePayload): AtomicSwapClosePayload;

    /**
     * Encodes the specified AtomicSwapClosePayload message. Does not implicitly {@link AtomicSwapClosePayload.verify|verify} messages.
     * @param message AtomicSwapClosePayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAtomicSwapClosePayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AtomicSwapClosePayload message, length delimited. Does not implicitly {@link AtomicSwapClosePayload.verify|verify} messages.
     * @param message AtomicSwapClosePayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAtomicSwapClosePayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AtomicSwapClosePayload message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AtomicSwapClosePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AtomicSwapClosePayload;

    /**
     * Decodes an AtomicSwapClosePayload message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AtomicSwapClosePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AtomicSwapClosePayload;

    /**
     * Verifies an AtomicSwapClosePayload message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AtomicSwapClosePayload message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AtomicSwapClosePayload
     */
    public static fromObject(object: { [k: string]: any }): AtomicSwapClosePayload;

    /**
     * Creates a plain object from an AtomicSwapClosePayload message. Also converts values to other types if specified.
     * @param message AtomicSwapClosePayload
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AtomicSwapClosePayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AtomicSwapClosePayload to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AtomicSwapInfo. */
export interface IAtomicSwapInfo {

    /** AtomicSwapInfo state */
    state?: (AtomicSwapInfo.State|null);

    /** AtomicSwapInfo senderAddress */
    senderAddress?: (string|null);

    /** AtomicSwapInfo senderAddressNonLocal */
    senderAddressNonLocal?: (string|null);

    /** AtomicSwapInfo receiverAddress */
    receiverAddress?: (string|null);

    /** AtomicSwapInfo amount */
    amount?: (number|Long|null);

    /** AtomicSwapInfo emailAddressEncryptedOptional */
    emailAddressEncryptedOptional?: (string|null);

    /** AtomicSwapInfo swapId */
    swapId?: (string|null);

    /** AtomicSwapInfo secretLock */
    secretLock?: (string|null);

    /** AtomicSwapInfo secretKey */
    secretKey?: (string|null);

    /** AtomicSwapInfo createdAt */
    createdAt?: (number|null);

    /** AtomicSwapInfo isInitiator */
    isInitiator?: (boolean|null);
}

/** Represents an AtomicSwapInfo. */
export class AtomicSwapInfo implements IAtomicSwapInfo {

    /**
     * Constructs a new AtomicSwapInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAtomicSwapInfo);

    /** AtomicSwapInfo state. */
    public state: AtomicSwapInfo.State;

    /** AtomicSwapInfo senderAddress. */
    public senderAddress: string;

    /** AtomicSwapInfo senderAddressNonLocal. */
    public senderAddressNonLocal: string;

    /** AtomicSwapInfo receiverAddress. */
    public receiverAddress: string;

    /** AtomicSwapInfo amount. */
    public amount: (number|Long);

    /** AtomicSwapInfo emailAddressEncryptedOptional. */
    public emailAddressEncryptedOptional: string;

    /** AtomicSwapInfo swapId. */
    public swapId: string;

    /** AtomicSwapInfo secretLock. */
    public secretLock: string;

    /** AtomicSwapInfo secretKey. */
    public secretKey: string;

    /** AtomicSwapInfo createdAt. */
    public createdAt: number;

    /** AtomicSwapInfo isInitiator. */
    public isInitiator: boolean;

    /**
     * Creates a new AtomicSwapInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AtomicSwapInfo instance
     */
    public static create(properties?: IAtomicSwapInfo): AtomicSwapInfo;

    /**
     * Encodes the specified AtomicSwapInfo message. Does not implicitly {@link AtomicSwapInfo.verify|verify} messages.
     * @param message AtomicSwapInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAtomicSwapInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AtomicSwapInfo message, length delimited. Does not implicitly {@link AtomicSwapInfo.verify|verify} messages.
     * @param message AtomicSwapInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAtomicSwapInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AtomicSwapInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AtomicSwapInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AtomicSwapInfo;

    /**
     * Decodes an AtomicSwapInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AtomicSwapInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AtomicSwapInfo;

    /**
     * Verifies an AtomicSwapInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AtomicSwapInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AtomicSwapInfo
     */
    public static fromObject(object: { [k: string]: any }): AtomicSwapInfo;

    /**
     * Creates a plain object from an AtomicSwapInfo message. Also converts values to other types if specified.
     * @param message AtomicSwapInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AtomicSwapInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AtomicSwapInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace AtomicSwapInfo {

    /** State enum. */
    enum State {
        EMPTY = 0,
        OPENED = 1,
        SECRET_LOCK_PROVIDED = 2,
        APPROVED = 3,
        CLOSED = 4,
        EXPIRED = 5
    }
}

/** Properties of a BlockInfo. */
export interface IBlockInfo {

    /** BlockInfo blockNum */
    blockNum?: (number|Long|null);

    /** BlockInfo previousBlockId */
    previousBlockId?: (string|null);

    /** BlockInfo signerPublicKey */
    signerPublicKey?: (string|null);

    /** BlockInfo headerSignature */
    headerSignature?: (string|null);

    /** BlockInfo timestamp */
    timestamp?: (number|Long|null);
}

/** Represents a BlockInfo. */
export class BlockInfo implements IBlockInfo {

    /**
     * Constructs a new BlockInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBlockInfo);

    /** BlockInfo blockNum. */
    public blockNum: (number|Long);

    /** BlockInfo previousBlockId. */
    public previousBlockId: string;

    /** BlockInfo signerPublicKey. */
    public signerPublicKey: string;

    /** BlockInfo headerSignature. */
    public headerSignature: string;

    /** BlockInfo timestamp. */
    public timestamp: (number|Long);

    /**
     * Creates a new BlockInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BlockInfo instance
     */
    public static create(properties?: IBlockInfo): BlockInfo;

    /**
     * Encodes the specified BlockInfo message. Does not implicitly {@link BlockInfo.verify|verify} messages.
     * @param message BlockInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBlockInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BlockInfo message, length delimited. Does not implicitly {@link BlockInfo.verify|verify} messages.
     * @param message BlockInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBlockInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BlockInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BlockInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BlockInfo;

    /**
     * Decodes a BlockInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BlockInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BlockInfo;

    /**
     * Verifies a BlockInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BlockInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BlockInfo
     */
    public static fromObject(object: { [k: string]: any }): BlockInfo;

    /**
     * Creates a plain object from a BlockInfo message. Also converts values to other types if specified.
     * @param message BlockInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BlockInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BlockInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a BlockInfoConfig. */
export interface IBlockInfoConfig {

    /** BlockInfoConfig latestBlock */
    latestBlock?: (number|Long|null);

    /** BlockInfoConfig oldestBlock */
    oldestBlock?: (number|Long|null);

    /** BlockInfoConfig targetCount */
    targetCount?: (number|Long|null);

    /** BlockInfoConfig syncTolerance */
    syncTolerance?: (number|Long|null);
}

/** Represents a BlockInfoConfig. */
export class BlockInfoConfig implements IBlockInfoConfig {

    /**
     * Constructs a new BlockInfoConfig.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBlockInfoConfig);

    /** BlockInfoConfig latestBlock. */
    public latestBlock: (number|Long);

    /** BlockInfoConfig oldestBlock. */
    public oldestBlock: (number|Long);

    /** BlockInfoConfig targetCount. */
    public targetCount: (number|Long);

    /** BlockInfoConfig syncTolerance. */
    public syncTolerance: (number|Long);

    /**
     * Creates a new BlockInfoConfig instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BlockInfoConfig instance
     */
    public static create(properties?: IBlockInfoConfig): BlockInfoConfig;

    /**
     * Encodes the specified BlockInfoConfig message. Does not implicitly {@link BlockInfoConfig.verify|verify} messages.
     * @param message BlockInfoConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBlockInfoConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BlockInfoConfig message, length delimited. Does not implicitly {@link BlockInfoConfig.verify|verify} messages.
     * @param message BlockInfoConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBlockInfoConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BlockInfoConfig message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BlockInfoConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BlockInfoConfig;

    /**
     * Decodes a BlockInfoConfig message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BlockInfoConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BlockInfoConfig;

    /**
     * Verifies a BlockInfoConfig message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BlockInfoConfig message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BlockInfoConfig
     */
    public static fromObject(object: { [k: string]: any }): BlockInfoConfig;

    /**
     * Creates a plain object from a BlockInfoConfig message. Also converts values to other types if specified.
     * @param message BlockInfoConfig
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BlockInfoConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BlockInfoConfig to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusMessagePayload. */
export interface IConsensusMessagePayload {

    /** ConsensusMessagePayload period */
    period?: (number|Long|null);

    /** ConsensusMessagePayload proposalId */
    proposalId?: (string|null);

    /** ConsensusMessagePayload voterId */
    voterId?: (string|null);
}

/** Represents a ConsensusMessagePayload. */
export class ConsensusMessagePayload implements IConsensusMessagePayload {

    /**
     * Constructs a new ConsensusMessagePayload.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusMessagePayload);

    /** ConsensusMessagePayload period. */
    public period: (number|Long);

    /** ConsensusMessagePayload proposalId. */
    public proposalId: string;

    /** ConsensusMessagePayload voterId. */
    public voterId: string;

    /**
     * Creates a new ConsensusMessagePayload instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusMessagePayload instance
     */
    public static create(properties?: IConsensusMessagePayload): ConsensusMessagePayload;

    /**
     * Encodes the specified ConsensusMessagePayload message. Does not implicitly {@link ConsensusMessagePayload.verify|verify} messages.
     * @param message ConsensusMessagePayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusMessagePayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusMessagePayload message, length delimited. Does not implicitly {@link ConsensusMessagePayload.verify|verify} messages.
     * @param message ConsensusMessagePayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusMessagePayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusMessagePayload message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusMessagePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ConsensusMessagePayload;

    /**
     * Decodes a ConsensusMessagePayload message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusMessagePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ConsensusMessagePayload;

    /**
     * Verifies a ConsensusMessagePayload message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ConsensusMessagePayload message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusMessagePayload
     */
    public static fromObject(object: { [k: string]: any }): ConsensusMessagePayload;

    /**
     * Creates a plain object from a ConsensusMessagePayload message. Also converts values to other types if specified.
     * @param message ConsensusMessagePayload
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ConsensusMessagePayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ConsensusMessagePayload to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusMessage. */
export interface IConsensusMessage {

    /** ConsensusMessage type */
    type?: (ConsensusMessage.Type|null);

    /** ConsensusMessage payload */
    payload?: (IConsensusMessagePayload|null);
}

/** Represents a ConsensusMessage. */
export class ConsensusMessage implements IConsensusMessage {

    /**
     * Constructs a new ConsensusMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusMessage);

    /** ConsensusMessage type. */
    public type: ConsensusMessage.Type;

    /** ConsensusMessage payload. */
    public payload?: (IConsensusMessagePayload|null);

    /**
     * Creates a new ConsensusMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusMessage instance
     */
    public static create(properties?: IConsensusMessage): ConsensusMessage;

    /**
     * Encodes the specified ConsensusMessage message. Does not implicitly {@link ConsensusMessage.verify|verify} messages.
     * @param message ConsensusMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusMessage message, length delimited. Does not implicitly {@link ConsensusMessage.verify|verify} messages.
     * @param message ConsensusMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ConsensusMessage;

    /**
     * Decodes a ConsensusMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ConsensusMessage;

    /**
     * Verifies a ConsensusMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ConsensusMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusMessage
     */
    public static fromObject(object: { [k: string]: any }): ConsensusMessage;

    /**
     * Creates a plain object from a ConsensusMessage message. Also converts values to other types if specified.
     * @param message ConsensusMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ConsensusMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ConsensusMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ConsensusMessage {

    /** Type enum. */
    enum Type {
        VALUE_PROPOSAL = 0,
        SOFT_VOTE = 1,
        CERT_VOTE = 2,
        NEXT_VOTE = 3
    }
}

/** Properties of a PubKeyMethod. */
export interface IPubKeyMethod {
}

/** Represents a PubKeyMethod. */
export class PubKeyMethod implements IPubKeyMethod {

    /**
     * Constructs a new PubKeyMethod.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPubKeyMethod);

    /**
     * Creates a new PubKeyMethod instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PubKeyMethod instance
     */
    public static create(properties?: IPubKeyMethod): PubKeyMethod;

    /**
     * Encodes the specified PubKeyMethod message. Does not implicitly {@link PubKeyMethod.verify|verify} messages.
     * @param message PubKeyMethod message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPubKeyMethod, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PubKeyMethod message, length delimited. Does not implicitly {@link PubKeyMethod.verify|verify} messages.
     * @param message PubKeyMethod message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPubKeyMethod, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PubKeyMethod message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PubKeyMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PubKeyMethod;

    /**
     * Decodes a PubKeyMethod message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PubKeyMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PubKeyMethod;

    /**
     * Verifies a PubKeyMethod message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PubKeyMethod message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PubKeyMethod
     */
    public static fromObject(object: { [k: string]: any }): PubKeyMethod;

    /**
     * Creates a plain object from a PubKeyMethod message. Also converts values to other types if specified.
     * @param message PubKeyMethod
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PubKeyMethod, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PubKeyMethod to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace PubKeyMethod {

    /** Method enum. */
    enum Method {
        STORE = 0,
        REVOKE = 1
    }
}

/** Properties of a NewPubKeyPayload. */
export interface INewPubKeyPayload {

    /** NewPubKeyPayload hashingAlgorithm */
    hashingAlgorithm?: (NewPubKeyPayload.HashingAlgorithm|null);

    /** NewPubKeyPayload entityHash */
    entityHash?: (Uint8Array|null);

    /** NewPubKeyPayload entityHashSignature */
    entityHashSignature?: (Uint8Array|null);

    /** NewPubKeyPayload validFrom */
    validFrom?: (number|null);

    /** NewPubKeyPayload validTo */
    validTo?: (number|null);

    /** NewPubKeyPayload rsa */
    rsa?: (NewPubKeyPayload.IRSAConfiguration|null);

    /** NewPubKeyPayload ecdsa */
    ecdsa?: (NewPubKeyPayload.IECDSAConfiguration|null);

    /** NewPubKeyPayload ed25519 */
    ed25519?: (NewPubKeyPayload.IEd25519Configuration|null);
}

/** Represents a NewPubKeyPayload. */
export class NewPubKeyPayload implements INewPubKeyPayload {

    /**
     * Constructs a new NewPubKeyPayload.
     * @param [properties] Properties to set
     */
    constructor(properties?: INewPubKeyPayload);

    /** NewPubKeyPayload hashingAlgorithm. */
    public hashingAlgorithm: NewPubKeyPayload.HashingAlgorithm;

    /** NewPubKeyPayload entityHash. */
    public entityHash: Uint8Array;

    /** NewPubKeyPayload entityHashSignature. */
    public entityHashSignature: Uint8Array;

    /** NewPubKeyPayload validFrom. */
    public validFrom: number;

    /** NewPubKeyPayload validTo. */
    public validTo: number;

    /** NewPubKeyPayload rsa. */
    public rsa?: (NewPubKeyPayload.IRSAConfiguration|null);

    /** NewPubKeyPayload ecdsa. */
    public ecdsa?: (NewPubKeyPayload.IECDSAConfiguration|null);

    /** NewPubKeyPayload ed25519. */
    public ed25519?: (NewPubKeyPayload.IEd25519Configuration|null);

    /** NewPubKeyPayload configuration. */
    public configuration?: ("rsa"|"ecdsa"|"ed25519");

    /**
     * Creates a new NewPubKeyPayload instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NewPubKeyPayload instance
     */
    public static create(properties?: INewPubKeyPayload): NewPubKeyPayload;

    /**
     * Encodes the specified NewPubKeyPayload message. Does not implicitly {@link NewPubKeyPayload.verify|verify} messages.
     * @param message NewPubKeyPayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INewPubKeyPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NewPubKeyPayload message, length delimited. Does not implicitly {@link NewPubKeyPayload.verify|verify} messages.
     * @param message NewPubKeyPayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INewPubKeyPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NewPubKeyPayload message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NewPubKeyPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NewPubKeyPayload;

    /**
     * Decodes a NewPubKeyPayload message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NewPubKeyPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NewPubKeyPayload;

    /**
     * Verifies a NewPubKeyPayload message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NewPubKeyPayload message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NewPubKeyPayload
     */
    public static fromObject(object: { [k: string]: any }): NewPubKeyPayload;

    /**
     * Creates a plain object from a NewPubKeyPayload message. Also converts values to other types if specified.
     * @param message NewPubKeyPayload
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NewPubKeyPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NewPubKeyPayload to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace NewPubKeyPayload {

    /** HashingAlgorithm enum. */
    enum HashingAlgorithm {
        SHA256 = 0,
        SHA512 = 1
    }

    /** Properties of a RSAConfiguration. */
    interface IRSAConfiguration {

        /** RSAConfiguration key */
        key?: (Uint8Array|null);

        /** RSAConfiguration padding */
        padding?: (NewPubKeyPayload.RSAConfiguration.Padding|null);
    }

    /** Represents a RSAConfiguration. */
    class RSAConfiguration implements IRSAConfiguration {

        /**
         * Constructs a new RSAConfiguration.
         * @param [properties] Properties to set
         */
        constructor(properties?: NewPubKeyPayload.IRSAConfiguration);

        /** RSAConfiguration key. */
        public key: Uint8Array;

        /** RSAConfiguration padding. */
        public padding: NewPubKeyPayload.RSAConfiguration.Padding;

        /**
         * Creates a new RSAConfiguration instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RSAConfiguration instance
         */
        public static create(properties?: NewPubKeyPayload.IRSAConfiguration): NewPubKeyPayload.RSAConfiguration;

        /**
         * Encodes the specified RSAConfiguration message. Does not implicitly {@link NewPubKeyPayload.RSAConfiguration.verify|verify} messages.
         * @param message RSAConfiguration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NewPubKeyPayload.IRSAConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RSAConfiguration message, length delimited. Does not implicitly {@link NewPubKeyPayload.RSAConfiguration.verify|verify} messages.
         * @param message RSAConfiguration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NewPubKeyPayload.IRSAConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RSAConfiguration message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RSAConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NewPubKeyPayload.RSAConfiguration;

        /**
         * Decodes a RSAConfiguration message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RSAConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NewPubKeyPayload.RSAConfiguration;

        /**
         * Verifies a RSAConfiguration message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RSAConfiguration message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RSAConfiguration
         */
        public static fromObject(object: { [k: string]: any }): NewPubKeyPayload.RSAConfiguration;

        /**
         * Creates a plain object from a RSAConfiguration message. Also converts values to other types if specified.
         * @param message RSAConfiguration
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NewPubKeyPayload.RSAConfiguration, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RSAConfiguration to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace RSAConfiguration {

        /** Padding enum. */
        enum Padding {
            PSS = 0,
            PKCS1v15 = 1
        }
    }

    /** Properties of a ECDSAConfiguration. */
    interface IECDSAConfiguration {

        /** ECDSAConfiguration key */
        key?: (Uint8Array|null);

        /** ECDSAConfiguration ec */
        ec?: (NewPubKeyPayload.ECDSAConfiguration.EC|null);
    }

    /** Represents a ECDSAConfiguration. */
    class ECDSAConfiguration implements IECDSAConfiguration {

        /**
         * Constructs a new ECDSAConfiguration.
         * @param [properties] Properties to set
         */
        constructor(properties?: NewPubKeyPayload.IECDSAConfiguration);

        /** ECDSAConfiguration key. */
        public key: Uint8Array;

        /** ECDSAConfiguration ec. */
        public ec: NewPubKeyPayload.ECDSAConfiguration.EC;

        /**
         * Creates a new ECDSAConfiguration instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ECDSAConfiguration instance
         */
        public static create(properties?: NewPubKeyPayload.IECDSAConfiguration): NewPubKeyPayload.ECDSAConfiguration;

        /**
         * Encodes the specified ECDSAConfiguration message. Does not implicitly {@link NewPubKeyPayload.ECDSAConfiguration.verify|verify} messages.
         * @param message ECDSAConfiguration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NewPubKeyPayload.IECDSAConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ECDSAConfiguration message, length delimited. Does not implicitly {@link NewPubKeyPayload.ECDSAConfiguration.verify|verify} messages.
         * @param message ECDSAConfiguration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NewPubKeyPayload.IECDSAConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ECDSAConfiguration message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ECDSAConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NewPubKeyPayload.ECDSAConfiguration;

        /**
         * Decodes a ECDSAConfiguration message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ECDSAConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NewPubKeyPayload.ECDSAConfiguration;

        /**
         * Verifies a ECDSAConfiguration message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ECDSAConfiguration message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ECDSAConfiguration
         */
        public static fromObject(object: { [k: string]: any }): NewPubKeyPayload.ECDSAConfiguration;

        /**
         * Creates a plain object from a ECDSAConfiguration message. Also converts values to other types if specified.
         * @param message ECDSAConfiguration
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NewPubKeyPayload.ECDSAConfiguration, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ECDSAConfiguration to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ECDSAConfiguration {

        /** EC enum. */
        enum EC {
            SECP256k1 = 0
        }
    }

    /** Properties of an Ed25519Configuration. */
    interface IEd25519Configuration {

        /** Ed25519Configuration key */
        key?: (Uint8Array|null);
    }

    /** Represents an Ed25519Configuration. */
    class Ed25519Configuration implements IEd25519Configuration {

        /**
         * Constructs a new Ed25519Configuration.
         * @param [properties] Properties to set
         */
        constructor(properties?: NewPubKeyPayload.IEd25519Configuration);

        /** Ed25519Configuration key. */
        public key: Uint8Array;

        /**
         * Creates a new Ed25519Configuration instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ed25519Configuration instance
         */
        public static create(properties?: NewPubKeyPayload.IEd25519Configuration): NewPubKeyPayload.Ed25519Configuration;

        /**
         * Encodes the specified Ed25519Configuration message. Does not implicitly {@link NewPubKeyPayload.Ed25519Configuration.verify|verify} messages.
         * @param message Ed25519Configuration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NewPubKeyPayload.IEd25519Configuration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Ed25519Configuration message, length delimited. Does not implicitly {@link NewPubKeyPayload.Ed25519Configuration.verify|verify} messages.
         * @param message Ed25519Configuration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NewPubKeyPayload.IEd25519Configuration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Ed25519Configuration message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ed25519Configuration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NewPubKeyPayload.Ed25519Configuration;

        /**
         * Decodes an Ed25519Configuration message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ed25519Configuration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NewPubKeyPayload.Ed25519Configuration;

        /**
         * Verifies an Ed25519Configuration message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Ed25519Configuration message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Ed25519Configuration
         */
        public static fromObject(object: { [k: string]: any }): NewPubKeyPayload.Ed25519Configuration;

        /**
         * Creates a plain object from an Ed25519Configuration message. Also converts values to other types if specified.
         * @param message Ed25519Configuration
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NewPubKeyPayload.Ed25519Configuration, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Ed25519Configuration to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a RevokePubKeyPayload. */
export interface IRevokePubKeyPayload {

    /** RevokePubKeyPayload address */
    address?: (string|null);
}

/** Represents a RevokePubKeyPayload. */
export class RevokePubKeyPayload implements IRevokePubKeyPayload {

    /**
     * Constructs a new RevokePubKeyPayload.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRevokePubKeyPayload);

    /** RevokePubKeyPayload address. */
    public address: string;

    /**
     * Creates a new RevokePubKeyPayload instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RevokePubKeyPayload instance
     */
    public static create(properties?: IRevokePubKeyPayload): RevokePubKeyPayload;

    /**
     * Encodes the specified RevokePubKeyPayload message. Does not implicitly {@link RevokePubKeyPayload.verify|verify} messages.
     * @param message RevokePubKeyPayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRevokePubKeyPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RevokePubKeyPayload message, length delimited. Does not implicitly {@link RevokePubKeyPayload.verify|verify} messages.
     * @param message RevokePubKeyPayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRevokePubKeyPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RevokePubKeyPayload message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RevokePubKeyPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RevokePubKeyPayload;

    /**
     * Decodes a RevokePubKeyPayload message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RevokePubKeyPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RevokePubKeyPayload;

    /**
     * Verifies a RevokePubKeyPayload message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RevokePubKeyPayload message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RevokePubKeyPayload
     */
    public static fromObject(object: { [k: string]: any }): RevokePubKeyPayload;

    /**
     * Creates a plain object from a RevokePubKeyPayload message. Also converts values to other types if specified.
     * @param message RevokePubKeyPayload
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RevokePubKeyPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RevokePubKeyPayload to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PubKeyStorage. */
export interface IPubKeyStorage {

    /** PubKeyStorage owner */
    owner?: (string|null);

    /** PubKeyStorage payload */
    payload?: (INewPubKeyPayload|null);

    /** PubKeyStorage isRevoked */
    isRevoked?: (boolean|null);
}

/** Represents a PubKeyStorage. */
export class PubKeyStorage implements IPubKeyStorage {

    /**
     * Constructs a new PubKeyStorage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPubKeyStorage);

    /** PubKeyStorage owner. */
    public owner: string;

    /** PubKeyStorage payload. */
    public payload?: (INewPubKeyPayload|null);

    /** PubKeyStorage isRevoked. */
    public isRevoked: boolean;

    /**
     * Creates a new PubKeyStorage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PubKeyStorage instance
     */
    public static create(properties?: IPubKeyStorage): PubKeyStorage;

    /**
     * Encodes the specified PubKeyStorage message. Does not implicitly {@link PubKeyStorage.verify|verify} messages.
     * @param message PubKeyStorage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPubKeyStorage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PubKeyStorage message, length delimited. Does not implicitly {@link PubKeyStorage.verify|verify} messages.
     * @param message PubKeyStorage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPubKeyStorage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PubKeyStorage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PubKeyStorage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PubKeyStorage;

    /**
     * Decodes a PubKeyStorage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PubKeyStorage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PubKeyStorage;

    /**
     * Verifies a PubKeyStorage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PubKeyStorage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PubKeyStorage
     */
    public static fromObject(object: { [k: string]: any }): PubKeyStorage;

    /**
     * Creates a plain object from a PubKeyStorage message. Also converts values to other types if specified.
     * @param message PubKeyStorage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PubKeyStorage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PubKeyStorage to JSON.
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
