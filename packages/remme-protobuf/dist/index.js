/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.AccountMethod = (function() {

    /**
     * Properties of an AccountMethod.
     * @exports IAccountMethod
     * @interface IAccountMethod
     */

    /**
     * Constructs a new AccountMethod.
     * @exports AccountMethod
     * @classdesc Represents an AccountMethod.
     * @implements IAccountMethod
     * @constructor
     * @param {IAccountMethod=} [properties] Properties to set
     */
    function AccountMethod(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new AccountMethod instance using the specified properties.
     * @function create
     * @memberof AccountMethod
     * @static
     * @param {IAccountMethod=} [properties] Properties to set
     * @returns {AccountMethod} AccountMethod instance
     */
    AccountMethod.create = function create(properties) {
        return new AccountMethod(properties);
    };

    /**
     * Encodes the specified AccountMethod message. Does not implicitly {@link AccountMethod.verify|verify} messages.
     * @function encode
     * @memberof AccountMethod
     * @static
     * @param {IAccountMethod} message AccountMethod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AccountMethod.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified AccountMethod message, length delimited. Does not implicitly {@link AccountMethod.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AccountMethod
     * @static
     * @param {IAccountMethod} message AccountMethod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AccountMethod.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AccountMethod message from the specified reader or buffer.
     * @function decode
     * @memberof AccountMethod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AccountMethod} AccountMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AccountMethod.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AccountMethod();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AccountMethod message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AccountMethod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AccountMethod} AccountMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AccountMethod.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AccountMethod message.
     * @function verify
     * @memberof AccountMethod
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AccountMethod.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an AccountMethod message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AccountMethod
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AccountMethod} AccountMethod
     */
    AccountMethod.fromObject = function fromObject(object) {
        if (object instanceof $root.AccountMethod)
            return object;
        return new $root.AccountMethod();
    };

    /**
     * Creates a plain object from an AccountMethod message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AccountMethod
     * @static
     * @param {AccountMethod} message AccountMethod
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AccountMethod.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this AccountMethod to JSON.
     * @function toJSON
     * @memberof AccountMethod
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AccountMethod.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Method enum.
     * @name AccountMethod.Method
     * @enum {string}
     * @property {number} TRANSFER=0 TRANSFER value
     * @property {number} GENESIS=1 GENESIS value
     */
    AccountMethod.Method = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TRANSFER"] = 0;
        values[valuesById[1] = "GENESIS"] = 1;
        return values;
    })();

    return AccountMethod;
})();

$root.TransferPayload = (function() {

    /**
     * Properties of a TransferPayload.
     * @exports ITransferPayload
     * @interface ITransferPayload
     * @property {TransferPayload.SenderAccountType|null} [senderAccountType] TransferPayload senderAccountType
     * @property {string|null} [addressTo] TransferPayload addressTo
     * @property {number|Long|null} [value] TransferPayload value
     */

    /**
     * Constructs a new TransferPayload.
     * @exports TransferPayload
     * @classdesc Represents a TransferPayload.
     * @implements ITransferPayload
     * @constructor
     * @param {ITransferPayload=} [properties] Properties to set
     */
    function TransferPayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TransferPayload senderAccountType.
     * @member {TransferPayload.SenderAccountType} senderAccountType
     * @memberof TransferPayload
     * @instance
     */
    TransferPayload.prototype.senderAccountType = 0;

    /**
     * TransferPayload addressTo.
     * @member {string} addressTo
     * @memberof TransferPayload
     * @instance
     */
    TransferPayload.prototype.addressTo = "";

    /**
     * TransferPayload value.
     * @member {number|Long} value
     * @memberof TransferPayload
     * @instance
     */
    TransferPayload.prototype.value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new TransferPayload instance using the specified properties.
     * @function create
     * @memberof TransferPayload
     * @static
     * @param {ITransferPayload=} [properties] Properties to set
     * @returns {TransferPayload} TransferPayload instance
     */
    TransferPayload.create = function create(properties) {
        return new TransferPayload(properties);
    };

    /**
     * Encodes the specified TransferPayload message. Does not implicitly {@link TransferPayload.verify|verify} messages.
     * @function encode
     * @memberof TransferPayload
     * @static
     * @param {ITransferPayload} message TransferPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransferPayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.senderAccountType != null && message.hasOwnProperty("senderAccountType"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.senderAccountType);
        if (message.addressTo != null && message.hasOwnProperty("addressTo"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.addressTo);
        if (message.value != null && message.hasOwnProperty("value"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.value);
        return writer;
    };

    /**
     * Encodes the specified TransferPayload message, length delimited. Does not implicitly {@link TransferPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TransferPayload
     * @static
     * @param {ITransferPayload} message TransferPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransferPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TransferPayload message from the specified reader or buffer.
     * @function decode
     * @memberof TransferPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TransferPayload} TransferPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransferPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TransferPayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.senderAccountType = reader.int32();
                break;
            case 2:
                message.addressTo = reader.string();
                break;
            case 3:
                message.value = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TransferPayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TransferPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TransferPayload} TransferPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransferPayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TransferPayload message.
     * @function verify
     * @memberof TransferPayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TransferPayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.senderAccountType != null && message.hasOwnProperty("senderAccountType"))
            switch (message.senderAccountType) {
            default:
                return "senderAccountType: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.addressTo != null && message.hasOwnProperty("addressTo"))
            if (!$util.isString(message.addressTo))
                return "addressTo: string expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                return "value: integer|Long expected";
        return null;
    };

    /**
     * Creates a TransferPayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TransferPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TransferPayload} TransferPayload
     */
    TransferPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.TransferPayload)
            return object;
        var message = new $root.TransferPayload();
        switch (object.senderAccountType) {
        case "ACCOUNT":
        case 0:
            message.senderAccountType = 0;
            break;
        case "NODE_ACCOUNT":
        case 1:
            message.senderAccountType = 1;
            break;
        }
        if (object.addressTo != null)
            message.addressTo = String(object.addressTo);
        if (object.value != null)
            if ($util.Long)
                (message.value = $util.Long.fromValue(object.value)).unsigned = true;
            else if (typeof object.value === "string")
                message.value = parseInt(object.value, 10);
            else if (typeof object.value === "number")
                message.value = object.value;
            else if (typeof object.value === "object")
                message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a TransferPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TransferPayload
     * @static
     * @param {TransferPayload} message TransferPayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TransferPayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.senderAccountType = options.enums === String ? "ACCOUNT" : 0;
            object.addressTo = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.value = options.longs === String ? "0" : 0;
        }
        if (message.senderAccountType != null && message.hasOwnProperty("senderAccountType"))
            object.senderAccountType = options.enums === String ? $root.TransferPayload.SenderAccountType[message.senderAccountType] : message.senderAccountType;
        if (message.addressTo != null && message.hasOwnProperty("addressTo"))
            object.addressTo = message.addressTo;
        if (message.value != null && message.hasOwnProperty("value"))
            if (typeof message.value === "number")
                object.value = options.longs === String ? String(message.value) : message.value;
            else
                object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber(true) : message.value;
        return object;
    };

    /**
     * Converts this TransferPayload to JSON.
     * @function toJSON
     * @memberof TransferPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TransferPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * SenderAccountType enum.
     * @name TransferPayload.SenderAccountType
     * @enum {string}
     * @property {number} ACCOUNT=0 ACCOUNT value
     * @property {number} NODE_ACCOUNT=1 NODE_ACCOUNT value
     */
    TransferPayload.SenderAccountType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ACCOUNT"] = 0;
        values[valuesById[1] = "NODE_ACCOUNT"] = 1;
        return values;
    })();

    return TransferPayload;
})();

