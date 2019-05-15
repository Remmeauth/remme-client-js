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

    /** TransferPayload senderAccountType */
    senderAccountType?: (TransferPayload.SenderAccountType|null);

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

    /** TransferPayload senderAccountType. */
    public senderAccountType: TransferPayload.SenderAccountType;

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

export namespace TransferPayload {

    /** SenderAccountType enum. */
    enum SenderAccountType {
        ACCOUNT = 0,
        NODE_ACCOUNT = 1
    }
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

/** Properties of a ClientSealRequest. */
export interface IClientSealRequest {
}

/** Represents a ClientSealRequest. */
export class ClientSealRequest implements IClientSealRequest {

    /**
     * Constructs a new ClientSealRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientSealRequest);

    /**
     * Creates a new ClientSealRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientSealRequest instance
     */
    public static create(properties?: IClientSealRequest): ClientSealRequest;

    /**
     * Encodes the specified ClientSealRequest message. Does not implicitly {@link ClientSealRequest.verify|verify} messages.
     * @param message ClientSealRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientSealRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientSealRequest message, length delimited. Does not implicitly {@link ClientSealRequest.verify|verify} messages.
     * @param message ClientSealRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientSealRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientSealRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientSealRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClientSealRequest;

    /**
     * Decodes a ClientSealRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientSealRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClientSealRequest;

    /**
     * Verifies a ClientSealRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClientSealRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientSealRequest
     */
    public static fromObject(object: { [k: string]: any }): ClientSealRequest;

    /**
     * Creates a plain object from a ClientSealRequest message. Also converts values to other types if specified.
     * @param message ClientSealRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClientSealRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClientSealRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ClientSealResponse. */
export interface IClientSealResponse {

    /** ClientSealResponse status */
    status?: (ClientSealResponse.Status|null);

    /** ClientSealResponse certVotes */
    certVotes?: (ISignedConsensusMessage[]|null);
}

/** Represents a ClientSealResponse. */
export class ClientSealResponse implements IClientSealResponse {

    /**
     * Constructs a new ClientSealResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClientSealResponse);

    /** ClientSealResponse status. */
    public status: ClientSealResponse.Status;

    /** ClientSealResponse certVotes. */
    public certVotes: ISignedConsensusMessage[];

    /**
     * Creates a new ClientSealResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClientSealResponse instance
     */
    public static create(properties?: IClientSealResponse): ClientSealResponse;

    /**
     * Encodes the specified ClientSealResponse message. Does not implicitly {@link ClientSealResponse.verify|verify} messages.
     * @param message ClientSealResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClientSealResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClientSealResponse message, length delimited. Does not implicitly {@link ClientSealResponse.verify|verify} messages.
     * @param message ClientSealResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClientSealResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClientSealResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClientSealResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClientSealResponse;

    /**
     * Decodes a ClientSealResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClientSealResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClientSealResponse;

    /**
     * Verifies a ClientSealResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClientSealResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClientSealResponse
     */
    public static fromObject(object: { [k: string]: any }): ClientSealResponse;

    /**
     * Creates a plain object from a ClientSealResponse message. Also converts values to other types if specified.
     * @param message ClientSealResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClientSealResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClientSealResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ClientSealResponse {

    /** Status enum. */
    enum Status {
        OK = 0,
        INTERNAL_ERROR = 1,
        NO_RESOURCE = 2
    }
}

/** Properties of a ConsensusMessagePayload. */
export interface IConsensusMessagePayload {

    /** ConsensusMessagePayload period */
    period?: (number|Long|null);

    /** ConsensusMessagePayload proposalId */
    proposalId?: (Uint8Array|null);

    /** ConsensusMessagePayload voterId */
    voterId?: (Uint8Array|null);
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
    public proposalId: Uint8Array;

    /** ConsensusMessagePayload voterId. */
    public voterId: Uint8Array;

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

/** Properties of a SignedConsensusMessage. */
export interface ISignedConsensusMessage {

    /** SignedConsensusMessage messageSignature */
    messageSignature?: (Uint8Array|null);

    /** SignedConsensusMessage message */
    message?: (IConsensusMessage|null);
}

/** Represents a SignedConsensusMessage. */
export class SignedConsensusMessage implements ISignedConsensusMessage {

    /**
     * Constructs a new SignedConsensusMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISignedConsensusMessage);

    /** SignedConsensusMessage messageSignature. */
    public messageSignature: Uint8Array;

    /** SignedConsensusMessage message. */
    public message?: (IConsensusMessage|null);

    /**
     * Creates a new SignedConsensusMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SignedConsensusMessage instance
     */
    public static create(properties?: ISignedConsensusMessage): SignedConsensusMessage;

    /**
     * Encodes the specified SignedConsensusMessage message. Does not implicitly {@link SignedConsensusMessage.verify|verify} messages.
     * @param message SignedConsensusMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISignedConsensusMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SignedConsensusMessage message, length delimited. Does not implicitly {@link SignedConsensusMessage.verify|verify} messages.
     * @param message SignedConsensusMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISignedConsensusMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SignedConsensusMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SignedConsensusMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignedConsensusMessage;

    /**
     * Decodes a SignedConsensusMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SignedConsensusMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignedConsensusMessage;

    /**
     * Verifies a SignedConsensusMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SignedConsensusMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SignedConsensusMessage
     */
    public static fromObject(object: { [k: string]: any }): SignedConsensusMessage;

