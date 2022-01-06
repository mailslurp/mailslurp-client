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
exports.WaitForNthEmailSortEnum = exports.WaitForMatchingFirstEmailSortEnum = exports.WaitForMatchingEmailsSortEnum = exports.WaitForLatestEmailSortEnum = exports.WaitForEmailCountSortEnum = exports.WaitForControllerApi = void 0;
var runtime = __importStar(require("../runtime"));
var models_1 = require("../models");
/**
 *
 */
var WaitForControllerApi = /** @class */ (function (_super) {
    __extends(WaitForControllerApi, _super);
    function WaitForControllerApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Generic waitFor method that will wait until an inbox meets given conditions or return immediately if already met
     * Wait for an email to match the provided filter conditions such as subject contains keyword.
     */
    WaitForControllerApi.prototype.waitForRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.waitForConditions === null ||
                            requestParameters.waitForConditions === undefined) {
                            throw new runtime.RequiredError('waitForConditions', 'Required parameter requestParameters.waitForConditions was null or undefined when calling waitFor.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters['Content-Type'] = 'application/json';
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/waitFor",
                                method: 'POST',
                                headers: headerParameters,
                                query: queryParameters,
                                body: (0, models_1.WaitForConditionsToJSON)(requestParameters.waitForConditions),
                            }, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) {
                                return jsonValue.map(models_1.EmailPreviewFromJSON);
                            })];
                }
            });
        });
    };
    /**
     * Generic waitFor method that will wait until an inbox meets given conditions or return immediately if already met
     * Wait for an email to match the provided filter conditions such as subject contains keyword.
     */
    WaitForControllerApi.prototype.waitFor = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitForRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * If inbox contains count or more emails at time of request then return count worth of emails. If not wait until the count is reached and return those or return an error if timeout is exceeded.
     * Wait for and return count number of emails. Hold connection until inbox count matches expected or timeout occurs
     */
    WaitForControllerApi.prototype.waitForEmailCountRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.inboxId === null ||
                            requestParameters.inboxId === undefined) {
                            throw new runtime.RequiredError('inboxId', 'Required parameter requestParameters.inboxId was null or undefined when calling waitForEmailCount.');
                        }
                        if (requestParameters.count === null ||
                            requestParameters.count === undefined) {
                            throw new runtime.RequiredError('count', 'Required parameter requestParameters.count was null or undefined when calling waitForEmailCount.');
                        }
                        queryParameters = {};
                        if (requestParameters.inboxId !== undefined) {
                            queryParameters['inboxId'] = requestParameters.inboxId;
                        }
                        if (requestParameters.count !== undefined) {
                            queryParameters['count'] = requestParameters.count;
                        }
                        if (requestParameters.timeout !== undefined) {
                            queryParameters['timeout'] = requestParameters.timeout;
                        }
                        if (requestParameters.unreadOnly !== undefined) {
                            queryParameters['unreadOnly'] = requestParameters.unreadOnly;
                        }
                        if (requestParameters.before !== undefined) {
                            queryParameters['before'] = requestParameters.before.toISOString();
                        }
                        if (requestParameters.since !== undefined) {
                            queryParameters['since'] = requestParameters.since.toISOString();
                        }
                        if (requestParameters.sort !== undefined) {
                            queryParameters['sort'] = requestParameters.sort;
                        }
                        if (requestParameters.delay !== undefined) {
                            queryParameters['delay'] = requestParameters.delay;
                        }
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/waitForEmailCount",
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            }, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) {
                                return jsonValue.map(models_1.EmailPreviewFromJSON);
                            })];
                }
            });
        });
    };
    /**
     * If inbox contains count or more emails at time of request then return count worth of emails. If not wait until the count is reached and return those or return an error if timeout is exceeded.
     * Wait for and return count number of emails. Hold connection until inbox count matches expected or timeout occurs
     */
    WaitForControllerApi.prototype.waitForEmailCount = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitForEmailCountRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox set `unreadOnly=true` or see the other receive methods such as `waitForNthEmail` or `waitForEmailCount`.
     * Fetch inbox\'s latest email or if empty wait for an email to arrive
     */
    WaitForControllerApi.prototype.waitForLatestEmailRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParameters = {};
                        if (requestParameters.inboxId !== undefined) {
                            queryParameters['inboxId'] = requestParameters.inboxId;
                        }
                        if (requestParameters.timeout !== undefined) {
                            queryParameters['timeout'] = requestParameters.timeout;
                        }
                        if (requestParameters.unreadOnly !== undefined) {
                            queryParameters['unreadOnly'] = requestParameters.unreadOnly;
                        }
                        if (requestParameters.before !== undefined) {
                            queryParameters['before'] = requestParameters.before.toISOString();
                        }
                        if (requestParameters.since !== undefined) {
                            queryParameters['since'] = requestParameters.since.toISOString();
                        }
                        if (requestParameters.sort !== undefined) {
                            queryParameters['sort'] = requestParameters.sort;
                        }
                        if (requestParameters.delay !== undefined) {
                            queryParameters['delay'] = requestParameters.delay;
                        }
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/waitForLatestEmail",
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            }, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) {
                                return (0, models_1.EmailFromJSON)(jsonValue);
                            })];
                }
            });
        });
    };
    /**
     * Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox set `unreadOnly=true` or see the other receive methods such as `waitForNthEmail` or `waitForEmailCount`.
     * Fetch inbox\'s latest email or if empty wait for an email to arrive
     */
    WaitForControllerApi.prototype.waitForLatestEmail = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitForLatestEmailRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Perform a search of emails in an inbox with the given patterns. If results match expected count then return or else retry the search until results are found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: \'SUBJECT\',should:\'CONTAIN\',value:\'needle\'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
     * Wait or return list of emails that match simple matching patterns
     */
    WaitForControllerApi.prototype.waitForMatchingEmailsRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.inboxId === null ||
                            requestParameters.inboxId === undefined) {
                            throw new runtime.RequiredError('inboxId', 'Required parameter requestParameters.inboxId was null or undefined when calling waitForMatchingEmails.');
                        }
                        if (requestParameters.count === null ||
                            requestParameters.count === undefined) {
                            throw new runtime.RequiredError('count', 'Required parameter requestParameters.count was null or undefined when calling waitForMatchingEmails.');
                        }
                        if (requestParameters.matchOptions === null ||
                            requestParameters.matchOptions === undefined) {
                            throw new runtime.RequiredError('matchOptions', 'Required parameter requestParameters.matchOptions was null or undefined when calling waitForMatchingEmails.');
                        }
                        queryParameters = {};
                        if (requestParameters.inboxId !== undefined) {
                            queryParameters['inboxId'] = requestParameters.inboxId;
                        }
                        if (requestParameters.count !== undefined) {
                            queryParameters['count'] = requestParameters.count;
                        }
                        if (requestParameters.before !== undefined) {
                            queryParameters['before'] = requestParameters.before.toISOString();
                        }
                        if (requestParameters.since !== undefined) {
                            queryParameters['since'] = requestParameters.since.toISOString();
                        }
                        if (requestParameters.sort !== undefined) {
                            queryParameters['sort'] = requestParameters.sort;
                        }
                        if (requestParameters.delay !== undefined) {
                            queryParameters['delay'] = requestParameters.delay;
                        }
                        if (requestParameters.timeout !== undefined) {
                            queryParameters['timeout'] = requestParameters.timeout;
                        }
                        if (requestParameters.unreadOnly !== undefined) {
                            queryParameters['unreadOnly'] = requestParameters.unreadOnly;
                        }
                        headerParameters = {};
                        headerParameters['Content-Type'] = 'application/json';
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/waitForMatchingEmails",
                                method: 'POST',
                                headers: headerParameters,
                                query: queryParameters,
                                body: (0, models_1.MatchOptionsToJSON)(requestParameters.matchOptions),
                            }, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) {
                                return jsonValue.map(models_1.EmailPreviewFromJSON);
                            })];
                }
            });
        });
    };
    /**
     * Perform a search of emails in an inbox with the given patterns. If results match expected count then return or else retry the search until results are found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: \'SUBJECT\',should:\'CONTAIN\',value:\'needle\'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
     * Wait or return list of emails that match simple matching patterns
     */
    WaitForControllerApi.prototype.waitForMatchingEmails = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitForMatchingEmailsRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Perform a search of emails in an inbox with the given patterns. If a result if found then return or else retry the search until a result is found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: \'SUBJECT\',should:\'CONTAIN\',value:\'needle\'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
     * Wait for or return the first email that matches provided MatchOptions array
     */
    WaitForControllerApi.prototype.waitForMatchingFirstEmailRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.inboxId === null ||
                            requestParameters.inboxId === undefined) {
                            throw new runtime.RequiredError('inboxId', 'Required parameter requestParameters.inboxId was null or undefined when calling waitForMatchingFirstEmail.');
                        }
                        if (requestParameters.matchOptions === null ||
                            requestParameters.matchOptions === undefined) {
                            throw new runtime.RequiredError('matchOptions', 'Required parameter requestParameters.matchOptions was null or undefined when calling waitForMatchingFirstEmail.');
                        }
                        queryParameters = {};
                        if (requestParameters.inboxId !== undefined) {
                            queryParameters['inboxId'] = requestParameters.inboxId;
                        }
                        if (requestParameters.timeout !== undefined) {
                            queryParameters['timeout'] = requestParameters.timeout;
                        }
                        if (requestParameters.unreadOnly !== undefined) {
                            queryParameters['unreadOnly'] = requestParameters.unreadOnly;
                        }
                        if (requestParameters.since !== undefined) {
                            queryParameters['since'] = requestParameters.since.toISOString();
                        }
                        if (requestParameters.before !== undefined) {
                            queryParameters['before'] = requestParameters.before.toISOString();
                        }
                        if (requestParameters.sort !== undefined) {
                            queryParameters['sort'] = requestParameters.sort;
                        }
                        if (requestParameters.delay !== undefined) {
                            queryParameters['delay'] = requestParameters.delay;
                        }
                        headerParameters = {};
                        headerParameters['Content-Type'] = 'application/json';
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/waitForMatchingFirstEmail",
                                method: 'POST',
                                headers: headerParameters,
                                query: queryParameters,
                                body: (0, models_1.MatchOptionsToJSON)(requestParameters.matchOptions),
                            }, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) {
                                return (0, models_1.EmailFromJSON)(jsonValue);
                            })];
                }
            });
        });
    };
    /**
     * Perform a search of emails in an inbox with the given patterns. If a result if found then return or else retry the search until a result is found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: \'SUBJECT\',should:\'CONTAIN\',value:\'needle\'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
     * Wait for or return the first email that matches provided MatchOptions array
     */
    WaitForControllerApi.prototype.waitForMatchingFirstEmail = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitForMatchingFirstEmailRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * If nth email is already present in inbox then return it. If not hold the connection open until timeout expires or the nth email is received and returned.
     * Wait for or fetch the email with a given index in the inbox specified. If index doesn\'t exist waits for it to exist or timeout to occur.
     */
    WaitForControllerApi.prototype.waitForNthEmailRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParameters = {};
                        if (requestParameters.inboxId !== undefined) {
                            queryParameters['inboxId'] = requestParameters.inboxId;
                        }
                        if (requestParameters.index !== undefined) {
                            queryParameters['index'] = requestParameters.index;
                        }
                        if (requestParameters.timeout !== undefined) {
                            queryParameters['timeout'] = requestParameters.timeout;
                        }
                        if (requestParameters.unreadOnly !== undefined) {
                            queryParameters['unreadOnly'] = requestParameters.unreadOnly;
                        }
                        if (requestParameters.since !== undefined) {
                            queryParameters['since'] = requestParameters.since.toISOString();
                        }
                        if (requestParameters.before !== undefined) {
                            queryParameters['before'] = requestParameters.before.toISOString();
                        }
                        if (requestParameters.sort !== undefined) {
                            queryParameters['sort'] = requestParameters.sort;
                        }
                        if (requestParameters.delay !== undefined) {
                            queryParameters['delay'] = requestParameters.delay;
                        }
                        headerParameters = {};
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters['x-api-key'] = this.configuration.apiKey('x-api-key'); // API_KEY authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/waitForNthEmail",
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            }, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) {
                                return (0, models_1.EmailFromJSON)(jsonValue);
                            })];
                }
            });
        });
    };
    /**
     * If nth email is already present in inbox then return it. If not hold the connection open until timeout expires or the nth email is received and returned.
     * Wait for or fetch the email with a given index in the inbox specified. If index doesn\'t exist waits for it to exist or timeout to occur.
     */
    WaitForControllerApi.prototype.waitForNthEmail = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.waitForNthEmailRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return WaitForControllerApi;
}(runtime.BaseAPI));
exports.WaitForControllerApi = WaitForControllerApi;
/**
 * @export
 * @enum {string}
 */
