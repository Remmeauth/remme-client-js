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
        if (message.addressTo != null && message.hasOwnProperty("addressTo"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.addressTo);
        if (message.value != null && message.hasOwnProperty("value"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.value);
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
                message.addressTo = reader.string();
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
            object.addressTo = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, true);
                object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.value = options.longs === String ? "0" : 0;
        }
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
     * @property {Array.<string>|null} [certificates] Account certificates
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
        this.certificates = [];
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
     * Account certificates.
     * @member {Array.<string>} certificates
     * @memberof Account
     * @instance
     */
    Account.prototype.certificates = $util.emptyArray;

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
        if (message.certificates != null && message.certificates.length)
            for (var i = 0; i < message.certificates.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.certificates[i]);
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
                if (!(message.certificates && message.certificates.length))
                    message.certificates = [];
                message.certificates.push(reader.string());
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
        if (message.certificates != null && message.hasOwnProperty("certificates")) {
            if (!Array.isArray(message.certificates))
                return "certificates: array expected";
            for (var i = 0; i < message.certificates.length; ++i)
                if (!$util.isString(message.certificates[i]))
                    return "certificates: string[] expected";
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
        if (object.certificates) {
            if (!Array.isArray(object.certificates))
                throw TypeError(".Account.certificates: array expected");
            message.certificates = [];
            for (var i = 0; i < object.certificates.length; ++i)
                message.certificates[i] = String(object.certificates[i]);
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
            object.certificates = [];
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
        if (message.certificates && message.certificates.length) {
            object.certificates = [];
            for (var j = 0; j < message.certificates.length; ++j)
                object.certificates[j] = message.certificates[j];
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

$root.CertificateMethod = (function() {

    /**
     * Properties of a CertificateMethod.
     * @exports ICertificateMethod
     * @interface ICertificateMethod
     */

    /**
     * Constructs a new CertificateMethod.
     * @exports CertificateMethod
     * @classdesc Represents a CertificateMethod.
     * @implements ICertificateMethod
     * @constructor
     * @param {ICertificateMethod=} [properties] Properties to set
     */
    function CertificateMethod(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new CertificateMethod instance using the specified properties.
     * @function create
     * @memberof CertificateMethod
     * @static
     * @param {ICertificateMethod=} [properties] Properties to set
     * @returns {CertificateMethod} CertificateMethod instance
     */
    CertificateMethod.create = function create(properties) {
        return new CertificateMethod(properties);
    };

    /**
     * Encodes the specified CertificateMethod message. Does not implicitly {@link CertificateMethod.verify|verify} messages.
     * @function encode
     * @memberof CertificateMethod
     * @static
     * @param {ICertificateMethod} message CertificateMethod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CertificateMethod.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified CertificateMethod message, length delimited. Does not implicitly {@link CertificateMethod.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CertificateMethod
     * @static
     * @param {ICertificateMethod} message CertificateMethod message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CertificateMethod.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CertificateMethod message from the specified reader or buffer.
     * @function decode
     * @memberof CertificateMethod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CertificateMethod} CertificateMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CertificateMethod.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CertificateMethod();
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
     * Decodes a CertificateMethod message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CertificateMethod
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CertificateMethod} CertificateMethod
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CertificateMethod.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CertificateMethod message.
     * @function verify
     * @memberof CertificateMethod
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CertificateMethod.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a CertificateMethod message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CertificateMethod
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CertificateMethod} CertificateMethod
     */
    CertificateMethod.fromObject = function fromObject(object) {
        if (object instanceof $root.CertificateMethod)
            return object;
        return new $root.CertificateMethod();
    };

    /**
     * Creates a plain object from a CertificateMethod message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CertificateMethod
     * @static
     * @param {CertificateMethod} message CertificateMethod
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CertificateMethod.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this CertificateMethod to JSON.
     * @function toJSON
     * @memberof CertificateMethod
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CertificateMethod.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Method enum.
     * @name CertificateMethod.Method
     * @enum {string}
     * @property {number} STORE=0 STORE value
     * @property {number} REVOKE=1 REVOKE value
     */
    CertificateMethod.Method = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "STORE"] = 0;
        values[valuesById[1] = "REVOKE"] = 1;
        return values;
    })();

    return CertificateMethod;
})();

$root.NewCertificatePayload = (function() {

    /**
     * Properties of a NewCertificatePayload.
     * @exports INewCertificatePayload
     * @interface INewCertificatePayload
     * @property {string|null} [certificateRaw] NewCertificatePayload certificateRaw
     * @property {string|null} [signatureRem] NewCertificatePayload signatureRem
     * @property {string|null} [signatureCrt] NewCertificatePayload signatureCrt
     * @property {string|null} [certSignerPublicKey] NewCertificatePayload certSignerPublicKey
     */

    /**
     * Constructs a new NewCertificatePayload.
     * @exports NewCertificatePayload
     * @classdesc Represents a NewCertificatePayload.
     * @implements INewCertificatePayload
     * @constructor
     * @param {INewCertificatePayload=} [properties] Properties to set
     */
    function NewCertificatePayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NewCertificatePayload certificateRaw.
     * @member {string} certificateRaw
     * @memberof NewCertificatePayload
     * @instance
     */
    NewCertificatePayload.prototype.certificateRaw = "";

    /**
     * NewCertificatePayload signatureRem.
     * @member {string} signatureRem
     * @memberof NewCertificatePayload
     * @instance
     */
    NewCertificatePayload.prototype.signatureRem = "";

    /**
     * NewCertificatePayload signatureCrt.
     * @member {string} signatureCrt
     * @memberof NewCertificatePayload
     * @instance
     */
    NewCertificatePayload.prototype.signatureCrt = "";

    /**
     * NewCertificatePayload certSignerPublicKey.
     * @member {string} certSignerPublicKey
     * @memberof NewCertificatePayload
     * @instance
     */
    NewCertificatePayload.prototype.certSignerPublicKey = "";

    /**
     * Creates a new NewCertificatePayload instance using the specified properties.
     * @function create
     * @memberof NewCertificatePayload
     * @static
     * @param {INewCertificatePayload=} [properties] Properties to set
     * @returns {NewCertificatePayload} NewCertificatePayload instance
     */
    NewCertificatePayload.create = function create(properties) {
        return new NewCertificatePayload(properties);
    };

    /**
     * Encodes the specified NewCertificatePayload message. Does not implicitly {@link NewCertificatePayload.verify|verify} messages.
     * @function encode
     * @memberof NewCertificatePayload
     * @static
     * @param {INewCertificatePayload} message NewCertificatePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NewCertificatePayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.certificateRaw != null && message.hasOwnProperty("certificateRaw"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.certificateRaw);
        if (message.signatureRem != null && message.hasOwnProperty("signatureRem"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.signatureRem);
        if (message.signatureCrt != null && message.hasOwnProperty("signatureCrt"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.signatureCrt);
        if (message.certSignerPublicKey != null && message.hasOwnProperty("certSignerPublicKey"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.certSignerPublicKey);
        return writer;
    };

    /**
     * Encodes the specified NewCertificatePayload message, length delimited. Does not implicitly {@link NewCertificatePayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NewCertificatePayload
     * @static
     * @param {INewCertificatePayload} message NewCertificatePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NewCertificatePayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NewCertificatePayload message from the specified reader or buffer.
     * @function decode
     * @memberof NewCertificatePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NewCertificatePayload} NewCertificatePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NewCertificatePayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NewCertificatePayload();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.certificateRaw = reader.string();
                break;
            case 2:
                message.signatureRem = reader.string();
                break;
            case 3:
                message.signatureCrt = reader.string();
                break;
            case 4:
                message.certSignerPublicKey = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NewCertificatePayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NewCertificatePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NewCertificatePayload} NewCertificatePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NewCertificatePayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NewCertificatePayload message.
     * @function verify
     * @memberof NewCertificatePayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NewCertificatePayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.certificateRaw != null && message.hasOwnProperty("certificateRaw"))
            if (!$util.isString(message.certificateRaw))
                return "certificateRaw: string expected";
        if (message.signatureRem != null && message.hasOwnProperty("signatureRem"))
            if (!$util.isString(message.signatureRem))
                return "signatureRem: string expected";
        if (message.signatureCrt != null && message.hasOwnProperty("signatureCrt"))
            if (!$util.isString(message.signatureCrt))
                return "signatureCrt: string expected";
        if (message.certSignerPublicKey != null && message.hasOwnProperty("certSignerPublicKey"))
            if (!$util.isString(message.certSignerPublicKey))
                return "certSignerPublicKey: string expected";
        return null;
    };

    /**
     * Creates a NewCertificatePayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NewCertificatePayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NewCertificatePayload} NewCertificatePayload
     */
    NewCertificatePayload.fromObject = function fromObject(object) {
        if (object instanceof $root.NewCertificatePayload)
            return object;
        var message = new $root.NewCertificatePayload();
        if (object.certificateRaw != null)
            message.certificateRaw = String(object.certificateRaw);
        if (object.signatureRem != null)
            message.signatureRem = String(object.signatureRem);
        if (object.signatureCrt != null)
            message.signatureCrt = String(object.signatureCrt);
        if (object.certSignerPublicKey != null)
            message.certSignerPublicKey = String(object.certSignerPublicKey);
        return message;
    };

    /**
     * Creates a plain object from a NewCertificatePayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NewCertificatePayload
     * @static
     * @param {NewCertificatePayload} message NewCertificatePayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NewCertificatePayload.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.certificateRaw = "";
            object.signatureRem = "";
            object.signatureCrt = "";
            object.certSignerPublicKey = "";
        }
        if (message.certificateRaw != null && message.hasOwnProperty("certificateRaw"))
            object.certificateRaw = message.certificateRaw;
        if (message.signatureRem != null && message.hasOwnProperty("signatureRem"))
            object.signatureRem = message.signatureRem;
        if (message.signatureCrt != null && message.hasOwnProperty("signatureCrt"))
            object.signatureCrt = message.signatureCrt;
        if (message.certSignerPublicKey != null && message.hasOwnProperty("certSignerPublicKey"))
            object.certSignerPublicKey = message.certSignerPublicKey;
        return object;
    };

    /**
     * Converts this NewCertificatePayload to JSON.
     * @function toJSON
     * @memberof NewCertificatePayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NewCertificatePayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return NewCertificatePayload;
})();

$root.RevokeCertificatePayload = (function() {

    /**
     * Properties of a RevokeCertificatePayload.
     * @exports IRevokeCertificatePayload
     * @interface IRevokeCertificatePayload
     * @property {string|null} [address] RevokeCertificatePayload address
     */

    /**
     * Constructs a new RevokeCertificatePayload.
     * @exports RevokeCertificatePayload
     * @classdesc Represents a RevokeCertificatePayload.
     * @implements IRevokeCertificatePayload
     * @constructor
     * @param {IRevokeCertificatePayload=} [properties] Properties to set
     */
    function RevokeCertificatePayload(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RevokeCertificatePayload address.
     * @member {string} address
     * @memberof RevokeCertificatePayload
     * @instance
     */
    RevokeCertificatePayload.prototype.address = "";

    /**
     * Creates a new RevokeCertificatePayload instance using the specified properties.
     * @function create
     * @memberof RevokeCertificatePayload
     * @static
     * @param {IRevokeCertificatePayload=} [properties] Properties to set
     * @returns {RevokeCertificatePayload} RevokeCertificatePayload instance
     */
    RevokeCertificatePayload.create = function create(properties) {
        return new RevokeCertificatePayload(properties);
    };

    /**
     * Encodes the specified RevokeCertificatePayload message. Does not implicitly {@link RevokeCertificatePayload.verify|verify} messages.
     * @function encode
     * @memberof RevokeCertificatePayload
     * @static
     * @param {IRevokeCertificatePayload} message RevokeCertificatePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RevokeCertificatePayload.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.address != null && message.hasOwnProperty("address"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.address);
        return writer;
    };

    /**
     * Encodes the specified RevokeCertificatePayload message, length delimited. Does not implicitly {@link RevokeCertificatePayload.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RevokeCertificatePayload
     * @static
     * @param {IRevokeCertificatePayload} message RevokeCertificatePayload message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RevokeCertificatePayload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RevokeCertificatePayload message from the specified reader or buffer.
     * @function decode
     * @memberof RevokeCertificatePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RevokeCertificatePayload} RevokeCertificatePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RevokeCertificatePayload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RevokeCertificatePayload();
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
     * Decodes a RevokeCertificatePayload message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RevokeCertificatePayload
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RevokeCertificatePayload} RevokeCertificatePayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RevokeCertificatePayload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RevokeCertificatePayload message.
     * @function verify
     * @memberof RevokeCertificatePayload
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RevokeCertificatePayload.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.address != null && message.hasOwnProperty("address"))
            if (!$util.isString(message.address))
                return "address: string expected";
        return null;
    };

    /**
     * Creates a RevokeCertificatePayload message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RevokeCertificatePayload
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RevokeCertificatePayload} RevokeCertificatePayload
     */
    RevokeCertificatePayload.fromObject = function fromObject(object) {
        if (object instanceof $root.RevokeCertificatePayload)
            return object;
        var message = new $root.RevokeCertificatePayload();
        if (object.address != null)
            message.address = String(object.address);
        return message;
    };

    /**
     * Creates a plain object from a RevokeCertificatePayload message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RevokeCertificatePayload
     * @static
     * @param {RevokeCertificatePayload} message RevokeCertificatePayload
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RevokeCertificatePayload.toObject = function toObject(message, options) {
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
     * Converts this RevokeCertificatePayload to JSON.
     * @function toJSON
     * @memberof RevokeCertificatePayload
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RevokeCertificatePayload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RevokeCertificatePayload;
})();

$root.CertificateStorage = (function() {

    /**
     * Properties of a CertificateStorage.
     * @exports ICertificateStorage
     * @interface ICertificateStorage
     * @property {string|null} [hash] CertificateStorage hash
     * @property {string|null} [owner] CertificateStorage owner
     * @property {boolean|null} [revoked] CertificateStorage revoked
     */

    /**
     * Constructs a new CertificateStorage.
     * @exports CertificateStorage
     * @classdesc Represents a CertificateStorage.
     * @implements ICertificateStorage
     * @constructor
     * @param {ICertificateStorage=} [properties] Properties to set
     */
    function CertificateStorage(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CertificateStorage hash.
     * @member {string} hash
     * @memberof CertificateStorage
     * @instance
     */
    CertificateStorage.prototype.hash = "";

    /**
     * CertificateStorage owner.
     * @member {string} owner
     * @memberof CertificateStorage
     * @instance
     */
    CertificateStorage.prototype.owner = "";

    /**
     * CertificateStorage revoked.
     * @member {boolean} revoked
     * @memberof CertificateStorage
     * @instance
     */
    CertificateStorage.prototype.revoked = false;

    /**
     * Creates a new CertificateStorage instance using the specified properties.
     * @function create
     * @memberof CertificateStorage
     * @static
     * @param {ICertificateStorage=} [properties] Properties to set
     * @returns {CertificateStorage} CertificateStorage instance
     */
    CertificateStorage.create = function create(properties) {
        return new CertificateStorage(properties);
    };

    /**
     * Encodes the specified CertificateStorage message. Does not implicitly {@link CertificateStorage.verify|verify} messages.
     * @function encode
     * @memberof CertificateStorage
     * @static
     * @param {ICertificateStorage} message CertificateStorage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CertificateStorage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.hash != null && message.hasOwnProperty("hash"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.hash);
        if (message.owner != null && message.hasOwnProperty("owner"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.owner);
        if (message.revoked != null && message.hasOwnProperty("revoked"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.revoked);
        return writer;
    };

    /**
     * Encodes the specified CertificateStorage message, length delimited. Does not implicitly {@link CertificateStorage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CertificateStorage
     * @static
     * @param {ICertificateStorage} message CertificateStorage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CertificateStorage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CertificateStorage message from the specified reader or buffer.
     * @function decode
     * @memberof CertificateStorage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CertificateStorage} CertificateStorage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CertificateStorage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CertificateStorage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.hash = reader.string();
                break;
            case 2:
                message.owner = reader.string();
                break;
            case 3:
                message.revoked = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CertificateStorage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CertificateStorage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CertificateStorage} CertificateStorage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CertificateStorage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CertificateStorage message.
     * @function verify
     * @memberof CertificateStorage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CertificateStorage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.hash != null && message.hasOwnProperty("hash"))
            if (!$util.isString(message.hash))
                return "hash: string expected";
        if (message.owner != null && message.hasOwnProperty("owner"))
            if (!$util.isString(message.owner))
                return "owner: string expected";
        if (message.revoked != null && message.hasOwnProperty("revoked"))
            if (typeof message.revoked !== "boolean")
                return "revoked: boolean expected";
        return null;
    };

    /**
     * Creates a CertificateStorage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CertificateStorage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CertificateStorage} CertificateStorage
     */
    CertificateStorage.fromObject = function fromObject(object) {
        if (object instanceof $root.CertificateStorage)
            return object;
        var message = new $root.CertificateStorage();
        if (object.hash != null)
            message.hash = String(object.hash);
        if (object.owner != null)
            message.owner = String(object.owner);
        if (object.revoked != null)
            message.revoked = Boolean(object.revoked);
        return message;
    };

    /**
     * Creates a plain object from a CertificateStorage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CertificateStorage
     * @static
     * @param {CertificateStorage} message CertificateStorage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CertificateStorage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.hash = "";
            object.owner = "";
            object.revoked = false;
        }
        if (message.hash != null && message.hasOwnProperty("hash"))
            object.hash = message.hash;
        if (message.owner != null && message.hasOwnProperty("owner"))
            object.owner = message.owner;
        if (message.revoked != null && message.hasOwnProperty("revoked"))
            object.revoked = message.revoked;
        return object;
    };

    /**
     * Converts this CertificateStorage to JSON.
     * @function toJSON
     * @memberof CertificateStorage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CertificateStorage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return CertificateStorage;
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

module.exports = $root;
