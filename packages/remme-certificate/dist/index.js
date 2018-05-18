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
var remme_utils_1 = require("remme-utils");
var remme_rest_1 = require("remme-rest");
var models_1 = require("./models");
var RemmeCertificate;
(function (RemmeCertificate) {
    var Certificate = /** @class */ (function () {
        // public constructor(nodeAdress: string = "localhost:8080") {
        //     this._remmeRest = new RemmeRest(nodeAdress);
        // }
        function Certificate(remmeRest) {
            if (remmeRest === void 0) { remmeRest = new remme_rest_1.RemmeRest(); }
            this._rsaKeySize = 2048;
            this._remmeRest = remmeRest;
        }
        Certificate.prototype.createCertificate = function (commonName, email) {
            return __awaiter(this, void 0, void 0, function () {
                var keys, subject, csr, cert;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            keys = this.generateKeyPair();
                            subject = this.createSubject(commonName, email);
                            csr = this.createSignRequest(subject, keys);
                            return [4 /*yield*/, this.storeCertificate(csr)];
                        case 1:
                            cert = _a.sent();
                            // cert.privateKey = keys.privateKey;
                            return [2 /*return*/, cert];
                    }
                });
            });
        };
        Certificate.prototype.storeCertificate = function (signingRequest) {
            return __awaiter(this, void 0, void 0, function () {
                var payload, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            payload = new models_1.StorePayload(signingRequest);
                            return [4 /*yield*/, this._remmeRest
                                    .putRequest(payload, remme_rest_1.RemmeMethods.certificateStore)];
                        case 1:
                            result = _a.sent();
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        Certificate.prototype.checkCertificate = function (certificate) {
            return __awaiter(this, void 0, void 0, function () {
                var payload, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            payload = new models_1.CheckPayload(certificate);
                            return [4 /*yield*/, this._remmeRest
                                    .postRequest(payload, remme_rest_1.RemmeMethods.certificate)];
                        case 1:
                            result = _a.sent();
                            return [2 /*return*/, !result.revoked];
                    }
                });
            });
        };
        Certificate.prototype.revokeCertificate = function (certificate) {
            return __awaiter(this, void 0, void 0, function () {
                var payload, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            payload = new models_1.CheckPayload(certificate);
                            return [4 /*yield*/, this._remmeRest
                                    .deleteRequest(payload, remme_rest_1.RemmeMethods.certificate)];
                        case 1:
                            result = _a.sent();
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        Certificate.prototype.createSignRequest = function (subject, keys) {
            var csr = remme_utils_1.pki.createCertificationRequest();
            csr.setSubject(subject);
            csr.publicKey = keys.publicKey;
            csr.sign(keys.privateKey, remme_utils_1.md.sha256.create());
            return csr;
        };
        Certificate.prototype.createSubject = function (commonName, email) {
            return [
                {
                    name: "commonName",
                    value: commonName,
                }, {
                    shortName: "E",
                    value: email,
                },
            ];
        };
        Certificate.prototype.generateKeyPair = function () {
            return remme_utils_1.pki.rsa.generateKeyPair(this._rsaKeySize);
        };
        return Certificate;
    }());
    RemmeCertificate.Certificate = Certificate;
})(RemmeCertificate || (RemmeCertificate = {}));
module.exports = RemmeCertificate;
//# sourceMappingURL=index.js.map