$root.GenesisPayload = (function() {

    /**
     * Properties of a GenesisPayload.
     * @exports IGenesisPayload
     * @interface IGenesisPayload
     * @property {number|Long|null} [totalSupply] GenesisPayload totalSupply
     */

    /**
     * Constructs a new GenesisPayload.
     * @exports GenesisPayload
     * @classdesc Represents a GenesisPayload.
     * @implements IGenesisPayload
     * @constructor
     * @param {IGenesisPayload=} [properties] Properties to set
     */
    function GenesisPayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GenesisPayload totalSupply.
     * @member {number|Long} totalSupply
     * @memberof GenesisPayload
     * @instance
     */
    GenesisPayload.prototype.totalSupply = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new GenesisPayload instance using the specified properties.
     * @function create
     * @memberof GenesisPayload
     * @static
     * @param {IGenesisPayload=} [properties] Properties to set
     * @returns {GenesisPayload} GenesisPayload instance
     */
    GenesisPayload.create = function create(properties) {
        return new GenesisPayload(properties);
    };

    /**
     * Encodes the specified GenesisPayload message. Does not implicitly {@link GenesisPayload.verify|verify} messages.
     * @function encode
     * @memberof GenesisPayload
     * @static
     * @param {IGenesisPayload} message GenesisPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GenesisPayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.totalSupply != null && message.hasOwnProperty("totalSupply"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.totalSupply);
        return writer;
    };

    /**
     * Encodes the specified GenesisPayload message, length delimited. Does not implicitly {@link GenesisPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GenesisPayload
     * @static
     * @param {IGenesisPayload} message GenesisPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GenesisPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GenesisPayload message from the specified reader or buffer.
     * @function decode
     * @memberof GenesisPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GenesisPayload} GenesisPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GenesisPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GenesisPayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.totalSupply = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GenesisPayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GenesisPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GenesisPayload} GenesisPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GenesisPayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GenesisPayload message.
     * @function verify
     * @memberof GenesisPayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GenesisPayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.totalSupply != null && message.hasOwnProperty("totalSupply"))
            if (!$util.isInteger(message.totalSupply) && !(message.totalSupply && $util.isInteger(message.totalSupply.low) && $util.isInteger(message.totalSupply.high)))
                return "totalSupply: integer|Long expected";
        return null;
    };

    /**
     * Creates a GenesisPayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GenesisPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GenesisPayload} GenesisPayload
     */
    GenesisPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.GenesisPayload)
            return object;
        var message = new $root.GenesisPayload();
        if (object.totalSupply != null)
            if ($util.Long)
                (message.totalSupply = $util.Long.fromValue(object.totalSupply)).unsigned = true;
            else if (typeof object.totalSupply === "string")
                message.totalSupply = parseInt(object.totalSupply, 10);
            else if (typeof object.totalSupply === "number")
                message.totalSupply = object.totalSupply;
            else if (typeof object.totalSupply === "object")
                message.totalSupply = new $util.LongBits(object.totalSupply.low >>> 0, object.totalSupply.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a GenesisPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GenesisPayload
     * @static
     * @param {GenesisPayload} message GenesisPayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GenesisPayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.totalSupply = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.totalSupply = options.longs === String ? "0" : 0;
        if (message.totalSupply != null && message.hasOwnProperty("totalSupply"))
            if (typeof message.totalSupply === "number")
                object.totalSupply = options.longs === String ? String(message.totalSupply) : message.totalSupply;
            else
                object.totalSupply = options.longs === String ? $util.Long.prototype.toString.call(message.totalSupply) : options.longs === Number ? new $util.LongBits(message.totalSupply.low >>> 0, message.totalSupply.high >>> 0).toNumber(true) : message.totalSupply;
        return object;
    };

    /**
     * Converts this GenesisPayload to JSON.
     * @function toJSON
     * @memberof GenesisPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GenesisPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GenesisPayload;
})();

$root.Account = (function() {

    /**
     * Properties of an Account.
     * @exports IAccount
     * @interface IAccount
     * @property {number|Long|null} [balance] Account balance
     * @property {Array.<string>|null} [pubKeys] Account pubKeys
     */

    /**
     * Constructs a new Account.
     * @exports Account
     * @classdesc Represents an Account.
     * @implements IAccount
     * @constructor
     * @param {IAccount=} [properties] Properties to set
     */
    function Account(properties) {
        this.pubKeys = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Account balance.
     * @member {number|Long} balance
     * @memberof Account
     * @instance
     */
    Account.prototype.balance = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Account pubKeys.
     * @member {Array.<string>} pubKeys
     * @memberof Account
     * @instance
     */
    Account.prototype.pubKeys = $util.emptyArray;

    /**
     * Creates a new Account instance using the specified properties.
     * @function create
     * @memberof Account
     * @static
     * @param {IAccount=} [properties] Properties to set
     * @returns {Account} Account instance
     */
    Account.create = function create(properties) {
        return new Account(properties);
    };

    /**
     * Encodes the specified Account message. Does not implicitly {@link Account.verify|verify} messages.
     * @function encode
     * @memberof Account
     * @static
     * @param {IAccount} message Account message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Account.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.balance != null && message.hasOwnProperty("balance"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.balance);
        if (message.pubKeys != null && message.pubKeys.length)
            for (var i = 0; i < message.pubKeys.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.pubKeys[i]);
        return writer;
    };

    /**
     * Encodes the specified Account message, length delimited. Does not implicitly {@link Account.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Account
     * @static
     * @param {IAccount} message Account message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Account.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Account message from the specified reader or buffer.
     * @function decode
     * @memberof Account
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Account} Account
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Account.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Account();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.balance = reader.uint64();
                break;
            case 2:
                if (!(message.pubKeys && message.pubKeys.length))
                    message.pubKeys = [];
                message.pubKeys.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Account message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Account
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Account} Account
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Account.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Account message.
     * @function verify
     * @memberof Account
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Account.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.balance != null && message.hasOwnProperty("balance"))
            if (!$util.isInteger(message.balance) && !(message.balance && $util.isInteger(message.balance.low) && $util.isInteger(message.balance.high)))
                return "balance: integer|Long expected";
        if (message.pubKeys != null && message.hasOwnProperty("pubKeys")) {
            if (!Array.isArray(message.pubKeys))
                return "pubKeys: array expected";
            for (var i = 0; i < message.pubKeys.length; ++i)
                if (!$util.isString(message.pubKeys[i]))
                    return "pubKeys: string[] expected";
        }
        return null;
    };

    /**
     * Creates an Account message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Account
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Account} Account
     */
    Account.fromObject = function fromObject(object) {
        if (object instanceof $root.Account)
            return object;
        var message = new $root.Account();
        if (object.balance != null)
            if ($util.Long)
                (message.balance = $util.Long.fromValue(object.balance)).unsigned = true;
            else if (typeof object.balance === "string")
                message.balance = parseInt(object.balance, 10);
            else if (typeof object.balance === "number")
                message.balance = object.balance;
            else if (typeof object.balance === "object")
                message.balance = new $util.LongBits(object.balance.low >>> 0, object.balance.high >>> 0).toNumber(true);
        if (object.pubKeys) {
            if (!Array.isArray(object.pubKeys))
                throw TypeError(".Account.pubKeys: array expected");
            message.pubKeys = [];
            for (var i = 0; i < object.pubKeys.length; ++i)
                message.pubKeys[i] = String(object.pubKeys[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from an Account message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Account
     * @static
     * @param {Account} message Account
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Account.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.pubKeys = [];
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.balance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.balance = options.longs === String ? "0" : 0;
        if (message.balance != null && message.hasOwnProperty("balance"))
            if (typeof message.balance === "number")
                object.balance = options.longs === String ? String(message.balance) : message.balance;
            else
                object.balance = options.longs === String ? $util.Long.prototype.toString.call(message.balance) : options.longs === Number ? new $util.LongBits(message.balance.low >>> 0, message.balance.high >>> 0).toNumber(true) : message.balance;
        if (message.pubKeys && message.pubKeys.length) {
            object.pubKeys = [];
            for (var j = 0; j < message.pubKeys.length; ++j)
                object.pubKeys[j] = message.pubKeys[j];
        }
        return object;
    };

    /**
     * Converts this Account to JSON.
     * @function toJSON
     * @memberof Account
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Account.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Account;
})();

$root.GenesisStatus = (function() {

    /**
     * Properties of a GenesisStatus.
     * @exports IGenesisStatus
     * @interface IGenesisStatus
     * @property {boolean|null} [status] GenesisStatus status
     */

    /**
     * Constructs a new GenesisStatus.
     * @exports GenesisStatus
     * @classdesc Represents a GenesisStatus.
     * @implements IGenesisStatus
     * @constructor
     * @param {IGenesisStatus=} [properties] Properties to set
     */
    function GenesisStatus(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GenesisStatus status.
     * @member {boolean} status
     * @memberof GenesisStatus
     * @instance
     */
    GenesisStatus.prototype.status = false;

    /**
     * Creates a new GenesisStatus instance using the specified properties.
     * @function create
     * @memberof GenesisStatus
     * @static
     * @param {IGenesisStatus=} [properties] Properties to set
     * @returns {GenesisStatus} GenesisStatus instance
     */
    GenesisStatus.create = function create(properties) {
        return new GenesisStatus(properties);
    };

    /**
     * Encodes the specified GenesisStatus message. Does not implicitly {@link GenesisStatus.verify|verify} messages.
     * @function encode
     * @memberof GenesisStatus
     * @static
     * @param {IGenesisStatus} message GenesisStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GenesisStatus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && message.hasOwnProperty("status"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.status);
        return writer;
    };

    /**
     * Encodes the specified GenesisStatus message, length delimited. Does not implicitly {@link GenesisStatus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GenesisStatus
     * @static
     * @param {IGenesisStatus} message GenesisStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GenesisStatus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GenesisStatus message from the specified reader or buffer.
     * @function decode
     * @memberof GenesisStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GenesisStatus} GenesisStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GenesisStatus.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GenesisStatus();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.status = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GenesisStatus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GenesisStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GenesisStatus} GenesisStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GenesisStatus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GenesisStatus message.
     * @function verify
     * @memberof GenesisStatus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GenesisStatus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (typeof message.status !== "boolean")
                return "status: boolean expected";
        return null;
    };

    /**
     * Creates a GenesisStatus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GenesisStatus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GenesisStatus} GenesisStatus
     */
    GenesisStatus.fromObject = function fromObject(object) {
        if (object instanceof $root.GenesisStatus)
            return object;
        var message = new $root.GenesisStatus();
        if (object.status != null)
            message.status = Boolean(object.status);
        return message;
    };

    /**
     * Creates a plain object from a GenesisStatus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GenesisStatus
     * @static
     * @param {GenesisStatus} message GenesisStatus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GenesisStatus.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.status = false;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this GenesisStatus to JSON.
     * @function toJSON
     * @memberof GenesisStatus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GenesisStatus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GenesisStatus;
})();

$root.AtomicSwapMethod = (function() {

    /**
     * Properties of an AtomicSwapMethod.
     * @exports IAtomicSwapMethod
     * @interface IAtomicSwapMethod
     */

    /**
     * Constructs a new AtomicSwapMethod.
     * @exports AtomicSwapMethod
     * @classdesc Represents an AtomicSwapMethod.
     * @implements IAtomicSwapMethod
     * @constructor
     * @param {IAtomicSwapMethod=} [properties] Properties to set
     */
    function AtomicSwapMethod(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new AtomicSwapMethod instance using the specified properties.
     * @function create
     * @memberof AtomicSwapMethod
     * @static
     * @param {IAtomicSwapMethod=} [properties] Properties to set
     * @returns {AtomicSwapMethod} AtomicSwapMethod instance
     */
    AtomicSwapMethod.create = function create(properties) {
        return new AtomicSwapMethod(properties);
    };

    /**
     * Encodes the specified AtomicSwapMethod message. Does not implicitly {@link AtomicSwapMethod.verify|verify} messages.
     * @function encode
     * @memberof AtomicSwapMethod
     * @static
     * @param {IAtomicSwapMethod} message AtomicSwapMethod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapMethod.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified AtomicSwapMethod message, length delimited. Does not implicitly {@link AtomicSwapMethod.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AtomicSwapMethod
     * @static
     * @param {IAtomicSwapMethod} message AtomicSwapMethod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapMethod.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AtomicSwapMethod message from the specified reader or buffer.
     * @function decode
     * @memberof AtomicSwapMethod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AtomicSwapMethod} AtomicSwapMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapMethod.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AtomicSwapMethod();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AtomicSwapMethod message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AtomicSwapMethod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AtomicSwapMethod} AtomicSwapMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapMethod.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AtomicSwapMethod message.
     * @function verify
     * @memberof AtomicSwapMethod
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AtomicSwapMethod.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an AtomicSwapMethod message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AtomicSwapMethod
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AtomicSwapMethod} AtomicSwapMethod
     */
    AtomicSwapMethod.fromObject = function fromObject(object) {
        if (object instanceof $root.AtomicSwapMethod)
            return object;
        return new $root.AtomicSwapMethod();
    };

    /**
     * Creates a plain object from an AtomicSwapMethod message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AtomicSwapMethod
     * @static
     * @param {AtomicSwapMethod} message AtomicSwapMethod
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AtomicSwapMethod.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this AtomicSwapMethod to JSON.
     * @function toJSON
     * @memberof AtomicSwapMethod
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AtomicSwapMethod.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Method enum.
     * @name AtomicSwapMethod.Method
     * @enum {string}
     * @property {number} INIT=0 INIT value
     * @property {number} APPROVE=1 APPROVE value
     * @property {number} EXPIRE=2 EXPIRE value
     * @property {number} SET_SECRET_LOCK=3 SET_SECRET_LOCK value
     * @property {number} CLOSE=4 CLOSE value
     */
    AtomicSwapMethod.Method = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "INIT"] = 0;
        values[valuesById[1] = "APPROVE"] = 1;
        values[valuesById[2] = "EXPIRE"] = 2;
        values[valuesById[3] = "SET_SECRET_LOCK"] = 3;
        values[valuesById[4] = "CLOSE"] = 4;
        return values;
    })();

    return AtomicSwapMethod;
})();

$root.AtomicSwapInitPayload = (function() {

    /**
     * Properties of an AtomicSwapInitPayload.
     * @exports IAtomicSwapInitPayload
     * @interface IAtomicSwapInitPayload
     * @property {string|null} [receiverAddress] AtomicSwapInitPayload receiverAddress
     * @property {string|null} [senderAddressNonLocal] AtomicSwapInitPayload senderAddressNonLocal
     * @property {number|Long|null} [amount] AtomicSwapInitPayload amount
     * @property {string|null} [swapId] AtomicSwapInitPayload swapId
     * @property {string|null} [secretLockBySolicitor] AtomicSwapInitPayload secretLockBySolicitor
     * @property {string|null} [emailAddressEncryptedByInitiator] AtomicSwapInitPayload emailAddressEncryptedByInitiator
     * @property {number|null} [createdAt] AtomicSwapInitPayload createdAt
     */

    /**
     * Constructs a new AtomicSwapInitPayload.
     * @exports AtomicSwapInitPayload
     * @classdesc Represents an AtomicSwapInitPayload.
     * @implements IAtomicSwapInitPayload
     * @constructor
     * @param {IAtomicSwapInitPayload=} [properties] Properties to set
     */
    function AtomicSwapInitPayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AtomicSwapInitPayload receiverAddress.
     * @member {string} receiverAddress
     * @memberof AtomicSwapInitPayload
     * @instance
     */
    AtomicSwapInitPayload.prototype.receiverAddress = "";

    /**
     * AtomicSwapInitPayload senderAddressNonLocal.
     * @member {string} senderAddressNonLocal
     * @memberof AtomicSwapInitPayload
     * @instance
     */
    AtomicSwapInitPayload.prototype.senderAddressNonLocal = "";

    /**
     * AtomicSwapInitPayload amount.
     * @member {number|Long} amount
     * @memberof AtomicSwapInitPayload
     * @instance
     */
    AtomicSwapInitPayload.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * AtomicSwapInitPayload swapId.
     * @member {string} swapId
     * @memberof AtomicSwapInitPayload
     * @instance
     */
    AtomicSwapInitPayload.prototype.swapId = "";

    /**
     * AtomicSwapInitPayload secretLockBySolicitor.
     * @member {string} secretLockBySolicitor
     * @memberof AtomicSwapInitPayload
     * @instance
     */
    AtomicSwapInitPayload.prototype.secretLockBySolicitor = "";

    /**
     * AtomicSwapInitPayload emailAddressEncryptedByInitiator.
     * @member {string} emailAddressEncryptedByInitiator
     * @memberof AtomicSwapInitPayload
     * @instance
     */
    AtomicSwapInitPayload.prototype.emailAddressEncryptedByInitiator = "";

    /**
     * AtomicSwapInitPayload createdAt.
     * @member {number} createdAt
     * @memberof AtomicSwapInitPayload
     * @instance
     */
    AtomicSwapInitPayload.prototype.createdAt = 0;

    /**
     * Creates a new AtomicSwapInitPayload instance using the specified properties.
     * @function create
     * @memberof AtomicSwapInitPayload
     * @static
     * @param {IAtomicSwapInitPayload=} [properties] Properties to set
     * @returns {AtomicSwapInitPayload} AtomicSwapInitPayload instance
     */
    AtomicSwapInitPayload.create = function create(properties) {
        return new AtomicSwapInitPayload(properties);
    };

    /**
     * Encodes the specified AtomicSwapInitPayload message. Does not implicitly {@link AtomicSwapInitPayload.verify|verify} messages.
     * @function encode
     * @memberof AtomicSwapInitPayload
     * @static
     * @param {IAtomicSwapInitPayload} message AtomicSwapInitPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapInitPayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.receiverAddress != null && message.hasOwnProperty("receiverAddress"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.receiverAddress);
        if (message.amount != null && message.hasOwnProperty("amount"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.amount);
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.swapId);
        if (message.secretLockBySolicitor != null && message.hasOwnProperty("secretLockBySolicitor"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.secretLockBySolicitor);
        if (message.emailAddressEncryptedByInitiator != null && message.hasOwnProperty("emailAddressEncryptedByInitiator"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.emailAddressEncryptedByInitiator);
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.createdAt);
        if (message.senderAddressNonLocal != null && message.hasOwnProperty("senderAddressNonLocal"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.senderAddressNonLocal);
        return writer;
    };

    /**
     * Encodes the specified AtomicSwapInitPayload message, length delimited. Does not implicitly {@link AtomicSwapInitPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AtomicSwapInitPayload
     * @static
     * @param {IAtomicSwapInitPayload} message AtomicSwapInitPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapInitPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AtomicSwapInitPayload message from the specified reader or buffer.
     * @function decode
     * @memberof AtomicSwapInitPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AtomicSwapInitPayload} AtomicSwapInitPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapInitPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AtomicSwapInitPayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.receiverAddress = reader.string();
                break;
            case 7:
                message.senderAddressNonLocal = reader.string();
                break;
            case 2:
                message.amount = reader.uint64();
                break;
            case 3:
                message.swapId = reader.string();
                break;
            case 4:
                message.secretLockBySolicitor = reader.string();
                break;
            case 5:
                message.emailAddressEncryptedByInitiator = reader.string();
                break;
            case 6:
                message.createdAt = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AtomicSwapInitPayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AtomicSwapInitPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AtomicSwapInitPayload} AtomicSwapInitPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapInitPayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AtomicSwapInitPayload message.
     * @function verify
     * @memberof AtomicSwapInitPayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AtomicSwapInitPayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.receiverAddress != null && message.hasOwnProperty("receiverAddress"))
            if (!$util.isString(message.receiverAddress))
                return "receiverAddress: string expected";
        if (message.senderAddressNonLocal != null && message.hasOwnProperty("senderAddressNonLocal"))
            if (!$util.isString(message.senderAddressNonLocal))
                return "senderAddressNonLocal: string expected";
        if (message.amount != null && message.hasOwnProperty("amount"))
            if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                return "amount: integer|Long expected";
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            if (!$util.isString(message.swapId))
                return "swapId: string expected";
        if (message.secretLockBySolicitor != null && message.hasOwnProperty("secretLockBySolicitor"))
            if (!$util.isString(message.secretLockBySolicitor))
                return "secretLockBySolicitor: string expected";
        if (message.emailAddressEncryptedByInitiator != null && message.hasOwnProperty("emailAddressEncryptedByInitiator"))
            if (!$util.isString(message.emailAddressEncryptedByInitiator))
                return "emailAddressEncryptedByInitiator: string expected";
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isInteger(message.createdAt))
                return "createdAt: integer expected";
        return null;
    };

    /**
     * Creates an AtomicSwapInitPayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AtomicSwapInitPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AtomicSwapInitPayload} AtomicSwapInitPayload
     */
    AtomicSwapInitPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.AtomicSwapInitPayload)
            return object;
        var message = new $root.AtomicSwapInitPayload();
        if (object.receiverAddress != null)
            message.receiverAddress = String(object.receiverAddress);
        if (object.senderAddressNonLocal != null)
            message.senderAddressNonLocal = String(object.senderAddressNonLocal);
        if (object.amount != null)
            if ($util.Long)
                (message.amount = $util.Long.fromValue(object.amount)).unsigned = true;
            else if (typeof object.amount === "string")
                message.amount = parseInt(object.amount, 10);
            else if (typeof object.amount === "number")
                message.amount = object.amount;
            else if (typeof object.amount === "object")
                message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber(true);
        if (object.swapId != null)
            message.swapId = String(object.swapId);
        if (object.secretLockBySolicitor != null)
            message.secretLockBySolicitor = String(object.secretLockBySolicitor);
        if (object.emailAddressEncryptedByInitiator != null)
            message.emailAddressEncryptedByInitiator = String(object.emailAddressEncryptedByInitiator);
        if (object.createdAt != null)
            message.createdAt = object.createdAt >>> 0;
        return message;
    };

    /**
     * Creates a plain object from an AtomicSwapInitPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AtomicSwapInitPayload
     * @static
     * @param {AtomicSwapInitPayload} message AtomicSwapInitPayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AtomicSwapInitPayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.receiverAddress = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.amount = options.longs === String ? "0" : 0;
            object.swapId = "";
            object.secretLockBySolicitor = "";
            object.emailAddressEncryptedByInitiator = "";
            object.createdAt = 0;
            object.senderAddressNonLocal = "";
        }
        if (message.receiverAddress != null && message.hasOwnProperty("receiverAddress"))
            object.receiverAddress = message.receiverAddress;
        if (message.amount != null && message.hasOwnProperty("amount"))
            if (typeof message.amount === "number")
                object.amount = options.longs === String ? String(message.amount) : message.amount;
            else
                object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber(true) : message.amount;
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            object.swapId = message.swapId;
        if (message.secretLockBySolicitor != null && message.hasOwnProperty("secretLockBySolicitor"))
            object.secretLockBySolicitor = message.secretLockBySolicitor;
        if (message.emailAddressEncryptedByInitiator != null && message.hasOwnProperty("emailAddressEncryptedByInitiator"))
            object.emailAddressEncryptedByInitiator = message.emailAddressEncryptedByInitiator;
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            object.createdAt = message.createdAt;
        if (message.senderAddressNonLocal != null && message.hasOwnProperty("senderAddressNonLocal"))
            object.senderAddressNonLocal = message.senderAddressNonLocal;
        return object;
    };

    /**
     * Converts this AtomicSwapInitPayload to JSON.
     * @function toJSON
     * @memberof AtomicSwapInitPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AtomicSwapInitPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AtomicSwapInitPayload;
})();

$root.AtomicSwapApprovePayload = (function() {

    /**
     * Properties of an AtomicSwapApprovePayload.
     * @exports IAtomicSwapApprovePayload
     * @interface IAtomicSwapApprovePayload
     * @property {string|null} [swapId] AtomicSwapApprovePayload swapId
     */

    /**
     * Constructs a new AtomicSwapApprovePayload.
     * @exports AtomicSwapApprovePayload
     * @classdesc Represents an AtomicSwapApprovePayload.
     * @implements IAtomicSwapApprovePayload
     * @constructor
     * @param {IAtomicSwapApprovePayload=} [properties] Properties to set
     */
    function AtomicSwapApprovePayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AtomicSwapApprovePayload swapId.
     * @member {string} swapId
     * @memberof AtomicSwapApprovePayload
     * @instance
     */
    AtomicSwapApprovePayload.prototype.swapId = "";

    /**
     * Creates a new AtomicSwapApprovePayload instance using the specified properties.
     * @function create
     * @memberof AtomicSwapApprovePayload
     * @static
     * @param {IAtomicSwapApprovePayload=} [properties] Properties to set
     * @returns {AtomicSwapApprovePayload} AtomicSwapApprovePayload instance
     */
    AtomicSwapApprovePayload.create = function create(properties) {
        return new AtomicSwapApprovePayload(properties);
    };

    /**
     * Encodes the specified AtomicSwapApprovePayload message. Does not implicitly {@link AtomicSwapApprovePayload.verify|verify} messages.
     * @function encode
     * @memberof AtomicSwapApprovePayload
     * @static
     * @param {IAtomicSwapApprovePayload} message AtomicSwapApprovePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapApprovePayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.swapId);
        return writer;
    };

    /**
     * Encodes the specified AtomicSwapApprovePayload message, length delimited. Does not implicitly {@link AtomicSwapApprovePayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AtomicSwapApprovePayload
     * @static
     * @param {IAtomicSwapApprovePayload} message AtomicSwapApprovePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapApprovePayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AtomicSwapApprovePayload message from the specified reader or buffer.
     * @function decode
     * @memberof AtomicSwapApprovePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AtomicSwapApprovePayload} AtomicSwapApprovePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapApprovePayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AtomicSwapApprovePayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.swapId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AtomicSwapApprovePayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AtomicSwapApprovePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AtomicSwapApprovePayload} AtomicSwapApprovePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapApprovePayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AtomicSwapApprovePayload message.
     * @function verify
     * @memberof AtomicSwapApprovePayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AtomicSwapApprovePayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            if (!$util.isString(message.swapId))
                return "swapId: string expected";
        return null;
    };

    /**
     * Creates an AtomicSwapApprovePayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AtomicSwapApprovePayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AtomicSwapApprovePayload} AtomicSwapApprovePayload
     */
    AtomicSwapApprovePayload.fromObject = function fromObject(object) {
        if (object instanceof $root.AtomicSwapApprovePayload)
            return object;
        var message = new $root.AtomicSwapApprovePayload();
        if (object.swapId != null)
            message.swapId = String(object.swapId);
        return message;
    };

    /**
     * Creates a plain object from an AtomicSwapApprovePayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AtomicSwapApprovePayload
     * @static
     * @param {AtomicSwapApprovePayload} message AtomicSwapApprovePayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AtomicSwapApprovePayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.swapId = "";
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            object.swapId = message.swapId;
        return object;
    };

    /**
     * Converts this AtomicSwapApprovePayload to JSON.
     * @function toJSON
     * @memberof AtomicSwapApprovePayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AtomicSwapApprovePayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AtomicSwapApprovePayload;
})();

$root.AtomicSwapExpirePayload = (function() {

    /**
     * Properties of an AtomicSwapExpirePayload.
     * @exports IAtomicSwapExpirePayload
     * @interface IAtomicSwapExpirePayload
     * @property {string|null} [swapId] AtomicSwapExpirePayload swapId
     */

    /**
     * Constructs a new AtomicSwapExpirePayload.
     * @exports AtomicSwapExpirePayload
     * @classdesc Represents an AtomicSwapExpirePayload.
     * @implements IAtomicSwapExpirePayload
     * @constructor
     * @param {IAtomicSwapExpirePayload=} [properties] Properties to set
     */
    function AtomicSwapExpirePayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AtomicSwapExpirePayload swapId.
     * @member {string} swapId
     * @memberof AtomicSwapExpirePayload
     * @instance
     */
    AtomicSwapExpirePayload.prototype.swapId = "";

    /**
     * Creates a new AtomicSwapExpirePayload instance using the specified properties.
     * @function create
     * @memberof AtomicSwapExpirePayload
     * @static
     * @param {IAtomicSwapExpirePayload=} [properties] Properties to set
     * @returns {AtomicSwapExpirePayload} AtomicSwapExpirePayload instance
     */
    AtomicSwapExpirePayload.create = function create(properties) {
        return new AtomicSwapExpirePayload(properties);
    };

    /**
     * Encodes the specified AtomicSwapExpirePayload message. Does not implicitly {@link AtomicSwapExpirePayload.verify|verify} messages.
     * @function encode
     * @memberof AtomicSwapExpirePayload
     * @static
     * @param {IAtomicSwapExpirePayload} message AtomicSwapExpirePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapExpirePayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.swapId);
        return writer;
    };

    /**
     * Encodes the specified AtomicSwapExpirePayload message, length delimited. Does not implicitly {@link AtomicSwapExpirePayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AtomicSwapExpirePayload
     * @static
     * @param {IAtomicSwapExpirePayload} message AtomicSwapExpirePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapExpirePayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AtomicSwapExpirePayload message from the specified reader or buffer.
     * @function decode
     * @memberof AtomicSwapExpirePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AtomicSwapExpirePayload} AtomicSwapExpirePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapExpirePayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AtomicSwapExpirePayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.swapId = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AtomicSwapExpirePayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AtomicSwapExpirePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AtomicSwapExpirePayload} AtomicSwapExpirePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapExpirePayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AtomicSwapExpirePayload message.
     * @function verify
     * @memberof AtomicSwapExpirePayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AtomicSwapExpirePayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            if (!$util.isString(message.swapId))
                return "swapId: string expected";
        return null;
    };

    /**
     * Creates an AtomicSwapExpirePayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AtomicSwapExpirePayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AtomicSwapExpirePayload} AtomicSwapExpirePayload
     */
    AtomicSwapExpirePayload.fromObject = function fromObject(object) {
        if (object instanceof $root.AtomicSwapExpirePayload)
            return object;
        var message = new $root.AtomicSwapExpirePayload();
        if (object.swapId != null)
            message.swapId = String(object.swapId);
        return message;
    };

    /**
     * Creates a plain object from an AtomicSwapExpirePayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AtomicSwapExpirePayload
     * @static
     * @param {AtomicSwapExpirePayload} message AtomicSwapExpirePayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AtomicSwapExpirePayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.swapId = "";
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            object.swapId = message.swapId;
        return object;
    };

    /**
     * Converts this AtomicSwapExpirePayload to JSON.
     * @function toJSON
     * @memberof AtomicSwapExpirePayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AtomicSwapExpirePayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AtomicSwapExpirePayload;
})();

$root.AtomicSwapSetSecretLockPayload = (function() {

    /**
     * Properties of an AtomicSwapSetSecretLockPayload.
     * @exports IAtomicSwapSetSecretLockPayload
     * @interface IAtomicSwapSetSecretLockPayload
     * @property {string|null} [swapId] AtomicSwapSetSecretLockPayload swapId
     * @property {string|null} [secretLock] AtomicSwapSetSecretLockPayload secretLock
     */

    /**
     * Constructs a new AtomicSwapSetSecretLockPayload.
     * @exports AtomicSwapSetSecretLockPayload
     * @classdesc Represents an AtomicSwapSetSecretLockPayload.
     * @implements IAtomicSwapSetSecretLockPayload
     * @constructor
     * @param {IAtomicSwapSetSecretLockPayload=} [properties] Properties to set
     */
    function AtomicSwapSetSecretLockPayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AtomicSwapSetSecretLockPayload swapId.
     * @member {string} swapId
     * @memberof AtomicSwapSetSecretLockPayload
     * @instance
     */
    AtomicSwapSetSecretLockPayload.prototype.swapId = "";

    /**
     * AtomicSwapSetSecretLockPayload secretLock.
     * @member {string} secretLock
     * @memberof AtomicSwapSetSecretLockPayload
     * @instance
     */
    AtomicSwapSetSecretLockPayload.prototype.secretLock = "";

    /**
     * Creates a new AtomicSwapSetSecretLockPayload instance using the specified properties.
     * @function create
     * @memberof AtomicSwapSetSecretLockPayload
     * @static
     * @param {IAtomicSwapSetSecretLockPayload=} [properties] Properties to set
     * @returns {AtomicSwapSetSecretLockPayload} AtomicSwapSetSecretLockPayload instance
     */
    AtomicSwapSetSecretLockPayload.create = function create(properties) {
        return new AtomicSwapSetSecretLockPayload(properties);
    };

    /**
     * Encodes the specified AtomicSwapSetSecretLockPayload message. Does not implicitly {@link AtomicSwapSetSecretLockPayload.verify|verify} messages.
     * @function encode
     * @memberof AtomicSwapSetSecretLockPayload
     * @static
     * @param {IAtomicSwapSetSecretLockPayload} message AtomicSwapSetSecretLockPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapSetSecretLockPayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.swapId);
        if (message.secretLock != null && message.hasOwnProperty("secretLock"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.secretLock);
        return writer;
    };

    /**
     * Encodes the specified AtomicSwapSetSecretLockPayload message, length delimited. Does not implicitly {@link AtomicSwapSetSecretLockPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AtomicSwapSetSecretLockPayload
     * @static
     * @param {IAtomicSwapSetSecretLockPayload} message AtomicSwapSetSecretLockPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapSetSecretLockPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AtomicSwapSetSecretLockPayload message from the specified reader or buffer.
     * @function decode
     * @memberof AtomicSwapSetSecretLockPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AtomicSwapSetSecretLockPayload} AtomicSwapSetSecretLockPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapSetSecretLockPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AtomicSwapSetSecretLockPayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.swapId = reader.string();
                break;
            case 2:
                message.secretLock = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AtomicSwapSetSecretLockPayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AtomicSwapSetSecretLockPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AtomicSwapSetSecretLockPayload} AtomicSwapSetSecretLockPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapSetSecretLockPayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AtomicSwapSetSecretLockPayload message.
     * @function verify
     * @memberof AtomicSwapSetSecretLockPayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AtomicSwapSetSecretLockPayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            if (!$util.isString(message.swapId))
                return "swapId: string expected";
        if (message.secretLock != null && message.hasOwnProperty("secretLock"))
            if (!$util.isString(message.secretLock))
                return "secretLock: string expected";
        return null;
    };

    /**
     * Creates an AtomicSwapSetSecretLockPayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AtomicSwapSetSecretLockPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AtomicSwapSetSecretLockPayload} AtomicSwapSetSecretLockPayload
     */
    AtomicSwapSetSecretLockPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.AtomicSwapSetSecretLockPayload)
            return object;
        var message = new $root.AtomicSwapSetSecretLockPayload();
        if (object.swapId != null)
            message.swapId = String(object.swapId);
        if (object.secretLock != null)
            message.secretLock = String(object.secretLock);
        return message;
    };

    /**
     * Creates a plain object from an AtomicSwapSetSecretLockPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AtomicSwapSetSecretLockPayload
     * @static
     * @param {AtomicSwapSetSecretLockPayload} message AtomicSwapSetSecretLockPayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AtomicSwapSetSecretLockPayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.swapId = "";
            object.secretLock = "";
        }
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            object.swapId = message.swapId;
        if (message.secretLock != null && message.hasOwnProperty("secretLock"))
            object.secretLock = message.secretLock;
        return object;
    };

    /**
     * Converts this AtomicSwapSetSecretLockPayload to JSON.
     * @function toJSON
     * @memberof AtomicSwapSetSecretLockPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AtomicSwapSetSecretLockPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AtomicSwapSetSecretLockPayload;
})();

$root.AtomicSwapClosePayload = (function() {

    /**
     * Properties of an AtomicSwapClosePayload.
     * @exports IAtomicSwapClosePayload
     * @interface IAtomicSwapClosePayload
     * @property {string|null} [swapId] AtomicSwapClosePayload swapId
     * @property {string|null} [secretKey] AtomicSwapClosePayload secretKey
     */

    /**
     * Constructs a new AtomicSwapClosePayload.
     * @exports AtomicSwapClosePayload
     * @classdesc Represents an AtomicSwapClosePayload.
     * @implements IAtomicSwapClosePayload
     * @constructor
     * @param {IAtomicSwapClosePayload=} [properties] Properties to set
     */
    function AtomicSwapClosePayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AtomicSwapClosePayload swapId.
     * @member {string} swapId
     * @memberof AtomicSwapClosePayload
     * @instance
     */
    AtomicSwapClosePayload.prototype.swapId = "";

    /**
     * AtomicSwapClosePayload secretKey.
     * @member {string} secretKey
     * @memberof AtomicSwapClosePayload
     * @instance
     */
    AtomicSwapClosePayload.prototype.secretKey = "";

    /**
     * Creates a new AtomicSwapClosePayload instance using the specified properties.
     * @function create
     * @memberof AtomicSwapClosePayload
     * @static
     * @param {IAtomicSwapClosePayload=} [properties] Properties to set
     * @returns {AtomicSwapClosePayload} AtomicSwapClosePayload instance
     */
    AtomicSwapClosePayload.create = function create(properties) {
        return new AtomicSwapClosePayload(properties);
    };

    /**
     * Encodes the specified AtomicSwapClosePayload message. Does not implicitly {@link AtomicSwapClosePayload.verify|verify} messages.
     * @function encode
     * @memberof AtomicSwapClosePayload
     * @static
     * @param {IAtomicSwapClosePayload} message AtomicSwapClosePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapClosePayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.swapId);
        if (message.secretKey != null && message.hasOwnProperty("secretKey"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.secretKey);
        return writer;
    };

    /**
     * Encodes the specified AtomicSwapClosePayload message, length delimited. Does not implicitly {@link AtomicSwapClosePayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AtomicSwapClosePayload
     * @static
     * @param {IAtomicSwapClosePayload} message AtomicSwapClosePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapClosePayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AtomicSwapClosePayload message from the specified reader or buffer.
     * @function decode
     * @memberof AtomicSwapClosePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AtomicSwapClosePayload} AtomicSwapClosePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapClosePayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AtomicSwapClosePayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.swapId = reader.string();
                break;
            case 2:
                message.secretKey = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AtomicSwapClosePayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AtomicSwapClosePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AtomicSwapClosePayload} AtomicSwapClosePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapClosePayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AtomicSwapClosePayload message.
     * @function verify
     * @memberof AtomicSwapClosePayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AtomicSwapClosePayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            if (!$util.isString(message.swapId))
                return "swapId: string expected";
        if (message.secretKey != null && message.hasOwnProperty("secretKey"))
            if (!$util.isString(message.secretKey))
                return "secretKey: string expected";
        return null;
    };

    /**
     * Creates an AtomicSwapClosePayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AtomicSwapClosePayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AtomicSwapClosePayload} AtomicSwapClosePayload
     */
    AtomicSwapClosePayload.fromObject = function fromObject(object) {
        if (object instanceof $root.AtomicSwapClosePayload)
            return object;
        var message = new $root.AtomicSwapClosePayload();
        if (object.swapId != null)
            message.swapId = String(object.swapId);
        if (object.secretKey != null)
            message.secretKey = String(object.secretKey);
        return message;
    };

    /**
     * Creates a plain object from an AtomicSwapClosePayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AtomicSwapClosePayload
     * @static
     * @param {AtomicSwapClosePayload} message AtomicSwapClosePayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AtomicSwapClosePayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.swapId = "";
            object.secretKey = "";
        }
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            object.swapId = message.swapId;
        if (message.secretKey != null && message.hasOwnProperty("secretKey"))
            object.secretKey = message.secretKey;
        return object;
    };

    /**
     * Converts this AtomicSwapClosePayload to JSON.
     * @function toJSON
     * @memberof AtomicSwapClosePayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AtomicSwapClosePayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AtomicSwapClosePayload;
})();

$root.AtomicSwapInfo = (function() {

    /**
     * Properties of an AtomicSwapInfo.
     * @exports IAtomicSwapInfo
     * @interface IAtomicSwapInfo
     * @property {AtomicSwapInfo.State|null} [state] AtomicSwapInfo state
     * @property {string|null} [senderAddress] AtomicSwapInfo senderAddress
     * @property {string|null} [senderAddressNonLocal] AtomicSwapInfo senderAddressNonLocal
     * @property {string|null} [receiverAddress] AtomicSwapInfo receiverAddress
     * @property {number|Long|null} [amount] AtomicSwapInfo amount
     * @property {string|null} [emailAddressEncryptedOptional] AtomicSwapInfo emailAddressEncryptedOptional
     * @property {string|null} [swapId] AtomicSwapInfo swapId
     * @property {string|null} [secretLock] AtomicSwapInfo secretLock
     * @property {string|null} [secretKey] AtomicSwapInfo secretKey
     * @property {number|null} [createdAt] AtomicSwapInfo createdAt
     * @property {boolean|null} [isInitiator] AtomicSwapInfo isInitiator
     */

    /**
     * Constructs a new AtomicSwapInfo.
     * @exports AtomicSwapInfo
     * @classdesc Represents an AtomicSwapInfo.
     * @implements IAtomicSwapInfo
     * @constructor
     * @param {IAtomicSwapInfo=} [properties] Properties to set
     */
    function AtomicSwapInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AtomicSwapInfo state.
     * @member {AtomicSwapInfo.State} state
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.state = 0;

    /**
     * AtomicSwapInfo senderAddress.
     * @member {string} senderAddress
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.senderAddress = "";

    /**
     * AtomicSwapInfo senderAddressNonLocal.
     * @member {string} senderAddressNonLocal
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.senderAddressNonLocal = "";

    /**
     * AtomicSwapInfo receiverAddress.
     * @member {string} receiverAddress
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.receiverAddress = "";

    /**
     * AtomicSwapInfo amount.
     * @member {number|Long} amount
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * AtomicSwapInfo emailAddressEncryptedOptional.
     * @member {string} emailAddressEncryptedOptional
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.emailAddressEncryptedOptional = "";

    /**
     * AtomicSwapInfo swapId.
     * @member {string} swapId
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.swapId = "";

    /**
     * AtomicSwapInfo secretLock.
     * @member {string} secretLock
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.secretLock = "";

    /**
     * AtomicSwapInfo secretKey.
     * @member {string} secretKey
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.secretKey = "";

    /**
     * AtomicSwapInfo createdAt.
     * @member {number} createdAt
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.createdAt = 0;

    /**
     * AtomicSwapInfo isInitiator.
     * @member {boolean} isInitiator
     * @memberof AtomicSwapInfo
     * @instance
     */
    AtomicSwapInfo.prototype.isInitiator = false;

    /**
     * Creates a new AtomicSwapInfo instance using the specified properties.
     * @function create
     * @memberof AtomicSwapInfo
     * @static
     * @param {IAtomicSwapInfo=} [properties] Properties to set
     * @returns {AtomicSwapInfo} AtomicSwapInfo instance
     */
    AtomicSwapInfo.create = function create(properties) {
        return new AtomicSwapInfo(properties);
    };

    /**
     * Encodes the specified AtomicSwapInfo message. Does not implicitly {@link AtomicSwapInfo.verify|verify} messages.
     * @function encode
     * @memberof AtomicSwapInfo
     * @static
     * @param {IAtomicSwapInfo} message AtomicSwapInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.senderAddress != null && message.hasOwnProperty("senderAddress"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.senderAddress);
        if (message.receiverAddress != null && message.hasOwnProperty("receiverAddress"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.receiverAddress);
        if (message.amount != null && message.hasOwnProperty("amount"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.amount);
        if (message.emailAddressEncryptedOptional != null && message.hasOwnProperty("emailAddressEncryptedOptional"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.emailAddressEncryptedOptional);
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.swapId);
        if (message.secretLock != null && message.hasOwnProperty("secretLock"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.secretLock);
        if (message.secretKey != null && message.hasOwnProperty("secretKey"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.secretKey);
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.createdAt);
        if (message.isInitiator != null && message.hasOwnProperty("isInitiator"))
            writer.uint32(/* id 10, wireType 0 =*/80).bool(message.isInitiator);
        if (message.senderAddressNonLocal != null && message.hasOwnProperty("senderAddressNonLocal"))
            writer.uint32(/* id 12, wireType 2 =*/98).string(message.senderAddressNonLocal);
        if (message.state != null && message.hasOwnProperty("state"))
            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.state);
        return writer;
    };

    /**
     * Encodes the specified AtomicSwapInfo message, length delimited. Does not implicitly {@link AtomicSwapInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AtomicSwapInfo
     * @static
     * @param {IAtomicSwapInfo} message AtomicSwapInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AtomicSwapInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AtomicSwapInfo message from the specified reader or buffer.
     * @function decode
     * @memberof AtomicSwapInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AtomicSwapInfo} AtomicSwapInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AtomicSwapInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 14:
                message.state = reader.int32();
                break;
            case 2:
                message.senderAddress = reader.string();
                break;
            case 12:
                message.senderAddressNonLocal = reader.string();
                break;
            case 3:
                message.receiverAddress = reader.string();
                break;
            case 4:
                message.amount = reader.uint64();
                break;
            case 5:
                message.emailAddressEncryptedOptional = reader.string();
                break;
            case 6:
                message.swapId = reader.string();
                break;
            case 7:
                message.secretLock = reader.string();
                break;
            case 8:
                message.secretKey = reader.string();
                break;
            case 9:
                message.createdAt = reader.uint32();
                break;
            case 10:
                message.isInitiator = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AtomicSwapInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AtomicSwapInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AtomicSwapInfo} AtomicSwapInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AtomicSwapInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AtomicSwapInfo message.
     * @function verify
     * @memberof AtomicSwapInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AtomicSwapInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.state != null && message.hasOwnProperty("state"))
            switch (message.state) {
            default:
                return "state: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            }
        if (message.senderAddress != null && message.hasOwnProperty("senderAddress"))
            if (!$util.isString(message.senderAddress))
                return "senderAddress: string expected";
        if (message.senderAddressNonLocal != null && message.hasOwnProperty("senderAddressNonLocal"))
            if (!$util.isString(message.senderAddressNonLocal))
                return "senderAddressNonLocal: string expected";
        if (message.receiverAddress != null && message.hasOwnProperty("receiverAddress"))
            if (!$util.isString(message.receiverAddress))
                return "receiverAddress: string expected";
        if (message.amount != null && message.hasOwnProperty("amount"))
            if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                return "amount: integer|Long expected";
        if (message.emailAddressEncryptedOptional != null && message.hasOwnProperty("emailAddressEncryptedOptional"))
            if (!$util.isString(message.emailAddressEncryptedOptional))
                return "emailAddressEncryptedOptional: string expected";
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            if (!$util.isString(message.swapId))
                return "swapId: string expected";
        if (message.secretLock != null && message.hasOwnProperty("secretLock"))
            if (!$util.isString(message.secretLock))
                return "secretLock: string expected";
        if (message.secretKey != null && message.hasOwnProperty("secretKey"))
            if (!$util.isString(message.secretKey))
                return "secretKey: string expected";
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            if (!$util.isInteger(message.createdAt))
                return "createdAt: integer expected";
        if (message.isInitiator != null && message.hasOwnProperty("isInitiator"))
            if (typeof message.isInitiator !== "boolean")
                return "isInitiator: boolean expected";
        return null;
    };

    /**
     * Creates an AtomicSwapInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AtomicSwapInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AtomicSwapInfo} AtomicSwapInfo
     */
    AtomicSwapInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.AtomicSwapInfo)
            return object;
        var message = new $root.AtomicSwapInfo();
        switch (object.state) {
        case "EMPTY":
        case 0:
            message.state = 0;
            break;
        case "OPENED":
        case 1:
            message.state = 1;
            break;
        case "SECRET_LOCK_PROVIDED":
        case 2:
            message.state = 2;
            break;
        case "APPROVED":
        case 3:
            message.state = 3;
            break;
        case "CLOSED":
        case 4:
            message.state = 4;
            break;
        case "EXPIRED":
        case 5:
            message.state = 5;
            break;
        }
        if (object.senderAddress != null)
            message.senderAddress = String(object.senderAddress);
        if (object.senderAddressNonLocal != null)
            message.senderAddressNonLocal = String(object.senderAddressNonLocal);
        if (object.receiverAddress != null)
            message.receiverAddress = String(object.receiverAddress);
        if (object.amount != null)
            if ($util.Long)
                (message.amount = $util.Long.fromValue(object.amount)).unsigned = true;
            else if (typeof object.amount === "string")
                message.amount = parseInt(object.amount, 10);
            else if (typeof object.amount === "number")
                message.amount = object.amount;
            else if (typeof object.amount === "object")
                message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber(true);
        if (object.emailAddressEncryptedOptional != null)
            message.emailAddressEncryptedOptional = String(object.emailAddressEncryptedOptional);
        if (object.swapId != null)
            message.swapId = String(object.swapId);
        if (object.secretLock != null)
            message.secretLock = String(object.secretLock);
        if (object.secretKey != null)
            message.secretKey = String(object.secretKey);
        if (object.createdAt != null)
            message.createdAt = object.createdAt >>> 0;
        if (object.isInitiator != null)
            message.isInitiator = Boolean(object.isInitiator);
        return message;
    };

    /**
     * Creates a plain object from an AtomicSwapInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AtomicSwapInfo
     * @static
     * @param {AtomicSwapInfo} message AtomicSwapInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AtomicSwapInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.senderAddress = "";
            object.receiverAddress = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.amount = options.longs === String ? "0" : 0;
            object.emailAddressEncryptedOptional = "";
            object.swapId = "";
            object.secretLock = "";
            object.secretKey = "";
            object.createdAt = 0;
            object.isInitiator = false;
            object.senderAddressNonLocal = "";
            object.state = options.enums === String ? "EMPTY" : 0;
        }
        if (message.senderAddress != null && message.hasOwnProperty("senderAddress"))
            object.senderAddress = message.senderAddress;
        if (message.receiverAddress != null && message.hasOwnProperty("receiverAddress"))
            object.receiverAddress = message.receiverAddress;
        if (message.amount != null && message.hasOwnProperty("amount"))
            if (typeof message.amount === "number")
                object.amount = options.longs === String ? String(message.amount) : message.amount;
            else
                object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber(true) : message.amount;
        if (message.emailAddressEncryptedOptional != null && message.hasOwnProperty("emailAddressEncryptedOptional"))
            object.emailAddressEncryptedOptional = message.emailAddressEncryptedOptional;
        if (message.swapId != null && message.hasOwnProperty("swapId"))
            object.swapId = message.swapId;
        if (message.secretLock != null && message.hasOwnProperty("secretLock"))
            object.secretLock = message.secretLock;
        if (message.secretKey != null && message.hasOwnProperty("secretKey"))
            object.secretKey = message.secretKey;
        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
            object.createdAt = message.createdAt;
        if (message.isInitiator != null && message.hasOwnProperty("isInitiator"))
            object.isInitiator = message.isInitiator;
        if (message.senderAddressNonLocal != null && message.hasOwnProperty("senderAddressNonLocal"))
            object.senderAddressNonLocal = message.senderAddressNonLocal;
        if (message.state != null && message.hasOwnProperty("state"))
            object.state = options.enums === String ? $root.AtomicSwapInfo.State[message.state] : message.state;
        return object;
    };

    /**
     * Converts this AtomicSwapInfo to JSON.
     * @function toJSON
     * @memberof AtomicSwapInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AtomicSwapInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * State enum.
     * @name AtomicSwapInfo.State
     * @enum {string}
     * @property {number} EMPTY=0 EMPTY value
     * @property {number} OPENED=1 OPENED value
     * @property {number} SECRET_LOCK_PROVIDED=2 SECRET_LOCK_PROVIDED value
     * @property {number} APPROVED=3 APPROVED value
     * @property {number} CLOSED=4 CLOSED value
     * @property {number} EXPIRED=5 EXPIRED value
     */
    AtomicSwapInfo.State = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EMPTY"] = 0;
        values[valuesById[1] = "OPENED"] = 1;
        values[valuesById[2] = "SECRET_LOCK_PROVIDED"] = 2;
        values[valuesById[3] = "APPROVED"] = 3;
        values[valuesById[4] = "CLOSED"] = 4;
        values[valuesById[5] = "EXPIRED"] = 5;
        return values;
    })();

    return AtomicSwapInfo;
})();