    /**
     * Creates a plain object from a SignedConsensusMessage message. Also converts values to other types if specified.
     * @param message SignedConsensusMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SignedConsensusMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SignedConsensusMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusSeal. */
export interface IConsensusSeal {

    /** ConsensusSeal previousCertVotes */
    previousCertVotes?: (ISignedConsensusMessage[]|null);
}

/** Represents a ConsensusSeal. */
export class ConsensusSeal implements IConsensusSeal {

    /**
     * Constructs a new ConsensusSeal.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusSeal);

    /** ConsensusSeal previousCertVotes. */
    public previousCertVotes: ISignedConsensusMessage[];

    /**
     * Creates a new ConsensusSeal instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusSeal instance
     */
    public static create(properties?: IConsensusSeal): ConsensusSeal;

    /**
     * Encodes the specified ConsensusSeal message. Does not implicitly {@link ConsensusSeal.verify|verify} messages.
     * @param message ConsensusSeal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusSeal, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusSeal message, length delimited. Does not implicitly {@link ConsensusSeal.verify|verify} messages.
     * @param message ConsensusSeal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusSeal, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusSeal message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusSeal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ConsensusSeal;

    /**
     * Decodes a ConsensusSeal message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusSeal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ConsensusSeal;

    /**
     * Verifies a ConsensusSeal message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ConsensusSeal message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusSeal
     */
    public static fromObject(object: { [k: string]: any }): ConsensusSeal;

    /**
     * Creates a plain object from a ConsensusSeal message. Also converts values to other types if specified.
     * @param message ConsensusSeal
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ConsensusSeal, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ConsensusSeal to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusSealRequest. */
export interface IConsensusSealRequest {

    /** ConsensusSealRequest blockId */
    blockId?: (Uint8Array|null);
}

/** Represents a ConsensusSealRequest. */
export class ConsensusSealRequest implements IConsensusSealRequest {

    /**
     * Constructs a new ConsensusSealRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusSealRequest);

    /** ConsensusSealRequest blockId. */
    public blockId: Uint8Array;

    /**
     * Creates a new ConsensusSealRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusSealRequest instance
     */
    public static create(properties?: IConsensusSealRequest): ConsensusSealRequest;

    /**
     * Encodes the specified ConsensusSealRequest message. Does not implicitly {@link ConsensusSealRequest.verify|verify} messages.
     * @param message ConsensusSealRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusSealRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusSealRequest message, length delimited. Does not implicitly {@link ConsensusSealRequest.verify|verify} messages.
     * @param message ConsensusSealRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusSealRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusSealRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusSealRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ConsensusSealRequest;

    /**
     * Decodes a ConsensusSealRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusSealRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ConsensusSealRequest;

    /**
     * Verifies a ConsensusSealRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ConsensusSealRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusSealRequest
     */
    public static fromObject(object: { [k: string]: any }): ConsensusSealRequest;

    /**
     * Creates a plain object from a ConsensusSealRequest message. Also converts values to other types if specified.
     * @param message ConsensusSealRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ConsensusSealRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ConsensusSealRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ConsensusAccountMethod. */
export interface IConsensusAccountMethod {
}

/** Represents a ConsensusAccountMethod. */
export class ConsensusAccountMethod implements IConsensusAccountMethod {

    /**
     * Constructs a new ConsensusAccountMethod.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusAccountMethod);

    /**
     * Creates a new ConsensusAccountMethod instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusAccountMethod instance
     */
    public static create(properties?: IConsensusAccountMethod): ConsensusAccountMethod;

    /**
     * Encodes the specified ConsensusAccountMethod message. Does not implicitly {@link ConsensusAccountMethod.verify|verify} messages.
     * @param message ConsensusAccountMethod message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusAccountMethod, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusAccountMethod message, length delimited. Does not implicitly {@link ConsensusAccountMethod.verify|verify} messages.
     * @param message ConsensusAccountMethod message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusAccountMethod, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusAccountMethod message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusAccountMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ConsensusAccountMethod;

    /**
     * Decodes a ConsensusAccountMethod message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusAccountMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ConsensusAccountMethod;

    /**
     * Verifies a ConsensusAccountMethod message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ConsensusAccountMethod message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusAccountMethod
     */
    public static fromObject(object: { [k: string]: any }): ConsensusAccountMethod;

    /**
     * Creates a plain object from a ConsensusAccountMethod message. Also converts values to other types if specified.
     * @param message ConsensusAccountMethod
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ConsensusAccountMethod, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ConsensusAccountMethod to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ConsensusAccountMethod {

    /** Method enum. */
    enum Method {
        SEND_REWARD = 0,
        GENESIS = 1
    }
}

/** Properties of a ConsensusAccount. */
export interface IConsensusAccount {

    /** ConsensusAccount publicKey */
    publicKey?: (string|null);

    /** ConsensusAccount obligatoryPayments */
    obligatoryPayments?: (number|Long|null);

    /** ConsensusAccount blockCost */
    blockCost?: (number|Long|null);

    /** ConsensusAccount bets */
    bets?: ({ [k: string]: (number|Long) }|null);
}

/** Represents a ConsensusAccount. */
export class ConsensusAccount implements IConsensusAccount {

