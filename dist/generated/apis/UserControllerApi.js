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
exports.GetEntityFavoritesFilterEnum = exports.GetEntityFavoritesSortEnum = exports.GetEntityEventsFilterEnum = exports.GetEntityEventsSortEnum = exports.GetEntityAutomationsFilterEnum = exports.GetEntityAutomationsSortEnum = exports.UserControllerApi = void 0;
var runtime = __importStar(require("../runtime"));
var models_1 = require("../models");
/**
 *
 */
var UserControllerApi = /** @class */ (function (_super) {
    __extends(UserControllerApi, _super);
    function UserControllerApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     */
    UserControllerApi.prototype.getEntityAutomationsRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParameters = {};
                        if (requestParameters.page !== undefined) {
                            queryParameters['page'] = requestParameters.page;
                        }
                        if (requestParameters.size !== undefined) {
                            queryParameters['size'] = requestParameters.size;
                        }
                        if (requestParameters.sort !== undefined) {
                            queryParameters['sort'] = requestParameters.sort;
                        }
                        if (requestParameters.since !== undefined) {
                            queryParameters['since'] = requestParameters.since.toISOString();
                        }
                        if (requestParameters.before !== undefined) {
                            queryParameters['before'] = requestParameters.before.toISOString();
                        }
                        if (requestParameters.inboxId !== undefined) {
                            queryParameters['inboxId'] = requestParameters.inboxId;
                        }
                        if (requestParameters.phoneId !== undefined) {
                            queryParameters['phoneId'] = requestParameters.phoneId;
                        }
                        if (requestParameters.filter !== undefined) {
                            queryParameters['filter'] = requestParameters.filter;
                        }
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/user/automations",
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            }, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) {
                                return (0, models_1.PageEntityAutomationItemsFromJSON)(jsonValue);
                            })];
                }
            });
        });
    };
    /**
     */
    UserControllerApi.prototype.getEntityAutomations = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getEntityAutomationsRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     */
    UserControllerApi.prototype.getEntityEventsRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParameters = {};
                        if (requestParameters.page !== undefined) {
                            queryParameters['page'] = requestParameters.page;
                        }
                        if (requestParameters.size !== undefined) {
                            queryParameters['size'] = requestParameters.size;
                        }
                        if (requestParameters.sort !== undefined) {
                            queryParameters['sort'] = requestParameters.sort;
                        }
                        if (requestParameters.since !== undefined) {
                            queryParameters['since'] = requestParameters.since.toISOString();
                        }
                        if (requestParameters.before !== undefined) {
                            queryParameters['before'] = requestParameters.before.toISOString();
                        }
                        if (requestParameters.inboxId !== undefined) {
                            queryParameters['inboxId'] = requestParameters.inboxId;
                        }
                        if (requestParameters.emailId !== undefined) {
                            queryParameters['emailId'] = requestParameters.emailId;
                        }
                        if (requestParameters.phoneId !== undefined) {
                            queryParameters['phoneId'] = requestParameters.phoneId;
                        }
                        if (requestParameters.smsId !== undefined) {
                            queryParameters['smsId'] = requestParameters.smsId;
                        }
                        if (requestParameters.attachmentId !== undefined) {
                            queryParameters['attachmentId'] = requestParameters.attachmentId;
                        }
                        if (requestParameters.filter !== undefined) {
                            queryParameters['filter'] = requestParameters.filter;
                        }
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/user/events",
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            }, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) {
                                return (0, models_1.PageEntityEventItemsFromJSON)(jsonValue);
                            })];
                }
            });
        });
    };
    /**
     */
    UserControllerApi.prototype.getEntityEvents = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getEntityEventsRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     */
    UserControllerApi.prototype.getEntityFavoritesRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParameters = {};
                        if (requestParameters.page !== undefined) {
                            queryParameters['page'] = requestParameters.page;
                        }
                        if (requestParameters.size !== undefined) {
                            queryParameters['size'] = requestParameters.size;
                        }
                        if (requestParameters.sort !== undefined) {
                            queryParameters['sort'] = requestParameters.sort;
                        }
                        if (requestParameters.since !== undefined) {
                            queryParameters['since'] = requestParameters.since.toISOString();
                        }
                        if (requestParameters.before !== undefined) {
                            queryParameters['before'] = requestParameters.before.toISOString();
                        }
                        if (requestParameters.filter !== undefined) {
                            queryParameters['filter'] = requestParameters.filter;
                        }
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/user/favorites",
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            }, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) {
                                return (0, models_1.PageEntityFavouriteItemsFromJSON)(jsonValue);
                            })];
                }
            });
        });
    };
    /**
     */
    UserControllerApi.prototype.getEntityFavorites = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getEntityFavoritesRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Utility function to extract properties from JSON objects in language where this is cumbersome.
     */
    UserControllerApi.prototype.getJsonPropertyAsStringRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.property === null ||
                            requestParameters.property === undefined) {
                            throw new runtime.RequiredError('property', 'Required parameter requestParameters.property was null or undefined when calling getJsonPropertyAsString.');
                        }
                        if (requestParameters.body === null ||
                            requestParameters.body === undefined) {
                            throw new runtime.RequiredError('body', 'Required parameter requestParameters.body was null or undefined when calling getJsonPropertyAsString.');
                        }
                        queryParameters = {};
                        if (requestParameters.property !== undefined) {
                            queryParameters['property'] = requestParameters.property;
                        }
                        headerParameters = {};
                        headerParameters['Content-Type'] = 'application/json';
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/user/json/pluck",
                                method: 'POST',
                                headers: headerParameters,
                                query: queryParameters,
                                body: requestParameters.body,
                            }, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.TextApiResponse(response)];
                }
            });
        });
    };
    /**
     * Utility function to extract properties from JSON objects in language where this is cumbersome.
     */
    UserControllerApi.prototype.getJsonPropertyAsString = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getJsonPropertyAsStringRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get account information for your user
     */
    UserControllerApi.prototype.getUserInfoRaw = function (initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParameters = {};
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/user/info",
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            }, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) {
                                return (0, models_1.UserInfoDtoFromJSON)(jsonValue);
                            })];
                }
            });
        });
    };
    /**
     * Get account information for your user
     */
    UserControllerApi.prototype.getUserInfo = function (initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getUserInfoRaw(initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return UserControllerApi;
}(runtime.BaseAPI));
exports.UserControllerApi = UserControllerApi;
/**
 * @export
 * @enum {string}
 */