$root.BlockInfo = (function() {

    /**
     * Properties of a BlockInfo.
     * @exports IBlockInfo
     * @interface IBlockInfo
     * @property {number|Long|null} [blockNum] BlockInfo blockNum
     * @property {string|null} [previousBlockId] BlockInfo previousBlockId
     * @property {string|null} [signerPublicKey] BlockInfo signerPublicKey
     * @property {string|null} [headerSignature] BlockInfo headerSignature
     * @property {number|Long|null} [timestamp] BlockInfo timestamp
     */

    /**
     * Constructs a new BlockInfo.
     * @exports BlockInfo
     * @classdesc Represents a BlockInfo.
     * @implements IBlockInfo
     * @constructor
     * @param {IBlockInfo=} [properties] Properties to set
     */
    function BlockInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BlockInfo blockNum.
     * @member {number|Long} blockNum
     * @memberof BlockInfo
     * @instance
     */
    BlockInfo.prototype.blockNum = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * BlockInfo previousBlockId.
     * @member {string} previousBlockId
     * @memberof BlockInfo
     * @instance
     */
    BlockInfo.prototype.previousBlockId = "";

    /**
     * BlockInfo signerPublicKey.
     * @member {string} signerPublicKey
     * @memberof BlockInfo
     * @instance
     */
    BlockInfo.prototype.signerPublicKey = "";

    /**
     * BlockInfo headerSignature.
     * @member {string} headerSignature
     * @memberof BlockInfo
     * @instance
     */
    BlockInfo.prototype.headerSignature = "";

    /**
     * BlockInfo timestamp.
     * @member {number|Long} timestamp
     * @memberof BlockInfo
     * @instance
     */
    BlockInfo.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new BlockInfo instance using the specified properties.
     * @function create
     * @memberof BlockInfo
     * @static
     * @param {IBlockInfo=} [properties] Properties to set
     * @returns {BlockInfo} BlockInfo instance
     */
    BlockInfo.create = function create(properties) {
        return new BlockInfo(properties);
    };

    /**
     * Encodes the specified BlockInfo message. Does not implicitly {@link BlockInfo.verify|verify} messages.
     * @function encode
     * @memberof BlockInfo
     * @static
     * @param {IBlockInfo} message BlockInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BlockInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.blockNum != null && message.hasOwnProperty("blockNum"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.blockNum);
        if (message.previousBlockId != null && message.hasOwnProperty("previousBlockId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.previousBlockId);
        if (message.signerPublicKey != null && message.hasOwnProperty("signerPublicKey"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.signerPublicKey);
        if (message.headerSignature != null && message.hasOwnProperty("headerSignature"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.headerSignature);
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.timestamp);
        return writer;
    };

    /**
     * Encodes the specified BlockInfo message, length delimited. Does not implicitly {@link BlockInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BlockInfo
     * @static
     * @param {IBlockInfo} message BlockInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BlockInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BlockInfo message from the specified reader or buffer.
     * @function decode
     * @memberof BlockInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BlockInfo} BlockInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BlockInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BlockInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.blockNum = reader.uint64();
                break;
            case 2:
                message.previousBlockId = reader.string();
                break;
            case 3:
                message.signerPublicKey = reader.string();
                break;
            case 4:
                message.headerSignature = reader.string();
                break;
            case 5:
                message.timestamp = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BlockInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BlockInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BlockInfo} BlockInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BlockInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BlockInfo message.
     * @function verify
     * @memberof BlockInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BlockInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.blockNum != null && message.hasOwnProperty("blockNum"))
            if (!$util.isInteger(message.blockNum) && !(message.blockNum && $util.isInteger(message.blockNum.low) && $util.isInteger(message.blockNum.high)))
                return "blockNum: integer|Long expected";
        if (message.previousBlockId != null && message.hasOwnProperty("previousBlockId"))
            if (!$util.isString(message.previousBlockId))
                return "previousBlockId: string expected";
        if (message.signerPublicKey != null && message.hasOwnProperty("signerPublicKey"))
            if (!$util.isString(message.signerPublicKey))
                return "signerPublicKey: string expected";
        if (message.headerSignature != null && message.hasOwnProperty("headerSignature"))
            if (!$util.isString(message.headerSignature))
                return "headerSignature: string expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                return "timestamp: integer|Long expected";
        return null;
    };

    /**
     * Creates a BlockInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BlockInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BlockInfo} BlockInfo
     */
    BlockInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.BlockInfo)
            return object;
        var message = new $root.BlockInfo();
        if (object.blockNum != null)
            if ($util.Long)
                (message.blockNum = $util.Long.fromValue(object.blockNum)).unsigned = true;
            else if (typeof object.blockNum === "string")
                message.blockNum = parseInt(object.blockNum, 10);
            else if (typeof object.blockNum === "number")
                message.blockNum = object.blockNum;
            else if (typeof object.blockNum === "object")
                message.blockNum = new $util.LongBits(object.blockNum.low >>> 0, object.blockNum.high >>> 0).toNumber(true);
        if (object.previousBlockId != null)
            message.previousBlockId = String(object.previousBlockId);
        if (object.signerPublicKey != null)
            message.signerPublicKey = String(object.signerPublicKey);
        if (object.headerSignature != null)
            message.headerSignature = String(object.headerSignature);
        if (object.timestamp != null)
            if ($util.Long)
                (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
            else if (typeof object.timestamp === "string")
                message.timestamp = parseInt(object.timestamp, 10);
            else if (typeof object.timestamp === "number")
                message.timestamp = object.timestamp;
            else if (typeof object.timestamp === "object")
                message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a BlockInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BlockInfo
     * @static
     * @param {BlockInfo} message BlockInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BlockInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.blockNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.blockNum = options.longs === String ? "0" : 0;
            object.previousBlockId = "";
            object.signerPublicKey = "";
            object.headerSignature = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestamp = options.longs === String ? "0" : 0;
        }
        if (message.blockNum != null && message.hasOwnProperty("blockNum"))
            if (typeof message.blockNum === "number")
                object.blockNum = options.longs === String ? String(message.blockNum) : message.blockNum;
            else
                object.blockNum = options.longs === String ? $util.Long.prototype.toString.call(message.blockNum) : options.longs === Number ? new $util.LongBits(message.blockNum.low >>> 0, message.blockNum.high >>> 0).toNumber(true) : message.blockNum;
        if (message.previousBlockId != null && message.hasOwnProperty("previousBlockId"))
            object.previousBlockId = message.previousBlockId;
        if (message.signerPublicKey != null && message.hasOwnProperty("signerPublicKey"))
            object.signerPublicKey = message.signerPublicKey;
        if (message.headerSignature != null && message.hasOwnProperty("headerSignature"))
            object.headerSignature = message.headerSignature;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (typeof message.timestamp === "number")
                object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
            else
                object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
        return object;
    };

    /**
     * Converts this BlockInfo to JSON.
     * @function toJSON
     * @memberof BlockInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BlockInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BlockInfo;
})();

$root.BlockInfoConfig = (function() {

    /**
     * Properties of a BlockInfoConfig.
     * @exports IBlockInfoConfig
     * @interface IBlockInfoConfig
     * @property {number|Long|null} [latestBlock] BlockInfoConfig latestBlock
     * @property {number|Long|null} [oldestBlock] BlockInfoConfig oldestBlock
     * @property {number|Long|null} [targetCount] BlockInfoConfig targetCount
     * @property {number|Long|null} [syncTolerance] BlockInfoConfig syncTolerance
     */

    /**
     * Constructs a new BlockInfoConfig.
     * @exports BlockInfoConfig
     * @classdesc Represents a BlockInfoConfig.
     * @implements IBlockInfoConfig
     * @constructor
     * @param {IBlockInfoConfig=} [properties] Properties to set
     */
    function BlockInfoConfig(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BlockInfoConfig latestBlock.
     * @member {number|Long} latestBlock
     * @memberof BlockInfoConfig
     * @instance
     */
    BlockInfoConfig.prototype.latestBlock = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * BlockInfoConfig oldestBlock.
     * @member {number|Long} oldestBlock
     * @memberof BlockInfoConfig
     * @instance
     */
    BlockInfoConfig.prototype.oldestBlock = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * BlockInfoConfig targetCount.
     * @member {number|Long} targetCount
     * @memberof BlockInfoConfig
     * @instance
     */
    BlockInfoConfig.prototype.targetCount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * BlockInfoConfig syncTolerance.
     * @member {number|Long} syncTolerance
     * @memberof BlockInfoConfig
     * @instance
     */
    BlockInfoConfig.prototype.syncTolerance = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new BlockInfoConfig instance using the specified properties.
     * @function create
     * @memberof BlockInfoConfig
     * @static
     * @param {IBlockInfoConfig=} [properties] Properties to set
     * @returns {BlockInfoConfig} BlockInfoConfig instance
     */
    BlockInfoConfig.create = function create(properties) {
        return new BlockInfoConfig(properties);
    };

    /**
     * Encodes the specified BlockInfoConfig message. Does not implicitly {@link BlockInfoConfig.verify|verify} messages.
     * @function encode
     * @memberof BlockInfoConfig
     * @static
     * @param {IBlockInfoConfig} message BlockInfoConfig message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BlockInfoConfig.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.latestBlock != null && message.hasOwnProperty("latestBlock"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.latestBlock);
        if (message.oldestBlock != null && message.hasOwnProperty("oldestBlock"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.oldestBlock);
        if (message.targetCount != null && message.hasOwnProperty("targetCount"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.targetCount);
        if (message.syncTolerance != null && message.hasOwnProperty("syncTolerance"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.syncTolerance);
        return writer;
    };

    /**
     * Encodes the specified BlockInfoConfig message, length delimited. Does not implicitly {@link BlockInfoConfig.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BlockInfoConfig
     * @static
     * @param {IBlockInfoConfig} message BlockInfoConfig message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BlockInfoConfig.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BlockInfoConfig message from the specified reader or buffer.
     * @function decode
     * @memberof BlockInfoConfig
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BlockInfoConfig} BlockInfoConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BlockInfoConfig.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.BlockInfoConfig();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.latestBlock = reader.uint64();
                break;
            case 2:
                message.oldestBlock = reader.uint64();
                break;
            case 3:
                message.targetCount = reader.uint64();
                break;
            case 4:
                message.syncTolerance = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BlockInfoConfig message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BlockInfoConfig
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BlockInfoConfig} BlockInfoConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BlockInfoConfig.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BlockInfoConfig message.
     * @function verify
     * @memberof BlockInfoConfig
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BlockInfoConfig.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.latestBlock != null && message.hasOwnProperty("latestBlock"))
            if (!$util.isInteger(message.latestBlock) && !(message.latestBlock && $util.isInteger(message.latestBlock.low) && $util.isInteger(message.latestBlock.high)))
                return "latestBlock: integer|Long expected";
        if (message.oldestBlock != null && message.hasOwnProperty("oldestBlock"))
            if (!$util.isInteger(message.oldestBlock) && !(message.oldestBlock && $util.isInteger(message.oldestBlock.low) && $util.isInteger(message.oldestBlock.high)))
                return "oldestBlock: integer|Long expected";
        if (message.targetCount != null && message.hasOwnProperty("targetCount"))
            if (!$util.isInteger(message.targetCount) && !(message.targetCount && $util.isInteger(message.targetCount.low) && $util.isInteger(message.targetCount.high)))
                return "targetCount: integer|Long expected";
        if (message.syncTolerance != null && message.hasOwnProperty("syncTolerance"))
            if (!$util.isInteger(message.syncTolerance) && !(message.syncTolerance && $util.isInteger(message.syncTolerance.low) && $util.isInteger(message.syncTolerance.high)))
                return "syncTolerance: integer|Long expected";
        return null;
    };

    /**
     * Creates a BlockInfoConfig message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BlockInfoConfig
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BlockInfoConfig} BlockInfoConfig
     */
    BlockInfoConfig.fromObject = function fromObject(object) {
        if (object instanceof $root.BlockInfoConfig)
            return object;
        var message = new $root.BlockInfoConfig();
        if (object.latestBlock != null)
            if ($util.Long)
                (message.latestBlock = $util.Long.fromValue(object.latestBlock)).unsigned = true;
            else if (typeof object.latestBlock === "string")
                message.latestBlock = parseInt(object.latestBlock, 10);
            else if (typeof object.latestBlock === "number")
                message.latestBlock = object.latestBlock;
            else if (typeof object.latestBlock === "object")
                message.latestBlock = new $util.LongBits(object.latestBlock.low >>> 0, object.latestBlock.high >>> 0).toNumber(true);
        if (object.oldestBlock != null)
            if ($util.Long)
                (message.oldestBlock = $util.Long.fromValue(object.oldestBlock)).unsigned = true;
            else if (typeof object.oldestBlock === "string")
                message.oldestBlock = parseInt(object.oldestBlock, 10);
            else if (typeof object.oldestBlock === "number")
                message.oldestBlock = object.oldestBlock;
            else if (typeof object.oldestBlock === "object")
                message.oldestBlock = new $util.LongBits(object.oldestBlock.low >>> 0, object.oldestBlock.high >>> 0).toNumber(true);
        if (object.targetCount != null)
            if ($util.Long)
                (message.targetCount = $util.Long.fromValue(object.targetCount)).unsigned = true;
            else if (typeof object.targetCount === "string")
                message.targetCount = parseInt(object.targetCount, 10);
            else if (typeof object.targetCount === "number")
                message.targetCount = object.targetCount;
            else if (typeof object.targetCount === "object")
                message.targetCount = new $util.LongBits(object.targetCount.low >>> 0, object.targetCount.high >>> 0).toNumber(true);
        if (object.syncTolerance != null)
            if ($util.Long)
                (message.syncTolerance = $util.Long.fromValue(object.syncTolerance)).unsigned = true;
            else if (typeof object.syncTolerance === "string")
                message.syncTolerance = parseInt(object.syncTolerance, 10);
            else if (typeof object.syncTolerance === "number")
                message.syncTolerance = object.syncTolerance;
            else if (typeof object.syncTolerance === "object")
                message.syncTolerance = new $util.LongBits(object.syncTolerance.low >>> 0, object.syncTolerance.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a BlockInfoConfig message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BlockInfoConfig
     * @static
     * @param {BlockInfoConfig} message BlockInfoConfig
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BlockInfoConfig.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.latestBlock = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.latestBlock = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.oldestBlock = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.oldestBlock = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.targetCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.targetCount = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.syncTolerance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.syncTolerance = options.longs === String ? "0" : 0;
        }
        if (message.latestBlock != null && message.hasOwnProperty("latestBlock"))
            if (typeof message.latestBlock === "number")
                object.latestBlock = options.longs === String ? String(message.latestBlock) : message.latestBlock;
            else
                object.latestBlock = options.longs === String ? $util.Long.prototype.toString.call(message.latestBlock) : options.longs === Number ? new $util.LongBits(message.latestBlock.low >>> 0, message.latestBlock.high >>> 0).toNumber(true) : message.latestBlock;
        if (message.oldestBlock != null && message.hasOwnProperty("oldestBlock"))
            if (typeof message.oldestBlock === "number")
                object.oldestBlock = options.longs === String ? String(message.oldestBlock) : message.oldestBlock;
            else
                object.oldestBlock = options.longs === String ? $util.Long.prototype.toString.call(message.oldestBlock) : options.longs === Number ? new $util.LongBits(message.oldestBlock.low >>> 0, message.oldestBlock.high >>> 0).toNumber(true) : message.oldestBlock;
        if (message.targetCount != null && message.hasOwnProperty("targetCount"))
            if (typeof message.targetCount === "number")
                object.targetCount = options.longs === String ? String(message.targetCount) : message.targetCount;
            else
                object.targetCount = options.longs === String ? $util.Long.prototype.toString.call(message.targetCount) : options.longs === Number ? new $util.LongBits(message.targetCount.low >>> 0, message.targetCount.high >>> 0).toNumber(true) : message.targetCount;
        if (message.syncTolerance != null && message.hasOwnProperty("syncTolerance"))
            if (typeof message.syncTolerance === "number")
                object.syncTolerance = options.longs === String ? String(message.syncTolerance) : message.syncTolerance;
            else
                object.syncTolerance = options.longs === String ? $util.Long.prototype.toString.call(message.syncTolerance) : options.longs === Number ? new $util.LongBits(message.syncTolerance.low >>> 0, message.syncTolerance.high >>> 0).toNumber(true) : message.syncTolerance;
        return object;
    };

    /**
     * Converts this BlockInfoConfig to JSON.
     * @function toJSON
     * @memberof BlockInfoConfig
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BlockInfoConfig.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BlockInfoConfig;
})();

$root.ClientSealRequest = (function() {

    /**
     * Properties of a ClientSealRequest.
     * @exports IClientSealRequest
     * @interface IClientSealRequest
     */

    /**
     * Constructs a new ClientSealRequest.
     * @exports ClientSealRequest
     * @classdesc Represents a ClientSealRequest.
     * @implements IClientSealRequest
     * @constructor
     * @param {IClientSealRequest=} [properties] Properties to set
     */
    function ClientSealRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new ClientSealRequest instance using the specified properties.
     * @function create
     * @memberof ClientSealRequest
     * @static
     * @param {IClientSealRequest=} [properties] Properties to set
     * @returns {ClientSealRequest} ClientSealRequest instance
     */
    ClientSealRequest.create = function create(properties) {
        return new ClientSealRequest(properties);
    };

    /**
     * Encodes the specified ClientSealRequest message. Does not implicitly {@link ClientSealRequest.verify|verify} messages.
     * @function encode
     * @memberof ClientSealRequest
     * @static
     * @param {IClientSealRequest} message ClientSealRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientSealRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified ClientSealRequest message, length delimited. Does not implicitly {@link ClientSealRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClientSealRequest
     * @static
     * @param {IClientSealRequest} message ClientSealRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientSealRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClientSealRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ClientSealRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClientSealRequest} ClientSealRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientSealRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientSealRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ClientSealRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClientSealRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClientSealRequest} ClientSealRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientSealRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClientSealRequest message.
     * @function verify
     * @memberof ClientSealRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClientSealRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a ClientSealRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClientSealRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClientSealRequest} ClientSealRequest
     */
    ClientSealRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ClientSealRequest)
            return object;
        return new $root.ClientSealRequest();
    };

    /**
     * Creates a plain object from a ClientSealRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClientSealRequest
     * @static
     * @param {ClientSealRequest} message ClientSealRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClientSealRequest.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this ClientSealRequest to JSON.
     * @function toJSON
     * @memberof ClientSealRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClientSealRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ClientSealRequest;
})();

$root.ClientSealResponse = (function() {

    /**
     * Properties of a ClientSealResponse.
     * @exports IClientSealResponse
     * @interface IClientSealResponse
     * @property {ClientSealResponse.Status|null} [status] ClientSealResponse status
     * @property {Array.<ISignedConsensusMessage>|null} [certVotes] ClientSealResponse certVotes
     */

    /**
     * Constructs a new ClientSealResponse.
     * @exports ClientSealResponse
     * @classdesc Represents a ClientSealResponse.
     * @implements IClientSealResponse
     * @constructor
     * @param {IClientSealResponse=} [properties] Properties to set
     */
    function ClientSealResponse(properties) {
        this.certVotes = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClientSealResponse status.
     * @member {ClientSealResponse.Status} status
     * @memberof ClientSealResponse
     * @instance
     */
    ClientSealResponse.prototype.status = 0;

    /**
     * ClientSealResponse certVotes.
     * @member {Array.<ISignedConsensusMessage>} certVotes
     * @memberof ClientSealResponse
     * @instance
     */
    ClientSealResponse.prototype.certVotes = $util.emptyArray;

    /**
     * Creates a new ClientSealResponse instance using the specified properties.
     * @function create
     * @memberof ClientSealResponse
     * @static
     * @param {IClientSealResponse=} [properties] Properties to set
     * @returns {ClientSealResponse} ClientSealResponse instance
     */
    ClientSealResponse.create = function create(properties) {
        return new ClientSealResponse(properties);
    };

    /**
     * Encodes the specified ClientSealResponse message. Does not implicitly {@link ClientSealResponse.verify|verify} messages.
     * @function encode
     * @memberof ClientSealResponse
     * @static
     * @param {IClientSealResponse} message ClientSealResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientSealResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && message.hasOwnProperty("status"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
        if (message.certVotes != null && message.certVotes.length)
            for (var i = 0; i < message.certVotes.length; ++i)
                $root.SignedConsensusMessage.encode(message.certVotes[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ClientSealResponse message, length delimited. Does not implicitly {@link ClientSealResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClientSealResponse
     * @static
     * @param {IClientSealResponse} message ClientSealResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientSealResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClientSealResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ClientSealResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClientSealResponse} ClientSealResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientSealResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientSealResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.status = reader.int32();
                break;
            case 2:
                if (!(message.certVotes && message.certVotes.length))
                    message.certVotes = [];
                message.certVotes.push($root.SignedConsensusMessage.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ClientSealResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClientSealResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClientSealResponse} ClientSealResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientSealResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClientSealResponse message.
     * @function verify
     * @memberof ClientSealResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClientSealResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            switch (message.status) {
            default:
                return "status: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.certVotes != null && message.hasOwnProperty("certVotes")) {
            if (!Array.isArray(message.certVotes))
                return "certVotes: array expected";
            for (var i = 0; i < message.certVotes.length; ++i) {
                var error = $root.SignedConsensusMessage.verify(message.certVotes[i]);
                if (error)
                    return "certVotes." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ClientSealResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClientSealResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClientSealResponse} ClientSealResponse
     */
    ClientSealResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ClientSealResponse)
            return object;
        var message = new $root.ClientSealResponse();
        switch (object.status) {
        case "OK":
        case 0:
            message.status = 0;
            break;
        case "INTERNAL_ERROR":
        case 1:
            message.status = 1;
            break;
        case "NO_RESOURCE":
        case 2:
            message.status = 2;
            break;
        }
        if (object.certVotes) {
            if (!Array.isArray(object.certVotes))
                throw TypeError(".ClientSealResponse.certVotes: array expected");
            message.certVotes = [];
            for (var i = 0; i < object.certVotes.length; ++i) {
                if (typeof object.certVotes[i] !== "object")
                    throw TypeError(".ClientSealResponse.certVotes: object expected");
                message.certVotes[i] = $root.SignedConsensusMessage.fromObject(object.certVotes[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a ClientSealResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClientSealResponse
     * @static
     * @param {ClientSealResponse} message ClientSealResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClientSealResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.certVotes = [];
        if (options.defaults)
            object.status = options.enums === String ? "OK" : 0;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = options.enums === String ? $root.ClientSealResponse.Status[message.status] : message.status;
        if (message.certVotes && message.certVotes.length) {
            object.certVotes = [];
            for (var j = 0; j < message.certVotes.length; ++j)
                object.certVotes[j] = $root.SignedConsensusMessage.toObject(message.certVotes[j], options);
        }
        return object;
    };

    /**
     * Converts this ClientSealResponse to JSON.
     * @function toJSON
     * @memberof ClientSealResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClientSealResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Status enum.
     * @name ClientSealResponse.Status
     * @enum {string}
     * @property {number} OK=0 OK value
     * @property {number} INTERNAL_ERROR=1 INTERNAL_ERROR value
     * @property {number} NO_RESOURCE=2 NO_RESOURCE value
     */
    ClientSealResponse.Status = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OK"] = 0;
        values[valuesById[1] = "INTERNAL_ERROR"] = 1;
        values[valuesById[2] = "NO_RESOURCE"] = 2;
        return values;
    })();

    return ClientSealResponse;
})();

$root.ConsensusMessagePayload = (function() {

    /**
     * Properties of a ConsensusMessagePayload.
     * @exports IConsensusMessagePayload
     * @interface IConsensusMessagePayload
     * @property {number|Long|null} [period] ConsensusMessagePayload period
     * @property {Uint8Array|null} [proposalId] ConsensusMessagePayload proposalId
     * @property {Uint8Array|null} [voterId] ConsensusMessagePayload voterId
     */

    /**
     * Constructs a new ConsensusMessagePayload.
     * @exports ConsensusMessagePayload
     * @classdesc Represents a ConsensusMessagePayload.
     * @implements IConsensusMessagePayload
     * @constructor
     * @param {IConsensusMessagePayload=} [properties] Properties to set
     */
    function ConsensusMessagePayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ConsensusMessagePayload period.
     * @member {number|Long} period
     * @memberof ConsensusMessagePayload
     * @instance
     */
    ConsensusMessagePayload.prototype.period = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * ConsensusMessagePayload proposalId.
     * @member {Uint8Array} proposalId
     * @memberof ConsensusMessagePayload
     * @instance
     */
    ConsensusMessagePayload.prototype.proposalId = $util.newBuffer([]);

    /**
     * ConsensusMessagePayload voterId.
     * @member {Uint8Array} voterId
     * @memberof ConsensusMessagePayload
     * @instance
     */
    ConsensusMessagePayload.prototype.voterId = $util.newBuffer([]);

    /**
     * Creates a new ConsensusMessagePayload instance using the specified properties.
     * @function create
     * @memberof ConsensusMessagePayload
     * @static
     * @param {IConsensusMessagePayload=} [properties] Properties to set
     * @returns {ConsensusMessagePayload} ConsensusMessagePayload instance
     */
    ConsensusMessagePayload.create = function create(properties) {
        return new ConsensusMessagePayload(properties);
    };

    /**
     * Encodes the specified ConsensusMessagePayload message. Does not implicitly {@link ConsensusMessagePayload.verify|verify} messages.
     * @function encode
     * @memberof ConsensusMessagePayload
     * @static
     * @param {IConsensusMessagePayload} message ConsensusMessagePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConsensusMessagePayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.period != null && message.hasOwnProperty("period"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.period);
        if (message.proposalId != null && message.hasOwnProperty("proposalId"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.proposalId);
        if (message.voterId != null && message.hasOwnProperty("voterId"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.voterId);
        return writer;
    };

    /**
     * Encodes the specified ConsensusMessagePayload message, length delimited. Does not implicitly {@link ConsensusMessagePayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ConsensusMessagePayload
     * @static
     * @param {IConsensusMessagePayload} message ConsensusMessagePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConsensusMessagePayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ConsensusMessagePayload message from the specified reader or buffer.
     * @function decode
     * @memberof ConsensusMessagePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ConsensusMessagePayload} ConsensusMessagePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConsensusMessagePayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ConsensusMessagePayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.period = reader.uint64();
                break;
            case 2:
                message.proposalId = reader.bytes();
                break;
            case 3:
                message.voterId = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ConsensusMessagePayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ConsensusMessagePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ConsensusMessagePayload} ConsensusMessagePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConsensusMessagePayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ConsensusMessagePayload message.
     * @function verify
     * @memberof ConsensusMessagePayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ConsensusMessagePayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.period != null && message.hasOwnProperty("period"))
            if (!$util.isInteger(message.period) && !(message.period && $util.isInteger(message.period.low) && $util.isInteger(message.period.high)))
                return "period: integer|Long expected";
        if (message.proposalId != null && message.hasOwnProperty("proposalId"))
            if (!(message.proposalId && typeof message.proposalId.length === "number" || $util.isString(message.proposalId)))
                return "proposalId: buffer expected";
        if (message.voterId != null && message.hasOwnProperty("voterId"))
            if (!(message.voterId && typeof message.voterId.length === "number" || $util.isString(message.voterId)))
                return "voterId: buffer expected";
        return null;
    };

    /**
     * Creates a ConsensusMessagePayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ConsensusMessagePayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ConsensusMessagePayload} ConsensusMessagePayload
     */
    ConsensusMessagePayload.fromObject = function fromObject(object) {
        if (object instanceof $root.ConsensusMessagePayload)
            return object;
        var message = new $root.ConsensusMessagePayload();
        if (object.period != null)
            if ($util.Long)
                (message.period = $util.Long.fromValue(object.period)).unsigned = true;
            else if (typeof object.period === "string")
                message.period = parseInt(object.period, 10);
            else if (typeof object.period === "number")
                message.period = object.period;
            else if (typeof object.period === "object")
                message.period = new $util.LongBits(object.period.low >>> 0, object.period.high >>> 0).toNumber(true);
        if (object.proposalId != null)
            if (typeof object.proposalId === "string")
                $util.base64.decode(object.proposalId, message.proposalId = $util.newBuffer($util.base64.length(object.proposalId)), 0);
            else if (object.proposalId.length)
                message.proposalId = object.proposalId;
        if (object.voterId != null)
            if (typeof object.voterId === "string")
                $util.base64.decode(object.voterId, message.voterId = $util.newBuffer($util.base64.length(object.voterId)), 0);
            else if (object.voterId.length)
                message.voterId = object.voterId;
        return message;
    };

    /**
     * Creates a plain object from a ConsensusMessagePayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ConsensusMessagePayload
     * @static
     * @param {ConsensusMessagePayload} message ConsensusMessagePayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ConsensusMessagePayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.period = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.period = options.longs === String ? "0" : 0;
            object.proposalId = options.bytes === String ? "" : [];
            object.voterId = options.bytes === String ? "" : [];
        }
        if (message.period != null && message.hasOwnProperty("period"))
            if (typeof message.period === "number")
                object.period = options.longs === String ? String(message.period) : message.period;
            else
                object.period = options.longs === String ? $util.Long.prototype.toString.call(message.period) : options.longs === Number ? new $util.LongBits(message.period.low >>> 0, message.period.high >>> 0).toNumber(true) : message.period;
        if (message.proposalId != null && message.hasOwnProperty("proposalId"))
            object.proposalId = options.bytes === String ? $util.base64.encode(message.proposalId, 0, message.proposalId.length) : options.bytes === Array ? Array.prototype.slice.call(message.proposalId) : message.proposalId;
        if (message.voterId != null && message.hasOwnProperty("voterId"))
            object.voterId = options.bytes === String ? $util.base64.encode(message.voterId, 0, message.voterId.length) : options.bytes === Array ? Array.prototype.slice.call(message.voterId) : message.voterId;
        return object;
    };

    /**
     * Converts this ConsensusMessagePayload to JSON.
     * @function toJSON
     * @memberof ConsensusMessagePayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ConsensusMessagePayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ConsensusMessagePayload;
})();

$root.ConsensusMessage = (function() {

    /**
     * Properties of a ConsensusMessage.
     * @exports IConsensusMessage
     * @interface IConsensusMessage
     * @property {ConsensusMessage.Type|null} [type] ConsensusMessage type
     * @property {IConsensusMessagePayload|null} [payload] ConsensusMessage payload
     */

    /**
     * Constructs a new ConsensusMessage.
     * @exports ConsensusMessage
     * @classdesc Represents a ConsensusMessage.
     * @implements IConsensusMessage
     * @constructor
     * @param {IConsensusMessage=} [properties] Properties to set
     */
    function ConsensusMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ConsensusMessage type.
     * @member {ConsensusMessage.Type} type
     * @memberof ConsensusMessage
     * @instance
     */
    ConsensusMessage.prototype.type = 0;

    /**
     * ConsensusMessage payload.
     * @member {IConsensusMessagePayload|null|undefined} payload
     * @memberof ConsensusMessage
     * @instance
     */
    ConsensusMessage.prototype.payload = null;

    /**
     * Creates a new ConsensusMessage instance using the specified properties.
     * @function create
     * @memberof ConsensusMessage
     * @static
     * @param {IConsensusMessage=} [properties] Properties to set
     * @returns {ConsensusMessage} ConsensusMessage instance
     */
    ConsensusMessage.create = function create(properties) {
        return new ConsensusMessage(properties);
    };

    /**
     * Encodes the specified ConsensusMessage message. Does not implicitly {@link ConsensusMessage.verify|verify} messages.
     * @function encode
     * @memberof ConsensusMessage
     * @static
     * @param {IConsensusMessage} message ConsensusMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConsensusMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && message.hasOwnProperty("type"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        if (message.payload != null && message.hasOwnProperty("payload"))
            $root.ConsensusMessagePayload.encode(message.payload, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ConsensusMessage message, length delimited. Does not implicitly {@link ConsensusMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ConsensusMessage
     * @static
     * @param {IConsensusMessage} message ConsensusMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConsensusMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ConsensusMessage message from the specified reader or buffer.
     * @function decode
     * @memberof ConsensusMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ConsensusMessage} ConsensusMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConsensusMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ConsensusMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            case 2:
                message.payload = $root.ConsensusMessagePayload.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ConsensusMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ConsensusMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ConsensusMessage} ConsensusMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConsensusMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ConsensusMessage message.
     * @function verify
     * @memberof ConsensusMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ConsensusMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
        if (message.payload != null && message.hasOwnProperty("payload")) {
            var error = $root.ConsensusMessagePayload.verify(message.payload);
            if (error)
                return "payload." + error;
        }
        return null;
    };

    /**
     * Creates a ConsensusMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ConsensusMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ConsensusMessage} ConsensusMessage
     */
    ConsensusMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.ConsensusMessage)
            return object;
        var message = new $root.ConsensusMessage();
        switch (object.type) {
        case "VALUE_PROPOSAL":
        case 0:
            message.type = 0;
            break;
        case "SOFT_VOTE":
        case 1:
            message.type = 1;
            break;
        case "CERT_VOTE":
        case 2:
            message.type = 2;
            break;
        case "NEXT_VOTE":
        case 3:
            message.type = 3;
            break;
        }
        if (object.payload != null) {
            if (typeof object.payload !== "object")
                throw TypeError(".ConsensusMessage.payload: object expected");
            message.payload = $root.ConsensusMessagePayload.fromObject(object.payload);
        }
        return message;
    };

    /**
     * Creates a plain object from a ConsensusMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ConsensusMessage
     * @static
     * @param {ConsensusMessage} message ConsensusMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ConsensusMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.type = options.enums === String ? "VALUE_PROPOSAL" : 0;
            object.payload = null;
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.ConsensusMessage.Type[message.type] : message.type;
        if (message.payload != null && message.hasOwnProperty("payload"))
            object.payload = $root.ConsensusMessagePayload.toObject(message.payload, options);
        return object;
    };

    /**
     * Converts this ConsensusMessage to JSON.
     * @function toJSON
     * @memberof ConsensusMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ConsensusMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Type enum.
     * @name ConsensusMessage.Type
     * @enum {string}
     * @property {number} VALUE_PROPOSAL=0 VALUE_PROPOSAL value
     * @property {number} SOFT_VOTE=1 SOFT_VOTE value
     * @property {number} CERT_VOTE=2 CERT_VOTE value
     * @property {number} NEXT_VOTE=3 NEXT_VOTE value
     */
    ConsensusMessage.Type = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "VALUE_PROPOSAL"] = 0;
        values[valuesById[1] = "SOFT_VOTE"] = 1;
        values[valuesById[2] = "CERT_VOTE"] = 2;
        values[valuesById[3] = "NEXT_VOTE"] = 3;
        return values;
    })();

    return ConsensusMessage;
})();

