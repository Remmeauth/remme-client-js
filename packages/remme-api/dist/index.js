"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var remme_http_client_1 = require("remme-http-client");
var remme_utils_1 = require("remme-utils");
exports.INetworkConfig = remme_utils_1.INetworkConfig;
var models_1 = require("./models");
exports.RemmeMethods = models_1.RemmeMethods;
/**
 * Default config for creating url that passed to RemmeRest constructor;
 * @type {{nodeAddress: string; nodePort: string; sslMode: boolean}}
 */
var DEFAULT_NETWORK_CONFIG = {
    nodeAddress: "localhost",
    nodePort: "8080",
    sslMode: false,
};
exports.DEFAULT_NETWORK_CONFIG = DEFAULT_NETWORK_CONFIG;
/**
 * Main class that send requests to our REMME protocol;
 * Check JSON-RPC API specification:
 *      https://remmeio.atlassian.net/wiki/spaces/WikiREMME/pages/292814862/RPC+API+specification.
 * @param {string} nodeAddress
 * @param {string | number} nodePort
 * @param {boolean} sslMode
 *
 * @example
 * ```typescript
 * import { RemmeApi, RemmeMethods } from "remme-api";
 *
 * const remmeApi = new RemmeApi({
 *      nodeAddress: "localhost",
 *      nodePort: 8080,
 *      sslMode: false,
 * });
 *
 * const response = await remmeApi.sendRequest<object>(RemmeMethods.fetchBlocks);
 * console.log(response);
 * ```
 */
var RemmeApi = /** @class */ (function () {
    /**
     * Constructor can implement with different sets of params. By default params for constructor are:
     * nodeAddress: "localhost"
     * nodePort: 8080
     * sslMode: false
     * @example
     * Implementation with all params.
     * ```typescript
     * import { RemmeRest, RemmeMethods } from "remme-rest";
     *
     * const remmeRest = new RemmeRest({
     *      nodeAddress: "localhost",
     *      nodePort: 8080,
     *      sslMode: false,
     * });
     * ```
     *
     * Implementation with one param
     * ```typescript
     * import { RemmeRest, RemmeMethods } from "remme-rest";
     *
     * const remmeRest = new RemmeRest({
     *      nodeAddress: "localhost"
     * });
     * ```
     *
     * Implementation without params
     * ```typescript
     * import { RemmeRest, RemmeMethods } from "remme-rest";
     *
     * const remmeRest = new RemmeRest();
     * ```
     */
    function RemmeApi(_a) {
        var _b = _a === void 0 ? DEFAULT_NETWORK_CONFIG : _a, _c = _b.nodeAddress, nodeAddress = _c === void 0 ? "localhost" : _c, _d = _b.nodePort, nodePort = _d === void 0 ? 8080 : _d, _e = _b.sslMode, sslMode = _e === void 0 ? false : _e;
        var networkConfig = {
            nodeAddress: nodeAddress,
            nodePort: nodePort,
            sslMode: sslMode,
        };
        remme_utils_1.validateNodeConfig(networkConfig);
        this._networkConfig = networkConfig;
    }
    RemmeApi.prototype._getUrlForRequest = function () {
        var _a = this._networkConfig, nodeAddress = _a.nodeAddress, nodePort = _a.nodePort, sslMode = _a.sslMode;
        return "" + (sslMode ? "https://" : "http://") + nodeAddress + ":" + nodePort;
    };
    RemmeApi.prototype._getRequestConfig = function (method, payload) {
        var options = {
            url: this._getUrlForRequest(),
            method: "POST",
            data: {
                jsonrpc: "2.0",
                method: method,
                params: {},
                id: Math.round(Math.random() * 100),
            },
        };
        if (payload) {
            options.data.params = payload;
        }
        return options;
    };
    Object.defineProperty(RemmeApi.prototype, "networkConfig", {
        /**
         * Return network config object which contain domain name, port and ssl.
         * @returns {INetworkConfig}
         */
        get: function () {
            return this._networkConfig;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Make and send request with given method and payload.
     * Create url from given network config
     * Get JSON-RPC method and create request config in correspond to this spec https://www.jsonrpc.org/specification.
     * @param {RemmeMethods} method
     * @param {Input} payload
     * @returns {Promise<Output>}
     */
    RemmeApi.prototype.sendRequest = function (method, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var options, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = this._getRequestConfig(method, payload);
                        return [4 /*yield*/, remme_http_client_1.HttpClient.send(options)];
                    case 1:
                        response = _a.sent();
                        if (response) {
                            if (response.data.error) {
                                throw new Error(response.data.error.message);
                            }
                            else {
                                return [2 /*return*/, response.data.result];
                            }
                        }
                        else {
                            throw new Error("Please check if your node running at " + this._getUrlForRequest());
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return RemmeApi;
}());
exports.RemmeApi = RemmeApi;
//# sourceMappingURL=index.js.map