    /**
     * Constructs a new ConsensusAccount.
     * @param [properties] Properties to set
     */
    constructor(properties?: IConsensusAccount);

    /** ConsensusAccount publicKey. */
    public publicKey: string;

    /** ConsensusAccount obligatoryPayments. */
    public obligatoryPayments: (number|Long);

    /** ConsensusAccount blockCost. */
    public blockCost: (number|Long);

    /** ConsensusAccount bets. */
    public bets: { [k: string]: (number|Long) };

    /**
     * Creates a new ConsensusAccount instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConsensusAccount instance
     */
    public static create(properties?: IConsensusAccount): ConsensusAccount;

    /**
     * Encodes the specified ConsensusAccount message. Does not implicitly {@link ConsensusAccount.verify|verify} messages.
     * @param message ConsensusAccount message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IConsensusAccount, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ConsensusAccount message, length delimited. Does not implicitly {@link ConsensusAccount.verify|verify} messages.
     * @param message ConsensusAccount message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IConsensusAccount, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ConsensusAccount message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConsensusAccount
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ConsensusAccount;

    /**
     * Decodes a ConsensusAccount message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConsensusAccount
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ConsensusAccount;

    /**
     * Verifies a ConsensusAccount message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ConsensusAccount message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConsensusAccount
     */
    public static fromObject(object: { [k: string]: any }): ConsensusAccount;

    /**
     * Creates a plain object from a ConsensusAccount message. Also converts values to other types if specified.
     * @param message ConsensusAccount
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ConsensusAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ConsensusAccount to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ShareInfo. */
export interface IShareInfo {

    /** ShareInfo blockNum */
    blockNum?: (number|Long|null);

    /** ShareInfo frozenShare */
    frozenShare?: (number|Long|null);

    /** ShareInfo reward */
    reward?: (number|Long|null);

    /** ShareInfo blockTimestamp */
    blockTimestamp?: (number|Long|null);

    /** ShareInfo defrostMonths */
    defrostMonths?: (number|null);
}

/** Represents a ShareInfo. */
export class ShareInfo implements IShareInfo {

    /**
     * Constructs a new ShareInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IShareInfo);

    /** ShareInfo blockNum. */
    public blockNum: (number|Long);

    /** ShareInfo frozenShare. */
    public frozenShare: (number|Long);

    /** ShareInfo reward. */
    public reward: (number|Long);

    /** ShareInfo blockTimestamp. */
    public blockTimestamp: (number|Long);

    /** ShareInfo defrostMonths. */
    public defrostMonths: number;

    /**
     * Creates a new ShareInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ShareInfo instance
     */
    public static create(properties?: IShareInfo): ShareInfo;

    /**
     * Encodes the specified ShareInfo message. Does not implicitly {@link ShareInfo.verify|verify} messages.
     * @param message ShareInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IShareInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ShareInfo message, length delimited. Does not implicitly {@link ShareInfo.verify|verify} messages.
     * @param message ShareInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IShareInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ShareInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ShareInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ShareInfo;

    /**
     * Decodes a ShareInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ShareInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ShareInfo;

    /**
     * Verifies a ShareInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ShareInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ShareInfo
     */
    public static fromObject(object: { [k: string]: any }): ShareInfo;

    /**
     * Creates a plain object from a ShareInfo message. Also converts values to other types if specified.
     * @param message ShareInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ShareInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ShareInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a NodeAccount. */
export interface INodeAccount {

    /** NodeAccount balance */
    balance?: (number|Long|null);

    /** NodeAccount nodeState */
    nodeState?: (NodeAccount.NodeState|null);

    /** NodeAccount reputation */
    reputation?: (NodeAccount.IReputation|null);

    /** NodeAccount fixedAmount */
    fixedAmount?: (number|null);

    /** NodeAccount min */
    min?: (boolean|null);

    /** NodeAccount max */
    max?: (boolean|null);

    /** NodeAccount lastDefrostTimestamp */
    lastDefrostTimestamp?: (number|Long|null);

    /** NodeAccount shares */
    shares?: (IShareInfo[]|null);
}

/** Represents a NodeAccount. */
export class NodeAccount implements INodeAccount {

    /**
     * Constructs a new NodeAccount.
     * @param [properties] Properties to set
     */
    constructor(properties?: INodeAccount);

    /** NodeAccount balance. */
    public balance: (number|Long);

    /** NodeAccount nodeState. */
    public nodeState: NodeAccount.NodeState;

    /** NodeAccount reputation. */
    public reputation?: (NodeAccount.IReputation|null);

    /** NodeAccount fixedAmount. */
    public fixedAmount: number;

    /** NodeAccount min. */
    public min: boolean;

    /** NodeAccount max. */
    public max: boolean;

    /** NodeAccount lastDefrostTimestamp. */
    public lastDefrostTimestamp: (number|Long);

    /** NodeAccount shares. */
    public shares: IShareInfo[];

    /** NodeAccount bet. */
    public bet?: ("fixedAmount"|"min"|"max");

    /**
     * Creates a new NodeAccount instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NodeAccount instance
     */
    public static create(properties?: INodeAccount): NodeAccount;

