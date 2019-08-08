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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This library is a convenience wrapper around the generated swagger sdk
 * @see https://github.com/mailslurp/swagger-sdk-typescript-fetch for more information
 */
var mailslurp_swagger_sdk_ts_1 = require("mailslurp-swagger-sdk-ts");
var debug_1 = __importDefault(require("debug"));
// setup logger. enable output with DEBUG=mailslurp-client env variable
var log = debug_1.default("mailslurp-client");
/**
 * Helper logging function
 * @param tag
 * @param fn
 */
function logCall(tag, fn) {
    return __awaiter(this, void 0, void 0, function () {
        var result, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    log("[%s] executing", tag);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fn()];
                case 2:
                    result = _a.sent();
                    log("[%s] returned %O", tag, result);
                    return [2 /*return*/, result];
                case 3:
                    e_1 = _a.sent();
                    log("[%s] threw exception %O", tag, e_1);
                    throw e_1;
                case 4: return [2 /*return*/];
            }
        });
    });
}
/**
 *  MailSlurp client
 *  Usage:
 *  `
 *  const api = new MailSlurp({ apiKey: "test" })
 *  const inbox = await api.createInbox()
 *  `
 */
var MailSlurp = /** @class */ (function () {
    function MailSlurp(opts) {
        // check options
        if (!opts.apiKey) {
            throw "Missing apiKey config parameter";
        }
        // instantiate api clients
        var conf = { apiKey: opts.apiKey };
        this.commonOperationsApi = new mailslurp_swagger_sdk_ts_1.CommonOperationsApi(conf);
        this.extraOperationsApi = new mailslurp_swagger_sdk_ts_1.ExtraOperationsApi(conf);
    }
    MailSlurp.prototype.fetchLatestEmail = function (inboxEmailAddress, inboxId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!inboxId && !inboxEmailAddress) {
                    throw "Must provide either inboxId or emailAddress of inbox that you want to fetch from";
                }
                return [2 /*return*/, logCall("fetchLatestEmail", function () { return _this.commonOperationsApi.fetchLatestEmailUsingGET(inboxEmailAddress, inboxId); })];
            });
        });
    };
    MailSlurp.prototype.createNewEmailAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, logCall("createNewEmailAddress", function () { return _this.commonOperationsApi.createNewEmailAddressUsingPOST(); })];
            });
        });
    };
    MailSlurp.prototype.sendEmailSimple = function (sendEmailOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, logCall("sendEmailSimple", function () { return _this.commonOperationsApi.sendEmailSimpleUsingPOST(sendEmailOptions); })];
            });
        });
    };
    /**
     * Create an inbox
     */
    MailSlurp.prototype.createInbox = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, logCall("createInbox", function () { return _this.extraOperationsApi.createInboxUsingPOST(); })];
            });
        });
    };
    /**
     * Delete an inbox by id
     * @param inboxId
     */
    MailSlurp.prototype.deleteInbox = function (inboxId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, logCall("createInbox", function () { return _this.extraOperationsApi.deleteInboxUsingDELETE(inboxId); })];
            });
        });
    };
    /**
     * Get an inbox by id
     * @param inboxId
     */
    MailSlurp.prototype.getInbox = function (inboxId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, logCall("getInbox", function () { return _this.extraOperationsApi.getInboxUsingGET(inboxId); })];
            });
        });
    };
    /**
     * Get all inboxes
     */
    MailSlurp.prototype.getInboxes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, logCall("getInboxes", function () { return _this.extraOperationsApi.getInboxesUsingGET(); })];
            });
        });
    };
    /**
     * Get all emails in an inbox as EmailPreviews. To get the full email, use the getEmail endpoint
     * @param inboxId
     * @param args
     */
    MailSlurp.prototype.getEmails = function (inboxId, args) {
        if (args === void 0) { args = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, logCall("getEmails", function () { return _this.extraOperationsApi.getEmailsUsingGET(inboxId, args.limit, args.minCount, args.retryTimeout, args.since); })];
            });
        });
    };
    /**
     * Get a full email from by id
     * @param emailId
     */
    MailSlurp.prototype.getEmail = function (emailId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, logCall("getEmail", function () { return _this.extraOperationsApi.getEmailUsingGET(emailId); })];
            });
        });
    };
    /**
     * Get an email's raw contents from by id
     * @param emailId
     */
    MailSlurp.prototype.getRawEmail = function (emailId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, logCall("getRawEmail", function () { return _this.extraOperationsApi.getRawEmailUsingGET(emailId); })];
            });
        });
    };
    /**
     * Send and email from a given inbox
     * @param inboxId
     * @param sendEmailOptions
     */
    MailSlurp.prototype.sendEmail = function (inboxId, sendEmailOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, logCall("sendEmail", function () { return _this.extraOperationsApi.sendEmailUsingPOST(inboxId, sendEmailOptions); })];
            });
        });
    };
    /**
     * Bulk send emails
     */
    MailSlurp.prototype.bulkSendEmails = function (bulkSendEmailOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, logCall("bulkSendEmails", function () { return _this.extraOperationsApi.bulkSendEmailsUsingPOST(bulkSendEmailOptions); })];
            });
        });
    };
    /**
     * Bulk create inboxes
     */
    MailSlurp.prototype.bulkCreateInboxes = function (count) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, logCall("bulkCreateInboxes", function () { return _this.extraOperationsApi.bulkCreateInboxesUsingPOST(count); })];
            });
        });
    };
    /**
     * Bulk delete inboxes
     */
    MailSlurp.prototype.bulkDeleteInboxes = function (inboxIds) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, logCall("bulkDeleteInboxes", function () { return _this.extraOperationsApi.bulkDeleteInboxesUsingDELETE(inboxIds); })];
            });
        });
    };
    return MailSlurp;
}());
exports.MailSlurp = MailSlurp;
exports.default = MailSlurp;