$root.SignedConsensusMessage = (function() {

    /**
     * Properties of a SignedConsensusMessage.
     * @exports ISignedConsensusMessage
     * @interface ISignedConsensusMessage
     * @property {Uint8Array|null} [messageSignature] SignedConsensusMessage messageSignature
     * @property {IConsensusMessage|null} [message] SignedConsensusMessage message
     */

    /**
     * Constructs a new SignedConsensusMessage.
     * @exports SignedConsensusMessage
     * @classdesc Represents a SignedConsensusMessage.
     * @implements ISignedConsensusMessage
     * @constructor
     * @param {ISignedConsensusMessage=} [properties] Properties to set
     */
    function SignedConsensusMessage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SignedConsensusMessage messageSignature.
     * @member {Uint8Array} messageSignature
     * @memberof SignedConsensusMessage
     * @instance
     */
    SignedConsensusMessage.prototype.messageSignature = $util.newBuffer([]);

    /**
     * SignedConsensusMessage message.
     * @member {IConsensusMessage|null|undefined} message
     * @memberof SignedConsensusMessage
     * @instance
     */
    SignedConsensusMessage.prototype.message = null;

    /**
     * Creates a new SignedConsensusMessage instance using the specified properties.
     * @function create
     * @memberof SignedConsensusMessage
     * @static
     * @param {ISignedConsensusMessage=} [properties] Properties to set
     * @returns {SignedConsensusMessage} SignedConsensusMessage instance
     */
    SignedConsensusMessage.create = function create(properties) {
        return new SignedConsensusMessage(properties);
    };

    /**
     * Encodes the specified SignedConsensusMessage message. Does not implicitly {@link SignedConsensusMessage.verify|verify} messages.
     * @function encode
     * @memberof SignedConsensusMessage
     * @static
     * @param {ISignedConsensusMessage} message SignedConsensusMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SignedConsensusMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.messageSignature != null && message.hasOwnProperty("messageSignature"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.messageSignature);
        if (message.message != null && message.hasOwnProperty("message"))
            $root.ConsensusMessage.encode(message.message, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SignedConsensusMessage message, length delimited. Does not implicitly {@link SignedConsensusMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SignedConsensusMessage
     * @static
     * @param {ISignedConsensusMessage} message SignedConsensusMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SignedConsensusMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SignedConsensusMessage message from the specified reader or buffer.
     * @function decode
     * @memberof SignedConsensusMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SignedConsensusMessage} SignedConsensusMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SignedConsensusMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SignedConsensusMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.messageSignature = reader.bytes();
                break;
            case 2:
                message.message = $root.ConsensusMessage.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SignedConsensusMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SignedConsensusMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SignedConsensusMessage} SignedConsensusMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SignedConsensusMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SignedConsensusMessage message.
     * @function verify
     * @memberof SignedConsensusMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SignedConsensusMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.messageSignature != null && message.hasOwnProperty("messageSignature"))
            if (!(message.messageSignature && typeof message.messageSignature.length === "number" || $util.isString(message.messageSignature)))
                return "messageSignature: buffer expected";
        if (message.message != null && message.hasOwnProperty("message")) {
            var error = $root.ConsensusMessage.verify(message.message);
            if (error)
                return "message." + error;
        }
        return null;
    };

    /**
     * Creates a SignedConsensusMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SignedConsensusMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SignedConsensusMessage} SignedConsensusMessage
     */
    SignedConsensusMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.SignedConsensusMessage)
            return object;
        var message = new $root.SignedConsensusMessage();
        if (object.messageSignature != null)
            if (typeof object.messageSignature === "string")
                $util.base64.decode(object.messageSignature, message.messageSignature = $util.newBuffer($util.base64.length(object.messageSignature)), 0);
            else if (object.messageSignature.length)
                message.messageSignature = object.messageSignature;
        if (object.message != null) {
            if (typeof object.message !== "object")
                throw TypeError(".SignedConsensusMessage.message: object expected");
            message.message = $root.ConsensusMessage.fromObject(object.message);
        }
        return message;
    };

    /**
     * Creates a plain object from a SignedConsensusMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SignedConsensusMessage
     * @static
     * @param {SignedConsensusMessage} message SignedConsensusMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SignedConsensusMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.messageSignature = options.bytes === String ? "" : [];
            object.message = null;
        }
        if (message.messageSignature != null && message.hasOwnProperty("messageSignature"))
            object.messageSignature = options.bytes === String ? $util.base64.encode(message.messageSignature, 0, message.messageSignature.length) : options.bytes === Array ? Array.prototype.slice.call(message.messageSignature) : message.messageSignature;
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = $root.ConsensusMessage.toObject(message.message, options);
        return object;
    };

    /**
     * Converts this SignedConsensusMessage to JSON.
     * @function toJSON
     * @memberof SignedConsensusMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SignedConsensusMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SignedConsensusMessage;
})();

$root.ConsensusSeal = (function() {

    /**
     * Properties of a ConsensusSeal.
     * @exports IConsensusSeal
     * @interface IConsensusSeal
     * @property {Array.<ISignedConsensusMessage>|null} [previousCertVotes] ConsensusSeal previousCertVotes
     */

    /**
     * Constructs a new ConsensusSeal.
     * @exports ConsensusSeal
     * @classdesc Represents a ConsensusSeal.
     * @implements IConsensusSeal
     * @constructor
     * @param {IConsensusSeal=} [properties] Properties to set
     */
    function ConsensusSeal(properties) {
        this.previousCertVotes = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ConsensusSeal previousCertVotes.
     * @member {Array.<ISignedConsensusMessage>} previousCertVotes
     * @memberof ConsensusSeal
     * @instance
     */
    ConsensusSeal.prototype.previousCertVotes = $util.emptyArray;

    /**
     * Creates a new ConsensusSeal instance using the specified properties.
     * @function create
     * @memberof ConsensusSeal
     * @static
     * @param {IConsensusSeal=} [properties] Properties to set
     * @returns {ConsensusSeal} ConsensusSeal instance
     */
    ConsensusSeal.create = function create(properties) {
        return new ConsensusSeal(properties);
    };

    /**
     * Encodes the specified ConsensusSeal message. Does not implicitly {@link ConsensusSeal.verify|verify} messages.
     * @function encode
     * @memberof ConsensusSeal
     * @static
     * @param {IConsensusSeal} message ConsensusSeal message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConsensusSeal.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.previousCertVotes != null && message.previousCertVotes.length)
            for (var i = 0; i < message.previousCertVotes.length; ++i)
                $root.SignedConsensusMessage.encode(message.previousCertVotes[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ConsensusSeal message, length delimited. Does not implicitly {@link ConsensusSeal.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ConsensusSeal
     * @static
     * @param {IConsensusSeal} message ConsensusSeal message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConsensusSeal.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ConsensusSeal message from the specified reader or buffer.
     * @function decode
     * @memberof ConsensusSeal
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ConsensusSeal} ConsensusSeal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConsensusSeal.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ConsensusSeal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.previousCertVotes && message.previousCertVotes.length))
                    message.previousCertVotes = [];
                message.previousCertVotes.push($root.SignedConsensusMessage.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ConsensusSeal message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ConsensusSeal
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ConsensusSeal} ConsensusSeal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConsensusSeal.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ConsensusSeal message.
     * @function verify
     * @memberof ConsensusSeal
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ConsensusSeal.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.previousCertVotes != null && message.hasOwnProperty("previousCertVotes")) {
            if (!Array.isArray(message.previousCertVotes))
                return "previousCertVotes: array expected";
            for (var i = 0; i < message.previousCertVotes.length; ++i) {
                var error = $root.SignedConsensusMessage.verify(message.previousCertVotes[i]);
                if (error)
                    return "previousCertVotes." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ConsensusSeal message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ConsensusSeal
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ConsensusSeal} ConsensusSeal
     */
    ConsensusSeal.fromObject = function fromObject(object) {
        if (object instanceof $root.ConsensusSeal)
            return object;
        var message = new $root.ConsensusSeal();
        if (object.previousCertVotes) {
            if (!Array.isArray(object.previousCertVotes))
                throw TypeError(".ConsensusSeal.previousCertVotes: array expected");
            message.previousCertVotes = [];
            for (var i = 0; i < object.previousCertVotes.length; ++i) {
                if (typeof object.previousCertVotes[i] !== "object")
                    throw TypeError(".ConsensusSeal.previousCertVotes: object expected");
                message.previousCertVotes[i] = $root.SignedConsensusMessage.fromObject(object.previousCertVotes[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a ConsensusSeal message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ConsensusSeal
     * @static
     * @param {ConsensusSeal} message ConsensusSeal
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ConsensusSeal.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.previousCertVotes = [];
        if (message.previousCertVotes && message.previousCertVotes.length) {
            object.previousCertVotes = [];
            for (var j = 0; j < message.previousCertVotes.length; ++j)
                object.previousCertVotes[j] = $root.SignedConsensusMessage.toObject(message.previousCertVotes[j], options);
        }
        return object;
    };

    /**
     * Converts this ConsensusSeal to JSON.
     * @function toJSON
     * @memberof ConsensusSeal
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ConsensusSeal.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ConsensusSeal;
})();

$root.ConsensusSealRequest = (function() {

    /**
     * Properties of a ConsensusSealRequest.
     * @exports IConsensusSealRequest
     * @interface IConsensusSealRequest
     * @property {Uint8Array|null} [blockId] ConsensusSealRequest blockId
     */

    /**
     * Constructs a new ConsensusSealRequest.
     * @exports ConsensusSealRequest
     * @classdesc Represents a ConsensusSealRequest.
     * @implements IConsensusSealRequest
     * @constructor
     * @param {IConsensusSealRequest=} [properties] Properties to set
     */
    function ConsensusSealRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ConsensusSealRequest blockId.
     * @member {Uint8Array} blockId
     * @memberof ConsensusSealRequest
     * @instance
     */
    ConsensusSealRequest.prototype.blockId = $util.newBuffer([]);

    /**
     * Creates a new ConsensusSealRequest instance using the specified properties.
     * @function create
     * @memberof ConsensusSealRequest
     * @static
     * @param {IConsensusSealRequest=} [properties] Properties to set
     * @returns {ConsensusSealRequest} ConsensusSealRequest instance
     */
    ConsensusSealRequest.create = function create(properties) {
        return new ConsensusSealRequest(properties);
    };

    /**
     * Encodes the specified ConsensusSealRequest message. Does not implicitly {@link ConsensusSealRequest.verify|verify} messages.
     * @function encode
     * @memberof ConsensusSealRequest
     * @static
     * @param {IConsensusSealRequest} message ConsensusSealRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConsensusSealRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.blockId != null && message.hasOwnProperty("blockId"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.blockId);
        return writer;
    };

    /**
     * Encodes the specified ConsensusSealRequest message, length delimited. Does not implicitly {@link ConsensusSealRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ConsensusSealRequest
     * @static
     * @param {IConsensusSealRequest} message ConsensusSealRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConsensusSealRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ConsensusSealRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ConsensusSealRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ConsensusSealRequest} ConsensusSealRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConsensusSealRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ConsensusSealRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.blockId = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ConsensusSealRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ConsensusSealRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ConsensusSealRequest} ConsensusSealRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConsensusSealRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ConsensusSealRequest message.
     * @function verify
     * @memberof ConsensusSealRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ConsensusSealRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.blockId != null && message.hasOwnProperty("blockId"))
            if (!(message.blockId && typeof message.blockId.length === "number" || $util.isString(message.blockId)))
                return "blockId: buffer expected";
        return null;
    };

    /**
     * Creates a ConsensusSealRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ConsensusSealRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ConsensusSealRequest} ConsensusSealRequest
     */
    ConsensusSealRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ConsensusSealRequest)
            return object;
        var message = new $root.ConsensusSealRequest();
        if (object.blockId != null)
            if (typeof object.blockId === "string")
                $util.base64.decode(object.blockId, message.blockId = $util.newBuffer($util.base64.length(object.blockId)), 0);
            else if (object.blockId.length)
                message.blockId = object.blockId;
        return message;
    };

    /**
     * Creates a plain object from a ConsensusSealRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ConsensusSealRequest
     * @static
     * @param {ConsensusSealRequest} message ConsensusSealRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ConsensusSealRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.blockId = options.bytes === String ? "" : [];
        if (message.blockId != null && message.hasOwnProperty("blockId"))
            object.blockId = options.bytes === String ? $util.base64.encode(message.blockId, 0, message.blockId.length) : options.bytes === Array ? Array.prototype.slice.call(message.blockId) : message.blockId;
        return object;
    };

    /**
     * Converts this ConsensusSealRequest to JSON.
     * @function toJSON
     * @memberof ConsensusSealRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ConsensusSealRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ConsensusSealRequest;
})();

$root.ConsensusAccountMethod = (function() {

    /**
     * Properties of a ConsensusAccountMethod.
     * @exports IConsensusAccountMethod
     * @interface IConsensusAccountMethod
     */

    /**
     * Constructs a new ConsensusAccountMethod.
     * @exports ConsensusAccountMethod
     * @classdesc Represents a ConsensusAccountMethod.
     * @implements IConsensusAccountMethod
     * @constructor
     * @param {IConsensusAccountMethod=} [properties] Properties to set
     */
    function ConsensusAccountMethod(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new ConsensusAccountMethod instance using the specified properties.
     * @function create
     * @memberof ConsensusAccountMethod
     * @static
     * @param {IConsensusAccountMethod=} [properties] Properties to set
     * @returns {ConsensusAccountMethod} ConsensusAccountMethod instance
     */
    ConsensusAccountMethod.create = function create(properties) {
        return new ConsensusAccountMethod(properties);
    };

    /**
     * Encodes the specified ConsensusAccountMethod message. Does not implicitly {@link ConsensusAccountMethod.verify|verify} messages.
     * @function encode
     * @memberof ConsensusAccountMethod
     * @static
     * @param {IConsensusAccountMethod} message ConsensusAccountMethod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConsensusAccountMethod.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified ConsensusAccountMethod message, length delimited. Does not implicitly {@link ConsensusAccountMethod.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ConsensusAccountMethod
     * @static
     * @param {IConsensusAccountMethod} message ConsensusAccountMethod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConsensusAccountMethod.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ConsensusAccountMethod message from the specified reader or buffer.
     * @function decode
     * @memberof ConsensusAccountMethod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ConsensusAccountMethod} ConsensusAccountMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConsensusAccountMethod.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ConsensusAccountMethod();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ConsensusAccountMethod message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ConsensusAccountMethod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ConsensusAccountMethod} ConsensusAccountMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConsensusAccountMethod.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ConsensusAccountMethod message.
     * @function verify
     * @memberof ConsensusAccountMethod
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ConsensusAccountMethod.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a ConsensusAccountMethod message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ConsensusAccountMethod
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ConsensusAccountMethod} ConsensusAccountMethod
     */
    ConsensusAccountMethod.fromObject = function fromObject(object) {
        if (object instanceof $root.ConsensusAccountMethod)
            return object;
        return new $root.ConsensusAccountMethod();
    };

    /**
     * Creates a plain object from a ConsensusAccountMethod message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ConsensusAccountMethod
     * @static
     * @param {ConsensusAccountMethod} message ConsensusAccountMethod
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ConsensusAccountMethod.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this ConsensusAccountMethod to JSON.
     * @function toJSON
     * @memberof ConsensusAccountMethod
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ConsensusAccountMethod.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Method enum.
     * @name ConsensusAccountMethod.Method
     * @enum {string}
     * @property {number} SEND_REWARD=0 SEND_REWARD value
     */
    ConsensusAccountMethod.Method = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SEND_REWARD"] = 0;
        return values;
    })();

    return ConsensusAccountMethod;
})();