    /**
     * Encodes the specified NodeAccount message. Does not implicitly {@link NodeAccount.verify|verify} messages.
     * @param message NodeAccount message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INodeAccount, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NodeAccount message, length delimited. Does not implicitly {@link NodeAccount.verify|verify} messages.
     * @param message NodeAccount message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INodeAccount, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NodeAccount message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NodeAccount
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NodeAccount;

    /**
     * Decodes a NodeAccount message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NodeAccount
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NodeAccount;

    /**
     * Verifies a NodeAccount message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NodeAccount message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NodeAccount
     */
    public static fromObject(object: { [k: string]: any }): NodeAccount;

    /**
     * Creates a plain object from a NodeAccount message. Also converts values to other types if specified.
     * @param message NodeAccount
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NodeAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NodeAccount to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace NodeAccount {

    /** NodeState enum. */
    enum NodeState {
        NEW = 0,
        OPENED = 1,
        CLOSED = 2
    }

    /** Properties of a Reputation. */
    interface IReputation {

        /** Reputation frozen */
        frozen?: (number|Long|null);

        /** Reputation unfrozen */
        unfrozen?: (number|Long|null);
    }

    /** Represents a Reputation. */
    class Reputation implements IReputation {

        /**
         * Constructs a new Reputation.
         * @param [properties] Properties to set
         */
        constructor(properties?: NodeAccount.IReputation);

        /** Reputation frozen. */
        public frozen: (number|Long);

        /** Reputation unfrozen. */
        public unfrozen: (number|Long);

        /**
         * Creates a new Reputation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Reputation instance
         */
        public static create(properties?: NodeAccount.IReputation): NodeAccount.Reputation;

        /**
         * Encodes the specified Reputation message. Does not implicitly {@link NodeAccount.Reputation.verify|verify} messages.
         * @param message Reputation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NodeAccount.IReputation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Reputation message, length delimited. Does not implicitly {@link NodeAccount.Reputation.verify|verify} messages.
         * @param message Reputation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NodeAccount.IReputation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Reputation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Reputation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NodeAccount.Reputation;

        /**
         * Decodes a Reputation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Reputation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NodeAccount.Reputation;

        /**
         * Verifies a Reputation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Reputation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Reputation
         */
        public static fromObject(object: { [k: string]: any }): NodeAccount.Reputation;

        /**
         * Creates a plain object from a Reputation message. Also converts values to other types if specified.
         * @param message Reputation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NodeAccount.Reputation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Reputation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a NodeState. */
export interface INodeState {

    /** NodeState masterNodes */
    masterNodes?: (string[]|null);
}

/** Represents a NodeState. */
export class NodeState implements INodeState {

    /**
     * Constructs a new NodeState.
     * @param [properties] Properties to set
     */
    constructor(properties?: INodeState);

    /** NodeState masterNodes. */
    public masterNodes: string[];

    /**
     * Creates a new NodeState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NodeState instance
     */
    public static create(properties?: INodeState): NodeState;

    /**
     * Encodes the specified NodeState message. Does not implicitly {@link NodeState.verify|verify} messages.
     * @param message NodeState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INodeState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NodeState message, length delimited. Does not implicitly {@link NodeState.verify|verify} messages.
     * @param message NodeState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INodeState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NodeState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NodeState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NodeState;

    /**
     * Decodes a NodeState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NodeState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NodeState;

    /**
     * Verifies a NodeState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NodeState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NodeState
     */
    public static fromObject(object: { [k: string]: any }): NodeState;

    /**
     * Creates a plain object from a NodeState message. Also converts values to other types if specified.
     * @param message NodeState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NodeState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NodeState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a NodeAccountMethod. */
export interface INodeAccountMethod {
}

/** Represents a NodeAccountMethod. */
export class NodeAccountMethod implements INodeAccountMethod {

    /**
     * Constructs a new NodeAccountMethod.
     * @param [properties] Properties to set
     */
    constructor(properties?: INodeAccountMethod);

    /**
     * Creates a new NodeAccountMethod instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NodeAccountMethod instance
     */
    public static create(properties?: INodeAccountMethod): NodeAccountMethod;

    /**
     * Encodes the specified NodeAccountMethod message. Does not implicitly {@link NodeAccountMethod.verify|verify} messages.
     * @param message NodeAccountMethod message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INodeAccountMethod, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NodeAccountMethod message, length delimited. Does not implicitly {@link NodeAccountMethod.verify|verify} messages.
     * @param message NodeAccountMethod message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INodeAccountMethod, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NodeAccountMethod message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NodeAccountMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NodeAccountMethod;

    /**
     * Decodes a NodeAccountMethod message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NodeAccountMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NodeAccountMethod;

    /**
     * Verifies a NodeAccountMethod message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NodeAccountMethod message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NodeAccountMethod
     */
    public static fromObject(object: { [k: string]: any }): NodeAccountMethod;

    /**
     * Creates a plain object from a NodeAccountMethod message. Also converts values to other types if specified.
     * @param message NodeAccountMethod
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NodeAccountMethod, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NodeAccountMethod to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace NodeAccountMethod {

    /** Method enum. */
    enum Method {
        TRANSFER_FROM_FROZEN_TO_UNFROZEN = 0,
        TRANSFER_FROM_UNFROZEN_TO_OPERATIONAL = 1,
        INITIALIZE_MASTERNODE = 2,
        CLOSE_MASTERNODE = 3,
        INITIALIZE_NODE = 4,
        SET_BET = 5,
        DO_BET = 6
    }
}

/** Properties of a NodeAccountInternalTransferPayload. */
export interface INodeAccountInternalTransferPayload {

