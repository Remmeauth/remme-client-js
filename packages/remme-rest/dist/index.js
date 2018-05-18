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
var remme_methods_1 = require("./remme-methods");
exports.RemmeMethods = remme_methods_1.RemmeMethods;
var RemmeRest = /** @class */ (function () {
    function RemmeRest(nodeAddress) {
        if (nodeAddress === void 0) { nodeAddress = "localhost:8080"; }
        this._nodeAddress = nodeAddress;
    }
    RemmeRest.prototype.getRequest = function (payload, method) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sendRequest("GET", payload, method)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmeRest.prototype.putRequest = function (payload, method) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sendRequest("PUT", payload, method)];
                    case 1: 
                    // const url = this.getUrlForRequest(method);
                    // const options: AxiosRequestConfig = {
                    //     url,
                    //     method: "PUT",
                    //     data: payload,
                    // };
                    // const response = await HttpClient.send(options);
                    // return response.data;
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmeRest.prototype.postRequest = function (payload, method) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sendRequest("POST", payload, method)];
                    case 1: 
                    // const url = this.getUrlForRequest(method);
                    // const options: AxiosRequestConfig = {
                    //     url,
                    //     method: "POST",
                    //     data: payload,
                    // };
                    // const response = await HttpClient.send(options);
                    // return response.data;
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmeRest.prototype.deleteRequest = function (payload, method) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sendRequest("DELETE", payload, method)];
                    case 1: 
                    // const url = this.getUrlForRequest(method);
                    // const options: AxiosRequestConfig = {
                    //     url,
                    //     method: "DELETE",
                    //     data: payload,
                    // };
                    // const response = await HttpClient.send(options);
                    // return response.data;
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RemmeRest.prototype.sendRequest = function (method, payload, remmeMethod) {
        return __awaiter(this, void 0, void 0, function () {
            var url, options, response, e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        url = this.getUrlForRequest(remmeMethod);
                        options = (_a = {
                                url: url,
                                method: method
                            },
                            _a[method.toUpperCase() === "GET" ? "params" : "data"] = payload,
                            _a);
                        return [4 /*yield*/, remme_http_client_1.HttpClient.send(options)];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        e_1 = _b.sent();
                        throw new Error("Please check if your node running at http://" + this._nodeAddress);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RemmeRest.prototype.getUrlForRequest = function (method) {
        var methodUrl;
        switch (method) {
            case remme_methods_1.RemmeMethods.certificate:
                methodUrl = "certificate";
                break;
            case remme_methods_1.RemmeMethods.certificateStore:
                methodUrl = "certificate/store";
                break;
            case remme_methods_1.RemmeMethods.token:
                methodUrl = "token";
                break;
            case remme_methods_1.RemmeMethods.batchStatus:
                methodUrl = "batch_status";
                break;
            case remme_methods_1.RemmeMethods.personal:
                methodUrl = "personal";
                break;
        }
        return "http://" + this._nodeAddress + "/api/v1/" + methodUrl;
    };
    return RemmeRest;
}());
exports.RemmeRest = RemmeRest;
//# sourceMappingURL=index.js.map