var WaitForEmailCountSortEnum;
(function (WaitForEmailCountSortEnum) {
    WaitForEmailCountSortEnum["ASC"] = "ASC";
    WaitForEmailCountSortEnum["DESC"] = "DESC";
})(WaitForEmailCountSortEnum = exports.WaitForEmailCountSortEnum || (exports.WaitForEmailCountSortEnum = {}));
/**
 * @export
 * @enum {string}
 */
var WaitForLatestEmailSortEnum;
(function (WaitForLatestEmailSortEnum) {
    WaitForLatestEmailSortEnum["ASC"] = "ASC";
    WaitForLatestEmailSortEnum["DESC"] = "DESC";
})(WaitForLatestEmailSortEnum = exports.WaitForLatestEmailSortEnum || (exports.WaitForLatestEmailSortEnum = {}));
/**
 * @export
 * @enum {string}
 */
var WaitForMatchingEmailsSortEnum;
(function (WaitForMatchingEmailsSortEnum) {
    WaitForMatchingEmailsSortEnum["ASC"] = "ASC";
    WaitForMatchingEmailsSortEnum["DESC"] = "DESC";
})(WaitForMatchingEmailsSortEnum = exports.WaitForMatchingEmailsSortEnum || (exports.WaitForMatchingEmailsSortEnum = {}));
/**
 * @export
 * @enum {string}
 */
var WaitForMatchingFirstEmailSortEnum;
(function (WaitForMatchingFirstEmailSortEnum) {
    WaitForMatchingFirstEmailSortEnum["ASC"] = "ASC";
    WaitForMatchingFirstEmailSortEnum["DESC"] = "DESC";
})(WaitForMatchingFirstEmailSortEnum = exports.WaitForMatchingFirstEmailSortEnum || (exports.WaitForMatchingFirstEmailSortEnum = {}));
/**
 * @export
 * @enum {string}
 */
var WaitForNthEmailSortEnum;
(function (WaitForNthEmailSortEnum) {
    WaitForNthEmailSortEnum["ASC"] = "ASC";
    WaitForNthEmailSortEnum["DESC"] = "DESC";
})(WaitForNthEmailSortEnum = exports.WaitForNthEmailSortEnum || (exports.WaitForNthEmailSortEnum = {}));