    /** NodeAccountInternalTransferPayload value */
    value?: (number|Long|null);
}

/** Represents a NodeAccountInternalTransferPayload. */
export class NodeAccountInternalTransferPayload implements INodeAccountInternalTransferPayload {

    /**
     * Constructs a new NodeAccountInternalTransferPayload.
     * @param [properties] Properties to set
     */
    constructor(properties?: INodeAccountInternalTransferPayload);

    /** NodeAccountInternalTransferPayload value. */
    public value: (number|Long);

    /**
     * Creates a new NodeAccountInternalTransferPayload instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NodeAccountInternalTransferPayload instance
     */
    public static create(properties?: INodeAccountInternalTransferPayload): NodeAccountInternalTransferPayload;

    /**
     * Encodes the specified NodeAccountInternalTransferPayload message. Does not implicitly {@link NodeAccountInternalTransferPayload.verify|verify} messages.
     * @param message NodeAccountInternalTransferPayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INodeAccountInternalTransferPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NodeAccountInternalTransferPayload message, length delimited. Does not implicitly {@link NodeAccountInternalTransferPayload.verify|verify} messages.
     * @param message NodeAccountInternalTransferPayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INodeAccountInternalTransferPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NodeAccountInternalTransferPayload message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NodeAccountInternalTransferPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NodeAccountInternalTransferPayload;

    /**
     * Decodes a NodeAccountInternalTransferPayload message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NodeAccountInternalTransferPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NodeAccountInternalTransferPayload;

    /**
     * Verifies a NodeAccountInternalTransferPayload message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NodeAccountInternalTransferPayload message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NodeAccountInternalTransferPayload
     */
    public static fromObject(object: { [k: string]: any }): NodeAccountInternalTransferPayload;

    /**
     * Creates a plain object from a NodeAccountInternalTransferPayload message. Also converts values to other types if specified.
     * @param message NodeAccountInternalTransferPayload
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NodeAccountInternalTransferPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NodeAccountInternalTransferPayload to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SetBetPayload. */
export interface ISetBetPayload {

    /** SetBetPayload fixedAmount */
    fixedAmount?: (number|null);

    /** SetBetPayload min */
    min?: (boolean|null);

    /** SetBetPayload max */
    max?: (boolean|null);
}

/** Represents a SetBetPayload. */
export class SetBetPayload implements ISetBetPayload {

    /**
     * Constructs a new SetBetPayload.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetBetPayload);

    /** SetBetPayload fixedAmount. */
    public fixedAmount: number;

    /** SetBetPayload min. */
    public min: boolean;

    /** SetBetPayload max. */
    public max: boolean;

    /** SetBetPayload bet. */
    public bet?: ("fixedAmount"|"min"|"max");

    /**
     * Creates a new SetBetPayload instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetBetPayload instance
     */
    public static create(properties?: ISetBetPayload): SetBetPayload;

    /**
     * Encodes the specified SetBetPayload message. Does not implicitly {@link SetBetPayload.verify|verify} messages.
     * @param message SetBetPayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetBetPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetBetPayload message, length delimited. Does not implicitly {@link SetBetPayload.verify|verify} messages.
     * @param message SetBetPayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetBetPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetBetPayload message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetBetPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetBetPayload;

    /**
     * Decodes a SetBetPayload message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetBetPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetBetPayload;

    /**
     * Verifies a SetBetPayload message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetBetPayload message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetBetPayload
     */
    public static fromObject(object: { [k: string]: any }): SetBetPayload;

    /**
     * Creates a plain object from a SetBetPayload message. Also converts values to other types if specified.
     * @param message SetBetPayload
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetBetPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetBetPayload to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ObligatoryPaymentPayload. */
export interface IObligatoryPaymentPayload {
}

/** Represents an ObligatoryPaymentPayload. */
export class ObligatoryPaymentPayload implements IObligatoryPaymentPayload {

    /**
     * Constructs a new ObligatoryPaymentPayload.
     * @param [properties] Properties to set
     */
    constructor(properties?: IObligatoryPaymentPayload);

    /**
     * Creates a new ObligatoryPaymentPayload instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ObligatoryPaymentPayload instance
     */
    public static create(properties?: IObligatoryPaymentPayload): ObligatoryPaymentPayload;

    /**
     * Encodes the specified ObligatoryPaymentPayload message. Does not implicitly {@link ObligatoryPaymentPayload.verify|verify} messages.
     * @param message ObligatoryPaymentPayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IObligatoryPaymentPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ObligatoryPaymentPayload message, length delimited. Does not implicitly {@link ObligatoryPaymentPayload.verify|verify} messages.
     * @param message ObligatoryPaymentPayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IObligatoryPaymentPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ObligatoryPaymentPayload message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ObligatoryPaymentPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ObligatoryPaymentPayload;

    /**
     * Decodes an ObligatoryPaymentPayload message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ObligatoryPaymentPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ObligatoryPaymentPayload;

    /**
     * Verifies an ObligatoryPaymentPayload message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ObligatoryPaymentPayload message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ObligatoryPaymentPayload
     */
    public static fromObject(object: { [k: string]: any }): ObligatoryPaymentPayload;

