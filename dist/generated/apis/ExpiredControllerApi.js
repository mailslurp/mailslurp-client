"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It\'s designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
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
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
        while (_) try {
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
exports.GetExpiredInboxesSortEnum = exports.ExpiredControllerApi = void 0;
var runtime = __importStar(require("../runtime"));
var models_1 = require("../models");
/**
 *
 */
var ExpiredControllerApi = /** @class */ (function (_super) {
    __extends(ExpiredControllerApi, _super);
    function ExpiredControllerApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Return default times used for inbox expiration
     * Get default expiration settings
     */
    ExpiredControllerApi.prototype.getExpirationDefaultsRaw = function (initOverrides) {
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
                                path: "/expired/defaults",
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            }, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) {
                                return (0, models_1.ExpirationDefaultsFromJSON)(jsonValue);
                            })];
                }
            });
        });
    };
    /**
     * Return default times used for inbox expiration
     * Get default expiration settings
     */
    ExpiredControllerApi.prototype.getExpirationDefaults = function (initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getExpirationDefaultsRaw(initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Use the inboxId to return an ExpiredInboxRecord if an inbox has expired. Inboxes expire and are disabled if an expiration date is set or plan requires. Returns 404 if no expired inbox is found for the inboxId
     * Get expired inbox record for a previously existing inbox
     */
    ExpiredControllerApi.prototype.getExpiredInboxByInboxIdRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.inboxId === null ||
                            requestParameters.inboxId === undefined) {
                            throw new runtime.RequiredError('inboxId', 'Required parameter requestParameters.inboxId was null or undefined when calling getExpiredInboxByInboxId.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/expired/inbox/{inboxId}".replace("{" + 'inboxId' + "}", encodeURIComponent(String(requestParameters.inboxId))),
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            }, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) {
                                return (0, models_1.ExpiredInboxDtoFromJSON)(jsonValue);
                            })];
                }
            });
        });
    };
    /**
     * Use the inboxId to return an ExpiredInboxRecord if an inbox has expired. Inboxes expire and are disabled if an expiration date is set or plan requires. Returns 404 if no expired inbox is found for the inboxId
     * Get expired inbox record for a previously existing inbox
     */
    ExpiredControllerApi.prototype.getExpiredInboxByInboxId = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getExpiredInboxByInboxIdRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Inboxes created with an expiration date will expire after the given date and be moved to an ExpiredInbox entity. You can still read emails in the inbox but it can no longer send or receive emails. Fetch the expired inboxes to view the old inboxes properties
     * Get an expired inbox record
     */
    ExpiredControllerApi.prototype.getExpiredInboxRecordRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.expiredId === null ||
                            requestParameters.expiredId === undefined) {
                            throw new runtime.RequiredError('expiredId', 'Required parameter requestParameters.expiredId was null or undefined when calling getExpiredInboxRecord.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/expired/{expiredId}".replace("{" + 'expiredId' + "}", encodeURIComponent(String(requestParameters.expiredId))),
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            }, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) {
                                return (0, models_1.ExpiredInboxDtoFromJSON)(jsonValue);
                            })];
                }
            });
        });
    };
    /**
     * Inboxes created with an expiration date will expire after the given date and be moved to an ExpiredInbox entity. You can still read emails in the inbox but it can no longer send or receive emails. Fetch the expired inboxes to view the old inboxes properties
     * Get an expired inbox record
     */
    ExpiredControllerApi.prototype.getExpiredInboxRecord = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getExpiredInboxRecordRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Inboxes created with an expiration date will expire after the given date. An ExpiredInboxRecord is created that records the inboxes old ID and email address. You can still read emails in the inbox (using the inboxes old ID) but the email address associated with the inbox can no longer send or receive emails. Fetch expired inbox records to view the old inboxes properties
     * List records of expired inboxes
     */
    ExpiredControllerApi.prototype.getExpiredInboxesRaw = function (requestParameters, initOverrides) {
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
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/expired",
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            }, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) {
                                return (0, models_1.PageExpiredInboxRecordProjectionFromJSON)(jsonValue);
                            })];
                }
            });
        });
    };
    /**
     * Inboxes created with an expiration date will expire after the given date. An ExpiredInboxRecord is created that records the inboxes old ID and email address. You can still read emails in the inbox (using the inboxes old ID) but the email address associated with the inbox can no longer send or receive emails. Fetch expired inbox records to view the old inboxes properties
     * List records of expired inboxes
     */
    ExpiredControllerApi.prototype.getExpiredInboxes = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getExpiredInboxesRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ExpiredControllerApi;
}(runtime.BaseAPI));
exports.ExpiredControllerApi = ExpiredControllerApi;
/**
 * @export
 * @enum {string}
 */
var GetExpiredInboxesSortEnum;
(function (GetExpiredInboxesSortEnum) {
    GetExpiredInboxesSortEnum["ASC"] = "ASC";
    GetExpiredInboxesSortEnum["DESC"] = "DESC";
})(GetExpiredInboxesSortEnum = exports.GetExpiredInboxesSortEnum || (exports.GetExpiredInboxesSortEnum = {}));