$root.ConsensusBet = (function() {

    /**
     * Properties of a ConsensusBet.
     * @exports IConsensusBet
     * @interface IConsensusBet
     * @property {string|null} [address] ConsensusBet address
     * @property {number|Long|null} [value] ConsensusBet value
     */

    /**
     * Constructs a new ConsensusBet.
     * @exports ConsensusBet
     * @classdesc Represents a ConsensusBet.
     * @implements IConsensusBet
     * @constructor
     * @param {IConsensusBet=} [properties] Properties to set
     */
    function ConsensusBet(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ConsensusBet address.
     * @member {string} address
     * @memberof ConsensusBet
     * @instance
     */
    ConsensusBet.prototype.address = "";

    /**
     * ConsensusBet value.
     * @member {number|Long} value
     * @memberof ConsensusBet
     * @instance
     */
    ConsensusBet.prototype.value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new ConsensusBet instance using the specified properties.
     * @function create
     * @memberof ConsensusBet
     * @static
     * @param {IConsensusBet=} [properties] Properties to set
     * @returns {ConsensusBet} ConsensusBet instance
     */
    ConsensusBet.create = function create(properties) {
        return new ConsensusBet(properties);
    };

    /**
     * Encodes the specified ConsensusBet message. Does not implicitly {@link ConsensusBet.verify|verify} messages.
     * @function encode
     * @memberof ConsensusBet
     * @static
     * @param {IConsensusBet} message ConsensusBet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConsensusBet.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.address != null && message.hasOwnProperty("address"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.address);
        if (message.value != null && message.hasOwnProperty("value"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.value);
        return writer;
    };

    /**
     * Encodes the specified ConsensusBet message, length delimited. Does not implicitly {@link ConsensusBet.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ConsensusBet
     * @static
     * @param {IConsensusBet} message ConsensusBet message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConsensusBet.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ConsensusBet message from the specified reader or buffer.
     * @function decode
     * @memberof ConsensusBet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ConsensusBet} ConsensusBet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConsensusBet.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ConsensusBet();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.address = reader.string();
                break;
            case 2:
                message.value = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ConsensusBet message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ConsensusBet
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ConsensusBet} ConsensusBet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConsensusBet.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ConsensusBet message.
     * @function verify
     * @memberof ConsensusBet
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ConsensusBet.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.address != null && message.hasOwnProperty("address"))
            if (!$util.isString(message.address))
                return "address: string expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                return "value: integer|Long expected";
        return null;
    };

    /**
     * Creates a ConsensusBet message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ConsensusBet
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ConsensusBet} ConsensusBet
     */
    ConsensusBet.fromObject = function fromObject(object) {
        if (object instanceof $root.ConsensusBet)
            return object;
        var message = new $root.ConsensusBet();
        if (object.address != null)
            message.address = String(object.address);
        if (object.value != null)
            if ($util.Long)
                (message.value = $util.Long.fromValue(object.value)).unsigned = true;
            else if (typeof object.value === "string")
                message.value = parseInt(object.value, 10);
            else if (typeof object.value === "number")
                message.value = object.value;
            else if (typeof object.value === "object")
                message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a ConsensusBet message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ConsensusBet
     * @static
     * @param {ConsensusBet} message ConsensusBet
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ConsensusBet.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.address = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.value = options.longs === String ? "0" : 0;
        }
        if (message.address != null && message.hasOwnProperty("address"))
            object.address = message.address;
        if (message.value != null && message.hasOwnProperty("value"))
            if (typeof message.value === "number")
                object.value = options.longs === String ? String(message.value) : message.value;
            else
                object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber(true) : message.value;
        return object;
    };

    /**
     * Converts this ConsensusBet to JSON.
     * @function toJSON
     * @memberof ConsensusBet
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ConsensusBet.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ConsensusBet;
})();

$root.ConsensusAccount = (function() {

    /**
     * Properties of a ConsensusAccount.
     * @exports IConsensusAccount
     * @interface IConsensusAccount
     * @property {number|Long|null} [obligatoryPayments] ConsensusAccount obligatoryPayments
     * @property {number|Long|null} [blockCost] ConsensusAccount blockCost
     * @property {Array.<IConsensusBet>|null} [bets] ConsensusAccount bets
     */

    /**
     * Constructs a new ConsensusAccount.
     * @exports ConsensusAccount
     * @classdesc Represents a ConsensusAccount.
     * @implements IConsensusAccount
     * @constructor
     * @param {IConsensusAccount=} [properties] Properties to set
     */
    function ConsensusAccount(properties) {
        this.bets = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ConsensusAccount obligatoryPayments.
     * @member {number|Long} obligatoryPayments
     * @memberof ConsensusAccount
     * @instance
     */
    ConsensusAccount.prototype.obligatoryPayments = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * ConsensusAccount blockCost.
     * @member {number|Long} blockCost
     * @memberof ConsensusAccount
     * @instance
     */
    ConsensusAccount.prototype.blockCost = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * ConsensusAccount bets.
     * @member {Array.<IConsensusBet>} bets
     * @memberof ConsensusAccount
     * @instance
     */
    ConsensusAccount.prototype.bets = $util.emptyArray;

    /**
     * Creates a new ConsensusAccount instance using the specified properties.
     * @function create
     * @memberof ConsensusAccount
     * @static
     * @param {IConsensusAccount=} [properties] Properties to set
     * @returns {ConsensusAccount} ConsensusAccount instance
     */
    ConsensusAccount.create = function create(properties) {
        return new ConsensusAccount(properties);
    };

    /**
     * Encodes the specified ConsensusAccount message. Does not implicitly {@link ConsensusAccount.verify|verify} messages.
     * @function encode
     * @memberof ConsensusAccount
     * @static
     * @param {IConsensusAccount} message ConsensusAccount message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConsensusAccount.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.obligatoryPayments != null && message.hasOwnProperty("obligatoryPayments"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.obligatoryPayments);
        if (message.blockCost != null && message.hasOwnProperty("blockCost"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.blockCost);
        if (message.bets != null && message.bets.length)
            for (var i = 0; i < message.bets.length; ++i)
                $root.ConsensusBet.encode(message.bets[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ConsensusAccount message, length delimited. Does not implicitly {@link ConsensusAccount.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ConsensusAccount
     * @static
     * @param {IConsensusAccount} message ConsensusAccount message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ConsensusAccount.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ConsensusAccount message from the specified reader or buffer.
     * @function decode
     * @memberof ConsensusAccount
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ConsensusAccount} ConsensusAccount
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConsensusAccount.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ConsensusAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.obligatoryPayments = reader.uint64();
                break;
            case 2:
                message.blockCost = reader.uint64();
                break;
            case 3:
                if (!(message.bets && message.bets.length))
                    message.bets = [];
                message.bets.push($root.ConsensusBet.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ConsensusAccount message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ConsensusAccount
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ConsensusAccount} ConsensusAccount
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ConsensusAccount.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ConsensusAccount message.
     * @function verify
     * @memberof ConsensusAccount
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ConsensusAccount.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.obligatoryPayments != null && message.hasOwnProperty("obligatoryPayments"))
            if (!$util.isInteger(message.obligatoryPayments) && !(message.obligatoryPayments && $util.isInteger(message.obligatoryPayments.low) && $util.isInteger(message.obligatoryPayments.high)))
                return "obligatoryPayments: integer|Long expected";
        if (message.blockCost != null && message.hasOwnProperty("blockCost"))
            if (!$util.isInteger(message.blockCost) && !(message.blockCost && $util.isInteger(message.blockCost.low) && $util.isInteger(message.blockCost.high)))
                return "blockCost: integer|Long expected";
        if (message.bets != null && message.hasOwnProperty("bets")) {
            if (!Array.isArray(message.bets))
                return "bets: array expected";
            for (var i = 0; i < message.bets.length; ++i) {
                var error = $root.ConsensusBet.verify(message.bets[i]);
                if (error)
                    return "bets." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ConsensusAccount message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ConsensusAccount
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ConsensusAccount} ConsensusAccount
     */
    ConsensusAccount.fromObject = function fromObject(object) {
        if (object instanceof $root.ConsensusAccount)
            return object;
        var message = new $root.ConsensusAccount();
        if (object.obligatoryPayments != null)
            if ($util.Long)
                (message.obligatoryPayments = $util.Long.fromValue(object.obligatoryPayments)).unsigned = true;
            else if (typeof object.obligatoryPayments === "string")
                message.obligatoryPayments = parseInt(object.obligatoryPayments, 10);
            else if (typeof object.obligatoryPayments === "number")
                message.obligatoryPayments = object.obligatoryPayments;
            else if (typeof object.obligatoryPayments === "object")
                message.obligatoryPayments = new $util.LongBits(object.obligatoryPayments.low >>> 0, object.obligatoryPayments.high >>> 0).toNumber(true);
        if (object.blockCost != null)
            if ($util.Long)
                (message.blockCost = $util.Long.fromValue(object.blockCost)).unsigned = true;
            else if (typeof object.blockCost === "string")
                message.blockCost = parseInt(object.blockCost, 10);
            else if (typeof object.blockCost === "number")
                message.blockCost = object.blockCost;
            else if (typeof object.blockCost === "object")
                message.blockCost = new $util.LongBits(object.blockCost.low >>> 0, object.blockCost.high >>> 0).toNumber(true);
        if (object.bets) {
            if (!Array.isArray(object.bets))
                throw TypeError(".ConsensusAccount.bets: array expected");
            message.bets = [];
            for (var i = 0; i < object.bets.length; ++i) {
                if (typeof object.bets[i] !== "object")
                    throw TypeError(".ConsensusAccount.bets: object expected");
                message.bets[i] = $root.ConsensusBet.fromObject(object.bets[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a ConsensusAccount message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ConsensusAccount
     * @static
     * @param {ConsensusAccount} message ConsensusAccount
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ConsensusAccount.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.bets = [];
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.obligatoryPayments = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.obligatoryPayments = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.blockCost = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.blockCost = options.longs === String ? "0" : 0;
        }
        if (message.obligatoryPayments != null && message.hasOwnProperty("obligatoryPayments"))
            if (typeof message.obligatoryPayments === "number")
                object.obligatoryPayments = options.longs === String ? String(message.obligatoryPayments) : message.obligatoryPayments;
            else
                object.obligatoryPayments = options.longs === String ? $util.Long.prototype.toString.call(message.obligatoryPayments) : options.longs === Number ? new $util.LongBits(message.obligatoryPayments.low >>> 0, message.obligatoryPayments.high >>> 0).toNumber(true) : message.obligatoryPayments;
        if (message.blockCost != null && message.hasOwnProperty("blockCost"))
            if (typeof message.blockCost === "number")
                object.blockCost = options.longs === String ? String(message.blockCost) : message.blockCost;
            else
                object.blockCost = options.longs === String ? $util.Long.prototype.toString.call(message.blockCost) : options.longs === Number ? new $util.LongBits(message.blockCost.low >>> 0, message.blockCost.high >>> 0).toNumber(true) : message.blockCost;
        if (message.bets && message.bets.length) {
            object.bets = [];
            for (var j = 0; j < message.bets.length; ++j)
                object.bets[j] = $root.ConsensusBet.toObject(message.bets[j], options);
        }
        return object;
    };

    /**
     * Converts this ConsensusAccount to JSON.
     * @function toJSON
     * @memberof ConsensusAccount
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ConsensusAccount.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ConsensusAccount;
})();

$root.NodeAccount = (function() {

    /**
     * Properties of a NodeAccount.
     * @exports INodeAccount
     * @interface INodeAccount
     * @property {NodeAccount.NodeState|null} [nodeState] NodeAccount nodeState
     * @property {number|Long|null} [balance] NodeAccount balance
     * @property {NodeAccount.IReputation|null} [reputation] NodeAccount reputation
     * @property {number|Long|null} [fixedAmount] NodeAccount fixedAmount
     * @property {boolean|null} [min] NodeAccount min
     * @property {boolean|null} [max] NodeAccount max
     */

    /**
     * Constructs a new NodeAccount.
     * @exports NodeAccount
     * @classdesc Represents a NodeAccount.
     * @implements INodeAccount
     * @constructor
     * @param {INodeAccount=} [properties] Properties to set
     */
    function NodeAccount(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NodeAccount nodeState.
     * @member {NodeAccount.NodeState} nodeState
     * @memberof NodeAccount
     * @instance
     */
    NodeAccount.prototype.nodeState = 0;

    /**
     * NodeAccount balance.
     * @member {number|Long} balance
     * @memberof NodeAccount
     * @instance
     */
    NodeAccount.prototype.balance = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * NodeAccount reputation.
     * @member {NodeAccount.IReputation|null|undefined} reputation
     * @memberof NodeAccount
     * @instance
     */
    NodeAccount.prototype.reputation = null;

    /**
     * NodeAccount fixedAmount.
     * @member {number|Long} fixedAmount
     * @memberof NodeAccount
     * @instance
     */
    NodeAccount.prototype.fixedAmount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * NodeAccount min.
     * @member {boolean} min
     * @memberof NodeAccount
     * @instance
     */
    NodeAccount.prototype.min = false;

    /**
     * NodeAccount max.
     * @member {boolean} max
     * @memberof NodeAccount
     * @instance
     */
    NodeAccount.prototype.max = false;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * NodeAccount bet.
     * @member {"fixedAmount"|"min"|"max"|undefined} bet
     * @memberof NodeAccount
     * @instance
     */
    Object.defineProperty(NodeAccount.prototype, "bet", {
        get: $util.oneOfGetter($oneOfFields = ["fixedAmount", "min", "max"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new NodeAccount instance using the specified properties.
     * @function create
     * @memberof NodeAccount
     * @static
     * @param {INodeAccount=} [properties] Properties to set
     * @returns {NodeAccount} NodeAccount instance
     */
    NodeAccount.create = function create(properties) {
        return new NodeAccount(properties);
    };

    /**
     * Encodes the specified NodeAccount message. Does not implicitly {@link NodeAccount.verify|verify} messages.
     * @function encode
     * @memberof NodeAccount
     * @static
     * @param {INodeAccount} message NodeAccount message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NodeAccount.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.nodeState != null && message.hasOwnProperty("nodeState"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nodeState);
        if (message.balance != null && message.hasOwnProperty("balance"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.balance);
        if (message.reputation != null && message.hasOwnProperty("reputation"))
            $root.NodeAccount.Reputation.encode(message.reputation, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.fixedAmount != null && message.hasOwnProperty("fixedAmount"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.fixedAmount);
        if (message.min != null && message.hasOwnProperty("min"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.min);
        if (message.max != null && message.hasOwnProperty("max"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.max);
        return writer;
    };

    /**
     * Encodes the specified NodeAccount message, length delimited. Does not implicitly {@link NodeAccount.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NodeAccount
     * @static
     * @param {INodeAccount} message NodeAccount message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NodeAccount.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NodeAccount message from the specified reader or buffer.
     * @function decode
     * @memberof NodeAccount
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NodeAccount} NodeAccount
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NodeAccount.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NodeAccount();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.nodeState = reader.int32();
                break;
            case 2:
                message.balance = reader.uint64();
                break;
            case 3:
                message.reputation = $root.NodeAccount.Reputation.decode(reader, reader.uint32());
                break;
            case 4:
                message.fixedAmount = reader.uint64();
                break;
            case 5:
                message.min = reader.bool();
                break;
            case 6:
                message.max = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NodeAccount message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NodeAccount
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NodeAccount} NodeAccount
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NodeAccount.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NodeAccount message.
     * @function verify
     * @memberof NodeAccount
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NodeAccount.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.nodeState != null && message.hasOwnProperty("nodeState"))
            switch (message.nodeState) {
            default:
                return "nodeState: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.balance != null && message.hasOwnProperty("balance"))
            if (!$util.isInteger(message.balance) && !(message.balance && $util.isInteger(message.balance.low) && $util.isInteger(message.balance.high)))
                return "balance: integer|Long expected";
        if (message.reputation != null && message.hasOwnProperty("reputation")) {
            var error = $root.NodeAccount.Reputation.verify(message.reputation);
            if (error)
                return "reputation." + error;
        }
        if (message.fixedAmount != null && message.hasOwnProperty("fixedAmount")) {
            properties.bet = 1;
            if (!$util.isInteger(message.fixedAmount) && !(message.fixedAmount && $util.isInteger(message.fixedAmount.low) && $util.isInteger(message.fixedAmount.high)))
                return "fixedAmount: integer|Long expected";
        }
        if (message.min != null && message.hasOwnProperty("min")) {
            if (properties.bet === 1)
                return "bet: multiple values";
            properties.bet = 1;
            if (typeof message.min !== "boolean")
                return "min: boolean expected";
        }
        if (message.max != null && message.hasOwnProperty("max")) {
            if (properties.bet === 1)
                return "bet: multiple values";
            properties.bet = 1;
            if (typeof message.max !== "boolean")
                return "max: boolean expected";
        }
        return null;
    };

    /**
     * Creates a NodeAccount message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NodeAccount
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NodeAccount} NodeAccount
     */
    NodeAccount.fromObject = function fromObject(object) {
        if (object instanceof $root.NodeAccount)
            return object;
        var message = new $root.NodeAccount();
        switch (object.nodeState) {
        case "NEW":
        case 0:
            message.nodeState = 0;
            break;
        case "OPENED":
        case 1:
            message.nodeState = 1;
            break;
        case "CLOSED":
        case 2:
            message.nodeState = 2;
            break;
        }
        if (object.balance != null)
            if ($util.Long)
                (message.balance = $util.Long.fromValue(object.balance)).unsigned = true;
            else if (typeof object.balance === "string")
                message.balance = parseInt(object.balance, 10);
            else if (typeof object.balance === "number")
                message.balance = object.balance;
            else if (typeof object.balance === "object")
                message.balance = new $util.LongBits(object.balance.low >>> 0, object.balance.high >>> 0).toNumber(true);
        if (object.reputation != null) {
            if (typeof object.reputation !== "object")
                throw TypeError(".NodeAccount.reputation: object expected");
            message.reputation = $root.NodeAccount.Reputation.fromObject(object.reputation);
        }
        if (object.fixedAmount != null)
            if ($util.Long)
                (message.fixedAmount = $util.Long.fromValue(object.fixedAmount)).unsigned = true;
            else if (typeof object.fixedAmount === "string")
                message.fixedAmount = parseInt(object.fixedAmount, 10);
            else if (typeof object.fixedAmount === "number")
                message.fixedAmount = object.fixedAmount;
            else if (typeof object.fixedAmount === "object")
                message.fixedAmount = new $util.LongBits(object.fixedAmount.low >>> 0, object.fixedAmount.high >>> 0).toNumber(true);
        if (object.min != null)
            message.min = Boolean(object.min);
        if (object.max != null)
            message.max = Boolean(object.max);
        return message;
    };

    /**
     * Creates a plain object from a NodeAccount message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NodeAccount
     * @static
     * @param {NodeAccount} message NodeAccount
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NodeAccount.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.nodeState = options.enums === String ? "NEW" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.balance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.balance = options.longs === String ? "0" : 0;
            object.reputation = null;
        }
        if (message.nodeState != null && message.hasOwnProperty("nodeState"))
            object.nodeState = options.enums === String ? $root.NodeAccount.NodeState[message.nodeState] : message.nodeState;
        if (message.balance != null && message.hasOwnProperty("balance"))
            if (typeof message.balance === "number")
                object.balance = options.longs === String ? String(message.balance) : message.balance;
            else
                object.balance = options.longs === String ? $util.Long.prototype.toString.call(message.balance) : options.longs === Number ? new $util.LongBits(message.balance.low >>> 0, message.balance.high >>> 0).toNumber(true) : message.balance;
        if (message.reputation != null && message.hasOwnProperty("reputation"))
            object.reputation = $root.NodeAccount.Reputation.toObject(message.reputation, options);
        if (message.fixedAmount != null && message.hasOwnProperty("fixedAmount")) {
            if (typeof message.fixedAmount === "number")
                object.fixedAmount = options.longs === String ? String(message.fixedAmount) : message.fixedAmount;
            else
                object.fixedAmount = options.longs === String ? $util.Long.prototype.toString.call(message.fixedAmount) : options.longs === Number ? new $util.LongBits(message.fixedAmount.low >>> 0, message.fixedAmount.high >>> 0).toNumber(true) : message.fixedAmount;
            if (options.oneofs)
                object.bet = "fixedAmount";
        }
        if (message.min != null && message.hasOwnProperty("min")) {
            object.min = message.min;
            if (options.oneofs)
                object.bet = "min";
        }
        if (message.max != null && message.hasOwnProperty("max")) {
            object.max = message.max;
            if (options.oneofs)
                object.bet = "max";
        }
        return object;
    };

    /**
     * Converts this NodeAccount to JSON.
     * @function toJSON
     * @memberof NodeAccount
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NodeAccount.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * NodeState enum.
     * @name NodeAccount.NodeState
     * @enum {string}
     * @property {number} NEW=0 NEW value
     * @property {number} OPENED=1 OPENED value
     * @property {number} CLOSED=2 CLOSED value
     */
    NodeAccount.NodeState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NEW"] = 0;
        values[valuesById[1] = "OPENED"] = 1;
        values[valuesById[2] = "CLOSED"] = 2;
        return values;
    })();

    NodeAccount.Reputation = (function() {

        /**
         * Properties of a Reputation.
         * @memberof NodeAccount
         * @interface IReputation
         * @property {number|Long|null} [frozen] Reputation frozen
         * @property {number|Long|null} [unfrozen] Reputation unfrozen
         */

        /**
         * Constructs a new Reputation.
         * @memberof NodeAccount
         * @classdesc Represents a Reputation.
         * @implements IReputation
         * @constructor
         * @param {NodeAccount.IReputation=} [properties] Properties to set
         */
        function Reputation(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Reputation frozen.
         * @member {number|Long} frozen
         * @memberof NodeAccount.Reputation
         * @instance
         */
        Reputation.prototype.frozen = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Reputation unfrozen.
         * @member {number|Long} unfrozen
         * @memberof NodeAccount.Reputation
         * @instance
         */
        Reputation.prototype.unfrozen = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Reputation instance using the specified properties.
         * @function create
         * @memberof NodeAccount.Reputation
         * @static
         * @param {NodeAccount.IReputation=} [properties] Properties to set
         * @returns {NodeAccount.Reputation} Reputation instance
         */
        Reputation.create = function create(properties) {
            return new Reputation(properties);
        };

        /**
         * Encodes the specified Reputation message. Does not implicitly {@link NodeAccount.Reputation.verify|verify} messages.
         * @function encode
         * @memberof NodeAccount.Reputation
         * @static
         * @param {NodeAccount.IReputation} message Reputation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reputation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.frozen != null && message.hasOwnProperty("frozen"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.frozen);
            if (message.unfrozen != null && message.hasOwnProperty("unfrozen"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.unfrozen);
            return writer;
        };

        /**
         * Encodes the specified Reputation message, length delimited. Does not implicitly {@link NodeAccount.Reputation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NodeAccount.Reputation
         * @static
         * @param {NodeAccount.IReputation} message Reputation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reputation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Reputation message from the specified reader or buffer.
         * @function decode
         * @memberof NodeAccount.Reputation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NodeAccount.Reputation} Reputation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reputation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NodeAccount.Reputation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.frozen = reader.uint64();
                    break;
                case 2:
                    message.unfrozen = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Reputation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NodeAccount.Reputation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NodeAccount.Reputation} Reputation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reputation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Reputation message.
         * @function verify
         * @memberof NodeAccount.Reputation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Reputation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.frozen != null && message.hasOwnProperty("frozen"))
                if (!$util.isInteger(message.frozen) && !(message.frozen && $util.isInteger(message.frozen.low) && $util.isInteger(message.frozen.high)))
                    return "frozen: integer|Long expected";
            if (message.unfrozen != null && message.hasOwnProperty("unfrozen"))
                if (!$util.isInteger(message.unfrozen) && !(message.unfrozen && $util.isInteger(message.unfrozen.low) && $util.isInteger(message.unfrozen.high)))
                    return "unfrozen: integer|Long expected";
            return null;
        };

        /**
         * Creates a Reputation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NodeAccount.Reputation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NodeAccount.Reputation} Reputation
         */
        Reputation.fromObject = function fromObject(object) {
            if (object instanceof $root.NodeAccount.Reputation)
                return object;
            var message = new $root.NodeAccount.Reputation();
            if (object.frozen != null)
                if ($util.Long)
                    (message.frozen = $util.Long.fromValue(object.frozen)).unsigned = true;
                else if (typeof object.frozen === "string")
                    message.frozen = parseInt(object.frozen, 10);
                else if (typeof object.frozen === "number")
                    message.frozen = object.frozen;
                else if (typeof object.frozen === "object")
                    message.frozen = new $util.LongBits(object.frozen.low >>> 0, object.frozen.high >>> 0).toNumber(true);
            if (object.unfrozen != null)
                if ($util.Long)
                    (message.unfrozen = $util.Long.fromValue(object.unfrozen)).unsigned = true;
                else if (typeof object.unfrozen === "string")
                    message.unfrozen = parseInt(object.unfrozen, 10);
                else if (typeof object.unfrozen === "number")
                    message.unfrozen = object.unfrozen;
                else if (typeof object.unfrozen === "object")
                    message.unfrozen = new $util.LongBits(object.unfrozen.low >>> 0, object.unfrozen.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Reputation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NodeAccount.Reputation
         * @static
         * @param {NodeAccount.Reputation} message Reputation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Reputation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.frozen = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.frozen = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.unfrozen = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.unfrozen = options.longs === String ? "0" : 0;
            }
            if (message.frozen != null && message.hasOwnProperty("frozen"))
                if (typeof message.frozen === "number")
                    object.frozen = options.longs === String ? String(message.frozen) : message.frozen;
                else
                    object.frozen = options.longs === String ? $util.Long.prototype.toString.call(message.frozen) : options.longs === Number ? new $util.LongBits(message.frozen.low >>> 0, message.frozen.high >>> 0).toNumber(true) : message.frozen;
            if (message.unfrozen != null && message.hasOwnProperty("unfrozen"))
                if (typeof message.unfrozen === "number")
                    object.unfrozen = options.longs === String ? String(message.unfrozen) : message.unfrozen;
                else
                    object.unfrozen = options.longs === String ? $util.Long.prototype.toString.call(message.unfrozen) : options.longs === Number ? new $util.LongBits(message.unfrozen.low >>> 0, message.unfrozen.high >>> 0).toNumber(true) : message.unfrozen;
            return object;
        };

        /**
         * Converts this Reputation to JSON.
         * @function toJSON
         * @memberof NodeAccount.Reputation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Reputation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Reputation;
    })();

    return NodeAccount;
})();

$root.NodeState = (function() {

    /**
     * Properties of a NodeState.
     * @exports INodeState
     * @interface INodeState
     * @property {Array.<string>|null} [masterNodes] NodeState masterNodes
     */

    /**
     * Constructs a new NodeState.
     * @exports NodeState
     * @classdesc Represents a NodeState.
     * @implements INodeState
     * @constructor
     * @param {INodeState=} [properties] Properties to set
     */
    function NodeState(properties) {
        this.masterNodes = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NodeState masterNodes.
     * @member {Array.<string>} masterNodes
     * @memberof NodeState
     * @instance
     */
    NodeState.prototype.masterNodes = $util.emptyArray;

    /**
     * Creates a new NodeState instance using the specified properties.
     * @function create
     * @memberof NodeState
     * @static
     * @param {INodeState=} [properties] Properties to set
     * @returns {NodeState} NodeState instance
     */
    NodeState.create = function create(properties) {
        return new NodeState(properties);
    };

    /**
     * Encodes the specified NodeState message. Does not implicitly {@link NodeState.verify|verify} messages.
     * @function encode
     * @memberof NodeState
     * @static
     * @param {INodeState} message NodeState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NodeState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.masterNodes != null && message.masterNodes.length)
            for (var i = 0; i < message.masterNodes.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.masterNodes[i]);
        return writer;
    };

    /**
     * Encodes the specified NodeState message, length delimited. Does not implicitly {@link NodeState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NodeState
     * @static
     * @param {INodeState} message NodeState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NodeState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NodeState message from the specified reader or buffer.
     * @function decode
     * @memberof NodeState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NodeState} NodeState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NodeState.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NodeState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.masterNodes && message.masterNodes.length))
                    message.masterNodes = [];
                message.masterNodes.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NodeState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NodeState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NodeState} NodeState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NodeState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NodeState message.
     * @function verify
     * @memberof NodeState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NodeState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.masterNodes != null && message.hasOwnProperty("masterNodes")) {
            if (!Array.isArray(message.masterNodes))
                return "masterNodes: array expected";
            for (var i = 0; i < message.masterNodes.length; ++i)
                if (!$util.isString(message.masterNodes[i]))
                    return "masterNodes: string[] expected";
        }
        return null;
    };

    /**
     * Creates a NodeState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NodeState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NodeState} NodeState
     */
    NodeState.fromObject = function fromObject(object) {
        if (object instanceof $root.NodeState)
            return object;
        var message = new $root.NodeState();
        if (object.masterNodes) {
            if (!Array.isArray(object.masterNodes))
                throw TypeError(".NodeState.masterNodes: array expected");
            message.masterNodes = [];
            for (var i = 0; i < object.masterNodes.length; ++i)
                message.masterNodes[i] = String(object.masterNodes[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a NodeState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NodeState
     * @static
     * @param {NodeState} message NodeState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NodeState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.masterNodes = [];
        if (message.masterNodes && message.masterNodes.length) {
            object.masterNodes = [];
            for (var j = 0; j < message.masterNodes.length; ++j)
                object.masterNodes[j] = message.masterNodes[j];
        }
        return object;
    };

    /**
     * Converts this NodeState to JSON.
     * @function toJSON
     * @memberof NodeState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NodeState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return NodeState;
})();

$root.NodeAccountMethod = (function() {

    /**
     * Properties of a NodeAccountMethod.
     * @exports INodeAccountMethod
     * @interface INodeAccountMethod
     */

    /**
     * Constructs a new NodeAccountMethod.
     * @exports NodeAccountMethod
     * @classdesc Represents a NodeAccountMethod.
     * @implements INodeAccountMethod
     * @constructor
     * @param {INodeAccountMethod=} [properties] Properties to set
     */
    function NodeAccountMethod(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new NodeAccountMethod instance using the specified properties.
     * @function create
     * @memberof NodeAccountMethod
     * @static
     * @param {INodeAccountMethod=} [properties] Properties to set
     * @returns {NodeAccountMethod} NodeAccountMethod instance
     */
    NodeAccountMethod.create = function create(properties) {
        return new NodeAccountMethod(properties);
    };

    /**
     * Encodes the specified NodeAccountMethod message. Does not implicitly {@link NodeAccountMethod.verify|verify} messages.
     * @function encode
     * @memberof NodeAccountMethod
     * @static
     * @param {INodeAccountMethod} message NodeAccountMethod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NodeAccountMethod.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified NodeAccountMethod message, length delimited. Does not implicitly {@link NodeAccountMethod.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NodeAccountMethod
     * @static
     * @param {INodeAccountMethod} message NodeAccountMethod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NodeAccountMethod.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NodeAccountMethod message from the specified reader or buffer.
     * @function decode
     * @memberof NodeAccountMethod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NodeAccountMethod} NodeAccountMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NodeAccountMethod.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NodeAccountMethod();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NodeAccountMethod message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NodeAccountMethod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NodeAccountMethod} NodeAccountMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NodeAccountMethod.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NodeAccountMethod message.
     * @function verify
     * @memberof NodeAccountMethod
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NodeAccountMethod.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a NodeAccountMethod message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NodeAccountMethod
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NodeAccountMethod} NodeAccountMethod
     */
    NodeAccountMethod.fromObject = function fromObject(object) {
        if (object instanceof $root.NodeAccountMethod)
            return object;
        return new $root.NodeAccountMethod();
    };

    /**
     * Creates a plain object from a NodeAccountMethod message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NodeAccountMethod
     * @static
     * @param {NodeAccountMethod} message NodeAccountMethod
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NodeAccountMethod.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this NodeAccountMethod to JSON.
     * @function toJSON
     * @memberof NodeAccountMethod
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NodeAccountMethod.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Method enum.
     * @name NodeAccountMethod.Method
     * @enum {string}
     * @property {number} TRANSFER_FROM_FROZEN_TO_UNFROZEN=0 TRANSFER_FROM_FROZEN_TO_UNFROZEN value
     * @property {number} TRANSFER_FROM_UNFROZEN_TO_OPERATIONAL=1 TRANSFER_FROM_UNFROZEN_TO_OPERATIONAL value
     * @property {number} INITIALIZE_MASTERNODE=2 INITIALIZE_MASTERNODE value
     * @property {number} CLOSE_MASTERNODE=3 CLOSE_MASTERNODE value
     * @property {number} GENESIS_NODE=4 GENESIS_NODE value
     * @property {number} SET_BET=5 SET_BET value
     * @property {number} DO_BET=6 DO_BET value
     */
    NodeAccountMethod.Method = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TRANSFER_FROM_FROZEN_TO_UNFROZEN"] = 0;
        values[valuesById[1] = "TRANSFER_FROM_UNFROZEN_TO_OPERATIONAL"] = 1;
        values[valuesById[2] = "INITIALIZE_MASTERNODE"] = 2;
        values[valuesById[3] = "CLOSE_MASTERNODE"] = 3;
        values[valuesById[4] = "GENESIS_NODE"] = 4;
        values[valuesById[5] = "SET_BET"] = 5;
        values[valuesById[6] = "DO_BET"] = 6;
        return values;
    })();

    return NodeAccountMethod;
})();

$root.NodeAccountInternalTransferPayload = (function() {

    /**
     * Properties of a NodeAccountInternalTransferPayload.
     * @exports INodeAccountInternalTransferPayload
     * @interface INodeAccountInternalTransferPayload
     * @property {number|Long|null} [value] NodeAccountInternalTransferPayload value
     */

    /**
     * Constructs a new NodeAccountInternalTransferPayload.
     * @exports NodeAccountInternalTransferPayload
     * @classdesc Represents a NodeAccountInternalTransferPayload.
     * @implements INodeAccountInternalTransferPayload
     * @constructor
     * @param {INodeAccountInternalTransferPayload=} [properties] Properties to set
     */
    function NodeAccountInternalTransferPayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NodeAccountInternalTransferPayload value.
     * @member {number|Long} value
     * @memberof NodeAccountInternalTransferPayload
     * @instance
     */
    NodeAccountInternalTransferPayload.prototype.value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new NodeAccountInternalTransferPayload instance using the specified properties.
     * @function create
     * @memberof NodeAccountInternalTransferPayload
     * @static
     * @param {INodeAccountInternalTransferPayload=} [properties] Properties to set
     * @returns {NodeAccountInternalTransferPayload} NodeAccountInternalTransferPayload instance
     */
    NodeAccountInternalTransferPayload.create = function create(properties) {
        return new NodeAccountInternalTransferPayload(properties);
    };

    /**
     * Encodes the specified NodeAccountInternalTransferPayload message. Does not implicitly {@link NodeAccountInternalTransferPayload.verify|verify} messages.
     * @function encode
     * @memberof NodeAccountInternalTransferPayload
     * @static
     * @param {INodeAccountInternalTransferPayload} message NodeAccountInternalTransferPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NodeAccountInternalTransferPayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.value != null && message.hasOwnProperty("value"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.value);
        return writer;
    };

    /**
     * Encodes the specified NodeAccountInternalTransferPayload message, length delimited. Does not implicitly {@link NodeAccountInternalTransferPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NodeAccountInternalTransferPayload
     * @static
     * @param {INodeAccountInternalTransferPayload} message NodeAccountInternalTransferPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NodeAccountInternalTransferPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NodeAccountInternalTransferPayload message from the specified reader or buffer.
     * @function decode
     * @memberof NodeAccountInternalTransferPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NodeAccountInternalTransferPayload} NodeAccountInternalTransferPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NodeAccountInternalTransferPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NodeAccountInternalTransferPayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.value = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NodeAccountInternalTransferPayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NodeAccountInternalTransferPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NodeAccountInternalTransferPayload} NodeAccountInternalTransferPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NodeAccountInternalTransferPayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NodeAccountInternalTransferPayload message.
     * @function verify
     * @memberof NodeAccountInternalTransferPayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NodeAccountInternalTransferPayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                return "value: integer|Long expected";
        return null;
    };

    /**
     * Creates a NodeAccountInternalTransferPayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NodeAccountInternalTransferPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NodeAccountInternalTransferPayload} NodeAccountInternalTransferPayload
     */
    NodeAccountInternalTransferPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.NodeAccountInternalTransferPayload)
            return object;
        var message = new $root.NodeAccountInternalTransferPayload();
        if (object.value != null)
            if ($util.Long)
                (message.value = $util.Long.fromValue(object.value)).unsigned = true;
            else if (typeof object.value === "string")
                message.value = parseInt(object.value, 10);
            else if (typeof object.value === "number")
                message.value = object.value;
            else if (typeof object.value === "object")
                message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a NodeAccountInternalTransferPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NodeAccountInternalTransferPayload
     * @static
     * @param {NodeAccountInternalTransferPayload} message NodeAccountInternalTransferPayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NodeAccountInternalTransferPayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.value = options.longs === String ? "0" : 0;
        if (message.value != null && message.hasOwnProperty("value"))
            if (typeof message.value === "number")
                object.value = options.longs === String ? String(message.value) : message.value;
            else
                object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber(true) : message.value;
        return object;
    };

    /**
     * Converts this NodeAccountInternalTransferPayload to JSON.
     * @function toJSON
     * @memberof NodeAccountInternalTransferPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NodeAccountInternalTransferPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return NodeAccountInternalTransferPayload;
})();

$root.CloseMasternodePayload = (function() {

    /**
     * Properties of a CloseMasternodePayload.
     * @exports ICloseMasternodePayload
     * @interface ICloseMasternodePayload
     */

    /**
     * Constructs a new CloseMasternodePayload.
     * @exports CloseMasternodePayload
     * @classdesc Represents a CloseMasternodePayload.
     * @implements ICloseMasternodePayload
     * @constructor
     * @param {ICloseMasternodePayload=} [properties] Properties to set
     */
    function CloseMasternodePayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new CloseMasternodePayload instance using the specified properties.
     * @function create
     * @memberof CloseMasternodePayload
     * @static
     * @param {ICloseMasternodePayload=} [properties] Properties to set
     * @returns {CloseMasternodePayload} CloseMasternodePayload instance
     */
    CloseMasternodePayload.create = function create(properties) {
        return new CloseMasternodePayload(properties);
    };

    /**
     * Encodes the specified CloseMasternodePayload message. Does not implicitly {@link CloseMasternodePayload.verify|verify} messages.
     * @function encode
     * @memberof CloseMasternodePayload
     * @static
     * @param {ICloseMasternodePayload} message CloseMasternodePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CloseMasternodePayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified CloseMasternodePayload message, length delimited. Does not implicitly {@link CloseMasternodePayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CloseMasternodePayload
     * @static
     * @param {ICloseMasternodePayload} message CloseMasternodePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CloseMasternodePayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CloseMasternodePayload message from the specified reader or buffer.
     * @function decode
     * @memberof CloseMasternodePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CloseMasternodePayload} CloseMasternodePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CloseMasternodePayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CloseMasternodePayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CloseMasternodePayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CloseMasternodePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CloseMasternodePayload} CloseMasternodePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CloseMasternodePayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CloseMasternodePayload message.
     * @function verify
     * @memberof CloseMasternodePayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CloseMasternodePayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a CloseMasternodePayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CloseMasternodePayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CloseMasternodePayload} CloseMasternodePayload
     */
    CloseMasternodePayload.fromObject = function fromObject(object) {
        if (object instanceof $root.CloseMasternodePayload)
            return object;
        return new $root.CloseMasternodePayload();
    };

    /**
     * Creates a plain object from a CloseMasternodePayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CloseMasternodePayload
     * @static
     * @param {CloseMasternodePayload} message CloseMasternodePayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CloseMasternodePayload.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this CloseMasternodePayload to JSON.
     * @function toJSON
     * @memberof CloseMasternodePayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CloseMasternodePayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CloseMasternodePayload;
})();

$root.SetBetPayload = (function() {

    /**
     * Properties of a SetBetPayload.
     * @exports ISetBetPayload
     * @interface ISetBetPayload
     * @property {number|Long|null} [fixedAmount] SetBetPayload fixedAmount
     * @property {boolean|null} [min] SetBetPayload min
     * @property {boolean|null} [max] SetBetPayload max
     */

    /**
     * Constructs a new SetBetPayload.
     * @exports SetBetPayload
     * @classdesc Represents a SetBetPayload.
     * @implements ISetBetPayload
     * @constructor
     * @param {ISetBetPayload=} [properties] Properties to set
     */
    function SetBetPayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetBetPayload fixedAmount.
     * @member {number|Long} fixedAmount
     * @memberof SetBetPayload
     * @instance
     */
    SetBetPayload.prototype.fixedAmount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * SetBetPayload min.
     * @member {boolean} min
     * @memberof SetBetPayload
     * @instance
     */
    SetBetPayload.prototype.min = false;

    /**
     * SetBetPayload max.
     * @member {boolean} max
     * @memberof SetBetPayload
     * @instance
     */
    SetBetPayload.prototype.max = false;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * SetBetPayload bet.
     * @member {"fixedAmount"|"min"|"max"|undefined} bet
     * @memberof SetBetPayload
     * @instance
     */
    Object.defineProperty(SetBetPayload.prototype, "bet", {
        get: $util.oneOfGetter($oneOfFields = ["fixedAmount", "min", "max"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new SetBetPayload instance using the specified properties.
     * @function create
     * @memberof SetBetPayload
     * @static
     * @param {ISetBetPayload=} [properties] Properties to set
     * @returns {SetBetPayload} SetBetPayload instance
     */
    SetBetPayload.create = function create(properties) {
        return new SetBetPayload(properties);
    };

    /**
     * Encodes the specified SetBetPayload message. Does not implicitly {@link SetBetPayload.verify|verify} messages.
     * @function encode
     * @memberof SetBetPayload
     * @static
     * @param {ISetBetPayload} message SetBetPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetBetPayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.fixedAmount != null && message.hasOwnProperty("fixedAmount"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.fixedAmount);
        if (message.min != null && message.hasOwnProperty("min"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.min);
        if (message.max != null && message.hasOwnProperty("max"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.max);
        return writer;
    };

    /**
     * Encodes the specified SetBetPayload message, length delimited. Does not implicitly {@link SetBetPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetBetPayload
     * @static
     * @param {ISetBetPayload} message SetBetPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetBetPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetBetPayload message from the specified reader or buffer.
     * @function decode
     * @memberof SetBetPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetBetPayload} SetBetPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetBetPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetBetPayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.fixedAmount = reader.uint64();
                break;
            case 2:
                message.min = reader.bool();
                break;
            case 3:
                message.max = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SetBetPayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetBetPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetBetPayload} SetBetPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetBetPayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetBetPayload message.
     * @function verify
     * @memberof SetBetPayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetBetPayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.fixedAmount != null && message.hasOwnProperty("fixedAmount")) {
            properties.bet = 1;
            if (!$util.isInteger(message.fixedAmount) && !(message.fixedAmount && $util.isInteger(message.fixedAmount.low) && $util.isInteger(message.fixedAmount.high)))
                return "fixedAmount: integer|Long expected";
        }
        if (message.min != null && message.hasOwnProperty("min")) {
            if (properties.bet === 1)
                return "bet: multiple values";
            properties.bet = 1;
            if (typeof message.min !== "boolean")
                return "min: boolean expected";
        }
        if (message.max != null && message.hasOwnProperty("max")) {
            if (properties.bet === 1)
                return "bet: multiple values";
            properties.bet = 1;
            if (typeof message.max !== "boolean")
                return "max: boolean expected";
        }
        return null;
    };

    /**
     * Creates a SetBetPayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetBetPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetBetPayload} SetBetPayload
     */
    SetBetPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.SetBetPayload)
            return object;
        var message = new $root.SetBetPayload();
        if (object.fixedAmount != null)
            if ($util.Long)
                (message.fixedAmount = $util.Long.fromValue(object.fixedAmount)).unsigned = true;
            else if (typeof object.fixedAmount === "string")
                message.fixedAmount = parseInt(object.fixedAmount, 10);
            else if (typeof object.fixedAmount === "number")
                message.fixedAmount = object.fixedAmount;
            else if (typeof object.fixedAmount === "object")
                message.fixedAmount = new $util.LongBits(object.fixedAmount.low >>> 0, object.fixedAmount.high >>> 0).toNumber(true);
        if (object.min != null)
            message.min = Boolean(object.min);
        if (object.max != null)
            message.max = Boolean(object.max);
        return message;
    };

    /**
     * Creates a plain object from a SetBetPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetBetPayload
     * @static
     * @param {SetBetPayload} message SetBetPayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetBetPayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.fixedAmount != null && message.hasOwnProperty("fixedAmount")) {
            if (typeof message.fixedAmount === "number")
                object.fixedAmount = options.longs === String ? String(message.fixedAmount) : message.fixedAmount;
            else
                object.fixedAmount = options.longs === String ? $util.Long.prototype.toString.call(message.fixedAmount) : options.longs === Number ? new $util.LongBits(message.fixedAmount.low >>> 0, message.fixedAmount.high >>> 0).toNumber(true) : message.fixedAmount;
            if (options.oneofs)
                object.bet = "fixedAmount";
        }
        if (message.min != null && message.hasOwnProperty("min")) {
            object.min = message.min;
            if (options.oneofs)
                object.bet = "min";
        }
        if (message.max != null && message.hasOwnProperty("max")) {
            object.max = message.max;
            if (options.oneofs)
                object.bet = "max";
        }
        return object;
    };

    /**
     * Converts this SetBetPayload to JSON.
     * @function toJSON
     * @memberof SetBetPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetBetPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SetBetPayload;
})();

$root.ObligatoryPaymentPayload = (function() {

    /**
     * Properties of an ObligatoryPaymentPayload.
     * @exports IObligatoryPaymentPayload
     * @interface IObligatoryPaymentPayload
     */

    /**
     * Constructs a new ObligatoryPaymentPayload.
     * @exports ObligatoryPaymentPayload
     * @classdesc Represents an ObligatoryPaymentPayload.
     * @implements IObligatoryPaymentPayload
     * @constructor
     * @param {IObligatoryPaymentPayload=} [properties] Properties to set
     */
    function ObligatoryPaymentPayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new ObligatoryPaymentPayload instance using the specified properties.
     * @function create
     * @memberof ObligatoryPaymentPayload
     * @static
     * @param {IObligatoryPaymentPayload=} [properties] Properties to set
     * @returns {ObligatoryPaymentPayload} ObligatoryPaymentPayload instance
     */
    ObligatoryPaymentPayload.create = function create(properties) {
        return new ObligatoryPaymentPayload(properties);
    };

    /**
     * Encodes the specified ObligatoryPaymentPayload message. Does not implicitly {@link ObligatoryPaymentPayload.verify|verify} messages.
     * @function encode
     * @memberof ObligatoryPaymentPayload
     * @static
     * @param {IObligatoryPaymentPayload} message ObligatoryPaymentPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ObligatoryPaymentPayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified ObligatoryPaymentPayload message, length delimited. Does not implicitly {@link ObligatoryPaymentPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ObligatoryPaymentPayload
     * @static
     * @param {IObligatoryPaymentPayload} message ObligatoryPaymentPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ObligatoryPaymentPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ObligatoryPaymentPayload message from the specified reader or buffer.
     * @function decode
     * @memberof ObligatoryPaymentPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ObligatoryPaymentPayload} ObligatoryPaymentPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ObligatoryPaymentPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ObligatoryPaymentPayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ObligatoryPaymentPayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ObligatoryPaymentPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ObligatoryPaymentPayload} ObligatoryPaymentPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ObligatoryPaymentPayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ObligatoryPaymentPayload message.
     * @function verify
     * @memberof ObligatoryPaymentPayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ObligatoryPaymentPayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an ObligatoryPaymentPayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ObligatoryPaymentPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ObligatoryPaymentPayload} ObligatoryPaymentPayload
     */
    ObligatoryPaymentPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.ObligatoryPaymentPayload)
            return object;
        return new $root.ObligatoryPaymentPayload();
    };

    /**
     * Creates a plain object from an ObligatoryPaymentPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ObligatoryPaymentPayload
     * @static
     * @param {ObligatoryPaymentPayload} message ObligatoryPaymentPayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ObligatoryPaymentPayload.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this ObligatoryPaymentPayload to JSON.
     * @function toJSON
     * @memberof ObligatoryPaymentPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ObligatoryPaymentPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ObligatoryPaymentPayload;
})();

$root.ObligatoryPaymentMethod = (function() {

    /**
     * Properties of an ObligatoryPaymentMethod.
     * @exports IObligatoryPaymentMethod
     * @interface IObligatoryPaymentMethod
     */

    /**
     * Constructs a new ObligatoryPaymentMethod.
     * @exports ObligatoryPaymentMethod
     * @classdesc Represents an ObligatoryPaymentMethod.
     * @implements IObligatoryPaymentMethod
     * @constructor
     * @param {IObligatoryPaymentMethod=} [properties] Properties to set
     */
    function ObligatoryPaymentMethod(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new ObligatoryPaymentMethod instance using the specified properties.
     * @function create
     * @memberof ObligatoryPaymentMethod
     * @static
     * @param {IObligatoryPaymentMethod=} [properties] Properties to set
     * @returns {ObligatoryPaymentMethod} ObligatoryPaymentMethod instance
     */
    ObligatoryPaymentMethod.create = function create(properties) {
        return new ObligatoryPaymentMethod(properties);
    };

    /**
     * Encodes the specified ObligatoryPaymentMethod message. Does not implicitly {@link ObligatoryPaymentMethod.verify|verify} messages.
     * @function encode
     * @memberof ObligatoryPaymentMethod
     * @static
     * @param {IObligatoryPaymentMethod} message ObligatoryPaymentMethod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ObligatoryPaymentMethod.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified ObligatoryPaymentMethod message, length delimited. Does not implicitly {@link ObligatoryPaymentMethod.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ObligatoryPaymentMethod
     * @static
     * @param {IObligatoryPaymentMethod} message ObligatoryPaymentMethod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ObligatoryPaymentMethod.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ObligatoryPaymentMethod message from the specified reader or buffer.
     * @function decode
     * @memberof ObligatoryPaymentMethod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ObligatoryPaymentMethod} ObligatoryPaymentMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ObligatoryPaymentMethod.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ObligatoryPaymentMethod();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ObligatoryPaymentMethod message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ObligatoryPaymentMethod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ObligatoryPaymentMethod} ObligatoryPaymentMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ObligatoryPaymentMethod.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ObligatoryPaymentMethod message.
     * @function verify
     * @memberof ObligatoryPaymentMethod
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ObligatoryPaymentMethod.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an ObligatoryPaymentMethod message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ObligatoryPaymentMethod
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ObligatoryPaymentMethod} ObligatoryPaymentMethod
     */
    ObligatoryPaymentMethod.fromObject = function fromObject(object) {
        if (object instanceof $root.ObligatoryPaymentMethod)
            return object;
        return new $root.ObligatoryPaymentMethod();
    };

    /**
     * Creates a plain object from an ObligatoryPaymentMethod message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ObligatoryPaymentMethod
     * @static
     * @param {ObligatoryPaymentMethod} message ObligatoryPaymentMethod
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ObligatoryPaymentMethod.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this ObligatoryPaymentMethod to JSON.
     * @function toJSON
     * @memberof ObligatoryPaymentMethod
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ObligatoryPaymentMethod.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Method enum.
     * @name ObligatoryPaymentMethod.Method
     * @enum {string}
     * @property {number} PAY_OBLIGATORY_PAYMENT=0 PAY_OBLIGATORY_PAYMENT value
     */
    ObligatoryPaymentMethod.Method = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PAY_OBLIGATORY_PAYMENT"] = 0;
        return values;
    })();

    return ObligatoryPaymentMethod;
})();

$root.PubKeyMethod = (function() {

    /**
     * Properties of a PubKeyMethod.
     * @exports IPubKeyMethod
     * @interface IPubKeyMethod
     */

    /**
     * Constructs a new PubKeyMethod.
     * @exports PubKeyMethod
     * @classdesc Represents a PubKeyMethod.
     * @implements IPubKeyMethod
     * @constructor
     * @param {IPubKeyMethod=} [properties] Properties to set
     */
    function PubKeyMethod(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new PubKeyMethod instance using the specified properties.
     * @function create
     * @memberof PubKeyMethod
     * @static
     * @param {IPubKeyMethod=} [properties] Properties to set
     * @returns {PubKeyMethod} PubKeyMethod instance
     */
    PubKeyMethod.create = function create(properties) {
        return new PubKeyMethod(properties);
    };

    /**
     * Encodes the specified PubKeyMethod message. Does not implicitly {@link PubKeyMethod.verify|verify} messages.
     * @function encode
     * @memberof PubKeyMethod
     * @static
     * @param {IPubKeyMethod} message PubKeyMethod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PubKeyMethod.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified PubKeyMethod message, length delimited. Does not implicitly {@link PubKeyMethod.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PubKeyMethod
     * @static
     * @param {IPubKeyMethod} message PubKeyMethod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PubKeyMethod.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PubKeyMethod message from the specified reader or buffer.
     * @function decode
     * @memberof PubKeyMethod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PubKeyMethod} PubKeyMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PubKeyMethod.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PubKeyMethod();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PubKeyMethod message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PubKeyMethod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PubKeyMethod} PubKeyMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PubKeyMethod.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PubKeyMethod message.
     * @function verify
     * @memberof PubKeyMethod
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PubKeyMethod.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a PubKeyMethod message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PubKeyMethod
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PubKeyMethod} PubKeyMethod
     */
    PubKeyMethod.fromObject = function fromObject(object) {
        if (object instanceof $root.PubKeyMethod)
            return object;
        return new $root.PubKeyMethod();
    };

    /**
     * Creates a plain object from a PubKeyMethod message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PubKeyMethod
     * @static
     * @param {PubKeyMethod} message PubKeyMethod
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PubKeyMethod.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this PubKeyMethod to JSON.
     * @function toJSON
     * @memberof PubKeyMethod
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PubKeyMethod.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Method enum.
     * @name PubKeyMethod.Method
     * @enum {string}
     * @property {number} STORE=0 STORE value
     * @property {number} REVOKE=1 REVOKE value
     * @property {number} STORE_AND_PAY=2 STORE_AND_PAY value
     */
    PubKeyMethod.Method = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "STORE"] = 0;
        values[valuesById[1] = "REVOKE"] = 1;
        values[valuesById[2] = "STORE_AND_PAY"] = 2;
        return values;
    })();

    return PubKeyMethod;
})();

$root.NewPubKeyPayload = (function() {

    /**
     * Properties of a NewPubKeyPayload.
     * @exports INewPubKeyPayload
     * @interface INewPubKeyPayload
     * @property {NewPubKeyPayload.HashingAlgorithm|null} [hashingAlgorithm] NewPubKeyPayload hashingAlgorithm
     * @property {Uint8Array|null} [entityHash] NewPubKeyPayload entityHash
     * @property {Uint8Array|null} [entityHashSignature] NewPubKeyPayload entityHashSignature
     * @property {number|null} [validFrom] NewPubKeyPayload validFrom
     * @property {number|null} [validTo] NewPubKeyPayload validTo
     * @property {NewPubKeyPayload.IRSAConfiguration|null} [rsa] NewPubKeyPayload rsa
     * @property {NewPubKeyPayload.IECDSAConfiguration|null} [ecdsa] NewPubKeyPayload ecdsa
     * @property {NewPubKeyPayload.IEd25519Configuration|null} [ed25519] NewPubKeyPayload ed25519
     */

    /**
     * Constructs a new NewPubKeyPayload.
     * @exports NewPubKeyPayload
     * @classdesc Represents a NewPubKeyPayload.
     * @implements INewPubKeyPayload
     * @constructor
     * @param {INewPubKeyPayload=} [properties] Properties to set
     */
    function NewPubKeyPayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NewPubKeyPayload hashingAlgorithm.
     * @member {NewPubKeyPayload.HashingAlgorithm} hashingAlgorithm
     * @memberof NewPubKeyPayload
     * @instance
     */
    NewPubKeyPayload.prototype.hashingAlgorithm = 0;

    /**
     * NewPubKeyPayload entityHash.
     * @member {Uint8Array} entityHash
     * @memberof NewPubKeyPayload
     * @instance
     */
    NewPubKeyPayload.prototype.entityHash = $util.newBuffer([]);

    /**
     * NewPubKeyPayload entityHashSignature.
     * @member {Uint8Array} entityHashSignature
     * @memberof NewPubKeyPayload
     * @instance
     */
    NewPubKeyPayload.prototype.entityHashSignature = $util.newBuffer([]);

    /**
     * NewPubKeyPayload validFrom.
     * @member {number} validFrom
     * @memberof NewPubKeyPayload
     * @instance
     */
    NewPubKeyPayload.prototype.validFrom = 0;

    /**
     * NewPubKeyPayload validTo.
     * @member {number} validTo
     * @memberof NewPubKeyPayload
     * @instance
     */
    NewPubKeyPayload.prototype.validTo = 0;

    /**
     * NewPubKeyPayload rsa.
     * @member {NewPubKeyPayload.IRSAConfiguration|null|undefined} rsa
     * @memberof NewPubKeyPayload
     * @instance
     */
    NewPubKeyPayload.prototype.rsa = null;

    /**
     * NewPubKeyPayload ecdsa.
     * @member {NewPubKeyPayload.IECDSAConfiguration|null|undefined} ecdsa
     * @memberof NewPubKeyPayload
     * @instance
     */
    NewPubKeyPayload.prototype.ecdsa = null;

    /**
     * NewPubKeyPayload ed25519.
     * @member {NewPubKeyPayload.IEd25519Configuration|null|undefined} ed25519
     * @memberof NewPubKeyPayload
     * @instance
     */
    NewPubKeyPayload.prototype.ed25519 = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * NewPubKeyPayload configuration.
     * @member {"rsa"|"ecdsa"|"ed25519"|undefined} configuration
     * @memberof NewPubKeyPayload
     * @instance
     */
    Object.defineProperty(NewPubKeyPayload.prototype, "configuration", {
        get: $util.oneOfGetter($oneOfFields = ["rsa", "ecdsa", "ed25519"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new NewPubKeyPayload instance using the specified properties.
     * @function create
     * @memberof NewPubKeyPayload
     * @static
     * @param {INewPubKeyPayload=} [properties] Properties to set
     * @returns {NewPubKeyPayload} NewPubKeyPayload instance
     */
    NewPubKeyPayload.create = function create(properties) {
        return new NewPubKeyPayload(properties);
    };

    /**
     * Encodes the specified NewPubKeyPayload message. Does not implicitly {@link NewPubKeyPayload.verify|verify} messages.
     * @function encode
     * @memberof NewPubKeyPayload
     * @static
     * @param {INewPubKeyPayload} message NewPubKeyPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NewPubKeyPayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.hashingAlgorithm != null && message.hasOwnProperty("hashingAlgorithm"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.hashingAlgorithm);
        if (message.entityHash != null && message.hasOwnProperty("entityHash"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.entityHash);
        if (message.entityHashSignature != null && message.hasOwnProperty("entityHashSignature"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.entityHashSignature);
        if (message.validFrom != null && message.hasOwnProperty("validFrom"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.validFrom);
        if (message.validTo != null && message.hasOwnProperty("validTo"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.validTo);
        if (message.rsa != null && message.hasOwnProperty("rsa"))
            $root.NewPubKeyPayload.RSAConfiguration.encode(message.rsa, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.ecdsa != null && message.hasOwnProperty("ecdsa"))
            $root.NewPubKeyPayload.ECDSAConfiguration.encode(message.ecdsa, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.ed25519 != null && message.hasOwnProperty("ed25519"))
            $root.NewPubKeyPayload.Ed25519Configuration.encode(message.ed25519, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified NewPubKeyPayload message, length delimited. Does not implicitly {@link NewPubKeyPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NewPubKeyPayload
     * @static
     * @param {INewPubKeyPayload} message NewPubKeyPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NewPubKeyPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NewPubKeyPayload message from the specified reader or buffer.
     * @function decode
     * @memberof NewPubKeyPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NewPubKeyPayload} NewPubKeyPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NewPubKeyPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NewPubKeyPayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.hashingAlgorithm = reader.int32();
                break;
            case 2:
                message.entityHash = reader.bytes();
                break;
            case 3:
                message.entityHashSignature = reader.bytes();
                break;
            case 4:
                message.validFrom = reader.uint32();
                break;
            case 5:
                message.validTo = reader.uint32();
                break;
            case 6:
                message.rsa = $root.NewPubKeyPayload.RSAConfiguration.decode(reader, reader.uint32());
                break;
            case 7:
                message.ecdsa = $root.NewPubKeyPayload.ECDSAConfiguration.decode(reader, reader.uint32());
                break;
            case 8:
                message.ed25519 = $root.NewPubKeyPayload.Ed25519Configuration.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NewPubKeyPayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NewPubKeyPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NewPubKeyPayload} NewPubKeyPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NewPubKeyPayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NewPubKeyPayload message.
     * @function verify
     * @memberof NewPubKeyPayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NewPubKeyPayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.hashingAlgorithm != null && message.hasOwnProperty("hashingAlgorithm"))
            switch (message.hashingAlgorithm) {
            default:
                return "hashingAlgorithm: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.entityHash != null && message.hasOwnProperty("entityHash"))
            if (!(message.entityHash && typeof message.entityHash.length === "number" || $util.isString(message.entityHash)))
                return "entityHash: buffer expected";
        if (message.entityHashSignature != null && message.hasOwnProperty("entityHashSignature"))
            if (!(message.entityHashSignature && typeof message.entityHashSignature.length === "number" || $util.isString(message.entityHashSignature)))
                return "entityHashSignature: buffer expected";
        if (message.validFrom != null && message.hasOwnProperty("validFrom"))
            if (!$util.isInteger(message.validFrom))
                return "validFrom: integer expected";
        if (message.validTo != null && message.hasOwnProperty("validTo"))
            if (!$util.isInteger(message.validTo))
                return "validTo: integer expected";
        if (message.rsa != null && message.hasOwnProperty("rsa")) {
            properties.configuration = 1;
            {
                var error = $root.NewPubKeyPayload.RSAConfiguration.verify(message.rsa);
                if (error)
                    return "rsa." + error;
            }
        }
        if (message.ecdsa != null && message.hasOwnProperty("ecdsa")) {
            if (properties.configuration === 1)
                return "configuration: multiple values";
            properties.configuration = 1;
            {
                var error = $root.NewPubKeyPayload.ECDSAConfiguration.verify(message.ecdsa);
                if (error)
                    return "ecdsa." + error;
            }
        }
        if (message.ed25519 != null && message.hasOwnProperty("ed25519")) {
            if (properties.configuration === 1)
                return "configuration: multiple values";
            properties.configuration = 1;
            {
                var error = $root.NewPubKeyPayload.Ed25519Configuration.verify(message.ed25519);
                if (error)
                    return "ed25519." + error;
            }
        }
        return null;
    };

    /**
     * Creates a NewPubKeyPayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NewPubKeyPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NewPubKeyPayload} NewPubKeyPayload
     */
    NewPubKeyPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.NewPubKeyPayload)
            return object;
        var message = new $root.NewPubKeyPayload();
        switch (object.hashingAlgorithm) {
        case "SHA256":
        case 0:
            message.hashingAlgorithm = 0;
            break;
        case "SHA512":
        case 1:
            message.hashingAlgorithm = 1;
            break;
        }
        if (object.entityHash != null)
            if (typeof object.entityHash === "string")
                $util.base64.decode(object.entityHash, message.entityHash = $util.newBuffer($util.base64.length(object.entityHash)), 0);
            else if (object.entityHash.length)
                message.entityHash = object.entityHash;
        if (object.entityHashSignature != null)
            if (typeof object.entityHashSignature === "string")
                $util.base64.decode(object.entityHashSignature, message.entityHashSignature = $util.newBuffer($util.base64.length(object.entityHashSignature)), 0);
            else if (object.entityHashSignature.length)
                message.entityHashSignature = object.entityHashSignature;
        if (object.validFrom != null)
            message.validFrom = object.validFrom >>> 0;
        if (object.validTo != null)
            message.validTo = object.validTo >>> 0;
        if (object.rsa != null) {
            if (typeof object.rsa !== "object")
                throw TypeError(".NewPubKeyPayload.rsa: object expected");
            message.rsa = $root.NewPubKeyPayload.RSAConfiguration.fromObject(object.rsa);
        }
        if (object.ecdsa != null) {
            if (typeof object.ecdsa !== "object")
                throw TypeError(".NewPubKeyPayload.ecdsa: object expected");
            message.ecdsa = $root.NewPubKeyPayload.ECDSAConfiguration.fromObject(object.ecdsa);
        }
        if (object.ed25519 != null) {
            if (typeof object.ed25519 !== "object")
                throw TypeError(".NewPubKeyPayload.ed25519: object expected");
            message.ed25519 = $root.NewPubKeyPayload.Ed25519Configuration.fromObject(object.ed25519);
        }
        return message;
    };

    /**
     * Creates a plain object from a NewPubKeyPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NewPubKeyPayload
     * @static
     * @param {NewPubKeyPayload} message NewPubKeyPayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NewPubKeyPayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.hashingAlgorithm = options.enums === String ? "SHA256" : 0;
            object.entityHash = options.bytes === String ? "" : [];
            object.entityHashSignature = options.bytes === String ? "" : [];
            object.validFrom = 0;
            object.validTo = 0;
        }
        if (message.hashingAlgorithm != null && message.hasOwnProperty("hashingAlgorithm"))
            object.hashingAlgorithm = options.enums === String ? $root.NewPubKeyPayload.HashingAlgorithm[message.hashingAlgorithm] : message.hashingAlgorithm;
        if (message.entityHash != null && message.hasOwnProperty("entityHash"))
            object.entityHash = options.bytes === String ? $util.base64.encode(message.entityHash, 0, message.entityHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.entityHash) : message.entityHash;
        if (message.entityHashSignature != null && message.hasOwnProperty("entityHashSignature"))
            object.entityHashSignature = options.bytes === String ? $util.base64.encode(message.entityHashSignature, 0, message.entityHashSignature.length) : options.bytes === Array ? Array.prototype.slice.call(message.entityHashSignature) : message.entityHashSignature;
        if (message.validFrom != null && message.hasOwnProperty("validFrom"))
            object.validFrom = message.validFrom;
        if (message.validTo != null && message.hasOwnProperty("validTo"))
            object.validTo = message.validTo;
        if (message.rsa != null && message.hasOwnProperty("rsa")) {
            object.rsa = $root.NewPubKeyPayload.RSAConfiguration.toObject(message.rsa, options);
            if (options.oneofs)
                object.configuration = "rsa";
        }
        if (message.ecdsa != null && message.hasOwnProperty("ecdsa")) {
            object.ecdsa = $root.NewPubKeyPayload.ECDSAConfiguration.toObject(message.ecdsa, options);
            if (options.oneofs)
                object.configuration = "ecdsa";
        }
        if (message.ed25519 != null && message.hasOwnProperty("ed25519")) {
            object.ed25519 = $root.NewPubKeyPayload.Ed25519Configuration.toObject(message.ed25519, options);
            if (options.oneofs)
                object.configuration = "ed25519";
        }
        return object;
    };

    /**
     * Converts this NewPubKeyPayload to JSON.
     * @function toJSON
     * @memberof NewPubKeyPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NewPubKeyPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * HashingAlgorithm enum.
     * @name NewPubKeyPayload.HashingAlgorithm
     * @enum {string}
     * @property {number} SHA256=0 SHA256 value
     * @property {number} SHA512=1 SHA512 value
     */
    NewPubKeyPayload.HashingAlgorithm = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SHA256"] = 0;
        values[valuesById[1] = "SHA512"] = 1;
        return values;
    })();

    NewPubKeyPayload.RSAConfiguration = (function() {

        /**
         * Properties of a RSAConfiguration.
         * @memberof NewPubKeyPayload
         * @interface IRSAConfiguration
         * @property {Uint8Array|null} [key] RSAConfiguration key
         * @property {NewPubKeyPayload.RSAConfiguration.Padding|null} [padding] RSAConfiguration padding
         */

        /**
         * Constructs a new RSAConfiguration.
         * @memberof NewPubKeyPayload
         * @classdesc Represents a RSAConfiguration.
         * @implements IRSAConfiguration
         * @constructor
         * @param {NewPubKeyPayload.IRSAConfiguration=} [properties] Properties to set
         */
        function RSAConfiguration(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RSAConfiguration key.
         * @member {Uint8Array} key
         * @memberof NewPubKeyPayload.RSAConfiguration
         * @instance
         */
        RSAConfiguration.prototype.key = $util.newBuffer([]);

        /**
         * RSAConfiguration padding.
         * @member {NewPubKeyPayload.RSAConfiguration.Padding} padding
         * @memberof NewPubKeyPayload.RSAConfiguration
         * @instance
         */
        RSAConfiguration.prototype.padding = 0;

        /**
         * Creates a new RSAConfiguration instance using the specified properties.
         * @function create
         * @memberof NewPubKeyPayload.RSAConfiguration
         * @static
         * @param {NewPubKeyPayload.IRSAConfiguration=} [properties] Properties to set
         * @returns {NewPubKeyPayload.RSAConfiguration} RSAConfiguration instance
         */
        RSAConfiguration.create = function create(properties) {
            return new RSAConfiguration(properties);
        };

        /**
         * Encodes the specified RSAConfiguration message. Does not implicitly {@link NewPubKeyPayload.RSAConfiguration.verify|verify} messages.
         * @function encode
         * @memberof NewPubKeyPayload.RSAConfiguration
         * @static
         * @param {NewPubKeyPayload.IRSAConfiguration} message RSAConfiguration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RSAConfiguration.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && message.hasOwnProperty("key"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.key);
            if (message.padding != null && message.hasOwnProperty("padding"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.padding);
            return writer;
        };

        /**
         * Encodes the specified RSAConfiguration message, length delimited. Does not implicitly {@link NewPubKeyPayload.RSAConfiguration.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NewPubKeyPayload.RSAConfiguration
         * @static
         * @param {NewPubKeyPayload.IRSAConfiguration} message RSAConfiguration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RSAConfiguration.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RSAConfiguration message from the specified reader or buffer.
         * @function decode
         * @memberof NewPubKeyPayload.RSAConfiguration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NewPubKeyPayload.RSAConfiguration} RSAConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RSAConfiguration.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NewPubKeyPayload.RSAConfiguration();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.padding = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RSAConfiguration message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NewPubKeyPayload.RSAConfiguration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NewPubKeyPayload.RSAConfiguration} RSAConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RSAConfiguration.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RSAConfiguration message.
         * @function verify
         * @memberof NewPubKeyPayload.RSAConfiguration
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RSAConfiguration.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                    return "key: buffer expected";
            if (message.padding != null && message.hasOwnProperty("padding"))
                switch (message.padding) {
                default:
                    return "padding: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a RSAConfiguration message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NewPubKeyPayload.RSAConfiguration
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NewPubKeyPayload.RSAConfiguration} RSAConfiguration
         */
        RSAConfiguration.fromObject = function fromObject(object) {
            if (object instanceof $root.NewPubKeyPayload.RSAConfiguration)
                return object;
            var message = new $root.NewPubKeyPayload.RSAConfiguration();
            if (object.key != null)
                if (typeof object.key === "string")
                    $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                else if (object.key.length)
                    message.key = object.key;
            switch (object.padding) {
            case "PSS":
            case 0:
                message.padding = 0;
                break;
            case "PKCS1v15":
            case 1:
                message.padding = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a RSAConfiguration message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NewPubKeyPayload.RSAConfiguration
         * @static
         * @param {NewPubKeyPayload.RSAConfiguration} message RSAConfiguration
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RSAConfiguration.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.key = options.bytes === String ? "" : [];
                object.padding = options.enums === String ? "PSS" : 0;
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = options.bytes === String ? $util.base64.encode(message.key, 0, message.key.length) : options.bytes === Array ? Array.prototype.slice.call(message.key) : message.key;
            if (message.padding != null && message.hasOwnProperty("padding"))
                object.padding = options.enums === String ? $root.NewPubKeyPayload.RSAConfiguration.Padding[message.padding] : message.padding;
            return object;
        };

        /**
         * Converts this RSAConfiguration to JSON.
         * @function toJSON
         * @memberof NewPubKeyPayload.RSAConfiguration
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RSAConfiguration.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Padding enum.
         * @name NewPubKeyPayload.RSAConfiguration.Padding
         * @enum {string}
         * @property {number} PSS=0 PSS value
         * @property {number} PKCS1v15=1 PKCS1v15 value
         */
        RSAConfiguration.Padding = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PSS"] = 0;
            values[valuesById[1] = "PKCS1v15"] = 1;
            return values;
        })();

        return RSAConfiguration;
    })();

    NewPubKeyPayload.ECDSAConfiguration = (function() {

        /**
         * Properties of a ECDSAConfiguration.
         * @memberof NewPubKeyPayload
         * @interface IECDSAConfiguration
         * @property {Uint8Array|null} [key] ECDSAConfiguration key
         * @property {NewPubKeyPayload.ECDSAConfiguration.EC|null} [ec] ECDSAConfiguration ec
         */

        /**
         * Constructs a new ECDSAConfiguration.
         * @memberof NewPubKeyPayload
         * @classdesc Represents a ECDSAConfiguration.
         * @implements IECDSAConfiguration
         * @constructor
         * @param {NewPubKeyPayload.IECDSAConfiguration=} [properties] Properties to set
         */
        function ECDSAConfiguration(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ECDSAConfiguration key.
         * @member {Uint8Array} key
         * @memberof NewPubKeyPayload.ECDSAConfiguration
         * @instance
         */
        ECDSAConfiguration.prototype.key = $util.newBuffer([]);

        /**
         * ECDSAConfiguration ec.
         * @member {NewPubKeyPayload.ECDSAConfiguration.EC} ec
         * @memberof NewPubKeyPayload.ECDSAConfiguration
         * @instance
         */
        ECDSAConfiguration.prototype.ec = 0;

        /**
         * Creates a new ECDSAConfiguration instance using the specified properties.
         * @function create
         * @memberof NewPubKeyPayload.ECDSAConfiguration
         * @static
         * @param {NewPubKeyPayload.IECDSAConfiguration=} [properties] Properties to set
         * @returns {NewPubKeyPayload.ECDSAConfiguration} ECDSAConfiguration instance
         */
        ECDSAConfiguration.create = function create(properties) {
            return new ECDSAConfiguration(properties);
        };

        /**
         * Encodes the specified ECDSAConfiguration message. Does not implicitly {@link NewPubKeyPayload.ECDSAConfiguration.verify|verify} messages.
         * @function encode
         * @memberof NewPubKeyPayload.ECDSAConfiguration
         * @static
         * @param {NewPubKeyPayload.IECDSAConfiguration} message ECDSAConfiguration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ECDSAConfiguration.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && message.hasOwnProperty("key"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.key);
            if (message.ec != null && message.hasOwnProperty("ec"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ec);
            return writer;
        };

        /**
         * Encodes the specified ECDSAConfiguration message, length delimited. Does not implicitly {@link NewPubKeyPayload.ECDSAConfiguration.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NewPubKeyPayload.ECDSAConfiguration
         * @static
         * @param {NewPubKeyPayload.IECDSAConfiguration} message ECDSAConfiguration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ECDSAConfiguration.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ECDSAConfiguration message from the specified reader or buffer.
         * @function decode
         * @memberof NewPubKeyPayload.ECDSAConfiguration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NewPubKeyPayload.ECDSAConfiguration} ECDSAConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ECDSAConfiguration.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NewPubKeyPayload.ECDSAConfiguration();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.ec = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ECDSAConfiguration message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NewPubKeyPayload.ECDSAConfiguration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NewPubKeyPayload.ECDSAConfiguration} ECDSAConfiguration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ECDSAConfiguration.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ECDSAConfiguration message.
         * @function verify
         * @memberof NewPubKeyPayload.ECDSAConfiguration
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ECDSAConfiguration.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                    return "key: buffer expected";
            if (message.ec != null && message.hasOwnProperty("ec"))
                switch (message.ec) {
                default:
                    return "ec: enum value expected";
                case 0:
                    break;
                }
            return null;
        };

        /**
         * Creates a ECDSAConfiguration message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NewPubKeyPayload.ECDSAConfiguration
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NewPubKeyPayload.ECDSAConfiguration} ECDSAConfiguration
         */
        ECDSAConfiguration.fromObject = function fromObject(object) {
            if (object instanceof $root.NewPubKeyPayload.ECDSAConfiguration)
                return object;
            var message = new $root.NewPubKeyPayload.ECDSAConfiguration();
            if (object.key != null)
                if (typeof object.key === "string")
                    $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                else if (object.key.length)
                    message.key = object.key;
            switch (object.ec) {
            case "SECP256k1":
            case 0:
                message.ec = 0;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a ECDSAConfiguration message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NewPubKeyPayload.ECDSAConfiguration
         * @static
         * @param {NewPubKeyPayload.ECDSAConfiguration} message ECDSAConfiguration
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ECDSAConfiguration.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.key = options.bytes === String ? "" : [];
                object.ec = options.enums === String ? "SECP256k1" : 0;
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = options.bytes === String ? $util.base64.encode(message.key, 0, message.key.length) : options.bytes === Array ? Array.prototype.slice.call(message.key) : message.key;
            if (message.ec != null && message.hasOwnProperty("ec"))
                object.ec = options.enums === String ? $root.NewPubKeyPayload.ECDSAConfiguration.EC[message.ec] : message.ec;
            return object;
        };

        /**
         * Converts this ECDSAConfiguration to JSON.
         * @function toJSON
         * @memberof NewPubKeyPayload.ECDSAConfiguration
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ECDSAConfiguration.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * EC enum.
         * @name NewPubKeyPayload.ECDSAConfiguration.EC
         * @enum {string}
         * @property {number} SECP256k1=0 SECP256k1 value
         */
        ECDSAConfiguration.EC = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SECP256k1"] = 0;
            return values;
        })();

        return ECDSAConfiguration;
    })();

    NewPubKeyPayload.Ed25519Configuration = (function() {

        /**
         * Properties of an Ed25519Configuration.
         * @memberof NewPubKeyPayload
         * @interface IEd25519Configuration
         * @property {Uint8Array|null} [key] Ed25519Configuration key
         */

        /**
         * Constructs a new Ed25519Configuration.
         * @memberof NewPubKeyPayload
         * @classdesc Represents an Ed25519Configuration.
         * @implements IEd25519Configuration
         * @constructor
         * @param {NewPubKeyPayload.IEd25519Configuration=} [properties] Properties to set
         */
        function Ed25519Configuration(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Ed25519Configuration key.
         * @member {Uint8Array} key
         * @memberof NewPubKeyPayload.Ed25519Configuration
         * @instance
         */
        Ed25519Configuration.prototype.key = $util.newBuffer([]);

        /**
         * Creates a new Ed25519Configuration instance using the specified properties.
         * @function create
         * @memberof NewPubKeyPayload.Ed25519Configuration
         * @static
         * @param {NewPubKeyPayload.IEd25519Configuration=} [properties] Properties to set
         * @returns {NewPubKeyPayload.Ed25519Configuration} Ed25519Configuration instance
         */
        Ed25519Configuration.create = function create(properties) {
            return new Ed25519Configuration(properties);
        };

        /**
         * Encodes the specified Ed25519Configuration message. Does not implicitly {@link NewPubKeyPayload.Ed25519Configuration.verify|verify} messages.
         * @function encode
         * @memberof NewPubKeyPayload.Ed25519Configuration
         * @static
         * @param {NewPubKeyPayload.IEd25519Configuration} message Ed25519Configuration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ed25519Configuration.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && message.hasOwnProperty("key"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.key);
            return writer;
        };

        /**
         * Encodes the specified Ed25519Configuration message, length delimited. Does not implicitly {@link NewPubKeyPayload.Ed25519Configuration.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NewPubKeyPayload.Ed25519Configuration
         * @static
         * @param {NewPubKeyPayload.IEd25519Configuration} message Ed25519Configuration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ed25519Configuration.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Ed25519Configuration message from the specified reader or buffer.
         * @function decode
         * @memberof NewPubKeyPayload.Ed25519Configuration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NewPubKeyPayload.Ed25519Configuration} Ed25519Configuration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ed25519Configuration.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NewPubKeyPayload.Ed25519Configuration();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Ed25519Configuration message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NewPubKeyPayload.Ed25519Configuration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NewPubKeyPayload.Ed25519Configuration} Ed25519Configuration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ed25519Configuration.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Ed25519Configuration message.
         * @function verify
         * @memberof NewPubKeyPayload.Ed25519Configuration
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ed25519Configuration.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                    return "key: buffer expected";
            return null;
        };

        /**
         * Creates an Ed25519Configuration message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NewPubKeyPayload.Ed25519Configuration
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NewPubKeyPayload.Ed25519Configuration} Ed25519Configuration
         */
        Ed25519Configuration.fromObject = function fromObject(object) {
            if (object instanceof $root.NewPubKeyPayload.Ed25519Configuration)
                return object;
            var message = new $root.NewPubKeyPayload.Ed25519Configuration();
            if (object.key != null)
                if (typeof object.key === "string")
                    $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                else if (object.key.length)
                    message.key = object.key;
            return message;
        };

        /**
         * Creates a plain object from an Ed25519Configuration message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NewPubKeyPayload.Ed25519Configuration
         * @static
         * @param {NewPubKeyPayload.Ed25519Configuration} message Ed25519Configuration
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ed25519Configuration.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.key = options.bytes === String ? "" : [];
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = options.bytes === String ? $util.base64.encode(message.key, 0, message.key.length) : options.bytes === Array ? Array.prototype.slice.call(message.key) : message.key;
            return object;
        };

        /**
         * Converts this Ed25519Configuration to JSON.
         * @function toJSON
         * @memberof NewPubKeyPayload.Ed25519Configuration
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ed25519Configuration.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Ed25519Configuration;
    })();

    return NewPubKeyPayload;
})();

$root.NewPubKeyStoreAndPayPayload = (function() {

    /**
     * Properties of a NewPubKeyStoreAndPayPayload.
     * @exports INewPubKeyStoreAndPayPayload
     * @interface INewPubKeyStoreAndPayPayload
     * @property {INewPubKeyPayload|null} [pubKeyPayload] NewPubKeyStoreAndPayPayload pubKeyPayload
     * @property {Uint8Array|null} [ownerPublicKey] NewPubKeyStoreAndPayPayload ownerPublicKey
     * @property {Uint8Array|null} [signatureByOwner] NewPubKeyStoreAndPayPayload signatureByOwner
     */

    /**
     * Constructs a new NewPubKeyStoreAndPayPayload.
     * @exports NewPubKeyStoreAndPayPayload
     * @classdesc Represents a NewPubKeyStoreAndPayPayload.
     * @implements INewPubKeyStoreAndPayPayload
     * @constructor
     * @param {INewPubKeyStoreAndPayPayload=} [properties] Properties to set
     */
    function NewPubKeyStoreAndPayPayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NewPubKeyStoreAndPayPayload pubKeyPayload.
     * @member {INewPubKeyPayload|null|undefined} pubKeyPayload
     * @memberof NewPubKeyStoreAndPayPayload
     * @instance
     */
    NewPubKeyStoreAndPayPayload.prototype.pubKeyPayload = null;

    /**
     * NewPubKeyStoreAndPayPayload ownerPublicKey.
     * @member {Uint8Array} ownerPublicKey
     * @memberof NewPubKeyStoreAndPayPayload
     * @instance
     */
    NewPubKeyStoreAndPayPayload.prototype.ownerPublicKey = $util.newBuffer([]);

    /**
     * NewPubKeyStoreAndPayPayload signatureByOwner.
     * @member {Uint8Array} signatureByOwner
     * @memberof NewPubKeyStoreAndPayPayload
     * @instance
     */
    NewPubKeyStoreAndPayPayload.prototype.signatureByOwner = $util.newBuffer([]);

    /**
     * Creates a new NewPubKeyStoreAndPayPayload instance using the specified properties.
     * @function create
     * @memberof NewPubKeyStoreAndPayPayload
     * @static
     * @param {INewPubKeyStoreAndPayPayload=} [properties] Properties to set
     * @returns {NewPubKeyStoreAndPayPayload} NewPubKeyStoreAndPayPayload instance
     */
    NewPubKeyStoreAndPayPayload.create = function create(properties) {
        return new NewPubKeyStoreAndPayPayload(properties);
    };

    /**
     * Encodes the specified NewPubKeyStoreAndPayPayload message. Does not implicitly {@link NewPubKeyStoreAndPayPayload.verify|verify} messages.
     * @function encode
     * @memberof NewPubKeyStoreAndPayPayload
     * @static
     * @param {INewPubKeyStoreAndPayPayload} message NewPubKeyStoreAndPayPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NewPubKeyStoreAndPayPayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.pubKeyPayload != null && message.hasOwnProperty("pubKeyPayload"))
            $root.NewPubKeyPayload.encode(message.pubKeyPayload, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.ownerPublicKey != null && message.hasOwnProperty("ownerPublicKey"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.ownerPublicKey);
        if (message.signatureByOwner != null && message.hasOwnProperty("signatureByOwner"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.signatureByOwner);
        return writer;
    };

    /**
     * Encodes the specified NewPubKeyStoreAndPayPayload message, length delimited. Does not implicitly {@link NewPubKeyStoreAndPayPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NewPubKeyStoreAndPayPayload
     * @static
     * @param {INewPubKeyStoreAndPayPayload} message NewPubKeyStoreAndPayPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NewPubKeyStoreAndPayPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NewPubKeyStoreAndPayPayload message from the specified reader or buffer.
     * @function decode
     * @memberof NewPubKeyStoreAndPayPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NewPubKeyStoreAndPayPayload} NewPubKeyStoreAndPayPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NewPubKeyStoreAndPayPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NewPubKeyStoreAndPayPayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.pubKeyPayload = $root.NewPubKeyPayload.decode(reader, reader.uint32());
                break;
            case 2:
                message.ownerPublicKey = reader.bytes();
                break;
            case 3:
                message.signatureByOwner = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NewPubKeyStoreAndPayPayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NewPubKeyStoreAndPayPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NewPubKeyStoreAndPayPayload} NewPubKeyStoreAndPayPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NewPubKeyStoreAndPayPayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NewPubKeyStoreAndPayPayload message.
     * @function verify
     * @memberof NewPubKeyStoreAndPayPayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NewPubKeyStoreAndPayPayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.pubKeyPayload != null && message.hasOwnProperty("pubKeyPayload")) {
            var error = $root.NewPubKeyPayload.verify(message.pubKeyPayload);
            if (error)
                return "pubKeyPayload." + error;
        }
        if (message.ownerPublicKey != null && message.hasOwnProperty("ownerPublicKey"))
            if (!(message.ownerPublicKey && typeof message.ownerPublicKey.length === "number" || $util.isString(message.ownerPublicKey)))
                return "ownerPublicKey: buffer expected";
        if (message.signatureByOwner != null && message.hasOwnProperty("signatureByOwner"))
            if (!(message.signatureByOwner && typeof message.signatureByOwner.length === "number" || $util.isString(message.signatureByOwner)))
                return "signatureByOwner: buffer expected";
        return null;
    };

    /**
     * Creates a NewPubKeyStoreAndPayPayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NewPubKeyStoreAndPayPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NewPubKeyStoreAndPayPayload} NewPubKeyStoreAndPayPayload
     */
    NewPubKeyStoreAndPayPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.NewPubKeyStoreAndPayPayload)
            return object;
        var message = new $root.NewPubKeyStoreAndPayPayload();
        if (object.pubKeyPayload != null) {
            if (typeof object.pubKeyPayload !== "object")
                throw TypeError(".NewPubKeyStoreAndPayPayload.pubKeyPayload: object expected");
            message.pubKeyPayload = $root.NewPubKeyPayload.fromObject(object.pubKeyPayload);
        }
        if (object.ownerPublicKey != null)
            if (typeof object.ownerPublicKey === "string")
                $util.base64.decode(object.ownerPublicKey, message.ownerPublicKey = $util.newBuffer($util.base64.length(object.ownerPublicKey)), 0);
            else if (object.ownerPublicKey.length)
                message.ownerPublicKey = object.ownerPublicKey;
        if (object.signatureByOwner != null)
            if (typeof object.signatureByOwner === "string")
                $util.base64.decode(object.signatureByOwner, message.signatureByOwner = $util.newBuffer($util.base64.length(object.signatureByOwner)), 0);
            else if (object.signatureByOwner.length)
                message.signatureByOwner = object.signatureByOwner;
        return message;
    };

    /**
     * Creates a plain object from a NewPubKeyStoreAndPayPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NewPubKeyStoreAndPayPayload
     * @static
     * @param {NewPubKeyStoreAndPayPayload} message NewPubKeyStoreAndPayPayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NewPubKeyStoreAndPayPayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.pubKeyPayload = null;
            object.ownerPublicKey = options.bytes === String ? "" : [];
            object.signatureByOwner = options.bytes === String ? "" : [];
        }
        if (message.pubKeyPayload != null && message.hasOwnProperty("pubKeyPayload"))
            object.pubKeyPayload = $root.NewPubKeyPayload.toObject(message.pubKeyPayload, options);
        if (message.ownerPublicKey != null && message.hasOwnProperty("ownerPublicKey"))
            object.ownerPublicKey = options.bytes === String ? $util.base64.encode(message.ownerPublicKey, 0, message.ownerPublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.ownerPublicKey) : message.ownerPublicKey;
        if (message.signatureByOwner != null && message.hasOwnProperty("signatureByOwner"))
            object.signatureByOwner = options.bytes === String ? $util.base64.encode(message.signatureByOwner, 0, message.signatureByOwner.length) : options.bytes === Array ? Array.prototype.slice.call(message.signatureByOwner) : message.signatureByOwner;
        return object;
    };

    /**
     * Converts this NewPubKeyStoreAndPayPayload to JSON.
     * @function toJSON
     * @memberof NewPubKeyStoreAndPayPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NewPubKeyStoreAndPayPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return NewPubKeyStoreAndPayPayload;
})();

$root.RevokePubKeyPayload = (function() {

    /**
     * Properties of a RevokePubKeyPayload.
     * @exports IRevokePubKeyPayload
     * @interface IRevokePubKeyPayload
     * @property {string|null} [address] RevokePubKeyPayload address
     */

    /**
     * Constructs a new RevokePubKeyPayload.
     * @exports RevokePubKeyPayload
     * @classdesc Represents a RevokePubKeyPayload.
     * @implements IRevokePubKeyPayload
     * @constructor
     * @param {IRevokePubKeyPayload=} [properties] Properties to set
     */
    function RevokePubKeyPayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RevokePubKeyPayload address.
     * @member {string} address
     * @memberof RevokePubKeyPayload
     * @instance
     */
    RevokePubKeyPayload.prototype.address = "";

    /**
     * Creates a new RevokePubKeyPayload instance using the specified properties.
     * @function create
     * @memberof RevokePubKeyPayload
     * @static
     * @param {IRevokePubKeyPayload=} [properties] Properties to set
     * @returns {RevokePubKeyPayload} RevokePubKeyPayload instance
     */
    RevokePubKeyPayload.create = function create(properties) {
        return new RevokePubKeyPayload(properties);
    };

    /**
     * Encodes the specified RevokePubKeyPayload message. Does not implicitly {@link RevokePubKeyPayload.verify|verify} messages.
     * @function encode
     * @memberof RevokePubKeyPayload
     * @static
     * @param {IRevokePubKeyPayload} message RevokePubKeyPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RevokePubKeyPayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.address != null && message.hasOwnProperty("address"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.address);
        return writer;
    };

    /**
     * Encodes the specified RevokePubKeyPayload message, length delimited. Does not implicitly {@link RevokePubKeyPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RevokePubKeyPayload
     * @static
     * @param {IRevokePubKeyPayload} message RevokePubKeyPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RevokePubKeyPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RevokePubKeyPayload message from the specified reader or buffer.
     * @function decode
     * @memberof RevokePubKeyPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RevokePubKeyPayload} RevokePubKeyPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RevokePubKeyPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RevokePubKeyPayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.address = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RevokePubKeyPayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RevokePubKeyPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RevokePubKeyPayload} RevokePubKeyPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RevokePubKeyPayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RevokePubKeyPayload message.
     * @function verify
     * @memberof RevokePubKeyPayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RevokePubKeyPayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.address != null && message.hasOwnProperty("address"))
            if (!$util.isString(message.address))
                return "address: string expected";
        return null;
    };

    /**
     * Creates a RevokePubKeyPayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RevokePubKeyPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RevokePubKeyPayload} RevokePubKeyPayload
     */
    RevokePubKeyPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.RevokePubKeyPayload)
            return object;
        var message = new $root.RevokePubKeyPayload();
        if (object.address != null)
            message.address = String(object.address);
        return message;
    };

    /**
     * Creates a plain object from a RevokePubKeyPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RevokePubKeyPayload
     * @static
     * @param {RevokePubKeyPayload} message RevokePubKeyPayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RevokePubKeyPayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.address = "";
        if (message.address != null && message.hasOwnProperty("address"))
            object.address = message.address;
        return object;
    };

    /**
     * Converts this RevokePubKeyPayload to JSON.
     * @function toJSON
     * @memberof RevokePubKeyPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RevokePubKeyPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RevokePubKeyPayload;
})();

$root.PubKeyStorage = (function() {

    /**
     * Properties of a PubKeyStorage.
     * @exports IPubKeyStorage
     * @interface IPubKeyStorage
     * @property {string|null} [owner] PubKeyStorage owner
     * @property {INewPubKeyPayload|null} [payload] PubKeyStorage payload
     * @property {boolean|null} [isRevoked] PubKeyStorage isRevoked
     */

    /**
     * Constructs a new PubKeyStorage.
     * @exports PubKeyStorage
     * @classdesc Represents a PubKeyStorage.
     * @implements IPubKeyStorage
     * @constructor
     * @param {IPubKeyStorage=} [properties] Properties to set
     */
    function PubKeyStorage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PubKeyStorage owner.
     * @member {string} owner
     * @memberof PubKeyStorage
     * @instance
     */
    PubKeyStorage.prototype.owner = "";

    /**
     * PubKeyStorage payload.
     * @member {INewPubKeyPayload|null|undefined} payload
     * @memberof PubKeyStorage
     * @instance
     */
    PubKeyStorage.prototype.payload = null;

    /**
     * PubKeyStorage isRevoked.
     * @member {boolean} isRevoked
     * @memberof PubKeyStorage
     * @instance
     */
    PubKeyStorage.prototype.isRevoked = false;

    /**
     * Creates a new PubKeyStorage instance using the specified properties.
     * @function create
     * @memberof PubKeyStorage
     * @static
     * @param {IPubKeyStorage=} [properties] Properties to set
     * @returns {PubKeyStorage} PubKeyStorage instance
     */
    PubKeyStorage.create = function create(properties) {
        return new PubKeyStorage(properties);
    };

    /**
     * Encodes the specified PubKeyStorage message. Does not implicitly {@link PubKeyStorage.verify|verify} messages.
     * @function encode
     * @memberof PubKeyStorage
     * @static
     * @param {IPubKeyStorage} message PubKeyStorage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PubKeyStorage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.owner != null && message.hasOwnProperty("owner"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.owner);
        if (message.payload != null && message.hasOwnProperty("payload"))
            $root.NewPubKeyPayload.encode(message.payload, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.isRevoked != null && message.hasOwnProperty("isRevoked"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isRevoked);
        return writer;
    };

    /**
     * Encodes the specified PubKeyStorage message, length delimited. Does not implicitly {@link PubKeyStorage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PubKeyStorage
     * @static
     * @param {IPubKeyStorage} message PubKeyStorage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PubKeyStorage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PubKeyStorage message from the specified reader or buffer.
     * @function decode
     * @memberof PubKeyStorage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PubKeyStorage} PubKeyStorage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PubKeyStorage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PubKeyStorage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.owner = reader.string();
                break;
            case 2:
                message.payload = $root.NewPubKeyPayload.decode(reader, reader.uint32());
                break;
            case 3:
                message.isRevoked = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PubKeyStorage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PubKeyStorage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PubKeyStorage} PubKeyStorage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PubKeyStorage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PubKeyStorage message.
     * @function verify
     * @memberof PubKeyStorage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PubKeyStorage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.owner != null && message.hasOwnProperty("owner"))
            if (!$util.isString(message.owner))
                return "owner: string expected";
        if (message.payload != null && message.hasOwnProperty("payload")) {
            var error = $root.NewPubKeyPayload.verify(message.payload);
            if (error)
                return "payload." + error;
        }
        if (message.isRevoked != null && message.hasOwnProperty("isRevoked"))
            if (typeof message.isRevoked !== "boolean")
                return "isRevoked: boolean expected";
        return null;
    };

    /**
     * Creates a PubKeyStorage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PubKeyStorage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PubKeyStorage} PubKeyStorage
     */
    PubKeyStorage.fromObject = function fromObject(object) {
        if (object instanceof $root.PubKeyStorage)
            return object;
        var message = new $root.PubKeyStorage();
        if (object.owner != null)
            message.owner = String(object.owner);
        if (object.payload != null) {
            if (typeof object.payload !== "object")
                throw TypeError(".PubKeyStorage.payload: object expected");
            message.payload = $root.NewPubKeyPayload.fromObject(object.payload);
        }
        if (object.isRevoked != null)
            message.isRevoked = Boolean(object.isRevoked);
        return message;
    };

    /**
     * Creates a plain object from a PubKeyStorage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PubKeyStorage
     * @static
     * @param {PubKeyStorage} message PubKeyStorage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PubKeyStorage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.owner = "";
            object.payload = null;
            object.isRevoked = false;
        }
        if (message.owner != null && message.hasOwnProperty("owner"))
            object.owner = message.owner;
        if (message.payload != null && message.hasOwnProperty("payload"))
            object.payload = $root.NewPubKeyPayload.toObject(message.payload, options);
        if (message.isRevoked != null && message.hasOwnProperty("isRevoked"))
            object.isRevoked = message.isRevoked;
        return object;
    };

    /**
     * Converts this PubKeyStorage to JSON.
     * @function toJSON
     * @memberof PubKeyStorage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PubKeyStorage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PubKeyStorage;
})();

$root.TransactionPayload = (function() {

    /**
     * Properties of a TransactionPayload.
     * @exports ITransactionPayload
     * @interface ITransactionPayload
     * @property {number|null} [method] TransactionPayload method
     * @property {Uint8Array|null} [data] TransactionPayload data
     */

    /**
     * Constructs a new TransactionPayload.
     * @exports TransactionPayload
     * @classdesc Represents a TransactionPayload.
     * @implements ITransactionPayload
     * @constructor
     * @param {ITransactionPayload=} [properties] Properties to set
     */
    function TransactionPayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TransactionPayload method.
     * @member {number} method
     * @memberof TransactionPayload
     * @instance
     */
    TransactionPayload.prototype.method = 0;

    /**
     * TransactionPayload data.
     * @member {Uint8Array} data
     * @memberof TransactionPayload
     * @instance
     */
    TransactionPayload.prototype.data = $util.newBuffer([]);

    /**
     * Creates a new TransactionPayload instance using the specified properties.
     * @function create
     * @memberof TransactionPayload
     * @static
     * @param {ITransactionPayload=} [properties] Properties to set
     * @returns {TransactionPayload} TransactionPayload instance
     */
    TransactionPayload.create = function create(properties) {
        return new TransactionPayload(properties);
    };

    /**
     * Encodes the specified TransactionPayload message. Does not implicitly {@link TransactionPayload.verify|verify} messages.
     * @function encode
     * @memberof TransactionPayload
     * @static
     * @param {ITransactionPayload} message TransactionPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransactionPayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.method != null && message.hasOwnProperty("method"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.method);
        if (message.data != null && message.hasOwnProperty("data"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
        return writer;
    };

    /**
     * Encodes the specified TransactionPayload message, length delimited. Does not implicitly {@link TransactionPayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TransactionPayload
     * @static
     * @param {ITransactionPayload} message TransactionPayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransactionPayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TransactionPayload message from the specified reader or buffer.
     * @function decode
     * @memberof TransactionPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TransactionPayload} TransactionPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransactionPayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TransactionPayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.method = reader.uint32();
                break;
            case 2:
                message.data = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TransactionPayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TransactionPayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TransactionPayload} TransactionPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransactionPayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TransactionPayload message.
     * @function verify
     * @memberof TransactionPayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TransactionPayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.method != null && message.hasOwnProperty("method"))
            if (!$util.isInteger(message.method))
                return "method: integer expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        return null;
    };

    /**
     * Creates a TransactionPayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TransactionPayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TransactionPayload} TransactionPayload
     */
    TransactionPayload.fromObject = function fromObject(object) {
        if (object instanceof $root.TransactionPayload)
            return object;
        var message = new $root.TransactionPayload();
        if (object.method != null)
            message.method = object.method >>> 0;
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length)
                message.data = object.data;
        return message;
    };

    /**
     * Creates a plain object from a TransactionPayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TransactionPayload
     * @static
     * @param {TransactionPayload} message TransactionPayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TransactionPayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.method = 0;
            object.data = options.bytes === String ? "" : [];
        }
        if (message.method != null && message.hasOwnProperty("method"))
            object.method = message.method;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        return object;
    };

    /**
     * Converts this TransactionPayload to JSON.
     * @function toJSON
     * @memberof TransactionPayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TransactionPayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TransactionPayload;
})();

$root.MessageError = (function() {

    /**
     * Properties of a MessageError.
     * @exports IMessageError
     * @interface IMessageError
     * @property {string|null} [description] MessageError description
     * @property {number|Long|null} [code] MessageError code
     */

    /**
     * Constructs a new MessageError.
     * @exports MessageError
     * @classdesc Represents a MessageError.
     * @implements IMessageError
     * @constructor
     * @param {IMessageError=} [properties] Properties to set
     */
    function MessageError(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MessageError description.
     * @member {string} description
     * @memberof MessageError
     * @instance
     */
    MessageError.prototype.description = "";

    /**
     * MessageError code.
     * @member {number|Long} code
     * @memberof MessageError
     * @instance
     */
    MessageError.prototype.code = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new MessageError instance using the specified properties.
     * @function create
     * @memberof MessageError
     * @static
     * @param {IMessageError=} [properties] Properties to set
     * @returns {MessageError} MessageError instance
     */
    MessageError.create = function create(properties) {
        return new MessageError(properties);
    };

    /**
     * Encodes the specified MessageError message. Does not implicitly {@link MessageError.verify|verify} messages.
     * @function encode
     * @memberof MessageError
     * @static
     * @param {IMessageError} message MessageError message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MessageError.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.description != null && message.hasOwnProperty("description"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.description);
        if (message.code != null && message.hasOwnProperty("code"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.code);
        return writer;
    };

    /**
     * Encodes the specified MessageError message, length delimited. Does not implicitly {@link MessageError.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MessageError
     * @static
     * @param {IMessageError} message MessageError message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MessageError.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MessageError message from the specified reader or buffer.
     * @function decode
     * @memberof MessageError
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MessageError} MessageError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MessageError.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MessageError();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.description = reader.string();
                break;
            case 2:
                message.code = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MessageError message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MessageError
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MessageError} MessageError
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MessageError.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MessageError message.
     * @function verify
     * @memberof MessageError
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MessageError.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.description != null && message.hasOwnProperty("description"))
            if (!$util.isString(message.description))
                return "description: string expected";
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isInteger(message.code) && !(message.code && $util.isInteger(message.code.low) && $util.isInteger(message.code.high)))
                return "code: integer|Long expected";
        return null;
    };

    /**
     * Creates a MessageError message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MessageError
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MessageError} MessageError
     */
    MessageError.fromObject = function fromObject(object) {
        if (object instanceof $root.MessageError)
            return object;
        var message = new $root.MessageError();
        if (object.description != null)
            message.description = String(object.description);
        if (object.code != null)
            if ($util.Long)
                (message.code = $util.Long.fromValue(object.code)).unsigned = true;
            else if (typeof object.code === "string")
                message.code = parseInt(object.code, 10);
            else if (typeof object.code === "number")
                message.code = object.code;
            else if (typeof object.code === "object")
                message.code = new $util.LongBits(object.code.low >>> 0, object.code.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a MessageError message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MessageError
     * @static
     * @param {MessageError} message MessageError
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MessageError.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.description = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.code = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.code = options.longs === String ? "0" : 0;
        }
        if (message.description != null && message.hasOwnProperty("description"))
            object.description = message.description;
        if (message.code != null && message.hasOwnProperty("code"))
            if (typeof message.code === "number")
                object.code = options.longs === String ? String(message.code) : message.code;
            else
                object.code = options.longs === String ? $util.Long.prototype.toString.call(message.code) : options.longs === Number ? new $util.LongBits(message.code.low >>> 0, message.code.high >>> 0).toNumber(true) : message.code;
        return object;
    };

    /**
     * Converts this MessageError to JSON.
     * @function toJSON
     * @memberof MessageError
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MessageError.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MessageError;
})();

$root.Message = (function() {

    /**
     * Properties of a Message.
     * @exports IMessage
     * @interface IMessage
     * @property {Message.MessageType|null} [messageType] Message messageType
     * @property {string|null} [correlationId] Message correlationId
     * @property {Uint8Array|null} [content] Message content
     */

    /**
     * Constructs a new Message.
     * @exports Message
     * @classdesc Represents a Message.
     * @implements IMessage
     * @constructor
     * @param {IMessage=} [properties] Properties to set
     */
    function Message(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Message messageType.
     * @member {Message.MessageType} messageType
     * @memberof Message
     * @instance
     */
    Message.prototype.messageType = 0;

    /**
     * Message correlationId.
     * @member {string} correlationId
     * @memberof Message
     * @instance
     */
    Message.prototype.correlationId = "";

    /**
     * Message content.
     * @member {Uint8Array} content
     * @memberof Message
     * @instance
     */
    Message.prototype.content = $util.newBuffer([]);

    /**
     * Creates a new Message instance using the specified properties.
     * @function create
     * @memberof Message
     * @static
     * @param {IMessage=} [properties] Properties to set
     * @returns {Message} Message instance
     */
    Message.create = function create(properties) {
        return new Message(properties);
    };

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @function encode
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.messageType != null && message.hasOwnProperty("messageType"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.messageType);
        if (message.correlationId != null && message.hasOwnProperty("correlationId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.correlationId);
        if (message.content != null && message.hasOwnProperty("content"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.content);
        return writer;
    };

    /**
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @function decode
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.messageType = reader.int32();
                break;
            case 2:
                message.correlationId = reader.string();
                break;
            case 3:
                message.content = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Message message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Message message.
     * @function verify
     * @memberof Message
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Message.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.messageType != null && message.hasOwnProperty("messageType"))
            switch (message.messageType) {
            default:
                return "messageType: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.correlationId != null && message.hasOwnProperty("correlationId"))
            if (!$util.isString(message.correlationId))
                return "correlationId: string expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!(message.content && typeof message.content.length === "number" || $util.isString(message.content)))
                return "content: buffer expected";
        return null;
    };

    /**
     * Creates a Message message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Message
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Message} Message
     */
    Message.fromObject = function fromObject(object) {
        if (object instanceof $root.Message)
            return object;
        var message = new $root.Message();
        switch (object.messageType) {
        case "CLIENT_SEAL_REQUEST":
        case 0:
            message.messageType = 0;
            break;
        case "CLIENT_SEAL_RESPONSE":
        case 1:
            message.messageType = 1;
            break;
        case "INVALID_MESSAGE":
        case 2:
            message.messageType = 2;
            break;
        }
        if (object.correlationId != null)
            message.correlationId = String(object.correlationId);
        if (object.content != null)
            if (typeof object.content === "string")
                $util.base64.decode(object.content, message.content = $util.newBuffer($util.base64.length(object.content)), 0);
            else if (object.content.length)
                message.content = object.content;
        return message;
    };

    /**
     * Creates a plain object from a Message message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Message
     * @static
     * @param {Message} message Message
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Message.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.messageType = options.enums === String ? "CLIENT_SEAL_REQUEST" : 0;
            object.correlationId = "";
            object.content = options.bytes === String ? "" : [];
        }
        if (message.messageType != null && message.hasOwnProperty("messageType"))
            object.messageType = options.enums === String ? $root.Message.MessageType[message.messageType] : message.messageType;
        if (message.correlationId != null && message.hasOwnProperty("correlationId"))
            object.correlationId = message.correlationId;
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = options.bytes === String ? $util.base64.encode(message.content, 0, message.content.length) : options.bytes === Array ? Array.prototype.slice.call(message.content) : message.content;
        return object;
    };

    /**
     * Converts this Message to JSON.
     * @function toJSON
     * @memberof Message
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Message.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * MessageType enum.
     * @name Message.MessageType
     * @enum {string}
     * @property {number} CLIENT_SEAL_REQUEST=0 CLIENT_SEAL_REQUEST value
     * @property {number} CLIENT_SEAL_RESPONSE=1 CLIENT_SEAL_RESPONSE value
     * @property {number} INVALID_MESSAGE=2 INVALID_MESSAGE value
     */
    Message.MessageType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CLIENT_SEAL_REQUEST"] = 0;
        values[valuesById[1] = "CLIENT_SEAL_RESPONSE"] = 1;
        values[valuesById[2] = "INVALID_MESSAGE"] = 2;
        return values;
    })();

    return Message;
})();

$root.Setting = (function() {

    /**
     * Properties of a Setting.
     * @exports ISetting
     * @interface ISetting
     * @property {Array.<Setting.IEntry>|null} [entries] Setting entries
     */

    /**
     * Constructs a new Setting.
     * @exports Setting
     * @classdesc Represents a Setting.
     * @implements ISetting
     * @constructor
     * @param {ISetting=} [properties] Properties to set
     */
    function Setting(properties) {
        this.entries = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Setting entries.
     * @member {Array.<Setting.IEntry>} entries
     * @memberof Setting
     * @instance
     */
    Setting.prototype.entries = $util.emptyArray;

    /**
     * Creates a new Setting instance using the specified properties.
     * @function create
     * @memberof Setting
     * @static
     * @param {ISetting=} [properties] Properties to set
     * @returns {Setting} Setting instance
     */
    Setting.create = function create(properties) {
        return new Setting(properties);
    };

    /**
     * Encodes the specified Setting message. Does not implicitly {@link Setting.verify|verify} messages.
     * @function encode
     * @memberof Setting
     * @static
     * @param {ISetting} message Setting message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Setting.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.entries != null && message.entries.length)
            for (var i = 0; i < message.entries.length; ++i)
                $root.Setting.Entry.encode(message.entries[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Setting message, length delimited. Does not implicitly {@link Setting.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Setting
     * @static
     * @param {ISetting} message Setting message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Setting.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Setting message from the specified reader or buffer.
     * @function decode
     * @memberof Setting
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Setting} Setting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Setting.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Setting();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.entries && message.entries.length))
                    message.entries = [];
                message.entries.push($root.Setting.Entry.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Setting message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Setting
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Setting} Setting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Setting.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Setting message.
     * @function verify
     * @memberof Setting
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Setting.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.entries != null && message.hasOwnProperty("entries")) {
            if (!Array.isArray(message.entries))
                return "entries: array expected";
            for (var i = 0; i < message.entries.length; ++i) {
                var error = $root.Setting.Entry.verify(message.entries[i]);
                if (error)
                    return "entries." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Setting message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Setting
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Setting} Setting
     */
    Setting.fromObject = function fromObject(object) {
        if (object instanceof $root.Setting)
            return object;
        var message = new $root.Setting();
        if (object.entries) {
            if (!Array.isArray(object.entries))
                throw TypeError(".Setting.entries: array expected");
            message.entries = [];
            for (var i = 0; i < object.entries.length; ++i) {
                if (typeof object.entries[i] !== "object")
                    throw TypeError(".Setting.entries: object expected");
                message.entries[i] = $root.Setting.Entry.fromObject(object.entries[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Setting message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Setting
     * @static
     * @param {Setting} message Setting
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Setting.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.entries = [];
        if (message.entries && message.entries.length) {
            object.entries = [];
            for (var j = 0; j < message.entries.length; ++j)
                object.entries[j] = $root.Setting.Entry.toObject(message.entries[j], options);
        }
        return object;
    };

    /**
     * Converts this Setting to JSON.
     * @function toJSON
     * @memberof Setting
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Setting.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    Setting.Entry = (function() {

        /**
         * Properties of an Entry.
         * @memberof Setting
         * @interface IEntry
         * @property {string|null} [key] Entry key
         * @property {string|null} [value] Entry value
         */

        /**
         * Constructs a new Entry.
         * @memberof Setting
         * @classdesc Represents an Entry.
         * @implements IEntry
         * @constructor
         * @param {Setting.IEntry=} [properties] Properties to set
         */
        function Entry(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Entry key.
         * @member {string} key
         * @memberof Setting.Entry
         * @instance
         */
        Entry.prototype.key = "";

        /**
         * Entry value.
         * @member {string} value
         * @memberof Setting.Entry
         * @instance
         */
        Entry.prototype.value = "";

        /**
         * Creates a new Entry instance using the specified properties.
         * @function create
         * @memberof Setting.Entry
         * @static
         * @param {Setting.IEntry=} [properties] Properties to set
         * @returns {Setting.Entry} Entry instance
         */
        Entry.create = function create(properties) {
            return new Entry(properties);
        };

        /**
         * Encodes the specified Entry message. Does not implicitly {@link Setting.Entry.verify|verify} messages.
         * @function encode
         * @memberof Setting.Entry
         * @static
         * @param {Setting.IEntry} message Entry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Entry.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && message.hasOwnProperty("key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified Entry message, length delimited. Does not implicitly {@link Setting.Entry.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Setting.Entry
         * @static
         * @param {Setting.IEntry} message Entry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Entry.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Entry message from the specified reader or buffer.
         * @function decode
         * @memberof Setting.Entry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Setting.Entry} Entry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Entry.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Setting.Entry();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Entry message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Setting.Entry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Setting.Entry} Entry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Entry.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Entry message.
         * @function verify
         * @memberof Setting.Entry
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Entry.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };

        /**
         * Creates an Entry message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Setting.Entry
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Setting.Entry} Entry
         */
        Entry.fromObject = function fromObject(object) {
            if (object instanceof $root.Setting.Entry)
                return object;
            var message = new $root.Setting.Entry();
            if (object.key != null)
                message.key = String(object.key);
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };

        /**
         * Creates a plain object from an Entry message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Setting.Entry
         * @static
         * @param {Setting.Entry} message Entry
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Entry.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.key = "";
                object.value = "";
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this Entry to JSON.
         * @function toJSON
         * @memberof Setting.Entry
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Entry.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Entry;
    })();

    return Setting;
})();

$root.TransactionHeader = (function() {

    /**
     * Properties of a TransactionHeader.
     * @exports ITransactionHeader
     * @interface ITransactionHeader
     * @property {string|null} [batcherPublicKey] TransactionHeader batcherPublicKey
     * @property {Array.<string>|null} [dependencies] TransactionHeader dependencies
     * @property {string|null} [familyName] TransactionHeader familyName
     * @property {string|null} [familyVersion] TransactionHeader familyVersion
     * @property {Array.<string>|null} [inputs] TransactionHeader inputs
     * @property {string|null} [nonce] TransactionHeader nonce
     * @property {Array.<string>|null} [outputs] TransactionHeader outputs
     * @property {string|null} [payloadSha512] TransactionHeader payloadSha512
     * @property {string|null} [signerPublicKey] TransactionHeader signerPublicKey
     */

    /**
     * Constructs a new TransactionHeader.
     * @exports TransactionHeader
     * @classdesc Represents a TransactionHeader.
     * @implements ITransactionHeader
     * @constructor
     * @param {ITransactionHeader=} [properties] Properties to set
     */
    function TransactionHeader(properties) {
        this.dependencies = [];
        this.inputs = [];
        this.outputs = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TransactionHeader batcherPublicKey.
     * @member {string} batcherPublicKey
     * @memberof TransactionHeader
     * @instance
     */
    TransactionHeader.prototype.batcherPublicKey = "";

    /**
     * TransactionHeader dependencies.
     * @member {Array.<string>} dependencies
     * @memberof TransactionHeader
     * @instance
     */
    TransactionHeader.prototype.dependencies = $util.emptyArray;

    /**
     * TransactionHeader familyName.
     * @member {string} familyName
     * @memberof TransactionHeader
     * @instance
     */
    TransactionHeader.prototype.familyName = "";

    /**
     * TransactionHeader familyVersion.
     * @member {string} familyVersion
     * @memberof TransactionHeader
     * @instance
     */
    TransactionHeader.prototype.familyVersion = "";

    /**
     * TransactionHeader inputs.
     * @member {Array.<string>} inputs
     * @memberof TransactionHeader
     * @instance
     */
    TransactionHeader.prototype.inputs = $util.emptyArray;

    /**
     * TransactionHeader nonce.
     * @member {string} nonce
     * @memberof TransactionHeader
     * @instance
     */
    TransactionHeader.prototype.nonce = "";

    /**
     * TransactionHeader outputs.
     * @member {Array.<string>} outputs
     * @memberof TransactionHeader
     * @instance
     */
    TransactionHeader.prototype.outputs = $util.emptyArray;

    /**
     * TransactionHeader payloadSha512.
     * @member {string} payloadSha512
     * @memberof TransactionHeader
     * @instance
     */
    TransactionHeader.prototype.payloadSha512 = "";

    /**
     * TransactionHeader signerPublicKey.
     * @member {string} signerPublicKey
     * @memberof TransactionHeader
     * @instance
     */
    TransactionHeader.prototype.signerPublicKey = "";

    /**
     * Creates a new TransactionHeader instance using the specified properties.
     * @function create
     * @memberof TransactionHeader
     * @static
     * @param {ITransactionHeader=} [properties] Properties to set
     * @returns {TransactionHeader} TransactionHeader instance
     */
    TransactionHeader.create = function create(properties) {
        return new TransactionHeader(properties);
    };

    /**
     * Encodes the specified TransactionHeader message. Does not implicitly {@link TransactionHeader.verify|verify} messages.
     * @function encode
     * @memberof TransactionHeader
     * @static
     * @param {ITransactionHeader} message TransactionHeader message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransactionHeader.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.batcherPublicKey != null && message.hasOwnProperty("batcherPublicKey"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.batcherPublicKey);
        if (message.dependencies != null && message.dependencies.length)
            for (var i = 0; i < message.dependencies.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.dependencies[i]);
        if (message.familyName != null && message.hasOwnProperty("familyName"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.familyName);
        if (message.familyVersion != null && message.hasOwnProperty("familyVersion"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.familyVersion);
        if (message.inputs != null && message.inputs.length)
            for (var i = 0; i < message.inputs.length; ++i)
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.inputs[i]);
        if (message.nonce != null && message.hasOwnProperty("nonce"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.nonce);
        if (message.outputs != null && message.outputs.length)
            for (var i = 0; i < message.outputs.length; ++i)
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.outputs[i]);
        if (message.payloadSha512 != null && message.hasOwnProperty("payloadSha512"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.payloadSha512);
        if (message.signerPublicKey != null && message.hasOwnProperty("signerPublicKey"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.signerPublicKey);
        return writer;
    };

    /**
     * Encodes the specified TransactionHeader message, length delimited. Does not implicitly {@link TransactionHeader.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TransactionHeader
     * @static
     * @param {ITransactionHeader} message TransactionHeader message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransactionHeader.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TransactionHeader message from the specified reader or buffer.
     * @function decode
     * @memberof TransactionHeader
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TransactionHeader} TransactionHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransactionHeader.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TransactionHeader();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.batcherPublicKey = reader.string();
                break;
            case 2:
                if (!(message.dependencies && message.dependencies.length))
                    message.dependencies = [];
                message.dependencies.push(reader.string());
                break;
            case 3:
                message.familyName = reader.string();
                break;
            case 4:
                message.familyVersion = reader.string();
                break;
            case 5:
                if (!(message.inputs && message.inputs.length))
                    message.inputs = [];
                message.inputs.push(reader.string());
                break;
            case 6:
                message.nonce = reader.string();
                break;
            case 7:
                if (!(message.outputs && message.outputs.length))
                    message.outputs = [];
                message.outputs.push(reader.string());
                break;
            case 9:
                message.payloadSha512 = reader.string();
                break;
            case 10:
                message.signerPublicKey = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TransactionHeader message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TransactionHeader
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TransactionHeader} TransactionHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransactionHeader.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TransactionHeader message.
     * @function verify
     * @memberof TransactionHeader
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TransactionHeader.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.batcherPublicKey != null && message.hasOwnProperty("batcherPublicKey"))
            if (!$util.isString(message.batcherPublicKey))
                return "batcherPublicKey: string expected";
        if (message.dependencies != null && message.hasOwnProperty("dependencies")) {
            if (!Array.isArray(message.dependencies))
                return "dependencies: array expected";
            for (var i = 0; i < message.dependencies.length; ++i)
                if (!$util.isString(message.dependencies[i]))
                    return "dependencies: string[] expected";
        }
        if (message.familyName != null && message.hasOwnProperty("familyName"))
            if (!$util.isString(message.familyName))
                return "familyName: string expected";
        if (message.familyVersion != null && message.hasOwnProperty("familyVersion"))
            if (!$util.isString(message.familyVersion))
                return "familyVersion: string expected";
        if (message.inputs != null && message.hasOwnProperty("inputs")) {
            if (!Array.isArray(message.inputs))
                return "inputs: array expected";
            for (var i = 0; i < message.inputs.length; ++i)
                if (!$util.isString(message.inputs[i]))
                    return "inputs: string[] expected";
        }
        if (message.nonce != null && message.hasOwnProperty("nonce"))
            if (!$util.isString(message.nonce))
                return "nonce: string expected";
        if (message.outputs != null && message.hasOwnProperty("outputs")) {
            if (!Array.isArray(message.outputs))
                return "outputs: array expected";
            for (var i = 0; i < message.outputs.length; ++i)
                if (!$util.isString(message.outputs[i]))
                    return "outputs: string[] expected";
        }
        if (message.payloadSha512 != null && message.hasOwnProperty("payloadSha512"))
            if (!$util.isString(message.payloadSha512))
                return "payloadSha512: string expected";
        if (message.signerPublicKey != null && message.hasOwnProperty("signerPublicKey"))
            if (!$util.isString(message.signerPublicKey))
                return "signerPublicKey: string expected";
        return null;
    };

    /**
     * Creates a TransactionHeader message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TransactionHeader
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TransactionHeader} TransactionHeader
     */
    TransactionHeader.fromObject = function fromObject(object) {
        if (object instanceof $root.TransactionHeader)
            return object;
        var message = new $root.TransactionHeader();
        if (object.batcherPublicKey != null)
            message.batcherPublicKey = String(object.batcherPublicKey);
        if (object.dependencies) {
            if (!Array.isArray(object.dependencies))
                throw TypeError(".TransactionHeader.dependencies: array expected");
            message.dependencies = [];
            for (var i = 0; i < object.dependencies.length; ++i)
                message.dependencies[i] = String(object.dependencies[i]);
        }
        if (object.familyName != null)
            message.familyName = String(object.familyName);
        if (object.familyVersion != null)
            message.familyVersion = String(object.familyVersion);
        if (object.inputs) {
            if (!Array.isArray(object.inputs))
                throw TypeError(".TransactionHeader.inputs: array expected");
            message.inputs = [];
            for (var i = 0; i < object.inputs.length; ++i)
                message.inputs[i] = String(object.inputs[i]);
        }
        if (object.nonce != null)
            message.nonce = String(object.nonce);
        if (object.outputs) {
            if (!Array.isArray(object.outputs))
                throw TypeError(".TransactionHeader.outputs: array expected");
            message.outputs = [];
            for (var i = 0; i < object.outputs.length; ++i)
                message.outputs[i] = String(object.outputs[i]);
        }
        if (object.payloadSha512 != null)
            message.payloadSha512 = String(object.payloadSha512);
        if (object.signerPublicKey != null)
            message.signerPublicKey = String(object.signerPublicKey);
        return message;
    };

    /**
     * Creates a plain object from a TransactionHeader message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TransactionHeader
     * @static
     * @param {TransactionHeader} message TransactionHeader
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TransactionHeader.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.dependencies = [];
            object.inputs = [];
            object.outputs = [];
        }
        if (options.defaults) {
            object.batcherPublicKey = "";
            object.familyName = "";
            object.familyVersion = "";
            object.nonce = "";
            object.payloadSha512 = "";
            object.signerPublicKey = "";
        }
        if (message.batcherPublicKey != null && message.hasOwnProperty("batcherPublicKey"))
            object.batcherPublicKey = message.batcherPublicKey;
        if (message.dependencies && message.dependencies.length) {
            object.dependencies = [];
            for (var j = 0; j < message.dependencies.length; ++j)
                object.dependencies[j] = message.dependencies[j];
        }
        if (message.familyName != null && message.hasOwnProperty("familyName"))
            object.familyName = message.familyName;
        if (message.familyVersion != null && message.hasOwnProperty("familyVersion"))
            object.familyVersion = message.familyVersion;
        if (message.inputs && message.inputs.length) {
            object.inputs = [];
            for (var j = 0; j < message.inputs.length; ++j)
                object.inputs[j] = message.inputs[j];
        }
        if (message.nonce != null && message.hasOwnProperty("nonce"))
            object.nonce = message.nonce;
        if (message.outputs && message.outputs.length) {
            object.outputs = [];
            for (var j = 0; j < message.outputs.length; ++j)
                object.outputs[j] = message.outputs[j];
        }
        if (message.payloadSha512 != null && message.hasOwnProperty("payloadSha512"))
            object.payloadSha512 = message.payloadSha512;
        if (message.signerPublicKey != null && message.hasOwnProperty("signerPublicKey"))
            object.signerPublicKey = message.signerPublicKey;
        return object;
    };

    /**
     * Converts this TransactionHeader to JSON.
     * @function toJSON
     * @memberof TransactionHeader
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TransactionHeader.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TransactionHeader;
})();

$root.Transaction = (function() {

    /**
     * Properties of a Transaction.
     * @exports ITransaction
     * @interface ITransaction
     * @property {Uint8Array|null} [header] Transaction header
     * @property {string|null} [headerSignature] Transaction headerSignature
     * @property {Uint8Array|null} [payload] Transaction payload
     */

    /**
     * Constructs a new Transaction.
     * @exports Transaction
     * @classdesc Represents a Transaction.
     * @implements ITransaction
     * @constructor
     * @param {ITransaction=} [properties] Properties to set
     */
    function Transaction(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Transaction header.
     * @member {Uint8Array} header
     * @memberof Transaction
     * @instance
     */
    Transaction.prototype.header = $util.newBuffer([]);

    /**
     * Transaction headerSignature.
     * @member {string} headerSignature
     * @memberof Transaction
     * @instance
     */
    Transaction.prototype.headerSignature = "";

    /**
     * Transaction payload.
     * @member {Uint8Array} payload
     * @memberof Transaction
     * @instance
     */
    Transaction.prototype.payload = $util.newBuffer([]);

    /**
     * Creates a new Transaction instance using the specified properties.
     * @function create
     * @memberof Transaction
     * @static
     * @param {ITransaction=} [properties] Properties to set
     * @returns {Transaction} Transaction instance
     */
    Transaction.create = function create(properties) {
        return new Transaction(properties);
    };

    /**
     * Encodes the specified Transaction message. Does not implicitly {@link Transaction.verify|verify} messages.
     * @function encode
     * @memberof Transaction
     * @static
     * @param {ITransaction} message Transaction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Transaction.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.header != null && message.hasOwnProperty("header"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.header);
        if (message.headerSignature != null && message.hasOwnProperty("headerSignature"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.headerSignature);
        if (message.payload != null && message.hasOwnProperty("payload"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.payload);
        return writer;
    };

    /**
     * Encodes the specified Transaction message, length delimited. Does not implicitly {@link Transaction.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Transaction
     * @static
     * @param {ITransaction} message Transaction message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Transaction.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Transaction message from the specified reader or buffer.
     * @function decode
     * @memberof Transaction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Transaction} Transaction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Transaction.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Transaction();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.header = reader.bytes();
                break;
            case 2:
                message.headerSignature = reader.string();
                break;
            case 3:
                message.payload = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Transaction message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Transaction
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Transaction} Transaction
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Transaction.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Transaction message.
     * @function verify
     * @memberof Transaction
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Transaction.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.header != null && message.hasOwnProperty("header"))
            if (!(message.header && typeof message.header.length === "number" || $util.isString(message.header)))
                return "header: buffer expected";
        if (message.headerSignature != null && message.hasOwnProperty("headerSignature"))
            if (!$util.isString(message.headerSignature))
                return "headerSignature: string expected";
        if (message.payload != null && message.hasOwnProperty("payload"))
            if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                return "payload: buffer expected";
        return null;
    };

    /**
     * Creates a Transaction message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Transaction
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Transaction} Transaction
     */
    Transaction.fromObject = function fromObject(object) {
        if (object instanceof $root.Transaction)
            return object;
        var message = new $root.Transaction();
        if (object.header != null)
            if (typeof object.header === "string")
                $util.base64.decode(object.header, message.header = $util.newBuffer($util.base64.length(object.header)), 0);
            else if (object.header.length)
                message.header = object.header;
        if (object.headerSignature != null)
            message.headerSignature = String(object.headerSignature);
        if (object.payload != null)
            if (typeof object.payload === "string")
                $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
            else if (object.payload.length)
                message.payload = object.payload;
        return message;
    };

    /**
     * Creates a plain object from a Transaction message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Transaction
     * @static
     * @param {Transaction} message Transaction
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Transaction.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.header = options.bytes === String ? "" : [];
            object.headerSignature = "";
            object.payload = options.bytes === String ? "" : [];
        }
        if (message.header != null && message.hasOwnProperty("header"))
            object.header = options.bytes === String ? $util.base64.encode(message.header, 0, message.header.length) : options.bytes === Array ? Array.prototype.slice.call(message.header) : message.header;
        if (message.headerSignature != null && message.hasOwnProperty("headerSignature"))
            object.headerSignature = message.headerSignature;
        if (message.payload != null && message.hasOwnProperty("payload"))
            object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
        return object;
    };

    /**
     * Converts this Transaction to JSON.
     * @function toJSON
     * @memberof Transaction
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Transaction.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Transaction;
})();

$root.TransactionList = (function() {

    /**
     * Properties of a TransactionList.
     * @exports ITransactionList
     * @interface ITransactionList
     * @property {Array.<ITransaction>|null} [transactions] TransactionList transactions
     */

    /**
     * Constructs a new TransactionList.
     * @exports TransactionList
     * @classdesc Represents a TransactionList.
     * @implements ITransactionList
     * @constructor
     * @param {ITransactionList=} [properties] Properties to set
     */
    function TransactionList(properties) {
        this.transactions = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TransactionList transactions.
     * @member {Array.<ITransaction>} transactions
     * @memberof TransactionList
     * @instance
     */
    TransactionList.prototype.transactions = $util.emptyArray;

    /**
     * Creates a new TransactionList instance using the specified properties.
     * @function create
     * @memberof TransactionList
     * @static
     * @param {ITransactionList=} [properties] Properties to set
     * @returns {TransactionList} TransactionList instance
     */
    TransactionList.create = function create(properties) {
        return new TransactionList(properties);
    };

    /**
     * Encodes the specified TransactionList message. Does not implicitly {@link TransactionList.verify|verify} messages.
     * @function encode
     * @memberof TransactionList
     * @static
     * @param {ITransactionList} message TransactionList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransactionList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.transactions != null && message.transactions.length)
            for (var i = 0; i < message.transactions.length; ++i)
                $root.Transaction.encode(message.transactions[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified TransactionList message, length delimited. Does not implicitly {@link TransactionList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TransactionList
     * @static
     * @param {ITransactionList} message TransactionList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TransactionList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TransactionList message from the specified reader or buffer.
     * @function decode
     * @memberof TransactionList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TransactionList} TransactionList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransactionList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TransactionList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.transactions && message.transactions.length))
                    message.transactions = [];
                message.transactions.push($root.Transaction.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TransactionList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TransactionList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TransactionList} TransactionList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TransactionList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TransactionList message.
     * @function verify
     * @memberof TransactionList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TransactionList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.transactions != null && message.hasOwnProperty("transactions")) {
            if (!Array.isArray(message.transactions))
                return "transactions: array expected";
            for (var i = 0; i < message.transactions.length; ++i) {
                var error = $root.Transaction.verify(message.transactions[i]);
                if (error)
                    return "transactions." + error;
            }
        }
        return null;
    };

    /**
     * Creates a TransactionList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TransactionList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TransactionList} TransactionList
     */
    TransactionList.fromObject = function fromObject(object) {
        if (object instanceof $root.TransactionList)
            return object;
        var message = new $root.TransactionList();
        if (object.transactions) {
            if (!Array.isArray(object.transactions))
                throw TypeError(".TransactionList.transactions: array expected");
            message.transactions = [];
            for (var i = 0; i < object.transactions.length; ++i) {
                if (typeof object.transactions[i] !== "object")
                    throw TypeError(".TransactionList.transactions: object expected");
                message.transactions[i] = $root.Transaction.fromObject(object.transactions[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a TransactionList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TransactionList
     * @static
     * @param {TransactionList} message TransactionList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TransactionList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.transactions = [];
        if (message.transactions && message.transactions.length) {
            object.transactions = [];
            for (var j = 0; j < message.transactions.length; ++j)
                object.transactions[j] = $root.Transaction.toObject(message.transactions[j], options);
        }
        return object;
    };

    /**
     * Converts this TransactionList to JSON.
     * @function toJSON
     * @memberof TransactionList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TransactionList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return TransactionList;
})();

module.exports = $root;