    /**
     * Creates a plain object from an ObligatoryPaymentPayload message. Also converts values to other types if specified.
     * @param message ObligatoryPaymentPayload
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ObligatoryPaymentPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ObligatoryPaymentPayload to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ObligatoryPaymentMethod. */
export interface IObligatoryPaymentMethod {
}

/** Represents an ObligatoryPaymentMethod. */
export class ObligatoryPaymentMethod implements IObligatoryPaymentMethod {

    /**
     * Constructs a new ObligatoryPaymentMethod.
     * @param [properties] Properties to set
     */
    constructor(properties?: IObligatoryPaymentMethod);

    /**
     * Creates a new ObligatoryPaymentMethod instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ObligatoryPaymentMethod instance
     */
    public static create(properties?: IObligatoryPaymentMethod): ObligatoryPaymentMethod;

    /**
     * Encodes the specified ObligatoryPaymentMethod message. Does not implicitly {@link ObligatoryPaymentMethod.verify|verify} messages.
     * @param message ObligatoryPaymentMethod message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IObligatoryPaymentMethod, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ObligatoryPaymentMethod message, length delimited. Does not implicitly {@link ObligatoryPaymentMethod.verify|verify} messages.
     * @param message ObligatoryPaymentMethod message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IObligatoryPaymentMethod, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ObligatoryPaymentMethod message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ObligatoryPaymentMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ObligatoryPaymentMethod;

    /**
     * Decodes an ObligatoryPaymentMethod message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ObligatoryPaymentMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ObligatoryPaymentMethod;

    /**
     * Verifies an ObligatoryPaymentMethod message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ObligatoryPaymentMethod message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ObligatoryPaymentMethod
     */
    public static fromObject(object: { [k: string]: any }): ObligatoryPaymentMethod;

    /**
     * Creates a plain object from an ObligatoryPaymentMethod message. Also converts values to other types if specified.
     * @param message ObligatoryPaymentMethod
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ObligatoryPaymentMethod, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ObligatoryPaymentMethod to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ObligatoryPaymentMethod {

    /** Method enum. */
    enum Method {
        PAY_OBLIGATORY_PAYMENT = 0
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
        REVOKE = 1,
        STORE_AND_PAY = 2
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

/** Properties of a NewPubKeyStoreAndPayPayload. */
export interface INewPubKeyStoreAndPayPayload {

    /** NewPubKeyStoreAndPayPayload pubKeyPayload */
    pubKeyPayload?: (INewPubKeyPayload|null);

    /** NewPubKeyStoreAndPayPayload ownerPublicKey */
    ownerPublicKey?: (Uint8Array|null);

    /** NewPubKeyStoreAndPayPayload signatureByOwner */
    signatureByOwner?: (Uint8Array|null);
}

/** Represents a NewPubKeyStoreAndPayPayload. */
export class NewPubKeyStoreAndPayPayload implements INewPubKeyStoreAndPayPayload {

    /**
     * Constructs a new NewPubKeyStoreAndPayPayload.
     * @param [properties] Properties to set
     */
    constructor(properties?: INewPubKeyStoreAndPayPayload);

    /** NewPubKeyStoreAndPayPayload pubKeyPayload. */
    public pubKeyPayload?: (INewPubKeyPayload|null);

    /** NewPubKeyStoreAndPayPayload ownerPublicKey. */
    public ownerPublicKey: Uint8Array;

    /** NewPubKeyStoreAndPayPayload signatureByOwner. */
    public signatureByOwner: Uint8Array;

    /**
     * Creates a new NewPubKeyStoreAndPayPayload instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NewPubKeyStoreAndPayPayload instance
     */
    public static create(properties?: INewPubKeyStoreAndPayPayload): NewPubKeyStoreAndPayPayload;

    /**
     * Encodes the specified NewPubKeyStoreAndPayPayload message. Does not implicitly {@link NewPubKeyStoreAndPayPayload.verify|verify} messages.
     * @param message NewPubKeyStoreAndPayPayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INewPubKeyStoreAndPayPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NewPubKeyStoreAndPayPayload message, length delimited. Does not implicitly {@link NewPubKeyStoreAndPayPayload.verify|verify} messages.
     * @param message NewPubKeyStoreAndPayPayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INewPubKeyStoreAndPayPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NewPubKeyStoreAndPayPayload message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NewPubKeyStoreAndPayPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NewPubKeyStoreAndPayPayload;

    /**
     * Decodes a NewPubKeyStoreAndPayPayload message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NewPubKeyStoreAndPayPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NewPubKeyStoreAndPayPayload;

    /**
     * Verifies a NewPubKeyStoreAndPayPayload message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NewPubKeyStoreAndPayPayload message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NewPubKeyStoreAndPayPayload
     */
    public static fromObject(object: { [k: string]: any }): NewPubKeyStoreAndPayPayload;

    /**
     * Creates a plain object from a NewPubKeyStoreAndPayPayload message. Also converts values to other types if specified.
     * @param message NewPubKeyStoreAndPayPayload
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NewPubKeyStoreAndPayPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NewPubKeyStoreAndPayPayload to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
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

/** Properties of an EmptyPayload. */
export interface IEmptyPayload {
}

/** Represents an EmptyPayload. */
export class EmptyPayload implements IEmptyPayload {

    /**
     * Constructs a new EmptyPayload.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEmptyPayload);

    /**
     * Creates a new EmptyPayload instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EmptyPayload instance
     */
    public static create(properties?: IEmptyPayload): EmptyPayload;

