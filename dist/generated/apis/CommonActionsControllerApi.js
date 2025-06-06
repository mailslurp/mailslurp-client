"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails and SMS from dynamically allocated email addresses and phone numbers. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://docs.mailslurp.com/) - [Examples](https://github.com/mailslurp/examples) repository
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
exports.CreateRandomInboxInboxTypeEnum = exports.CreateNewEmailAddressInboxTypeEnum = exports.CommonActionsControllerApi = void 0;
var runtime = __importStar(require("../runtime"));
var models_1 = require("../models");
/**
 *
 */
var CommonActionsControllerApi = /** @class */ (function (_super) {
    __extends(CommonActionsControllerApi, _super);
    function CommonActionsControllerApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * Create new random inbox
     */
    CommonActionsControllerApi.prototype.createNewEmailAddressRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParameters = {};
                        if (requestParameters.allowTeamAccess !== undefined) {
                            queryParameters['allowTeamAccess'] = requestParameters.allowTeamAccess;
                        }
                        if (requestParameters.useDomainPool !== undefined) {
                            queryParameters['useDomainPool'] = requestParameters.useDomainPool;
                        }
                        if (requestParameters.expiresAt !== undefined) {
                            queryParameters['expiresAt'] = requestParameters.expiresAt.toISOString();
                        }
                        if (requestParameters.expiresIn !== undefined) {
                            queryParameters['expiresIn'] = requestParameters.expiresIn;
                        }
                        if (requestParameters.emailAddress !== undefined) {
                            queryParameters['emailAddress'] = requestParameters.emailAddress;
                        }
                        if (requestParameters.inboxType !== undefined) {
                            queryParameters['inboxType'] = requestParameters.inboxType;
                        }
                        if (requestParameters.description !== undefined) {
                            queryParameters['description'] = requestParameters.description;
                        }
                        if (requestParameters.name !== undefined) {
                            queryParameters['name'] = requestParameters.name;
                        }
                        if (requestParameters.tags) {
                            queryParameters['tags'] = requestParameters.tags;
                        }
                        if (requestParameters.favourite !== undefined) {
                            queryParameters['favourite'] = requestParameters.favourite;
                        }
                        if (requestParameters.virtualInbox !== undefined) {
                            queryParameters['virtualInbox'] = requestParameters.virtualInbox;
                        }
                        if (requestParameters.useShortAddress !== undefined) {
                            queryParameters['useShortAddress'] = requestParameters.useShortAddress;
                        }
                        if (requestParameters.domainName !== undefined) {
                            queryParameters['domainName'] = requestParameters.domainName;
                        }
                        if (requestParameters.domainId !== undefined) {
                            queryParameters['domainId'] = requestParameters.domainId;
                        }
                        if (requestParameters.prefix !== undefined) {
                            queryParameters['prefix'] = requestParameters.prefix;
                        }
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/newEmailAddress",
                                method: 'POST',
                                headers: headerParameters,
                                query: queryParameters,
                            }, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) {
                                return (0, models_1.InboxDtoFromJSON)(jsonValue);
                            })];
                }
            });
        });
    };
    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * Create new random inbox
     */
    CommonActionsControllerApi.prototype.createNewEmailAddress = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createNewEmailAddressRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * Create new random inbox
     */
    CommonActionsControllerApi.prototype.createRandomInboxRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParameters = {};
                        if (requestParameters.allowTeamAccess !== undefined) {
                            queryParameters['allowTeamAccess'] = requestParameters.allowTeamAccess;
                        }
                        if (requestParameters.useDomainPool !== undefined) {
                            queryParameters['useDomainPool'] = requestParameters.useDomainPool;
                        }
                        if (requestParameters.expiresAt !== undefined) {
                            queryParameters['expiresAt'] = requestParameters.expiresAt.toISOString();
                        }
                        if (requestParameters.expiresIn !== undefined) {
                            queryParameters['expiresIn'] = requestParameters.expiresIn;
                        }
                        if (requestParameters.emailAddress !== undefined) {
                            queryParameters['emailAddress'] = requestParameters.emailAddress;
                        }
                        if (requestParameters.inboxType !== undefined) {
                            queryParameters['inboxType'] = requestParameters.inboxType;
                        }
                        if (requestParameters.description !== undefined) {
                            queryParameters['description'] = requestParameters.description;
                        }
                        if (requestParameters.name !== undefined) {
                            queryParameters['name'] = requestParameters.name;
                        }
                        if (requestParameters.tags) {
                            queryParameters['tags'] = requestParameters.tags;
                        }
                        if (requestParameters.favourite !== undefined) {
                            queryParameters['favourite'] = requestParameters.favourite;
                        }
                        if (requestParameters.virtualInbox !== undefined) {
                            queryParameters['virtualInbox'] = requestParameters.virtualInbox;
                        }
                        if (requestParameters.useShortAddress !== undefined) {
                            queryParameters['useShortAddress'] = requestParameters.useShortAddress;
                        }
                        if (requestParameters.domainName !== undefined) {
                            queryParameters['domainName'] = requestParameters.domainName;
                        }
                        if (requestParameters.domainId !== undefined) {
                            queryParameters['domainId'] = requestParameters.domainId;
                        }
                        if (requestParameters.prefix !== undefined) {
                            queryParameters['prefix'] = requestParameters.prefix;
                        }
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/createInbox",
                                method: 'POST',
                                headers: headerParameters,
                                query: queryParameters,
                            }, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) {
                                return (0, models_1.InboxDtoFromJSON)(jsonValue);
                            })];
                }
            });
        });
    };
    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * Create new random inbox
     */
    CommonActionsControllerApi.prototype.createRandomInbox = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createRandomInboxRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Deletes inbox email address
     * Delete inbox email address by inbox id
     */
    CommonActionsControllerApi.prototype.deleteEmailAddressRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.inboxId === null ||
                            requestParameters.inboxId === undefined) {
                            throw new runtime.RequiredError('inboxId', 'Required parameter requestParameters.inboxId was null or undefined when calling deleteEmailAddress.');
                        }
                        queryParameters = {};
                        if (requestParameters.inboxId !== undefined) {
                            queryParameters['inboxId'] = requestParameters.inboxId;
                        }
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/deleteEmailAddress",
                                method: 'DELETE',
                                headers: headerParameters,
                                query: queryParameters,
                            }, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.VoidApiResponse(response)];
                }
            });
        });
    };
    /**
     * Deletes inbox email address
     * Delete inbox email address by inbox id
     */
    CommonActionsControllerApi.prototype.deleteEmailAddress = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.deleteEmailAddressRaw(requestParameters, initOverrides)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Deletes all emails
     * Delete all emails in an inbox
     */
    CommonActionsControllerApi.prototype.emptyInboxRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.inboxId === null ||
                            requestParameters.inboxId === undefined) {
                            throw new runtime.RequiredError('inboxId', 'Required parameter requestParameters.inboxId was null or undefined when calling emptyInbox.');
                        }
                        queryParameters = {};
                        if (requestParameters.inboxId !== undefined) {
                            queryParameters['inboxId'] = requestParameters.inboxId;
                        }
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/emptyInbox",
                                method: 'DELETE',
                                headers: headerParameters,
                                query: queryParameters,
                            }, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.VoidApiResponse(response)];
                }
            });
        });
    };
    /**
     * Deletes all emails
     * Delete all emails in an inbox
     */
    CommonActionsControllerApi.prototype.emptyInbox = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.emptyInboxRaw(requestParameters, initOverrides)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * If no senderId or inboxId provided a random email address will be used to send from. Ensure your parameters are URL encoded.
     * Send an email using query parameters
     */
    CommonActionsControllerApi.prototype.sendEmailQueryRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.to === null || requestParameters.to === undefined) {
                            throw new runtime.RequiredError('to', 'Required parameter requestParameters.to was null or undefined when calling sendEmailQuery.');
                        }
                        queryParameters = {};
                        if (requestParameters.senderId !== undefined) {
                            queryParameters['senderId'] = requestParameters.senderId;
                        }
                        if (requestParameters.to !== undefined) {
                            queryParameters['to'] = requestParameters.to;
                        }
                        if (requestParameters.body !== undefined) {
                            queryParameters['body'] = requestParameters.body;
                        }
                        if (requestParameters.subject !== undefined) {
                            queryParameters['subject'] = requestParameters.subject;
                        }
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/sendEmailQuery",
                                method: 'POST',
                                headers: headerParameters,
                                query: queryParameters,
                            }, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.VoidApiResponse(response)];
                }
            });
        });
    };
    /**
     * If no senderId or inboxId provided a random email address will be used to send from. Ensure your parameters are URL encoded.
     * Send an email using query parameters
     */
    CommonActionsControllerApi.prototype.sendEmailQuery = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sendEmailQueryRaw(requestParameters, initOverrides)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * If no senderId or inboxId provided a random email address will be used to send from.
     * Send an email
     */
    CommonActionsControllerApi.prototype.sendEmailSimpleRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.simpleSendEmailOptions === null ||
                            requestParameters.simpleSendEmailOptions === undefined) {
                            throw new runtime.RequiredError('simpleSendEmailOptions', 'Required parameter requestParameters.simpleSendEmailOptions was null or undefined when calling sendEmailSimple.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters['Content-Type'] = 'application/json';
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/sendEmail",
                                method: 'POST',
                                headers: headerParameters,
                                query: queryParameters,
                                body: (0, models_1.SimpleSendEmailOptionsToJSON)(requestParameters.simpleSendEmailOptions),
                            }, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.VoidApiResponse(response)];
                }
            });
        });
    };
    /**
     * If no senderId or inboxId provided a random email address will be used to send from.
     * Send an email
     */
    CommonActionsControllerApi.prototype.sendEmailSimple = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sendEmailSimpleRaw(requestParameters, initOverrides)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return CommonActionsControllerApi;
}(runtime.BaseAPI));
exports.CommonActionsControllerApi = CommonActionsControllerApi;
/**
 * @export
 * @enum {string}
 */
var CreateNewEmailAddressInboxTypeEnum;
(function (CreateNewEmailAddressInboxTypeEnum) {
    CreateNewEmailAddressInboxTypeEnum["HTTP_INBOX"] = "HTTP_INBOX";
    CreateNewEmailAddressInboxTypeEnum["SMTP_INBOX"] = "SMTP_INBOX";
})(CreateNewEmailAddressInboxTypeEnum = exports.CreateNewEmailAddressInboxTypeEnum || (exports.CreateNewEmailAddressInboxTypeEnum = {}));
/**
 * @export
 * @enum {string}
 */
var CreateRandomInboxInboxTypeEnum;
(function (CreateRandomInboxInboxTypeEnum) {
    CreateRandomInboxInboxTypeEnum["HTTP_INBOX"] = "HTTP_INBOX";
    CreateRandomInboxInboxTypeEnum["SMTP_INBOX"] = "SMTP_INBOX";
})(CreateRandomInboxInboxTypeEnum = exports.CreateRandomInboxInboxTypeEnum || (exports.CreateRandomInboxInboxTypeEnum = {}));
