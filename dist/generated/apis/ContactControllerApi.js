"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://docs.mailslurp.com/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * The version of the OpenAPI document: 6.5.2
 * Contact: contact@mailslurp.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
exports.GetAllContactsSortEnum = exports.ContactControllerApi = void 0;
var runtime = __importStar(require("../runtime"));
var index_1 = require("../models/index");
/**
 *
 */
var ContactControllerApi = /** @class */ (function (_super) {
    __extends(ContactControllerApi, _super);
    function ContactControllerApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a contact
     */
    ContactControllerApi.prototype.createContactRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, _a, _b, response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (requestParameters['createContactOptions'] == null) {
                            throw new runtime.RequiredError('createContactOptions', 'Required parameter "createContactOptions" was null or undefined when calling createContact().');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters['Content-Type'] = 'application/json';
                        if (!(this.configuration && this.configuration.apiKey)) return [3 /*break*/, 2];
                        _a = headerParameters;
                        _b = "x-api-key";
                        return [4 /*yield*/, this.configuration.apiKey("x-api-key")];
                    case 1:
                        _a[_b] = _c.sent(); // API_KEY authentication
                        _c.label = 2;
                    case 2: return [4 /*yield*/, this.request({
                            path: "/contacts",
                            method: 'POST',
                            headers: headerParameters,
                            query: queryParameters,
                            body: (0, index_1.CreateContactOptionsToJSON)(requestParameters['createContactOptions']),
                        }, initOverrides)];
                    case 3:
                        response = _c.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, index_1.ContactDtoFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * Create a contact
     */
    ContactControllerApi.prototype.createContact = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createContactRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Delete contact
     */
    ContactControllerApi.prototype.deleteContactRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, _a, _b, response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (requestParameters['contactId'] == null) {
                            throw new runtime.RequiredError('contactId', 'Required parameter "contactId" was null or undefined when calling deleteContact().');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        if (!(this.configuration && this.configuration.apiKey)) return [3 /*break*/, 2];
                        _a = headerParameters;
                        _b = "x-api-key";
                        return [4 /*yield*/, this.configuration.apiKey("x-api-key")];
                    case 1:
                        _a[_b] = _c.sent(); // API_KEY authentication
                        _c.label = 2;
                    case 2: return [4 /*yield*/, this.request({
                            path: "/contacts/{contactId}".replace("{".concat("contactId", "}"), encodeURIComponent(String(requestParameters['contactId']))),
                            method: 'DELETE',
                            headers: headerParameters,
                            query: queryParameters,
                        }, initOverrides)];
                    case 3:
                        response = _c.sent();
                        return [2 /*return*/, new runtime.VoidApiResponse(response)];
                }
            });
        });
    };
    /**
     * Delete contact
     */
    ContactControllerApi.prototype.deleteContact = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deleteContactRaw(requestParameters, initOverrides)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get all contacts
     */
    ContactControllerApi.prototype.getAllContactsRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, _a, _b, response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        queryParameters = {};
                        if (requestParameters['page'] != null) {
                            queryParameters['page'] = requestParameters['page'];
                        }
                        if (requestParameters['size'] != null) {
                            queryParameters['size'] = requestParameters['size'];
                        }
                        if (requestParameters['sort'] != null) {
                            queryParameters['sort'] = requestParameters['sort'];
                        }
                        if (requestParameters['since'] != null) {
                            queryParameters['since'] = requestParameters['since'].toISOString();
                        }
                        if (requestParameters['before'] != null) {
                            queryParameters['before'] = requestParameters['before'].toISOString();
                        }
                        if (requestParameters['search'] != null) {
                            queryParameters['search'] = requestParameters['search'];
                        }
                        headerParameters = {};
                        if (!(this.configuration && this.configuration.apiKey)) return [3 /*break*/, 2];
                        _a = headerParameters;
                        _b = "x-api-key";
                        return [4 /*yield*/, this.configuration.apiKey("x-api-key")];
                    case 1:
                        _a[_b] = _c.sent(); // API_KEY authentication
                        _c.label = 2;
                    case 2: return [4 /*yield*/, this.request({
                            path: "/contacts/paginated",
                            method: 'GET',
                            headers: headerParameters,
                            query: queryParameters,
                        }, initOverrides)];
                    case 3:
                        response = _c.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, index_1.PageContactProjectionFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * Get all contacts
     */
    ContactControllerApi.prototype.getAllContacts = function () {
        return __awaiter(this, arguments, void 0, function (requestParameters, initOverrides) {
            var response;
            if (requestParameters === void 0) { requestParameters = {}; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllContactsRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get contact
     */
    ContactControllerApi.prototype.getContactRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, _a, _b, response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (requestParameters['contactId'] == null) {
                            throw new runtime.RequiredError('contactId', 'Required parameter "contactId" was null or undefined when calling getContact().');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        if (!(this.configuration && this.configuration.apiKey)) return [3 /*break*/, 2];
                        _a = headerParameters;
                        _b = "x-api-key";
                        return [4 /*yield*/, this.configuration.apiKey("x-api-key")];
                    case 1:
                        _a[_b] = _c.sent(); // API_KEY authentication
                        _c.label = 2;
                    case 2: return [4 /*yield*/, this.request({
                            path: "/contacts/{contactId}".replace("{".concat("contactId", "}"), encodeURIComponent(String(requestParameters['contactId']))),
                            method: 'GET',
                            headers: headerParameters,
                            query: queryParameters,
                        }, initOverrides)];
                    case 3:
                        response = _c.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, index_1.ContactDtoFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * Get contact
     */
    ContactControllerApi.prototype.getContact = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getContactRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get contact vCard vcf file
     * @deprecated
     */
    ContactControllerApi.prototype.getContactVCardRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, _a, _b, response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (requestParameters['contactId'] == null) {
                            throw new runtime.RequiredError('contactId', 'Required parameter "contactId" was null or undefined when calling getContactVCard().');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        if (!(this.configuration && this.configuration.apiKey)) return [3 /*break*/, 2];
                        _a = headerParameters;
                        _b = "x-api-key";
                        return [4 /*yield*/, this.configuration.apiKey("x-api-key")];
                    case 1:
                        _a[_b] = _c.sent(); // API_KEY authentication
                        _c.label = 2;
                    case 2: return [4 /*yield*/, this.request({
                            path: "/contacts/{contactId}/download".replace("{".concat("contactId", "}"), encodeURIComponent(String(requestParameters['contactId']))),
                            method: 'GET',
                            headers: headerParameters,
                            query: queryParameters,
                        }, initOverrides)];
                    case 3:
                        response = _c.sent();
                        return [2 /*return*/, new runtime.VoidApiResponse(response)];
                }
            });
        });
    };
    /**
     * Get contact vCard vcf file
     * @deprecated
     */
    ContactControllerApi.prototype.getContactVCard = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getContactVCardRaw(requestParameters, initOverrides)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get all contacts
     */
    ContactControllerApi.prototype.getContactsRaw = function (initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, _a, _b, response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        queryParameters = {};
                        headerParameters = {};
                        if (!(this.configuration && this.configuration.apiKey)) return [3 /*break*/, 2];
                        _a = headerParameters;
                        _b = "x-api-key";
                        return [4 /*yield*/, this.configuration.apiKey("x-api-key")];
                    case 1:
                        _a[_b] = _c.sent(); // API_KEY authentication
                        _c.label = 2;
                    case 2: return [4 /*yield*/, this.request({
                            path: "/contacts",
                            method: 'GET',
                            headers: headerParameters,
                            query: queryParameters,
                        }, initOverrides)];
                    case 3:
                        response = _c.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return jsonValue.map(index_1.ContactProjectionFromJSON); })];
                }
            });
        });
    };
    /**
     * Get all contacts
     */
    ContactControllerApi.prototype.getContacts = function (initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getContactsRaw(initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ContactControllerApi;
}(runtime.BaseAPI));
exports.ContactControllerApi = ContactControllerApi;
/**
 * @export
 */
exports.GetAllContactsSortEnum = {
    ASC: 'ASC',
    DESC: 'DESC'
};