    /**
     * Encodes the specified EmptyPayload message. Does not implicitly {@link EmptyPayload.verify|verify} messages.
     * @param message EmptyPayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEmptyPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EmptyPayload message, length delimited. Does not implicitly {@link EmptyPayload.verify|verify} messages.
     * @param message EmptyPayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEmptyPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EmptyPayload message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EmptyPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EmptyPayload;

    /**
     * Decodes an EmptyPayload message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EmptyPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EmptyPayload;

    /**
     * Verifies an EmptyPayload message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EmptyPayload message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EmptyPayload
     */
    public static fromObject(object: { [k: string]: any }): EmptyPayload;

    /**
     * Creates a plain object from an EmptyPayload message. Also converts values to other types if specified.
     * @param message EmptyPayload
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EmptyPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EmptyPayload to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a MessageError. */
export interface IMessageError {

    /** MessageError description */
    description?: (string|null);

    /** MessageError code */
    code?: (number|Long|null);
}

/** Represents a MessageError. */
export class MessageError implements IMessageError {

    /**
     * Constructs a new MessageError.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMessageError);

    /** MessageError description. */
    public description: string;

    /** MessageError code. */
    public code: (number|Long);

    /**
     * Creates a new MessageError instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MessageError instance
     */
    public static create(properties?: IMessageError): MessageError;

    /**
     * Encodes the specified MessageError message. Does not implicitly {@link MessageError.verify|verify} messages.
     * @param message MessageError message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMessageError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MessageError message, length delimited. Does not implicitly {@link MessageError.verify|verify} messages.
     * @param message MessageError message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMessageError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MessageError message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MessageError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MessageError;

    /**
     * Decodes a MessageError message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MessageError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MessageError;

    /**
     * Verifies a MessageError message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MessageError message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MessageError
     */
    public static fromObject(object: { [k: string]: any }): MessageError;

    /**
     * Creates a plain object from a MessageError message. Also converts values to other types if specified.
     * @param message MessageError
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MessageError, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MessageError to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Message. */
export interface IMessage {

    /** Message messageType */
    messageType?: (Message.MessageType|null);

    /** Message correlationId */
    correlationId?: (string|null);

    /** Message content */
    content?: (Uint8Array|null);
}

/** Represents a Message. */
export class Message implements IMessage {

    /**
     * Constructs a new Message.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMessage);

    /** Message messageType. */
    public messageType: Message.MessageType;

    /** Message correlationId. */
    public correlationId: string;

    /** Message content. */
    public content: Uint8Array;

    /**
     * Creates a new Message instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Message instance
     */
    public static create(properties?: IMessage): Message;

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @param message Message message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @param message Message message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Message;

    /**
     * Decodes a Message message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Message;

    /**
     * Verifies a Message message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Message message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Message
     */
    public static fromObject(object: { [k: string]: any }): Message;

    /**
     * Creates a plain object from a Message message. Also converts values to other types if specified.
     * @param message Message
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Message to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Message {

    /** MessageType enum. */
    enum MessageType {
        CLIENT_SEAL_REQUEST = 0,
        CLIENT_SEAL_RESPONSE = 1,
        INVALID_MESSAGE = 2
    }
}

/** Properties of a Setting. */
export interface ISetting {

    /** Setting entries */
    entries?: (Setting.IEntry[]|null);
}

/** Represents a Setting. */
export class Setting implements ISetting {

    /**
     * Constructs a new Setting.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetting);

    /** Setting entries. */
    public entries: Setting.IEntry[];

    /**
     * Creates a new Setting instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Setting instance
     */
    public static create(properties?: ISetting): Setting;

    /**
     * Encodes the specified Setting message. Does not implicitly {@link Setting.verify|verify} messages.
     * @param message Setting message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetting, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Setting message, length delimited. Does not implicitly {@link Setting.verify|verify} messages.
     * @param message Setting message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetting, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Setting message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Setting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Setting;

    /**
     * Decodes a Setting message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Setting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Setting;

    /**
     * Verifies a Setting message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Setting message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Setting
     */
    public static fromObject(object: { [k: string]: any }): Setting;

    /**
     * Creates a plain object from a Setting message. Also converts values to other types if specified.
     * @param message Setting
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Setting, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Setting to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Setting {

    /** Properties of an Entry. */
    interface IEntry {

        /** Entry key */
        key?: (string|null);

        /** Entry value */
        value?: (string|null);
    }

    /** Represents an Entry. */
    class Entry implements IEntry {

        /**
         * Constructs a new Entry.
         * @param [properties] Properties to set
         */
        constructor(properties?: Setting.IEntry);

        /** Entry key. */
        public key: string;

        /** Entry value. */
        public value: string;

        /**
         * Creates a new Entry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Entry instance
         */
        public static create(properties?: Setting.IEntry): Setting.Entry;

        /**
         * Encodes the specified Entry message. Does not implicitly {@link Setting.Entry.verify|verify} messages.
         * @param message Entry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Setting.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Entry message, length delimited. Does not implicitly {@link Setting.Entry.verify|verify} messages.
         * @param message Entry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Setting.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Entry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Entry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Setting.Entry;

        /**
         * Decodes an Entry message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Entry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Setting.Entry;

        /**
         * Verifies an Entry message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Entry message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Entry
         */
        public static fromObject(object: { [k: string]: any }): Setting.Entry;