var GetEntityAutomationsSortEnum;
(function (GetEntityAutomationsSortEnum) {
    GetEntityAutomationsSortEnum["ASC"] = "ASC";
    GetEntityAutomationsSortEnum["DESC"] = "DESC";
})(GetEntityAutomationsSortEnum = exports.GetEntityAutomationsSortEnum || (exports.GetEntityAutomationsSortEnum = {}));
/**
 * @export
 * @enum {string}
 */
var GetEntityAutomationsFilterEnum;
(function (GetEntityAutomationsFilterEnum) {
    GetEntityAutomationsFilterEnum["FORWARDER"] = "INBOX_FORWARDER";
    GetEntityAutomationsFilterEnum["REPLIER"] = "INBOX_REPLIER";
    GetEntityAutomationsFilterEnum["RULESET"] = "INBOX_RULESET";
})(GetEntityAutomationsFilterEnum = exports.GetEntityAutomationsFilterEnum || (exports.GetEntityAutomationsFilterEnum = {}));
/**
 * @export
 * @enum {string}
 */
var GetEntityEventsSortEnum;
(function (GetEntityEventsSortEnum) {
    GetEntityEventsSortEnum["ASC"] = "ASC";
    GetEntityEventsSortEnum["DESC"] = "DESC";
})(GetEntityEventsSortEnum = exports.GetEntityEventsSortEnum || (exports.GetEntityEventsSortEnum = {}));
/**
 * @export
 * @enum {string}
 */
var GetEntityEventsFilterEnum;
(function (GetEntityEventsFilterEnum) {
    GetEntityEventsFilterEnum["WEBHOOK_EVENT"] = "WEBHOOK_EVENT";
    GetEntityEventsFilterEnum["INBOX_FORWARDER_EVENT"] = "INBOX_FORWARDER_EVENT";
    GetEntityEventsFilterEnum["INBOX_REPLIER_EVENT"] = "INBOX_REPLIER_EVENT";
    GetEntityEventsFilterEnum["INBOX_RULESET_EVENT"] = "INBOX_RULESET_EVENT";
    GetEntityEventsFilterEnum["ALIAS_EVENT"] = "ALIAS_EVENT";
})(GetEntityEventsFilterEnum = exports.GetEntityEventsFilterEnum || (exports.GetEntityEventsFilterEnum = {}));
/**
 * @export
 * @enum {string}
 */
var GetEntityFavoritesSortEnum;
(function (GetEntityFavoritesSortEnum) {
    GetEntityFavoritesSortEnum["ASC"] = "ASC";
    GetEntityFavoritesSortEnum["DESC"] = "DESC";
})(GetEntityFavoritesSortEnum = exports.GetEntityFavoritesSortEnum || (exports.GetEntityFavoritesSortEnum = {}));
/**
 * @export
 * @enum {string}
 */
var GetEntityFavoritesFilterEnum;
(function (GetEntityFavoritesFilterEnum) {
    GetEntityFavoritesFilterEnum["INBOX"] = "INBOX";
    GetEntityFavoritesFilterEnum["EMAIL"] = "EMAIL";
    GetEntityFavoritesFilterEnum["ATTACHMENT"] = "ATTACHMENT";
    GetEntityFavoritesFilterEnum["PHONE"] = "PHONE";
    GetEntityFavoritesFilterEnum["SMS"] = "SMS";
})(GetEntityFavoritesFilterEnum = exports.GetEntityFavoritesFilterEnum || (exports.GetEntityFavoritesFilterEnum = {}));