        /**
         * Creates a plain object from an Entry message. Also converts values to other types if specified.
         * @param message Entry
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Setting.Entry, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Entry to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a TransactionHeader. */
export interface ITransactionHeader {

    /** TransactionHeader batcherPublicKey */
    batcherPublicKey?: (string|null);

    /** TransactionHeader dependencies */
    dependencies?: (string[]|null);

    /** TransactionHeader familyName */
    familyName?: (string|null);

    /** TransactionHeader familyVersion */
    familyVersion?: (string|null);

    /** TransactionHeader inputs */
    inputs?: (string[]|null);

    /** TransactionHeader nonce */
    nonce?: (string|null);

    /** TransactionHeader outputs */
    outputs?: (string[]|null);

    /** TransactionHeader payloadSha512 */
    payloadSha512?: (string|null);

    /** TransactionHeader signerPublicKey */
    signerPublicKey?: (string|null);
}

/** Represents a TransactionHeader. */
export class TransactionHeader implements ITransactionHeader {

    /**
     * Constructs a new TransactionHeader.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITransactionHeader);

    /** TransactionHeader batcherPublicKey. */
    public batcherPublicKey: string;

    /** TransactionHeader dependencies. */
    public dependencies: string[];

    /** TransactionHeader familyName. */
    public familyName: string;

    /** TransactionHeader familyVersion. */
    public familyVersion: string;

    /** TransactionHeader inputs. */
    public inputs: string[];

    /** TransactionHeader nonce. */
    public nonce: string;

    /** TransactionHeader outputs. */
    public outputs: string[];

    /** TransactionHeader payloadSha512. */
    public payloadSha512: string;

    /** TransactionHeader signerPublicKey. */
    public signerPublicKey: string;

    /**
     * Creates a new TransactionHeader instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TransactionHeader instance
     */
    public static create(properties?: ITransactionHeader): TransactionHeader;

    /**
     * Encodes the specified TransactionHeader message. Does not implicitly {@link TransactionHeader.verify|verify} messages.
     * @param message TransactionHeader message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITransactionHeader, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TransactionHeader message, length delimited. Does not implicitly {@link TransactionHeader.verify|verify} messages.
     * @param message TransactionHeader message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITransactionHeader, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TransactionHeader message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TransactionHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TransactionHeader;

    /**
     * Decodes a TransactionHeader message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TransactionHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TransactionHeader;

    /**
     * Verifies a TransactionHeader message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TransactionHeader message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TransactionHeader
     */
    public static fromObject(object: { [k: string]: any }): TransactionHeader;

    /**
     * Creates a plain object from a TransactionHeader message. Also converts values to other types if specified.
     * @param message TransactionHeader
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TransactionHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TransactionHeader to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Transaction. */
export interface ITransaction {

    /** Transaction header */
    header?: (Uint8Array|null);

    /** Transaction headerSignature */
    headerSignature?: (string|null);

    /** Transaction payload */
    payload?: (Uint8Array|null);
}

/** Represents a Transaction. */
export class Transaction implements ITransaction {

    /**
     * Constructs a new Transaction.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITransaction);

    /** Transaction header. */
    public header: Uint8Array;

    /** Transaction headerSignature. */
    public headerSignature: string;

    /** Transaction payload. */
    public payload: Uint8Array;

    /**
     * Creates a new Transaction instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Transaction instance
     */
    public static create(properties?: ITransaction): Transaction;

    /**
     * Encodes the specified Transaction message. Does not implicitly {@link Transaction.verify|verify} messages.
     * @param message Transaction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Transaction message, length delimited. Does not implicitly {@link Transaction.verify|verify} messages.
     * @param message Transaction message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Transaction message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Transaction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Transaction;

    /**
     * Decodes a Transaction message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Transaction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Transaction;

    /**
     * Verifies a Transaction message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Transaction message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Transaction
     */
    public static fromObject(object: { [k: string]: any }): Transaction;

    /**
     * Creates a plain object from a Transaction message. Also converts values to other types if specified.
     * @param message Transaction
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Transaction, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Transaction to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TransactionList. */
export interface ITransactionList {

    /** TransactionList transactions */
    transactions?: (ITransaction[]|null);
}

/** Represents a TransactionList. */
export class TransactionList implements ITransactionList {

    /**
     * Constructs a new TransactionList.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITransactionList);

    /** TransactionList transactions. */
    public transactions: ITransaction[];

    /**
     * Creates a new TransactionList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TransactionList instance
     */
    public static create(properties?: ITransactionList): TransactionList;

    /**
     * Encodes the specified TransactionList message. Does not implicitly {@link TransactionList.verify|verify} messages.
     * @param message TransactionList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITransactionList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TransactionList message, length delimited. Does not implicitly {@link TransactionList.verify|verify} messages.
     * @param message TransactionList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITransactionList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TransactionList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TransactionList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TransactionList;

    /**
     * Decodes a TransactionList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TransactionList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TransactionList;

    /**
     * Verifies a TransactionList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TransactionList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TransactionList
     */
    public static fromObject(object: { [k: string]: any }): TransactionList;

    /**
     * Creates a plain object from a TransactionList message. Also converts values to other types if specified.
     * @param message TransactionList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TransactionList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TransactionList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
